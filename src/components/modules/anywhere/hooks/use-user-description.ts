import { useState, useEffect } from 'react'
import { getUserDescriptionById } from '../queries/talent-profile-data'
import { IUserDetails } from '../utils/types'

export const useUserDescription = (
  id: string | undefined,
): { userDescription: IUserDetails | undefined | null } => {
  const [userDescription, setUserDescription] = useState<IUserDetails | null | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return
        const response = await getUserDescriptionById(id)
        if (!!response?.data?.data?.user?.description) {
          setUserDescription(response.data.data.user.description)
          return
        }

        setUserDescription(null)
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
    fetchData()
  }, [id])

  return { userDescription }
}
