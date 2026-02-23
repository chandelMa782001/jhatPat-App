import { IoArrowForward } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
const TrendingDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500',
      category: 'Beaches & Nightlife',
      price: '₹4,999',
      trending: true
    },
    {
      id: 2,
      name: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500',
      category: 'Heritage & Culture',
      price: '₹3,499',
      trending: true
    },
    {
      id: 3,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500',
      category: 'Backwaters & Nature',
      price: '₹5,999',
      trending: false
    },
    {
      id: 4,
      name: 'Manali',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500',
      category: 'Mountains & Adventure',
      price: '₹3,999',
      trending: false
    },
    {
      id: 5,
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=500',
      category: 'City & Entertainment',
      price: '₹2,999',
      trending: true
    },
    {
      id: 6,
      name: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500',
      category: 'Spiritual & Heritage',
      price: '₹2,499',
      trending: false
    },
    {
      id: 7,
      name: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500',
      category: 'Lakes & Romance',
      price: '₹4,499',
      trending: true
    },
    {
      id: 8,
      name: 'Rishikesh',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500',
      category: 'Wellness & Adventure',
      price: '₹2,999',
      trending: false
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trending Destinations
          </h2>
          <p className="text-gray-500">
            Explore top places loved by Indian travellers
          </p>
        </div>
        <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">
          View All
          <IoArrowForward />
        </button>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Trending Badge */}
            {destination.trending && (
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <span>🔥</span>
                Trending
              </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-200 mb-3">
                <MdLocationOn className="text-base" />
                <span>{destination.category}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-300">Starting </span>
                <span className="font-bold text-lg">{destination.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingDestinations
