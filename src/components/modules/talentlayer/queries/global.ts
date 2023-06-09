import { processTalentLayerRequest } from '../utils/graphql'
import { getTalentLayerUserByAddress } from './talent-profile-data'

export const graphIsSynced = async (entity: string, cid: string): Promise<number> => {
  return new Promise<number>((resolve) => {
    const interval = setInterval(async () => {
      const response = await checkEntityByUri(entity, cid)
      if (response?.data?.data?.[entity][0]) {
        clearInterval(interval)
        resolve(response?.data?.data?.[entity][0].id)
      }
    }, 5000)
  })
}

export const graphUserIsSynced = async (address: string): Promise<number> => {
  return new Promise<number>((resolve) => {
    const interval = setInterval(async () => {
      const response = await getTalentLayerUserByAddress(address)
      if (response?.data?.data?.['users'][0]) {
        clearInterval(interval)
        resolve(response?.data?.data?.['users'][0].id)
      }
    }, 3000)
  })
}

export const checkEntityByUri = (entity: string, cid: string): Promise<any> => {
  let query
  if (entity.includes('Description')) {
    query = `
        {
          ${entity}(where: {${entity.replace('Descriptions', '')}_ : {cid: "${cid}"}}, first: 1) {
            id
          }
        } `
  } else {
    query = `
        {
          ${entity}(where: {cid: "${cid}"}, first: 1) {
            id
          }
        } `
  }
  return processTalentLayerRequest(query)
}
