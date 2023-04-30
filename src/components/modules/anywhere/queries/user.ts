import { processRequest } from '../utils/graphql'

export const getUserByAddress = (address: string): Promise<any> => {
  const query = `
  {
    users(where: {address: "${address.toLocaleLowerCase()}"}, first: 1) {
      id
      address
      handle
      cid
    }
  }
  `
  return processRequest(query)
}

export const getUserByHandle = (handle: string): Promise<any> => {
  const query = `
  {
    users(where: {handle: "${handle.toLocaleLowerCase()}"}, first: 1) {
      id
      address
      handle
      cid
    }
  }
  `
  return processRequest(query)
}
