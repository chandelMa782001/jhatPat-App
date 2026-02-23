import { useState } from 'react'
import { MdLocationOn, MdCalendarToday, MdPerson } from 'react-icons/md'
import { Button, Input } from '../common'

const FlightsForm = () => {
  const [tripType, setTripType] = useState('oneWay')
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    travellers: '1 Adult, Economy'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Flight Search:', formData)
  }

  return (
    <div>
      {/* Trip Type Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setTripType('oneWay')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            tripType === 'oneWay'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          One Way
        </button>
        <button
          type="button"
          onClick={() => setTripType('roundTrip')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            tripType === 'roundTrip'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Round Trip
        </button>
        <button
          type="button"
          onClick={() => setTripType('multiCity')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            tripType === 'multiCity'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Multi City
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">FROM</label>
            <Input
              icon={MdLocationOn}
              placeholder="New Delhi"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">TO</label>
            <Input
              icon={MdLocationOn}
              placeholder="Mumbai (BOM)"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">DEPARTURE</label>
            <Input
              icon={MdCalendarToday}
              type="date"
              placeholder="Sun, 15 Feb 2026"
              value={formData.departure}
              onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">TRAVELLERS & CLASS</label>
            <Input
              icon={MdPerson}
              placeholder="1 Adult, Economy"
              value={formData.travellers}
              onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-8">
            Search Flights
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FlightsForm
