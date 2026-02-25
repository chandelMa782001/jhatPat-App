import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar, Footer } from '../components/layout'
import HotelHeader from '../features/hotelDetails/HotelHeader'
import RoomCard from '../features/hotelDetails/RoomCard'
import GuestDetailsForm from '../features/hotelDetails/GuestDetailsForm'
import LocationMap from '../features/hotelDetails/LocationMap'
import PropertyRules from '../features/hotelDetails/PropertyRules'
import { MOCK_ROOMS, HOTEL_DETAILS } from '../constants/rooms'

const HotelDetailsPage = () => {
  const { hotelId } = useParams()
  const [hotel] = useState(HOTEL_DETAILS)
  const [rooms] = useState(MOCK_ROOMS)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Hotel Header */}
        <HotelHeader hotel={hotel} />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Left Section - Rooms & Details */}
          <div className="flex-1">
            {/* Select Your Room */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Room</h2>
              <div className="space-y-4">
                {rooms.map((room) => (
                  <RoomCard key={room.id} room={room} hotelId={hotelId} />
                ))}
              </div>
            </div>

            {/* Location Map */}
            <LocationMap hotel={hotel} />

            {/* Property Rules */}
            <PropertyRules />
          </div>

          {/* Right Sidebar - Guest Details */}
          <div className="w-96 flex-shrink-0">
            <GuestDetailsForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HotelDetailsPage
