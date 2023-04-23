import { useState, useEffect } from 'react'
import { getTalentDescriptionUserById } from '../queries/talent-profile-data'
import { ITalentUserDetails } from '../utils/types'

export const useTalentUserDescription = (
  id: string | undefined,
): { userDescription: ITalentUserDetails | undefined | null } => {
  const [userDescription, setUserDescription] = useState<ITalentUserDetails | null | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return
        const response = await getTalentDescriptionUserById(id)
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
