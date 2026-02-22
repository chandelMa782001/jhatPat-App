import { MdFlight, MdTrain } from 'react-icons/md'
import { FaBus } from 'react-icons/fa'
import { IoArrowForward } from 'react-icons/io5'

const PopularRoutes = () => {
  const flightRoutes = [
    {
      from: 'Delhi',
      to: 'Mumbai',
      badge: 'Lowest',
      badgeColor: 'bg-green-100 text-green-600',
      price: '₹3,450'
    },
    {
      from: 'Delhi',
      to: 'Goa',
      badge: null,
      price: '₹4,250'
    },
    {
      from: 'Bangalore',
      to: 'Delhi',
      badge: null,
      price: '₹4,899'
    },
    {
      from: 'Mumbai',
      to: 'Kolkata',
      badge: 'Popular',
      badgeColor: 'bg-purple-100 text-purple-600',
      price: '₹3,999'
    },
    {
      from: 'Chennai',
      to: 'Delhi',
      badge: null,
      price: '₹5,299'
    },
    {
      from: 'Delhi',
      to: 'Jaipur',
      badge: 'Lowest',
      badgeColor: 'bg-green-100 text-green-600',
      price: '₹2,799'
    }
  ]

  const trainRoutes = [
    {
      from: 'Delhi',
      to: 'Mumbai',
      details: 'Rajdhani Exp • 15h 35m',
      price: '₹1,850'
    },
    {
      from: 'Delhi',
      to: 'Kolkata',
      details: 'Duronto Exp • 17h 10m',
      price: '₹2,100'
    },
    {
      from: 'Chennai',
      to: 'Bangalore',
      details: 'Shatabdi Exp • 5h 00m',
      price: '₹850'
    },
    {
      from: 'Mumbai',
      to: 'Goa',
      details: 'Jan Shatabdi • 8h 45m',
      price: '₹680'
    }
  ]

  const busRoutes = [
    {
      from: 'Delhi',
      to: 'Jaipur',
      details: 'AC Sleeper • 5h 30m',
      price: '₹850'
    },
    {
      from: 'Delhi',
      to: 'Manali',
      details: 'AC Sleeper • 12h',
      price: '₹1,200'
    },
    {
      from: 'Bangalore',
      to: 'Chennai',
      details: 'Multi-Axle • 6h',
      price: '₹750'
    },
    {
      from: 'Mumbai',
      to: 'Pune',
      details: 'AC Seater • 3h 30m',
      price: '₹450'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Popular Routes & Best Fares
        </h2>
        <p className="text-gray-500">
          Trending routes booked by millions of travellers
        </p>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Flight Routes */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <MdFlight className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Flight Routes</h3>
              <p className="text-xs text-gray-500">Starting fares</p>
            </div>
          </div>

          <div className="space-y-4">
            {flightRoutes.map((route, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">{route.from}</span>
                  <IoArrowForward className="text-gray-400 text-xs" />
                  <span className="text-gray-700 font-medium text-sm">{route.to}</span>
                  {route.badge && (
                    <span className={`${route.badgeColor} px-2 py-0.5 rounded text-xs font-semibold`}>
                      {route.badge}
                    </span>
                  )}
                </div>
                <span className="text-orange-600 font-bold text-sm">{route.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Train Routes */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <MdTrain className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Train Routes</h3>
              <p className="text-xs text-gray-500">Popular trains</p>
            </div>
          </div>

          <div className="space-y-4">
            {trainRoutes.map((route, index) => (
              <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium text-sm">{route.from}</span>
                    <IoArrowForward className="text-gray-400 text-xs" />
                    <span className="text-gray-700 font-medium text-sm">{route.to}</span>
                  </div>
                  <span className="text-orange-600 font-bold text-sm">{route.price}</span>
                </div>
                <p className="text-xs text-gray-400">{route.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bus Routes */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <FaBus className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Bus Routes</h3>
              <p className="text-xs text-gray-500">Top operators</p>
            </div>
          </div>

          <div className="space-y-4">
            {busRoutes.map((route, index) => (
              <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium text-sm">{route.from}</span>
                    <IoArrowForward className="text-gray-400 text-xs" />
                    <span className="text-gray-700 font-medium text-sm">{route.to}</span>
                  </div>
                  <span className="text-orange-600 font-bold text-sm">{route.price}</span>
                </div>
                <p className="text-xs text-gray-400">{route.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularRoutes
