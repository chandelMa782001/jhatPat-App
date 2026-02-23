import { useState } from 'react'
import { MdDirectionsBus, MdCalendarToday } from 'react-icons/md'
import { Button, Input } from '../common'

const BusesForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Bus Search:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input
        icon={MdDirectionsBus}
        placeholder="From City"
        value={formData.from}
        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        required
      />
      <Input
        icon={MdDirectionsBus}
        placeholder="To City"
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
      <Button type="submit" className="w-full">Search Buses</Button>
    </form>
  )
}

export default BusesForm
