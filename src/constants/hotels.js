// Mock hotel data for listing page
export const MOCK_HOTELS = [
  {
    id: 1,
    name: 'Royal Orchid Resort',
    location: 'Aerocity, Delhi',
    rating: 4.7,
    stars: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    price: 7499,
    originalPrice: 9999,
    discount: 38,
    amenities: ['Pool', 'Spa', 'Airport Shuttle'],
    propertyType: 'Resort'
  },
  {
    id: 2,
    name: 'The Grand Palace',
    location: 'Connaught Place, Delhi',
    rating: 4.5,
    stars: 4,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    price: 4299,
    originalPrice: 5999,
    discount: 28,
    amenities: ['Couple Friendly', 'Free Wifi', 'Breakfast'],
    propertyType: 'Hotel'
  },
  {
    id: 3,
    name: 'Hotel Sunrise Inn',
    location: 'Karol Bagh, Delhi',
    rating: 4.2,
    stars: 4,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    price: 2199,
    originalPrice: 3199,
    discount: 40,
    amenities: ['Wifi', 'Near Metro', 'Non AC/Kitchen'],
    propertyType: 'Hotel'
  },
  {
    id: 4,
    name: 'Backpacker Boutique',
    location: 'Paharganj, Delhi',
    rating: 3.9,
    stars: 3,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    amenities: ['Budget', 'Hourly Available', 'Free Wifi'],
    propertyType: 'Homestay'
  }
]

export const LOCATIONS = [
  'North Goa',
  'South Goa',
  'Bagha beach',
  'panjim'
]

export const PROPERTY_TYPES = [
  { id: 'hotel', label: 'Hotel', count: 634 },
  { id: 'apartment', label: 'Apartment', count: 289 },
  { id: 'villa', label: 'Villa', count: 156 },
  { id: 'resort', label: 'Resort', count: 98 },
  { id: 'homestay', label: 'Homestay', count: 234 }
]

export const STAR_CATEGORIES = [
  { value: 3, label: '3 star' },
  { value: 4, label: '4 star' }
]

export const USER_RATINGS = [
  { value: 4.5, label: 'excellent 4.5+' },
  { value: 3.5, label: 'Very good 3.5' },
  { value: 3, label: 'Good 3+' }
]
