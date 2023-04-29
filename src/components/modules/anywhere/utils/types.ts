export type IUser = {
  id: string
  handle: string
  address: string
}

export type IUserDetails = {
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
