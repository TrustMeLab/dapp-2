import { useContext, useState } from 'react'
import UserContext from '@components/modules/anywhere/context/UserContext'
import { CreateOpenLeaseForm } from '@components/form/lease-form/create-open-lease-form'
import { Container } from '@components/layout/container'
import Stepper from '@components/form/lease-form/Stepper'
import { CreateSimpleOpenLeaseForm } from '@components/form/simple-lease-form/create-open-lease-simple-form'

function CreateOrganization() {
  const { account, user } = useContext(UserContext)

  return (
    <>
      <Container>
        <div className="max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0">
          <p className="text-4xl font-medium text-center tracking-wider mb-8">
            Create <span className="bg-clip-text text-red-500">an open lease</span>
          </p>

          {account?.isConnected && user && <CreateSimpleOpenLeaseForm />}
        </div>
      </Container>
    </>
  )
}

export default CreateOrganization
