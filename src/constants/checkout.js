// Mock checkout data
export const BOOKING_DETAILS = {
  checkIn: {
    date: '15 Feb',
    day: 'Sun',
    time: '2 PM'
  },
  checkOut: {
    date: '16 Feb',
    day: 'Mon',
    time: '12 PM'
  },
  nights: 2,
  adults: 4,
  rooms: 2
}

export const SELECTED_ROOMS = [
  {
    id: 1,
    name: 'Deluxe Room',
    guests: 2,
    inclusions: [
      'Room Only',
      'No meals included',
      '10% Discount on what so ever'
    ],
    refundable: false,
    price: 4299
  },
  {
    id: 2,
    name: 'Luxury Room with Balcony',
    guests: 2,
    inclusions: [
      'Room Only',
      'No meals included',
      '10% Discount on what so ever'
    ],
    refundable: false,
    price: 4299
  }
]

export const IMPORTANT_INFO = [
  'Unmarried couples are allowed',
  'Foreign nationals are not allowed/Hotel will not have celebrations on the eve of Xmas & New Year, in order to minimise the gathering of guests at a particular place as per the government guidelines',
  'Primary Guest should be atleast 18 years of age.',
  'Passport, Aadhaar, Driving License and Govt. ID are accepted as ID proof(s)',
  'Pets are not allowed'
]

export const AVAILABLE_COUPONS = [
  {
    code: 'JPSMARTDEAL',
    discount: 953,
    description: 'Congratulations! Discount of INR953 Applied'
  },
  {
    code: 'JPSMARTDEAL',
    discount: 953,
    description: 'Congratulations! Discount of INR953 Applied'
  },
  {
    code: 'JPSMARTDEAL',
    discount: 953,
    description: 'Congratulations! Discount of INR953 Applied'
  },
  {
    code: 'JPSMARTDEAL',
    discount: 953,
    description: 'Congratulations! Discount of INR953 Applied'
  }
]

export const PRICE_SUMMARY = {
  roomPrice: 4299,
  taxesAndFees: 774,
  discount: 200,
  appliedCoupon: 'JHATPAT200'
}
