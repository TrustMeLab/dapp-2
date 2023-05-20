import { Transition } from '@headlessui/react'
import { useAccount } from 'wagmi'
import Image from 'next/image'

import { WalletStatus } from '@components/wallet/wallet-status'
import { useTransitionControl } from '@hooks/use-transition-control'

import { Container } from './container'

export const Navbar = () => {
  const { isConnecting, isReconnecting } = useAccount()

  const [show] = useTransitionControl(isReconnecting || isConnecting)

  return (
    <header className="sticky top-0 z-50 bg-red-500 py-7 backdrop-blur-sm lg:py-5">
      <div className="relative -mx-4 flex items-center justify-between px-4">
        <div className="w-60 max-w-full px-4">
          <a href="https://claim.talentlayer.org" className="block w-full">
            <Image src="/images/indo-house.jpg" alt="logo" width={40} height={40} />
          </a>
        </div>
        <Transition
          show={show}
          enter="transition-opacity duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex items-center gap-4 pr-4">
            <WalletStatus />
          </div>
        </Transition>
      </div>
    </header>
  )
}
