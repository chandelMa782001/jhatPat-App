import { useState } from 'react'
import { Navbar, Footer } from '../components/layout'
import HotelSearchBar from '../features/hotels/HotelSearchBar'
import HotelFilters from '../features/hotels/HotelFilters'
import HotelList from '../features/hotels/HotelList'
import { MOCK_HOTELS } from '../constants/hotels'

const HotelListingPage = () => {
  const [hotels] = useState(MOCK_HOTELS)
  const [filters, setFilters] = useState({})

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    // Apply filters logic here
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Navbar */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      
      {/* Fixed Search Bar */}
      <div className="flex-shrink-0 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <HotelSearchBar />
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-6">
            {/* Fixed Filters Sidebar */}
            <div className="flex-shrink-0">
              <HotelFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Scrollable Hotel List */}
            <div className="flex-1 min-w-0">
              <HotelList hotels={hotels} />
            </div>
          </div>
        </div>
        
        {/* Footer inside scrollable area */}
        <Footer />
      </div>
    </div>
  )
}

export default HotelListingPage
