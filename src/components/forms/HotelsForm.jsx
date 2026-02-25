import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn, MdCalendarToday, MdPerson } from 'react-icons/md'
import { Button, Input } from '../common'

const HotelsForm = () => {
  const navigate = useNavigate()
  const [stayType, setStayType] = useState('hourlyStays')
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    rooms: '1 Room, 2 Adults'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hotel Search:', formData)
    navigate('/hotels')
  }

  return (
    <div>
      {/* Stay Type Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setStayType('hourlyStays')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            stayType === 'hourlyStays'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Hourly Stays
        </button>
        <button
          type="button"
          onClick={() => setStayType('coupleFriendly')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            stayType === 'coupleFriendly'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Couple Friendly
        </button>
        <button
          type="button"
          onClick={() => setStayType('nearAirport')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            stayType === 'nearAirport'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Near Airport
        </button>
        <button
          type="button"
          onClick={() => setStayType('5Star')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            stayType === '5Star'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          5-Star
        </button>
        <button
          type="button"
          onClick={() => setStayType('withBreakfast')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            stayType === 'withBreakfast'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          With Breakfast
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">CITY, AREA OR PROPERTY</label>
            <Input
              icon={MdLocationOn}
              placeholder="Delhi, Mumbai, Goa..."
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">CHECK-IN</label>
            <Input
              icon={MdCalendarToday}
              type="date"
              placeholder="Sun, 15 Feb 2026"
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">CHECK-OUT</label>
            <Input
              icon={MdCalendarToday}
              type="date"
              placeholder="Mon, 16 Feb 2026"
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">ROOMS & GUESTS</label>
            <Input
              icon={MdPerson}
              placeholder="1 Room, 2 Adults"
              value={formData.rooms}
              onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-8">
            Search Hotels
          </Button>
        </div>
      </form>
    </div>
  )
}

export default HotelsForm
