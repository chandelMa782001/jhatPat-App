import { IoLocationSharp, IoCalendar, IoPeople, IoSearch, IoSwapHorizontal } from 'react-icons/io5'
import { useState } from 'react'
const BusesForm = () => {
  const [activeBusType, setActiveBusType] = useState('ac-sleeper')
  const busTypes = [
    { id: 'ac-sleeper', label: 'AC Sleeper' },
    { id: 'volvo', label: 'Volvo / Multi-Axle' },
    { id: 'non-ac', label: 'Non-AC Seater' },
    { id: 'semi-sleeper', label: 'Semi Sleeper' }
  ]
  return (
    <>
      {/* Bus Type Buttons */}
      <div className="flex gap-3 mb-6">
        {busTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveBusType(type.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeBusType === type.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

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
              placeholder="Jaipur"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <IoSwapHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        {/* Date of Journey */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Date of Journey</label>
          <div className="relative">
            <IoCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Sun, 15 Feb 2026"
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
              placeholder="1 Seat"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
          <IoSearch className="text-xl" />
          Search Buses
        </button>
      </div>
    </>
  )
}

export default BusesForm
