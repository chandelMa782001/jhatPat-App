import { IoLocationSharp, IoCalendar, IoSearch } from 'react-icons/io5'

const CabsForm = () => {
  return (
    <>
      {/* Form Fields */}
      <div className="grid grid-cols-4 gap-4">
        {/* Pickup Location */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Pickup Location</label>
          <div className="relative">
            <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter pickup location"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Drop Location */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Drop Location</label>
          <div className="relative">
            <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter drop location"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Pickup Date & Time */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Pickup Date & Time</label>
          <div className="relative">
            <IoCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Select date & time"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Cab Type */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Cab Type</label>
          <div className="relative">
            <select className="w-full pl-4 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none">
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Luxury</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
          <IoSearch className="text-xl" />
          Search Cabs
        </button>
      </div>
    </>
  )
}

export default CabsForm
