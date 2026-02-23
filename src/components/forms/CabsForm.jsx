import { useState } from 'react'
import { MdLocationOn, MdCalendarToday } from 'react-icons/md'
import { Button, Input } from '../common'

const CabsForm = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Cab Search:', formData)
  }

  return (
    <div>
      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">PICKUP LOCATION</label>
            <Input
              icon={MdLocationOn}
              placeholder="Enter pickup location"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">DROP LOCATION</label>
            <Input
              icon={MdLocationOn}
              placeholder="Enter drop location"
              value={formData.drop}
              onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">PICKUP DATE & TIME</label>
            <Input
              icon={MdCalendarToday}
              type="datetime-local"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-8">
            Search Cabs
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CabsForm
