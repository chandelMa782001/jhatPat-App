import { IoArrowForward, IoLocationSharp, IoStar } from 'react-icons/io5'

const TopHotelDeals = () => {
  const hotels = [
    {
      id: 1,
      name: 'The Grand Hyatt',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
      rating: 4.7,
      reviews: 3245,
      originalPrice: '₹9,999',
      price: '₹5,499',
      discount: '45% OFF'
    },
    {
      id: 2,
      name: 'Taj Lake Palace',
      location: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500',
      rating: 4.9,
      reviews: 1823,
      originalPrice: '₹12,999',
      price: '₹8,999',
      discount: '31% OFF'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Top Hotel Deals
          </h2>
          <p className="text-gray-500">
            Handpicked stays at unbeatable prices
          </p>
        </div>
        <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">
          View All Hotels
          <IoArrowForward />
        </button>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex">
              {/* Image */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-bold">
                  {hotel.discount}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <IoLocationSharp className="text-base" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      <IoStar className="text-xs" />
                      <span>{hotel.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      ({hotel.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-gray-400 text-sm line-through">
                      {hotel.originalPrice}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {hotel.price}
                    </div>
                    <div className="text-gray-500 text-xs">
                      per night + taxes
                    </div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopHotelDeals
