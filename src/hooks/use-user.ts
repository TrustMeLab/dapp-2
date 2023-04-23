import { useState, useEffect } from 'react'
import { getUser } from '../components/form/request'
import { IUser } from "@components/form/mint-form";

export const useClaimUser = (
  address: string | undefined,
): { claimUser: IUser | null | undefined } => {
  const [claimUser, setUser] = useState<IUser | null | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!address) return

        const response = await getUser(address)

        if (response?.data.user) {
          setUser(response.data.user)
          return
        }

        setUser(null)
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
    fetchData()
  }, [address])

  return { claimUser }
}
