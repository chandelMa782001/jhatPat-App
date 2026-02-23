import { useState } from 'react'
import { MdLocationOn, MdCalendarToday } from 'react-icons/md'
import { Button, Input } from '../common'

const CabsForm = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Cab Search:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Input
        icon={MdLocationOn}
        placeholder="Pickup Location"
        value={formData.pickup}
        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
        required
      />
      <Input
        icon={MdLocationOn}
        placeholder="Drop Location"
        value={formData.drop}
        onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
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
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />
      <Button type="submit" className="w-full">Search Cabs</Button>
    </form>
  )
}

export default CabsForm
