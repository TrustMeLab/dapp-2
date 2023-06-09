import { chain } from 'wagmi'
import { ChainMap } from './chains'

export const TALENTLAYERID_ADDRESS: ChainMap = {
  [chain.hardhat.id]: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  [chain.polygon.id]: '0xD7D1B2b0A665F03618cb9a45Aa3070f789cb91f2',
  [chain.polygonMumbai.id]: '0x3F87289e6Ec2D05C32d8A74CCfb30773fF549306',
}
