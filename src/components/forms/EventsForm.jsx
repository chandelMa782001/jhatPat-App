import { useState } from 'react'
import { MdLocationOn, MdCalendarToday, MdPeople, MdAttachMoney } from 'react-icons/md'
import { Button, Input } from '../common'

const EventsForm = () => {
  const [venueType, setVenueType] = useState('marriageHall')
  const [formData, setFormData] = useState({
    city: '',
    eventDate: '',
    guests: '100 - 500',
    budget: '₹500 - ₹2000'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Event Search:', formData)
  }

  return (
    <div>
      {/* Venue Type Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setVenueType('marriageHall')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            venueType === 'marriageHall'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Marriage Hall
        </button>
        <button
          type="button"
          onClick={() => setVenueType('partyVenue')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            venueType === 'partyVenue'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Party Venue
        </button>
        <button
          type="button"
          onClick={() => setVenueType('conferenceHall')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            venueType === 'conferenceHall'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Conference Hall
        </button>
        <button
          type="button"
          onClick={() => setVenueType('banquet')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            venueType === 'banquet'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Banquet
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">CITY / AREA</label>
            <Input
              icon={MdLocationOn}
              placeholder="Enter city or area"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">EVENT DATE</label>
            <Input
              icon={MdCalendarToday}
              type="date"
              placeholder="Select date"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">NUMBER OF GUESTS</label>
            <Input
              icon={MdPeople}
              placeholder="100 - 500"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">BUDGET (PER PLATE)</label>
            <Input
              icon={MdAttachMoney}
              placeholder="₹500 - ₹2000"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-8">
            Search Venues
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EventsForm
