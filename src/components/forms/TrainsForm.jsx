import { useState } from 'react'
import { MdTrain, MdCalendarToday } from 'react-icons/md'
import { Button, Input } from '../common'

const TrainsForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Train Search:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input
        icon={MdTrain}
        placeholder="From Station"
        value={formData.from}
        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        required
      />
      <Input
        icon={MdTrain}
        placeholder="To Station"
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
      <Button type="submit" className="w-full">Search Trains</Button>
    </form>
  )
}

export default TrainsForm
