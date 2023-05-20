import React from 'react'
import Rentals from '@components/Rentals'

const SearchHousing = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Welcome to trust-share</h1>
          <p className="text-2xl">Discover the most unique stays, powered by Trust Protocol</p>
        </div>
      </div>
      <Rentals />
    </>
  )
}

export default SearchHousing
