import { useState } from 'react'
import { MdLocationOn, MdCalendarToday } from 'react-icons/md'
import { Button, Input } from '../common'

const TrainsForm = () => {
  const [quotaType, setQuotaType] = useState('general')
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    travelDate: '',
    class: 'All Classes'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Train Search:', formData)
  }

  return (
    <div>
      {/* Quota Type Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setQuotaType('general')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            quotaType === 'general'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          General
        </button>
        <button
          type="button"
          onClick={() => setQuotaType('tatkal')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            quotaType === 'tatkal'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Tatkal
        </button>
        <button
          type="button"
          onClick={() => setQuotaType('ladiesQuota')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            quotaType === 'ladiesQuota'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Ladies Quota
        </button>
        <button
          type="button"
          onClick={() => setQuotaType('pnrStatus')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            quotaType === 'pnrStatus'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          PNR Status
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">FROM STATION</label>
            <Input
              icon={MdLocationOn}
              placeholder="New Delhi (NDLS)"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">TO STATION</label>
            <Input
              icon={MdLocationOn}
              placeholder="Mumbai Central (BCT)"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">TRAVEL DATE</label>
            <Input
              icon={MdCalendarToday}
              type="date"
              placeholder="Sun, 15 Feb 2026"
              value={formData.travelDate}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">CLASS</label>
            <select
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            >
              <option value="All Classes">All Classes</option>
              <option value="Sleeper (SL)">Sleeper (SL)</option>
              <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
              <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
              <option value="AC First Class (1A)">AC First Class (1A)</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-8">
            Search Trains
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TrainsForm
