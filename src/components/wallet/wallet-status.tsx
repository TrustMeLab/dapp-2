import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

import { Button } from '@components/basic/button'
import { useConnectModal } from '@hooks/use-connect-modal'

import { WalletDropdown } from './wallet-dropdown'

export const WalletStatus = () => {
  const { address, isConnected, isConnecting, isReconnecting } = useAccount()

  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const openConnectModal = useConnectModal()

  // Wrong network
  if (chain?.unsupported) {
    return (
      <Button color="error" size="sm" onClick={() => switchNetwork?.(chains[0].id)}>
        Switch to {chains[0].name}
      </Button>
    )
  }

  if (isConnecting || isReconnecting) {
    return null
  }

  // Connected (Needs verification or Logged in)
  if (isConnected && address) {
    return <WalletDropdown address={address} />
  }

  // Disconnected
  return <Button onClick={openConnectModal}>Connect</Button>
}
