import { useState } from 'react'
import { Input, Button } from '../../components/common'
import { MdPerson, MdPhone, MdEmail } from 'react-icons/md'
import { FaBirthdayCake } from 'react-icons/fa'

const GuestDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    mobile: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Guest Details:', formData)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Guest Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</label>
          <Input
            icon={MdPerson}
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Age <span className="text-xs text-gray-500">(As per ID proof)</span>
          </label>
          <Input
            icon={FaBirthdayCake}
            type="number"
            placeholder="Enter age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Mobile Number *</label>
          <Input
            icon={MdPhone}
            type="tel"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email *</label>
          <Input
            icon={MdEmail}
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <Button type="button" variant="outline" className="w-full">
          + Add Guest
        </Button>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Proceed for Payment
        </Button>
      </form>
    </div>
  )
}

export default GuestDetailsForm
