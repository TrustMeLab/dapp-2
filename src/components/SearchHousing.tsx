import React from 'react'

const SearchHousing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to DecentralBnB</h1>
        <p className="text-2xl">Discover the most unique stays, powered by Trust Protocol</p>
        <div className="flex items-center space-x-2">
          <input className="p-3 rounded w-64 text-black" placeholder="Search location..." />
          <button className="text-black px-5 py-3 rounded bg-red-200 font-bold">Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchHousing
