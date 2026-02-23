import { IoBed } from 'react-icons/io5'
import { MdFlight } from 'react-icons/md'
import { FaTrain, FaBus, FaTaxi } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'

export const BOOKING_TABS = [
  { id: 'hotels', label: 'Hotels', icon: IoBed, subtitle: 'Hotels & Cafes' },
  { id: 'flights', label: 'Flights', icon: MdFlight, subtitle: 'Domestic & Intl' },
  { id: 'trains', label: 'Trains', icon: FaTrain, subtitle: 'IRCTC & PRS' },
  { id: 'buses', label: 'Buses', icon: FaBus, subtitle: 'AC & Sleeper' },
  { id: 'cabs', label: 'Cabs', icon: FaTaxi, subtitle: 'City & Outstation' },
  { id: 'events', label: 'Events', icon: GiPartyPopper, subtitle: 'Venues & Halls' }
]
