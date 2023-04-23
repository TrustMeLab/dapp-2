import { useState, useEffect } from 'react'
import { getLensDefaultProfileByAddress } from '../queries/lens-profile-data'
import { IlensUser } from '../utils/types'

export const useLensUser = (address: string): { lensUser: IlensUser | undefined | null } => {
  const [lensUser, setLensUser] = useState<IlensUser | null | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!address) return

        const response = await getLensDefaultProfileByAddress(address)

        if (response?.data?.data?.defaultProfile) {
          setLensUser(response.data.data.defaultProfile)
          return
        }

        setLensUser(null)
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
    fetchData()
  }, [address])

  return { lensUser }
}
