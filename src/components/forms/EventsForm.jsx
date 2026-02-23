import { useState } from 'react'
import { MdLocationOn, MdCalendarToday, MdPeople } from 'react-icons/md'
import { Button, Input } from '../common'

const EventsForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    guests: '',
    eventType: 'wedding'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Event Search:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Input
        icon={MdLocationOn}
        placeholder="City or Area"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        required
      />
      <Input
        icon={MdCalendarToday}
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <Input
        icon={MdPeople}
        type="number"
        placeholder="No. of Guests"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        required
      />
      <select
        value={formData.eventType}
        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="wedding">Wedding</option>
        <option value="birthday">Birthday</option>
        <option value="corporate">Corporate</option>
        <option value="other">Other</option>
      </select>
      <Button type="submit" className="w-full">Search Venues</Button>
    </form>
  )
}

export default EventsForm
