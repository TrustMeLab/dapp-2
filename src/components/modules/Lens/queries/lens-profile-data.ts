import { processLensRequest } from '../utils/graphql'

/*
 * @doc: https://api.lens.dev/ & https://docs.lens.xyz/docs/get-default-profile
 */
export const getLensDefaultProfileByAddress = (userAddress: string): Promise<any> => {
  const query = `
    {
      defaultProfile(request: { ethereumAddress: "${userAddress}"}) {
        id
        name
        bio
        handle
      }
    }
    `
  return processLensRequest(query)
}

export const getLensProfileByHandle = (handle: string): Promise<any> => {
  const query = `
  {
    profile(request: { handle: "${handle}"}) {
      id
      name
      handle
      ownedBy
    }
  }
    `
  return processLensRequest(query)
}
