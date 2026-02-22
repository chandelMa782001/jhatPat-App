import { IoLocationSharp, IoCalendar, IoPeople, IoSearch } from 'react-icons/io5'
import { MdAttachMoney } from 'react-icons/md'
import { useState } from 'react'

const EventsForm = () => {
  const [activeEventType, setActiveEventType] = useState('marriage')

  const eventTypes = [
    { id: 'marriage', label: 'Marriage Hall' },
    { id: 'party', label: 'Party Venue' },
    { id: 'conference', label: 'Conference Hall' },
    { id: 'banquet', label: 'Banquet' }
  ]

  return (
    <>
      {/* Event Type Buttons */}
      <div className="flex gap-3 mb-6">
        {eventTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveEventType(type.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeEventType === type.id
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
        {/* City/Area */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">City / Area</label>
          <div className="relative">
            <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter city or area"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Event Date */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Event Date</label>
          <div className="relative">
            <IoCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Select date"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Number of Guests</label>
          <div className="relative">
            <IoPeople className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="100 - 500"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="col-span-1">
          <label className="block text-xs text-gray-500 mb-2 uppercase">Budget (Per Plate)</label>
          <div className="relative">
            <MdAttachMoney className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none">
              <option>₹500 - ₹2000</option>
              <option>₹2000 - ₹5000</option>
              <option>₹5000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
          <IoSearch className="text-xl" />
          Search Venues
        </button>
      </div>
    </>
  )
}

export default EventsForm
