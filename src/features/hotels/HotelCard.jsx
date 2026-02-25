import { useNavigate } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { Button } from '../../components/common'

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate()

  const handleViewRooms = () => {
    navigate(`/hotels/${hotel.id}`)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="flex gap-4 p-4">
        {/* Hotel Image */}
        <div className="relative w-72 h-48 flex-shrink-0">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Hotel Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <AiFillStar key={i} className="text-sm" />
                  ))}
                </div>
              </div>
              <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                {hotel.rating} ★
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
              <MdLocationOn className="text-gray-500" />
              <span>{hotel.location}</span>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-2 mb-3">
              {hotel.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">₹{hotel.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">/night</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">₹{hotel.originalPrice.toLocaleString()}</span>
                <span className="text-sm text-green-600 font-semibold">{hotel.discount}% off</span>
              </div>
            </div>
            <Button className="px-6" onClick={handleViewRooms}>View Rooms</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
