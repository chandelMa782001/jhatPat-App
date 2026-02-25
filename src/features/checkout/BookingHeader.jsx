import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

const BookingHeader = ({ hotel, booking }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1 text-orange-500">
              {[...Array(hotel.stars)].map((_, i) => (
                <AiFillStar key={i} className="text-sm" />
              ))}
            </div>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">
              couple friendly
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <MdLocationOn className="text-gray-500" />
            <span>{hotel.location}</span>
          </div>
        </div>
        <div className="w-32 h-24 flex-shrink-0">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Booking Details */}
      <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
        <div>
          <div className="text-xs text-gray-500 mb-1">CHECK-IN</div>
          <div className="font-semibold text-gray-900">
            {booking.checkIn.day}, {booking.checkIn.date}
          </div>
          <div className="text-sm text-gray-600">{booking.checkIn.time}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">CHECK-OUT</div>
          <div className="font-semibold text-gray-900">
            {booking.checkOut.day}, {booking.checkOut.date}
          </div>
          <div className="text-sm text-gray-600">{booking.checkOut.time}</div>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-4 text-sm text-gray-700">
        <span><strong>{booking.nights}</strong> Nights</span>
        <span>|</span>
        <span><strong>{booking.adults}</strong> Adults</span>
        <span>|</span>
        <span><strong>{booking.rooms}</strong> Rooms</span>
      </div>
    </div>
  )
}

export default BookingHeader
