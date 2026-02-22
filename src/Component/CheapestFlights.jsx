import { IoArrowForward, IoAirplane } from 'react-icons/io5'

const CheapestFlights = () => {
  const flights = [
    {
      id: 1,
      airline: 'IndiGo',
      flightNumber: '6E-1050',
      logo: '✈️',
      departure: {
        time: '06:15',
        city: 'Delhi',
        code: 'DEL'
      },
      arrival: {
        time: '08:25',
        city: 'Mumbai',
        code: 'BOM'
      },
      duration: '2h 10m',
      type: 'Direct',
      price: '₹3,450',
      perPerson: 'per person'
    },
    {
      id: 2,
      airline: 'SpiceJet',
      flightNumber: 'SG-8030',
      logo: '✈️',
      departure: {
        time: '10:30',
        city: 'Delhi',
        code: 'DEL'
      },
      arrival: {
        time: '13:00',
        city: 'Goa',
        code: 'GOI'
      },
      duration: '2h 30m',
      type: 'Direct',
      price: '₹4,250',
      perPerson: 'per person'
    },
    {
      id: 3,
      airline: 'Air India',
      flightNumber: 'AI-8030',
      logo: '✈️',
      departure: {
        time: '14:00',
        city: 'Bangalore',
        code: 'BLR'
      },
      arrival: {
        time: '16:45',
        city: 'Delhi',
        code: 'DEL'
      },
      duration: '2h 45m',
      type: 'Direct',
      price: '₹4,899',
      perPerson: 'per person'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Cheapest Flights Today
          </h2>
          <p className="text-gray-500">
            Compare & save on domestic flights
          </p>
        </div>
        <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">
          View All Flights
          <IoArrowForward />
        </button>
      </div>

      {/* Flights List */}
      <div className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              {/* Airline Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                  {flight.logo}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{flight.airline}</div>
                  <div className="text-sm text-gray-500">{flight.flightNumber}</div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="flex items-center gap-8">
                {/* Departure */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
                  <div className="text-sm text-gray-500">{flight.departure.city} ({flight.departure.code})</div>
                </div>

                {/* Duration & Type */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="text-xs text-gray-400 mb-1">{flight.duration}</div>
                  <div className="w-full h-px bg-gray-300 relative">
                    <div className="absolute left-0 w-2 h-2 bg-gray-400 rounded-full -top-[3px]"></div>
                    <div className="absolute right-0 w-2 h-2 bg-orange-500 rounded-full -top-[3px]"></div>
                  </div>
                  <div className="text-xs text-green-600 font-semibold mt-1">{flight.type}</div>
                </div>

                {/* Arrival */}
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
                  <div className="text-sm text-gray-500">{flight.arrival.city} ({flight.arrival.code})</div>
                </div>
              </div>

              {/* Price & Book */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{flight.price}</div>
                  <div className="text-xs text-gray-500">{flight.perPerson}</div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheapestFlights
