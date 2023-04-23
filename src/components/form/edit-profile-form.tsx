import { Button } from '@components/basic/button'
import { createMultiStepsTransactionToast } from '@components/modules/talentlayer/utils/toast'
import { ethers } from 'ethers'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useAccount, useProvider, useSigner } from 'wagmi'
import * as Yup from 'yup'
import { Loading } from '../../components/form/loading'
import { useTalentUserDescription } from '../../components/modules/talentlayer/hooks/use-talent-user-description'
import { useTalentLayerIdContractParams } from '../../hooks/use-contract-params'
import { postToIPFS } from '../../utils/ipfs'
import { useLensUser } from '../modules/Lens/hooks/use-lens-user'
import { useTalentLayerUser } from '../modules/talentlayer/hooks/use-talent-user'
import { Nft } from '../nft'
import { SkillsInput } from './skills-input'

interface IFormValues {
  title?: string
  role?: string
  name?: string
  about?: string
  skills?: string
}

const validationSchema = Yup.object({
  title: Yup.string().required('title is required'),
})

export function EditProfileForm() {
  const account = useAccount()
  const { lensUser } = useLensUser(account.address as string)
  const { talentLayerUser: user, fetchData: refreshTalentLayerUser } = useTalentLayerUser(
    account.address as string,
  )
  const userDescription = useTalentUserDescription(user?.id).userDescription
  const { address: contractAddress, abi, chain } = useTalentLayerIdContractParams()
  const { data: signer } = useSigner({ chainId: chain.id })
  const provider = useProvider({ chainId: chain.id })

  useEffect(() => {
    refreshTalentLayerUser()
  }, [account.address, account.isConnected, refreshTalentLayerUser])

  if (!user?.handle) {
    return <Loading />
  }

  const initialValues: IFormValues = {
    title: userDescription?.title || '',
    role: userDescription?.role || '',
    name: userDescription?.name || lensUser?.name || '',
    about: userDescription?.about || lensUser?.bio || '',
    skills: userDescription?.skills_raw || '',
  }

  const onSubmit = async (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && signer) {
      try {
        const cid = await postToIPFS(
          JSON.stringify({
            title: values.title,
            role: values.role,
            name: values.name,
            about: values.about,
            skills: values.skills,
          }),
        )
        const talentLayerContract = new ethers.Contract(
          contractAddress,
          abi,
          signer as ethers.Signer,
        )
        const tx = await talentLayerContract.updateProfileData(user.id, cid)
        await createMultiStepsTransactionToast(
          {
            pending: 'Updating profile...',
            success: 'Congrats! Your profile has been updated',
            error: 'An error occurred while updating your profile',
          },
          provider,
          tx,
          'user',
          cid,
        )

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
                  <span className="text-gray-700">Title</span>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Fullstack developer"
                  />
                  <label className="label mt-1 py-0">
                    <span className="label-text text-error">
                      <ErrorMessage name="title" />
                    </span>
                  </label>
                </label>
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

                <label className="mb-4 block">
                  <span className="text-gray-700">About</span>
                  <Field
                    as="textarea"
                    id="about"
                    name="about"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder=""
                  />
                  <label className="label mt-1 py-0">
                    <span className="label-text text-error">
                      <ErrorMessage name="about" />
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
