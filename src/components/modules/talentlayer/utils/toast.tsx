import { getParsedEthersError } from '@enzoferey/ethers-error-parser'
import { EthersError } from '@enzoferey/ethers-error-parser/dist/types'
import { Provider } from '@wagmi/core'
import { Transaction } from 'ethers'
import { toast } from 'react-toastify'
import { graphIsSynced, graphUserIsSynced } from '../queries/global'
import { MultiStepsTransactionToast } from './multi-steps-transaction-toast'

interface IMessages {
  pending: string
  success: string
  error: string
}

export const createMultiStepsTransactionToast = async (
  messages: IMessages,
  provider: Provider,
  tx: Transaction,
  entity: string,
  newUri: string,
): Promise<number | undefined> => {
  let currentStep = 1
  const toastId = toast(
    <MultiStepsTransactionToast transactionHash={tx.hash as string} currentStep={currentStep} />,
    { autoClose: false, closeOnClick: false },
  )

  try {
    await provider.waitForTransaction(tx.hash as string)
    currentStep = 2
    toast.update(toastId, {
      render: (
        <MultiStepsTransactionToast transactionHash={tx.hash as string} currentStep={currentStep} />
      ),
    })

    const entityId = await graphIsSynced(`${entity}s`, newUri)
    currentStep = 3
    toast.update(toastId, {
      render: (
        <MultiStepsTransactionToast transactionHash={tx.hash as string} currentStep={currentStep} />
      ),
    })

    await graphIsSynced(`${entity}Descriptions`, newUri)
    toast.update(toastId, {
      type: toast.TYPE.SUCCESS,
      render: messages.success,
      autoClose: 5000,
      closeOnClick: true,
    })

    return entityId
  } catch (error) {
    const parsedEthersError = getParsedEthersError(error as EthersError)
    console.error(error)
    toast.update(toastId, {
      type: toast.TYPE.ERROR,
      render: `${messages.error}: ${parsedEthersError.errorCode} - ${parsedEthersError.context}`,
    })
  }
  return
}

export const showErrorTransactionToast = (error: any) => {
  console.error(error)
  const parsedEthersError = getParsedEthersError(error as EthersError)
  toast.error(`${parsedEthersError.errorCode} - ${parsedEthersError.context}`)
}

export const createTalentLayerIdTransactionToast = async (
  messages: IMessages,
  provider: Provider,
  tx: Transaction,
  address: string,
): Promise<number | undefined> => {
  let currentStep = 1
  const toastId = toast(
    <MultiStepsTransactionToast
      transactionHash={tx.hash as string}
      currentStep={currentStep}
      hasOffchainData={false}
    />,
    { autoClose: false, closeOnClick: false },
  )

  try {
    await provider.waitForTransaction(tx.hash as string)
    currentStep = 2
    toast.update(toastId, {
      render: (
        <MultiStepsTransactionToast
          transactionHash={tx.hash as string}
          currentStep={currentStep}
          hasOffchainData={false}
        />
      ),
    })

    const entityId = await graphUserIsSynced(address)

    toast.update(toastId, {
      type: toast.TYPE.SUCCESS,
      render: messages.success,
      autoClose: 5000,
      closeOnClick: true,
    })

    return entityId
  } catch (error) {
    const parsedEthersError = getParsedEthersError(error as EthersError)
    console.error(error)
    toast.update(toastId, {
      type: toast.TYPE.ERROR,
      render: `${messages.error}: ${parsedEthersError.errorCode} - ${parsedEthersError.context}`,
    })
  }
  return
}
