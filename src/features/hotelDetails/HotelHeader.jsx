import { useState } from 'react'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

const HotelHeader = ({ hotel }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex gap-6">
        {/* Hotel Main Image */}
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Hotel Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{hotel.name}</h1>
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {[...Array(hotel.stars)].map((_, i) => (
                  <AiFillStar key={i} className="text-sm" />
                ))}
              </div>
            </div>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isWishlisted ? (
                <AiFillHeart className="text-red-500 text-xl" />
              ) : (
                <AiOutlineHeart className="text-gray-600 text-xl" />
              )}
              <span className="text-sm font-medium text-gray-700">Wishlist</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MdLocationOn className="text-gray-500" />
            <span className="text-sm">{hotel.location}</span>
          </div>

          {/* About Property */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">About property</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {showFullDescription ? hotel.description : `${hotel.description.slice(0, 150)}...`}
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
              >
                {showFullDescription ? 'Show less' : 'Read more'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelHeader
