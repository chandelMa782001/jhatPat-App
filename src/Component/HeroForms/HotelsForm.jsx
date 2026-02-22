import { IoLocationSharp, IoCalendar, IoPeople, IoSearch } from 'react-icons/io5'

const HotelsForm = () => {
  return (
    <>
      {/* Form Fields */}
      <div className="grid grid-cols-4 gap-4">
        {/* City */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">City</label>
          <div className="relative">
            <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter city"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Check-in</label>
          <div className="relative">
            <IoCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Select date"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Check-out</label>
          <div className="relative">
            <IoCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Select date"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Guests & Rooms</label>
          <div className="relative">
            <IoPeople className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="1 Room, 2 Guests"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
          <IoSearch className="text-xl" />
          Search Hotels
        </button>
      </div>
    </>
  )
}

export default HotelsForm
