// Mock room data for hotel details page
export const MOCK_ROOMS = [
  {
    id: 1,
    name: 'Deluxe Room with breakfast',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    maxGuests: 2,
    bedType: '1 King bed',
    size: '250 sq ft',
    amenities: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'tv', label: 'TV' },
      { icon: 'minibar', label: 'Minibar' }
    ],
    price: 4299,
    originalPrice: 5999,
    discount: 28
  },
  {
    id: 2,
    name: 'Premium Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    maxGuests: 2,
    bedType: '1 King bed',
    size: '350 sq ft',
    amenities: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'tv', label: 'TV' },
      { icon: 'bathtub', label: 'Bathtub' },
      { icon: 'balcony', label: 'Balcony' },
      { icon: 'cityView', label: 'City View' }
    ],
    price: 8499,
    originalPrice: 11999,
    discount: 29
  },
  {
    id: 3,
    name: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
    maxGuests: 4,
    bedType: '1 King + 1 Single',
    size: '450 sq ft',
    amenities: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'tv', label: 'TV' },
      { icon: 'minibar', label: 'Minibar' },
      { icon: 'bathtub', label: 'Bathtub' },
      { icon: 'lounge', label: 'Lounge' },
      { icon: 'breakfast', label: 'Breakfast' }
    ],
    price: 4299,
    originalPrice: 5999,
    discount: 28
  }
]

export const PROPERTY_RULES = [
  {
    category: 'Must Read Rules',
    rules: [
      'Check-in: 12 PM',
      'Check-out: 11 AM',
      'Primary Guest should be at least 18 years of age',
      'Unmarried couples allowed',
      'Couples check-in must have valid ID proof',
      'Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)',
      'Pets are not allowed',
      'Local IDs are allowed'
    ]
  }
]

export const HOTEL_DETAILS = {
  id: 1,
  name: 'Royal Orchid Resort',
  rating: 4.7,
  stars: 5,
  location: 'Aerocity, Delhi',
  fullAddress: 'Address: SD-156 Basement Sector-45 Noida Gautam buddha Nagar Uttar Pradesh 201301',
  description: 'This 5-star hotel provides 24-hour front desk, a fitness centre in Noida, within 15 km of Swaminarayan Akshardham and 16 km of Tughlaqabad Fort. It has a restaurant, outdoor...',
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
  ],
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.3!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890'
}
