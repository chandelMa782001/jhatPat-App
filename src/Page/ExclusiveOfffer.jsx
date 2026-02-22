import { useState } from 'react'
import { FaPercent, FaPlane, FaGift, FaTag, FaWallet } from 'react-icons/fa'
import { IoBus, IoArrowForward } from 'react-icons/io5'
import { MdTrain } from 'react-icons/md'
import { GiPartyPopper } from 'react-icons/gi'

const ExclusiveOffer = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'flights', label: 'Flights' },
    { id: 'trains', label: 'Trains' },
    { id: 'buses', label: 'Buses' },
    { id: 'cabs', label: 'Cabs' },
    { id: 'events', label: 'Events' },
    { id: 'wallet', label: 'Wallet' }
  ]

  const offers = [
    {
      id: 1,
      category: 'Hotels',
      icon: FaPercent,
      bgColor: 'from-blue-500 to-blue-600',
      title: 'Flat 40% OFF on Hotels',
      description: 'Book hourly or full-day stays across 500+ cities',
      code: 'JHATPAT40',
      validTill: '28 Feb 2026'
    },
    {
      id: 2,
      category: 'Flights',
      icon: FaPlane,
      bgColor: 'from-orange-500 to-orange-600',
      title: 'Domestic Flights from ₹1,499',
      description: 'Grab the lowest fares on all major airlines',
      code: 'FLYLOW',
      validTill: '28 Feb 2026'
    },
    {
      id: 3,
      category: 'Trains',
      icon: FaGift,
      bgColor: 'from-purple-500 to-purple-600',
      title: 'Instant ₹100 Cashback',
      description: 'On all train bookings above ₹500',
      code: 'TRAINRUSH',
      validTill: '28 Feb 2026'
    },
    {
      id: 4,
      category: 'Buses',
      icon: FaTag,
      bgColor: 'from-green-500 to-green-600',
      title: '25% OFF on Bus Tickets',
      description: 'AC Sleeper & Volvo bookings across India',
      code: 'BUSRIDE25',
      validTill: '22 Feb 2026'
    },
    {
      id: 5,
      category: 'Wallet',
      icon: FaWallet,
      bgColor: 'from-orange-400 to-orange-500',
      title: '2X Jhatpat Cash',
      description: 'Earn double rewards on every booking this week',
      code: 'DOUBLE',
      validTill: '18 Feb 2026'
    },
    {
      id: 6,
      category: 'Events',
      icon: FaPercent,
      bgColor: 'from-pink-500 to-pink-600',
      title: '₹5,000 OFF on Venues',
      description: 'Book marriage halls & party venues at best prices',
      code: 'VENUESK',
      validTill: '28 Feb 2026'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Exclusive Offers</h2>
          <p className="text-gray-500 mt-1">Handpicked deals curated just for you</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <IoArrowForward className="text-2xl" />
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => {
          const IconComponent = offer.icon
          return (
            <div
              key={offer.id}
              className={`relative bg-gradient-to-br ${offer.bgColor} rounded-2xl p-6 text-white overflow-hidden`}
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <IconComponent className="text-6xl" />
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                {offer.category}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <IconComponent className="text-3xl" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-white/90 text-sm mb-6">{offer.description}</p>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-xs">Use code: </span>
                  <span className="font-bold">{offer.code}</span>
                </div>
                <div className="text-xs text-white/80">
                  Valid till {offer.validTill}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExclusiveOffer
