export type ITalentLayerUser = {
  id: string
  handle: string
  address: string
}

export type ITalentUserDetails = {
  title: string
  name: string
  role: string
  about: string
  skills_raw: string
}

export type IAccount = {
  address?: `0x${string}`
  isConnected: boolean
}

export enum MintStatus {
  ON_PAUSE,
  ONLY_WHITELIST,
  PUBLIC,
}
