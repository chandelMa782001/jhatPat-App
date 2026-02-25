import HotelCard from './HotelCard'

const HotelList = ({ hotels, sortBy }) => {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hotels in Delhi</h1>
          <p className="text-sm text-gray-600">Sun, 16 Feb - Mon, 18 Feb | 1 Room, 2 Adults</p>
        </div>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="popular">AI type</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="popular">most popular</option>
            <option value="newest">Newest First</option>
            <option value="recommended">Recommended</option>
          </select>
        </div>
      </div>

      {/* Hotel Cards */}
      <div className="space-y-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2026 Jhatpat Booking. All rights reserved. Secure payments powered by Razorpay
      </div>
    </div>
  )
}

export default HotelList
