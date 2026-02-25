import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar, Footer } from '../components/layout'
import BookingHeader from '../features/checkout/BookingHeader'
import RoomDetailsCard from '../features/checkout/RoomDetailsCard'
import ImportantInfo from '../features/checkout/ImportantInfo'
import PriceSummary from '../features/checkout/PriceSummary'
import { HOTEL_DETAILS } from '../constants/rooms'
import { BOOKING_DETAILS, SELECTED_ROOMS, IMPORTANT_INFO, PRICE_SUMMARY } from '../constants/checkout'

const CheckoutPage = () => {
  const { hotelId } = useParams()
  const [hotel] = useState(HOTEL_DETAILS)
  const [booking] = useState(BOOKING_DETAILS)
  const [rooms] = useState(SELECTED_ROOMS)
  const [importantInfo] = useState(IMPORTANT_INFO)
  const [pricing] = useState(PRICE_SUMMARY)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Booking Header */}
        <BookingHeader hotel={hotel} booking={booking} />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Left Section - Room Details */}
          <div className="flex-1">
            {rooms.map((room) => (
              <RoomDetailsCard key={room.id} room={room} />
            ))}
            
            {/* Important Information */}
            <ImportantInfo info={importantInfo} />
          </div>

          {/* Right Sidebar - Price Summary */}
          <div className="w-96 flex-shrink-0">
            <PriceSummary pricing={pricing} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CheckoutPage
