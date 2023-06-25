import { Transition } from '@headlessui/react'
import { useAccount } from 'wagmi'
import Image from 'next/image'

import { WalletStatus } from '@components/wallet/wallet-status'
import { useTransitionControl } from '@hooks/use-transition-control'

import { Container } from './container'
import React from 'react'

export const Navbar = () => {
  const { isConnecting, isReconnecting } = useAccount()

  const [show] = useTransitionControl(isReconnecting || isConnecting)

  return (
    <header className="sticky top-0 z-50 bg-red-500 py-7 backdrop-blur-sm lg:py-5">
      <div className="relative -mx-4 flex items-center justify-between px-4">
        <div className="w-60 max-w-full px-4">
          <Image src="/images/malay-house-logo.png" alt="logo" width={40} height={40} />
        </div>
        {/*<div className="flex items-center space-x-2">*/}
        {/*  <input className="p-3 rounded w-64 text-black" placeholder="Search location..." />*/}
        {/*  <button className="text-black px-5 py-3 rounded bg-red-200 font-bold">Search</button>*/}
        {/*</div>*/}
        <nav className="flex flex-row">
          <a
            className="flex items-center px-2 py-2 text-base font-medium rounded-md"
            href="/lease/create"
          >
            Post Housing add
          </a>
          <a
            className="flex items-center px-2 py-2 text-base font-medium rounded-md"
            href="/events"
          >
            Post proposal
          </a>
        </nav>
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
