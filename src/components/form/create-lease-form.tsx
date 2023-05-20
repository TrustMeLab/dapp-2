import { Button } from '@components/basic/button'
import { createMultiStepsTransactionToast } from '@components/modules/anywhere/utils/toast'
import { ethers } from 'ethers'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useAccount, useProvider, useSigner } from 'wagmi'
import * as Yup from 'yup'
import { Loading } from '../../components/form/loading'
import { useLeaseContractParams } from '../../hooks/use-contract-params'
import { postToIPFS } from '../../utils/ipfs'
import { useUser } from '../modules/anywhere/hooks/use-user'
import { Nft } from '../nft'
import { SkillsInput } from './skills-input'

interface IFormValues {
  ownerId?: string
  tenantId?: string
  rentAmount?: string
  totalNumberOfRents?: string
  paymentToken?: string
  paymentInterval?: string
  currencyPair?: string
  startDate?: string
  platformId?: string
  paymentMethod?: string;
}

const validationSchema = Yup.object({
  //TODO to complete
  userId: Yup.string().required('userId is required'),
})

export function CreateLeaseForm() {
  const account = useAccount()
  const { user: user, fetchData: refreshUser } = useUser(
    account.address as string,
  )
  const { address: leaseContractAddress, abi, chain } = useLeaseContractParams()
  const { data: signer } = useSigner({ chainId: chain.id })
  const provider = useProvider({ chainId: chain.id })

  useEffect(() => {
    refreshUser()
  }, [account.address, account.isConnected, refreshUser])

  if (!user?.handle) {
    return <Loading />
  }

  const initialValues: IFormValues = {
    ownerId: user.id,
    tenantId: '',
    rentAmount: '',
    totalNumberOfRents: '',
    paymentToken: '',
    paymentInterval: '',
    currencyPair: '',
    startDate: '',
    platformId: '',
    paymentMethod: '',
  }

  const onSubmit = async (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && signer) {
      try {
        const parsedCurrencyPair =
          paymentMethod === "crypto" ? "CRYPTO" : currencyPair;


        const leaseContract = new ethers.Contract(
          leaseContractAddress,
          abi,
          signer as ethers.Signer,
        )
        //TODO parse rentAmount
        //TODO parse interval
        //TODO parse startDate

        const tx = await leaseContract.createOpenLease(
          user.id,
          values.rentAmount,
          values.paymentToken,
          values.paymentInterval,
          values.currencyPair,
          values.startDate,
          values.platformId,
          )
        // await createMultiStepsTransactionToast(
        //   {
        //     pending: 'Updating profile...',
        //     success: 'Congrats! Your profile has been updated',
        //     error: 'An error occurred while updating your profile',
        //   },
        //   provider,
        //   tx,
        //   'user',
        //   cid,
        // )

        setSubmitting(false)
      } catch (error) {
        console.error(error)
        // showErrorTransactionToast(error);
      }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="grid grid-cols-1 gap-6 py-12">
            <div className="flex flex-wrap">
              <div className="w-full md:pr-8 lg:w-1/2">
                <label className="mb-4 block">
                  <span className="text-gray-700">Name</span>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder=""
                  />
                  <label className="label mt-1 py-0">
                    <span className="label-text text-error">
                      <ErrorMessage name="name" />
                    </span>
                  </label>
                </label>
                <label className="mb-4 block">
                  <span className="text-gray-700">Role</span>
                  <Field
                    as="select"
                    id="role"
                    name="role"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder=""
                  >
                    <option value=""></option>
                    <option value="buyer">Company</option>
                    <option value="seller">Worker</option>
                    <option value="buyer-seller">Both</option>
                  </Field>
                  <label className="label mt-1 py-0">
                    <span className="label-text text-error">
                      <ErrorMessage name="role" />
                    </span>
                  </label>
                </label>

                <label className="mb-8 block">
                  <span className="text-gray-700">Skills</span>

                  <SkillsInput initialValues={userDescription?.skills_raw} />

                  <Field type="hidden" id="skills" name="skills" />

                  <label className="label mt-1 py-0">
                    <span className="label-text text-error">
                      <ErrorMessage name="skills" />
                    </span>
                  </label>
                </label>
                <Button
                  type={'submit'}
                  size={'md'}
                  block={false}
                  hidden={isSubmitting}
                  disabled={isSubmitting}
                >
                  Update
                </Button>
              </div>
              <div className="w-full px-4 max-md:hidden lg:w-1/2">
                <div className="relative z-10 h-[532px] text-center">
                  <Nft handle={user?.handle || 'yourHandle'} fontSize={40} />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
