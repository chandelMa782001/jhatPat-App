import { useState } from 'react'
import { PROPERTY_RULES } from '../../constants/rooms'

const PropertyRules = () => {
  const [activeTab, setActiveTab] = useState('mustRead')

  const tabs = [
    { id: 'mustRead', label: 'Must Read Rules' },
    { id: 'guestProfile', label: 'Guest Profile' },
    { id: 'guestProfileHourly', label: 'Guest Profile (Hourly)' },
    { id: 'allRules', label: 'Read All Property Rules' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Property Rules</h2>

      {/* Check-in/Check-out Times */}
      <div className="flex gap-8 mb-6 pb-6 border-b border-gray-200">
        <div>
          <span className="text-sm text-gray-600">Check-in: </span>
          <span className="text-sm font-semibold text-gray-900">12 PM</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">Check-out: </span>
          <span className="text-sm font-semibold text-gray-900">11 AM</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Rules List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROPERTY_RULES[0].rules.map((rule, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyRules
