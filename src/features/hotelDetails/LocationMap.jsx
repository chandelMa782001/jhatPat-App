import { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Button } from '../../components/common'

const LocationMap = ({ hotel }) => {
  const [activeTab, setActiveTab] = useState('landmarks')

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>

      {/* Address */}
      <div className="flex items-start gap-2 mb-4">
        <MdLocationOn className="text-gray-500 mt-1 flex-shrink-0" />
        <p className="text-sm text-gray-600">{hotel.fullAddress}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('landmarks')}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            activeTab === 'landmarks'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Key Landmark
        </button>
        <button
          onClick={() => setActiveTab('food')}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            activeTab === 'food'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Food & Shopping
        </button>
      </div>

      {/* Map Placeholder */}
      <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <iframe
          src={hotel.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white px-4 py-2 rounded-lg shadow-md pointer-events-auto">
            <Button variant="outline" size="sm">
              Click to View Map 🗺️
            </Button>
          </div>
        </div>
      </div>

      {/* Nearby Hotels Link */}
      <div className="flex justify-end">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          <MdLocationOn className="text-lg" />
          Nearby Hotels
        </button>
      </div>
    </div>
  )
}

export default LocationMap
