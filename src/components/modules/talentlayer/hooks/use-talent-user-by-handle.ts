import { useEffect, useState } from 'react'
import { getTalentLayerUserByhandle } from '../queries/talent-profile-data'
import { ITalentLayerUser } from '../utils/types'

export const useTalentLayerUserByHandle = (
  handle: string,
): { talentLayerUser: ITalentLayerUser | undefined | null } => {
  const [talentLayerUser, setTalenLayertUser] = useState<ITalentLayerUser | null | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!handle) return

        const response = await getTalentLayerUserByhandle(handle)

        if (response?.data?.data?.users?.length > 0) {
          setTalenLayertUser(response?.data?.data?.users?.[0])
          return
        }

        setTalenLayertUser(null)
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
    fetchData()
  }, [handle])

  return { talentLayerUser }
}
