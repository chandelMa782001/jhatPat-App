import { useState } from 'react'
import { LOCATIONS, PROPERTY_TYPES, STAR_CATEGORIES, USER_RATINGS } from '../../constants/hotels'

const HotelFilters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([])
  const [selectedStars, setSelectedStars] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])

  const handleLocationToggle = (location) => {
    const updated = selectedLocations.includes(location)
      ? selectedLocations.filter(l => l !== location)
      : [...selectedLocations, location]
    setSelectedLocations(updated)
  }

  const handlePropertyTypeToggle = (type) => {
    const updated = selectedPropertyTypes.includes(type)
      ? selectedPropertyTypes.filter(t => t !== type)
      : [...selectedPropertyTypes, type]
    setSelectedPropertyTypes(updated)
  }

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-6 sticky top-0 max-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
          clear all
        </button>
      </div>

      {/* Top Location */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Top Location</h3>
        <div className="space-y-2">
          {LOCATIONS.map((location) => (
            <label key={location} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location)}
                onChange={() => handleLocationToggle(location)}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Property type</h3>
        <div className="space-y-2">
          {PROPERTY_TYPES.map((type) => (
            <label key={type.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedPropertyTypes.includes(type.id)}
                  onChange={() => handlePropertyTypeToggle(type.id)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-700">{type.label}</span>
              </div>
              <span className="text-xs text-gray-500">({type.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price per Day */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Price per Day</h3>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="20000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Star Category */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Star category</h3>
        <div className="space-y-2">
          {STAR_CATEGORIES.map((star) => (
            <label key={star.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedStars.includes(star.value)}
                onChange={() => {
                  const updated = selectedStars.includes(star.value)
                    ? selectedStars.filter(s => s !== star.value)
                    : [...selectedStars, star.value]
                  setSelectedStars(updated)
                }}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{star.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* User Rating */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">User rating</h3>
        <div className="space-y-2">
          {USER_RATINGS.map((rating) => (
            <label key={rating.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating.value)}
                onChange={() => {
                  const updated = selectedRatings.includes(rating.value)
                    ? selectedRatings.filter(r => r !== rating.value)
                    : [...selectedRatings, rating.value]
                  setSelectedRatings(updated)
                }}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{rating.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotelFilters
