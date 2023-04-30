import { chain } from 'wagmi'

export type ChainMap = { [chainId: number]: string }

const getChain = () => {
  if (!process.env.NEXT_PUBLIC_CHAIN) {
    throw new Error('NEXT_PUBLIC_CHAIN environment variable must be defined')
  }

  switch (process.env.NEXT_PUBLIC_CHAIN) {
    case 'localhost':
      return chain.hardhat
    case 'mumbai':
      return chain.polygonMumbai
    case 'polygon':
      return chain.polygon
    case 'sepolia':
      return chain.sepolia
    default:
      throw new Error('Invalid NEXT_PUBLIC_CHAIN value')
  }
}

export const CHAIN = getChain()
