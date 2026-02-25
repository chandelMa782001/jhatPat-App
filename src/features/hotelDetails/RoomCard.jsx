import { useNavigate } from 'react-router-dom'
import { FaWifi, FaTv, FaGlassMartini, FaBath, FaCity, FaUtensils, FaDoorOpen } from 'react-icons/fa'
import { MdPeople, MdKingBed, MdBalcony } from 'react-icons/md'
import { Button } from '../../components/common'

const RoomCard = ({ room, hotelId }) => {
  const navigate = useNavigate()

  const handleBookNow = () => {
    navigate(`/checkout/${hotelId}`)
  }
  const getAmenityIcon = (iconName) => {
    const icons = {
      wifi: FaWifi,
      tv: FaTv,
      minibar: FaGlassMartini,
      bathtub: FaBath,
      balcony: MdBalcony,
      cityView: FaCity,
      lounge: FaDoorOpen,
      breakfast: FaUtensils
    }
    return icons[iconName] || FaWifi
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow mb-4">
      <div className="flex gap-4 p-4">
        {/* Room Image */}
        <div className="w-64 h-48 flex-shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Room Details */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{room.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <MdPeople className="text-gray-500" />
                  <span>Max {room.maxGuests} adults</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdKingBed className="text-gray-500" />
                  <span>{room.bedType}</span>
                </div>
                <span>{room.size}</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-3 mb-4">
            {room.amenities.map((amenity, index) => {
              const IconComponent = getAmenityIcon(amenity.icon)
              return (
                <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                  <IconComponent className="text-gray-500" />
                  <span>{amenity.label}</span>
                </div>
              )
            })}
          </div>

          <div className="flex items-end justify-between mt-auto">
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View Details
            </button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹{room.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">/night</span>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-sm text-gray-400 line-through">₹{room.originalPrice.toLocaleString()}</span>
                  <span className="text-sm text-green-600 font-semibold">{room.discount}% off</span>
                </div>
              </div>
              <Button className="px-6" onClick={handleBookNow}>Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
