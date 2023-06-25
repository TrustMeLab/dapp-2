import { Button } from '@components/basic/button'
import { createMultiStepsTransactionToast } from '@components/modules/anywhere/utils/toast'
import { ethers } from 'ethers'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { useAccount, useProvider, useSigner } from 'wagmi'
import * as Yup from 'yup'
import { Loading } from '../loading'
import { useLeaseContractParams } from '@hooks/use-contract-params'
import { postToIPFS } from '@utils/ipfs'
import { useUser } from '../../modules/anywhere/hooks/use-user'
import { Nft } from '../../nft'
import { SkillsInput } from '../skills-input'
import UserContext from '@components/modules/anywhere/context/UserContext'
import Stepper from '@components/form/lease-form/Stepper'
import FirstLeaseFormBlock from '@components/form/lease-form/first-lease-form-block'

interface IFormValues {
  paymentAmount?: string
  paymentToken?: string
  paymentInterval?: string
  currencyPair?: string
  startDate?: string
  platformId?: string
  title?: string
  description?: string
  address?: string
  keywords?: string[]
  images?: string[]
  cid?: string
}

const validationSchema = Yup.object({
  //TODO to complete
  userId: Yup.string().required('userId is required'),
})

export function CreateOpenLeaseForm() {
  const { user } = useContext(UserContext)
  const { address: leaseContractAddress, abi, chain } = useLeaseContractParams()
  const { data: signer } = useSigner({ chainId: chain.id })
  const provider = useProvider({ chainId: chain.id })
  const [activeStepIndex, setActiveStepIndex] = useState(1)

  if (!user?.handle) {
    return <Loading />
  }

  const initialValues: IFormValues = {
    paymentAmount: '',
    paymentToken: '',
    paymentInterval: '',
    currencyPair: '',
    startDate: '',
    platformId: '',
    cid: '',
  }

  const onSubmit = async (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && signer) {
      try {
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
          values.paymentAmount,
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
    <>
      <Stepper activeStepIndex={activeStepIndex} />
      <FirstLeaseFormBlock />
      {/*TODO Step 0: Fiat or Token ?*/}
      {/*TODO Step 1: On Chain Data*/}
      {/*TODO Step 2: Description + images*/}
      {/*TODO Step 3: Congrats */}
      {/*TODO Step 2 only return an ipfs cid*/}
    </>
  )
}
