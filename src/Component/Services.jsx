import { IoBed, IoShieldCheckmark } from 'react-icons/io5'
import { MdFlight, MdTrain, MdWallet, MdSearch, MdBusiness } from 'react-icons/md'
import { FaBus, FaTaxi, FaClock } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'
import { BiSolidUser } from 'react-icons/bi'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: IoBed,
      title: 'Hotels',
      subtitle: 'Hourly & Full-Day Stays'
    },
    {
      id: 2,
      icon: MdFlight,
      title: 'Flights',
      subtitle: 'Domestic & International'
    },
    {
      id: 3,
      icon: MdTrain,
      title: 'Trains',
      subtitle: 'IRCTC & Tatkal Booking'
    },
    {
      id: 4,
      icon: FaBus,
      title: 'Buses',
      subtitle: 'AC Sleeper & Volvo'
    },
    {
      id: 5,
      icon: FaTaxi,
      title: 'Cabs',
      subtitle: 'City & Outstation Rides'
    },
    {
      id: 6,
      icon: GiPartyPopper,
      title: 'Events',
      subtitle: 'Venues & Marriage Halls'
    },
    {
      id: 7,
      icon: FaClock,
      title: 'Hourly Hotels',
      subtitle: 'Stay for Few Hours'
    },
    {
      id: 8,
      icon: MdSearch,
      title: 'PNR Status',
      subtitle: 'Live Train Tracking'
    },
    {
      id: 9,
      icon: MdWallet,
      title: 'JhatpatCash',
      subtitle: 'Rewards & Cashback'
    },
    {
      id: 10,
      icon: MdBusiness,
      title: 'List Property',
      subtitle: 'Earn with Your Space'
    },
    {
      id: 11,
      icon: BiSolidUser,
      title: 'Drive With Us',
      subtitle: 'Join as Driver/Partner'
    },
    {
      id: 12,
      icon: IoShieldCheckmark,
      title: 'Travel Insurance',
      subtitle: 'Trip Protection Plans'
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            All Services at Your Fingertips
          </h2>
          <p className="text-gray-500">
            One platform for all your travel and booking needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="bg-[#1e293b] w-16 h-16 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-all duration-300">
                  <IconComponent className="text-white text-2xl" />
                </div>
                
                {/* Text */}
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {service.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
