import { processUserRequest } from '../utils/graphql'

export const getUserByAddress = (address: string): Promise<any> => {
  const query = `
  {
    users(where: {address: "${address.toLocaleLowerCase()}"}, first: 1) {
      id
      address
      handle  
    }
  }
  `
  return processUserRequest(query)
}

export const getUserByhandle = (handle: string): Promise<any> => {
  const query = `
  {
    users(where: {handle: "${handle.toLocaleLowerCase()}"}, first: 1) {
      id
      address
      handle  
    }
  }
  `
  return processUserRequest(query)
}

export const getUserDescriptionById = (id: string): Promise<any> => {
  const query = `
    {
      user(id: "${id}") {
        address
        handle
        description {
          about
          role
          name
          title
          skills_raw
        }
      }
    }
    `
  return processUserRequest(query)
}
