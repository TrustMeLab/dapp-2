import { useTalentLayerIdContractParams } from '@hooks/use-contract-params'
import { Contract, ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useAccount, useSigner } from 'wagmi'
import { MintForm } from '../form/mint-form'
import { MintStatus } from '../modules/talentlayer/utils/types'
import { ConnectSection } from './connect-section'
import { MintWait } from './mint-wait'

export function MintSection() {
  const account = useAccount()
  const [mintStatus, setUseMintStatus] = useState<number | null>(null)
  const { address, abi, chain } = useTalentLayerIdContractParams()
  const { data: signer } = useSigner({ chainId: chain.id })

  useEffect(() => {
    const getStatus = async () => {
      try {
        if (!address || !abi || !signer) {
          return
        }
        const talentLayerContract: Contract = new ethers.Contract(address, abi, signer)
        const getMintStatus = await talentLayerContract.mintStatus()
        setUseMintStatus(getMintStatus)
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
    getStatus()
  }, [signer, chain, abi, address])

  if (
    account.address === undefined ||
    chain.unsupported ||
    account.isConnecting ||
    account.isReconnecting
  ) {
    return <ConnectSection />
  }

  return (
    <>{mintStatus === MintStatus.ON_PAUSE ? <MintWait /> : <MintForm mintStatus={mintStatus} />}</>
  )
}
