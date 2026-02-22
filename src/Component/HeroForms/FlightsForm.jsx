import { IoLocationSharp, IoCalendar, IoPeople, IoSearch, IoSwapHorizontal } from 'react-icons/io5'

const FlightsForm = () => {
  return (
    <>
      {/* Form Fields */}
      <div className="grid grid-cols-4 gap-4">
        {/* From */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">From</label>
          <div className="relative">
            <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Delhi"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* To */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">To</label>
          <div className="relative">
            <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Mumbai"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <IoSwapHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        {/* Departure */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Departure</label>
          <div className="relative">
            <IoCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Select date"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Travellers */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Travellers</label>
          <div className="relative">
            <IoPeople className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="1 Traveller"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
          <IoSearch className="text-xl" />
          Search Flights
        </button>
      </div>
    </>
  )
}

export default FlightsForm
