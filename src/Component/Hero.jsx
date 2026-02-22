import { useState } from 'react'
import { IoBed } from 'react-icons/io5'
import { MdFlight } from 'react-icons/md'
import { FaTrain, FaBus, FaTaxi } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'

// Import Form Components
import HotelsForm from './HeroForms/HotelsForm'
import FlightsForm from './HeroForms/FlightsForm'
import TrainsForm from './HeroForms/TrainsForm'
import BusesForm from './HeroForms/BusesForm'
import CabsForm from './HeroForms/CabsForm'
import EventsForm from './HeroForms/EventsForm'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('events')

  const tabs = [
    { id: 'hotels', label: 'Hotels', icon: IoBed, subtitle: 'Hotels & Cafes' },
    { id: 'flights', label: 'Flights', icon: MdFlight, subtitle: 'Domestic & Intl' },
    { id: 'trains', label: 'Trains', icon: FaTrain, subtitle: 'IRCTC & PRS' },
    { id: 'buses', label: 'Buses', icon: FaBus, subtitle: 'AC & Sleeper' },
    { id: 'cabs', label: 'Cabs', icon: FaTaxi, subtitle: 'City & Outstation' },
    { id: 'events', label: 'Events', icon: GiPartyPopper, subtitle: 'Venues & Halls' }
  ]

  // Render appropriate form based on active tab
  const renderForm = () => {
    switch (activeTab) {
      case 'hotels':
        return <HotelsForm />
      case 'flights':
        return <FlightsForm />
      case 'trains':
        return <TrainsForm />
      case 'buses':
        return <BusesForm />
      case 'cabs':
        return <CabsForm />
      case 'events':
        return <EventsForm />
      default:
        return <EventsForm />
    }
  }

  return (
    <div className="relative">
      {/* Dark Background - Half Height */}
      <div className="bg-gradient-to-br from-[#0f1c3f] via-[#1a2847] to-[#0f1c3f] h-[300px]">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          {/* Heading */}
          <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-2">
            India's Smartest Way to Book <span className="text-orange-500">Everything</span>
          </h1>
          <p className="text-center text-gray-300 mb-8">
            Hotels, Flights, Trains, Buses, Cabs & Venues — all in one place
          </p>
        </div>
      </div>

      {/* Booking Card - Overlapping */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 pb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-between mb-6 border-b border-[#F3F4F6]">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center px-6 py-3 transition-all ${
                    activeTab === tab.id
                      ? 'border-b-4 border-orange-500'
                      : 'border-b-4 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="bg-[#F3F4F6] p-2 rounded-lg mb-1">
                    <IconComponent
                      className={`text-2xl ${
                        activeTab === tab.id ? 'text-orange-500' : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <span
                    className={`font-semibold text-sm ${
                      activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span className="text-xs text-gray-400">{tab.subtitle}</span>
                </button>
              )
            })}
          </div>

          {renderForm()}
        </div>
      </div>
    </div>
  )
}

export default Hero
