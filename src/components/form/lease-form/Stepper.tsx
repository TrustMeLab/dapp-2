import React, { useContext, useEffect } from 'react'

function Stepper({ activeStepIndex }: { activeStepIndex: number }) {
  const steps = [
    'Choose your payment method',
    'Choose your preferred currencie(s)',
    'Complete rent details',
  ]

  return (
    <>
      <div className="flex flex-row items-center justify-center px-32 py-16">
        {steps.map((step, index) => {
          return (
            <>
              <div
                className={`stepper-item w-8 h-8 text-center font-medium border-2 rounded-full ${
                  index === activeStepIndex
                    ? 'border-red-500'
                    : index < activeStepIndex
                    ? 'bg-red-500'
                    : ''
                }`}
              >
                {index < activeStepIndex ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              {index != steps.length - 1 && <div className="flex-auto border-t-2"></div>}
            </>
          )
        })}
      </div>
      <div className="justify-center text-center">{steps[activeStepIndex]}</div>
    </>
  )
}

export default Stepper
