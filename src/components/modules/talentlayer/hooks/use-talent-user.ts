import { useState, useEffect, useCallback } from 'react'
import { getTalentLayerUserByAddress } from '../queries/talent-profile-data'
import { ITalentLayerUser } from '../utils/types'

export const useTalentLayerUser = (
  address: string,
): { talentLayerUser: ITalentLayerUser | undefined | null; fetchData: () => void } => {
  const [talentLayerUser, setTalentLayerUser] = useState<ITalentLayerUser | null | undefined>()

  const fetchData = useCallback(async () => {
    try {
      if (!address) return

      const response = await getTalentLayerUserByAddress(address)

      if (response?.data?.data?.users?.length > 0) {
        setTalentLayerUser(response?.data?.data?.users?.[0])
        return
      }

      setTalentLayerUser(null)
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }, [address])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { talentLayerUser, fetchData }
}
