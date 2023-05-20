const Rentals = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-4">
      <div className="flex flex-col gap-2 rounded-xl p-4 border border-gray-200">
        <div className="flex flex-col">Title</div>
        <div className="flex flex-col">Desc</div>
      </div>
      <div className="flex flex-row gap-2 rounded-xl p-4 border border-gray-200"></div>
      <div className="flex flex-row gap-2 rounded-xl p-4 border border-gray-200"></div>
      <div className="flex flex-row gap-2 rounded-xl p-4 border border-gray-200"></div>
      <div className="flex flex-row gap-2 rounded-xl p-4 border border-gray-200"></div>
      <div className="flex flex-row gap-2 rounded-xl p-4 border border-gray-200"></div>
    </div>
  )
}

export default Rentals
