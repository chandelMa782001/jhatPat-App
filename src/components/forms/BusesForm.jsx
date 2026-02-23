import { useState } from 'react'
import { MdLocationOn, MdCalendarToday, MdPerson } from 'react-icons/md'
import { Button, Input } from '../common'

const BusesForm = () => {
  const [busType, setBusType] = useState('acSleeper')
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    travellers: '1 Seat'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Bus Search:', formData)
  }

  return (
    <div>
      {/* Bus Type Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setBusType('acSleeper')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            busType === 'acSleeper'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          AC Sleeper
        </button>
        <button
          type="button"
          onClick={() => setBusType('volvoMultiAxle')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            busType === 'volvoMultiAxle'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Volvo / Multi-Axle
        </button>
        <button
          type="button"
          onClick={() => setBusType('nonACSeater')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            busType === 'nonACSeater'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Non-AC Seater
        </button>
        <button
          type="button"
          onClick={() => setBusType('semiSleeper')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            busType === 'semiSleeper'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Semi Sleeper
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">FROM</label>
            <Input
              icon={MdLocationOn}
              placeholder="Delhi"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">TO</label>
            <Input
              icon={MdLocationOn}
              placeholder="Jaipur"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">DATE OF JOURNEY</label>
            <Input
              icon={MdCalendarToday}
              type="date"
              placeholder="Sun, 15 Feb 2026"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">TRAVELLERS</label>
            <Input
              icon={MdPerson}
              placeholder="1 Seat"
              value={formData.travellers}
              onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-8">
            Search Buses
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BusesForm
