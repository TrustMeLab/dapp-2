import { processTalentLayerRequest } from '../utils/graphql'

export const getTalentLayerUserByAddress = (address: string): Promise<any> => {
  const query = `
  {
    users(where: {address: "${address.toLocaleLowerCase()}"}, first: 1) {
      id
      address
      handle  
    }
  }
  `
  return processTalentLayerRequest(query)
}

export const getTalentLayerUserByhandle = (handle: string): Promise<any> => {
  const query = `
  {
    users(where: {handle: "${handle.toLocaleLowerCase()}"}, first: 1) {
      id
      address
      handle  
    }
  }
  `
  return processTalentLayerRequest(query)
}

export const getTalentDescriptionUserById = (id: string): Promise<any> => {
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
  return processTalentLayerRequest(query)
}
