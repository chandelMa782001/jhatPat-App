import { useState } from 'react'
import { MdFlightTakeoff, MdFlightLand, MdCalendarToday, MdPerson } from 'react-icons/md'
import { Button, Input } from '../common'

const FlightsForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Flight Search:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input
        icon={MdFlightTakeoff}
        placeholder="From"
        value={formData.from}
        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        required
      />
      <Input
        icon={MdFlightLand}
        placeholder="To"
        value={formData.to}
        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
        required
      />
      <Input
        icon={MdCalendarToday}
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <div className="flex gap-2">
        <Input
          icon={MdPerson}
          type="number"
          min="1"
          value={formData.passengers}
          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
          className="flex-1"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}

export default FlightsForm
