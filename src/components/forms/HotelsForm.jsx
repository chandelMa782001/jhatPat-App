import { useState } from 'react'
import { MdLocationOn, MdCalendarToday, MdPerson } from 'react-icons/md'
import { Button, Input } from '../common'

const HotelsForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hotel Search:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input
        icon={MdLocationOn}
        placeholder="City, Area or Hotel"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        required
      />
      <Input
        icon={MdCalendarToday}
        type="date"
        value={formData.checkIn}
        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
        required
      />
      <Input
        icon={MdCalendarToday}
        type="date"
        value={formData.checkOut}
        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
        required
      />
      <div className="flex gap-2">
        <Input
          icon={MdPerson}
          type="number"
          min="1"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          className="flex-1"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}

export default HotelsForm
