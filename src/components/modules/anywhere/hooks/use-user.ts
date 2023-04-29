import { useState, useEffect, useCallback } from 'react'
import { getUserByAddress } from '../queries/talent-profile-data'
import { IUser } from '../utils/types'

export const useUser = (
  address: string,
): { user: IUser | undefined | null; fetchData: () => void } => {
  const [user, setUser] = useState<IUser | null | undefined>()

  const fetchData = useCallback(async () => {
    try {
      if (!address) return

      const response = await getUserByAddress(address)

      if (response?.data?.data?.users?.length > 0) {
        setUser(response?.data?.data?.users?.[0])
        return
      }

      setUser(null)
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }, [address])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { user: user, fetchData }
}
