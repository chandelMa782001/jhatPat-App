import { useState } from 'react'
import { MdLocationOn, MdCalendarToday, MdPerson } from 'react-icons/md'
import { Button, Input } from '../../components/common'

const HotelSearchBar = ({ initialData }) => {
  const [formData, setFormData] = useState({
    location: initialData?.location || 'Delhi, Mumbai, Goa...',
    checkIn: initialData?.checkIn || 'Sun, 15 Feb 2026',
    checkOut: initialData?.checkOut || 'Mon, 16 Feb 2026',
    rooms: initialData?.rooms || '1 Room, 2 Adults'
  })

  const handleSearch = () => {
    console.log('Search:', formData)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div>
          <label className="text-xs text-gray-500 mb-1 block font-medium">
            CITY, AREA OR PROPERTY
          </label>
          <Input
            icon={MdLocationOn}
            placeholder="Delhi, Mumbai, Goa..."
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block font-medium">CHECK-IN</label>
          <Input
            icon={MdCalendarToday}
            type="date"
            placeholder="Sun, 15 Feb 2026"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block font-medium">CHECK-OUT</label>
          <Input
            icon={MdCalendarToday}
            type="date"
            placeholder="Mon, 16 Feb 2026"
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block font-medium">ROOMS & GUESTS</label>
          <Input
            icon={MdPerson}
            placeholder="1 Room, 2 Adults"
            value={formData.rooms}
            onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
          />
        </div>
        <Button onClick={handleSearch} className="px-8 h-12">
          Search Hotels
        </Button>
      </div>
    </div>
  )
}

export default HotelSearchBar
