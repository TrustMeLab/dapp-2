import { useEffect, useState } from 'react'
import { getUserByHandle } from '../queries/user'
import { IUser } from '../utils/types'

export const useTalentLayerUserByHandle = (
  handle: string,
): { user: IUser | undefined | null } => {
  const [user, setUser] = useState<IUser | null | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!handle) return

        const response = await getUserByHandle(handle)

        if (response?.data?.data?.users?.length > 0) {
          setUser(response?.data?.data?.users?.[0])
          return
        }

        setUser(null)
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
    fetchData()
  }, [handle])

  return { user: user }
}
