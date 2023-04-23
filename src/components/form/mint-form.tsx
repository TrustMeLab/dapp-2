import { EthersError, getParsedEthersError } from '@enzoferey/ethers-error-parser'
import { useTalentLayerIdContractParams } from '@hooks/use-contract-params'
import { Contract, ethers } from 'ethers'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ExclamationCircle, InformationCircle } from 'heroicons-react'
import { useState } from 'react'
import { useAccount, useProvider, useSigner } from 'wagmi'
import * as Yup from 'yup'
import { Button } from '../basic/button'
import { useLensUser } from '../modules/Lens/hooks/use-lens-user'
import { removeExtension } from '../modules/Lens/utils/format'
import { useTalentLayerUser } from '../modules/talentlayer/hooks/use-talent-user'
import { createTalentLayerIdTransactionToast } from '../modules/talentlayer/utils/toast'
import { MintStatus } from '../modules/talentlayer/utils/types'
import { Nft } from '../nft'
import { HandlePrice } from './handle-price'
import { checkEligibility } from './request'
import { SuccessMessage } from './success-message'
export interface IUser {
  handle?: string
}

interface IProps {
  mintStatus: number | null
}

export function MintForm({ mintStatus }: IProps) {
  const account = useAccount()
  const { lensUser } = useLensUser(account.address as string)
  const { talentLayerUser, fetchData: refreshTalentLayerUser } = useTalentLayerUser(
    account.address as string,
  )
  const [error, setError] = useState<string | null>(null)
  const [validatedMint, setValidatedMint] = useState<string | undefined>('')
  const [isElligible, setIsElligible] = useState(false)
  const { address, abi, chain } = useTalentLayerIdContractParams()
  const { data: signer } = useSigner({ chainId: chain.id })
  const provider = useProvider({ chainId: chain.id })
  const platformId = process.env.NEXT_PUBLIC_PLATFORM_ID

  const initialValues: IUser = {
    handle: lensUser ? removeExtension(lensUser.handle) : '',
  }

  const validationSchema = Yup.object().shape({
    handle: Yup.string()
      .min(1)
      .max(31)
      .matches(/^[a-z0-9][a-z0-9-_]*$/, 'Only a-z, 0-9 and -_ allowed, and cannot begin with -_')
      .required('Handle is required'),
  })

  const onSubmit = async (
    values: IUser,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    try {
      if (!values.handle || !signer) {
        return
      }

      setError(null)

      const talentLayerContract: Contract = new ethers.Contract(address, abi, signer)
      const handlePrice = await talentLayerContract.getHandlePrice(values.handle)

      let eligibilityRes
      if (mintStatus == 1) {
        eligibilityRes = await checkEligibility(values.handle, account.address as string)

        setIsElligible(eligibilityRes.data.isEligible)
        if (!eligibilityRes.data.isEligible) {
          setError('You are not eligible to mint this handle with this wallet')
          return
        }
      }

      let tx
      if (mintStatus === MintStatus.ONLY_WHITELIST) {
        tx = await talentLayerContract.whitelistMint(
          platformId,
          values.handle,
          eligibilityRes.data.proof,
          {
            value: handlePrice,
          },
        )
      } else if (mintStatus === MintStatus.PUBLIC) {
        tx = await talentLayerContract.mint(platformId, values.handle, {
          value: handlePrice,
        })
      }

      await createTalentLayerIdTransactionToast(
        {
          pending: 'Minting your Talent Layer Id...',
          success: 'Congrats! Your Talent Layer Id is minted',
          error: 'An error occurred while creating your Talent Layer Id',
        },
        provider,
        tx,
        account.address as string,
      )

      resetForm()
      setTimeout(async () => {
        setValidatedMint(values.handle)
        await refreshTalentLayerUser()
      }, 100)
    } catch (error: any) {
      let errorMessage
      if (typeof error?.code === 'string') {
        const parsedEthersError = getParsedEthersError(error as EthersError)
        errorMessage = `${parsedEthersError.errorCode} - ${parsedEthersError.context}`
      } else {
        errorMessage = error?.message
      }
      setError(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, values }) => (
        <Form className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-14 max-w-[470px] lg:mb-0">
              {(validatedMint || talentLayerUser) && (
                <SuccessMessage
                  handle={values.handle || validatedMint || talentLayerUser?.handle || 'yourHandle'}
                  id={talentLayerUser?.id || '1'}
                />
              )}

              {!talentLayerUser && !validatedMint && account.address && (
                <div className="">
                  <h1 className="mb-8 text-4xl  font-semibold leading-tight text-black md:text-[45px] md:leading-tight">
                    <p className="font-bold">Mint Your TalentLayer ID</p>
                  </h1>
                  <p>
                    Create your identity NFT on TalentLayer and access a growing network of work
                    marketplaces.
                  </p>
                  <div className="relative z-10 mx-auto  rounded-2xl">
                    <div className="rounded-2xl  sm:p-[0px]">
                      <div className="pt-8">
                        <label className="relative block pb-4">
                          <span className="mb-3 block text-base font-semibold text-black">
                            {mintStatus === MintStatus.ONLY_WHITELIST
                              ? 'Your Whitelisted Handle*'
                              : 'Your Handle*'}
                          </span>
                          <Field
                            type="text"
                            id="handle"
                            name="handle"
                            className="placeholder:text-body-color w-full resize-none rounded-lg border border-zinc-300 bg-white py-[14px] px-5  text-sm  font-semibold text-gray-400 outline-none focus:border-primary focus-visible:shadow-none"
                            placeholder=""
                          />
                          {values.handle && <HandlePrice handle={values.handle} />}
                          <label className="label mt-1 py-0">
                            <span className="label-text text-error">
                              <ErrorMessage name="handle" />
                            </span>
                          </label>
                        </label>

                        <Field type="hidden" id="isLensUser" name="isLensUser" />

                        {lensUser || isElligible ? (
                          <Button type="submit">{isSubmitting ? 'Minting...' : 'Mint'}</Button>
                        ) : (
                          <Button type="submit">
                            {mintStatus === MintStatus.ONLY_WHITELIST
                              ? isSubmitting
                                ? 'Verify...'
                                : 'Verify and mint my handle'
                              : isSubmitting
                              ? 'Minting...'
                              : 'Mint my handle'}
                          </Button>
                        )}

                        {error && (
                          <div className="rounded-md bg-red-50 p-4 mt-12">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <ExclamationCircle
                                  className="h-5 w-5 text-red-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-3 flex-1 md:flex md:justify-between">
                                <p className="text-sm text-red-700">
                                  <span className="font-bold block">
                                    An error occured while submitting:
                                  </span>
                                  <span>{error}</span>
                                </p>
                                <p className="mt-3 text-sm md:ml-6 md:mt-0">
                                  <a
                                    target={'_blank'}
                                    rel="noreferrer"
                                    href="https://forms.gle/grZfG9qTfMUKm6Zk7"
                                    className="whitespace-nowrap font-medium text-red-700 hover:text-red-600"
                                  >
                                    Need help ?<span aria-hidden="true"> &rarr;</span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {mintStatus === MintStatus.ONLY_WHITELIST && (
                      <div className="rounded-md bg-blue-50 p-4 mt-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <InformationCircle
                              className="h-5 w-5 text-blue-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3 flex-1 md:flex md:justify-between">
                            <p className="text-sm text-blue-700">
                              Not on the whitelist? Follow us on twitter for alerts when public
                              minting opens
                            </p>
                            <p className="mt-3 text-sm md:ml-6 md:mt-0">
                              <a
                                target={'_blank'}
                                rel="noreferrer"
                                href="https://twitter.com/TalentLayer"
                                className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                              >
                                Receive alerts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full px-4 max-md:hidden lg:w-1/2">
            <div className="relative z-10 h-[532px] text-center">
              <Nft
                handle={values.handle || validatedMint || talentLayerUser?.handle || 'yourHandle'}
                fontSize={40}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
