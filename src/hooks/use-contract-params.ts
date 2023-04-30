import { Chain, useNetwork } from 'wagmi'
import { TalentLayerIDAbi } from '@abis/talent-layer-id'
import { TALENTLAYERID_ADDRESS } from '@constants/addresses'
import { CHAIN } from '@constants/chains'

interface IContractParams {
  address: string
  abi: any
  chain: Chain & {
    unsupported?: boolean
  }
}

export const useTalentLayerIdContractParams = (): IContractParams => {
  const { chain } = useNetwork()
  const currentChain = chain ?? CHAIN

  return {
    chain: currentChain,
    address: TALENTLAYERID_ADDRESS[currentChain.id],
    abi: TalentLayerIDAbi,
  }
}

//TODO add for all contracts
