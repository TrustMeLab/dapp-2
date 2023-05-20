import type { NextPage } from 'next'
import { useAccount } from 'wagmi'
import { CreateOpenLeaseForm } from '@components/form/leaseForm/create-open-lease-form'

const Profile: NextPage = () => {
  const account = useAccount()

  if (account.isConnecting || account.isReconnecting) {
    return null
  }

  return (
    <div className="mx-auto mt-5 max-w-7xl text-gray-900 sm:px-4 lg:px-0">
      <p className="mb-8 pt-8 text-5xl font-medium tracking-wider">
        Edit your <span className="text-indigo-600">Profile</span>
      </p>
      <p className="mb-4">
        Fill in your info now! That way you&rsquo;ll be ready to work on the first platforms on
        TalentLayer.
      </p>
      {!account?.isConnected ? <p>Please connect your wallet</p> : <CreateOpenLeaseForm />}
    </div>
  )
}

export default Profile
