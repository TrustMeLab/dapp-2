import { useCallback } from 'react'
import { useNetwork } from 'wagmi'
import { ToastStep } from './toast-step'

export function MultiStepsTransactionToast({
  transactionHash,
  currentStep,
  hasOffchainData = true,
}: {
  transactionHash: string
  currentStep: number
  hasOffchainData?: boolean
}) {
  const network = useNetwork()
  const renderTransaction = useCallback(() => {
    return (
      <a
        className="flex w-full flex-col pt-2 text-sm font-normal"
        target="_blank"
        href={`${network.chain?.blockExplorers?.default.url}/tx/${transactionHash}`}
        rel="noreferrer"
      >
        <span className="full-w inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-center text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 ">
          Follow on {network.chain?.blockExplorers?.default.name}
        </span>
      </a>
    )
  }, [transactionHash])

  const steps = [
    {
      title: 'Execute the transaction',
      status: currentStep > 1 ? 'complete' : 'current',
      render: renderTransaction,
    },
    {
      title: 'Synchronize onChain data',
      status: currentStep > 2 ? 'complete' : currentStep == 2 ? 'current' : 'upcomming',
    },
    {
      title: 'Synchronize offChain data',
      status: currentStep > 3 ? 'complete' : currentStep == 3 ? 'current' : 'upcomming',
    },
  ]

  if (!hasOffchainData) {
    steps.splice(2, 1)
  }

  return (
    <div className="py-6 px-2">
      <nav className="flex" aria-label="Progress">
        <ol role="list" className="space-y-6">
          {steps.map((step, index) => (
            <ToastStep key={index} title={step.title} status={step.status}>
              {step.render || null}
            </ToastStep>
          ))}
        </ol>
      </nav>
    </div>
  )
}
