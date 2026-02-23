import { IoStar } from 'react-icons/io5'
import { FaQuoteRight } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'New Delhi',
      avatar: 'PS',
      avatarColor: 'bg-pink-500',
      rating: 5,
      category: 'Hotels',
      categoryColor: 'text-orange-500',
      review: 'Booked a last-minute hotel in Goa through Jhatpat — the hourly booking feature saved us so much money! The process was super smooth and confirmation was instant.'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Mumbai',
      avatar: 'RV',
      avatarColor: 'bg-blue-500',
      rating: 5,
      category: 'Trains',
      categoryColor: 'text-orange-500',
      review: 'Finally a platform that shows real train prices with PNR tracking. Booked Rajdhani tickets and the whole experience was seamless. Better than IRCTC!'
    },
    {
      id: 3,
      name: 'Ananya Patel',
      location: 'Ahmedabad',
      avatar: 'AP',
      avatarColor: 'bg-purple-500',
      rating: 5,
      category: 'Flights',
      categoryColor: 'text-orange-500',
      review: 'Found the cheapest Delhi-Mumbai flight here. The fare comparison is excellent and JhatpatCash gave me extra cashback. Definitely my go-to app now.'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Jaipur',
      avatar: 'VS',
      avatarColor: 'bg-green-500',
      rating: 4,
      category: 'Driver Partner',
      categoryColor: 'text-orange-500',
      review: 'As a cab driver partner, the onboarding was quick and earnings are transparent. Weekly payouts arrive on time every week. Great platform for drivers.'
    },
    {
      id: 5,
      name: 'Meera Iyer',
      location: 'Bangalore',
      avatar: 'MI',
      avatarColor: 'bg-orange-500',
      rating: 5,
      category: 'Events',
      categoryColor: 'text-orange-500',
      review: 'Booked a marriage hall for my daughter\'s wedding — the venue comparison feature is brilliant. We saved almost ₹50,000 compared to booking directly!'
    },
    {
      id: 6,
      name: 'Arjun Reddy',
      location: 'Hyderabad',
      avatar: 'AR',
      avatarColor: 'bg-teal-500',
      rating: 5,
      category: 'Buses',
      categoryColor: 'text-orange-500',
      review: 'The bus booking experience is top-notch. Seat selection, live tracking, and the prices are always better than other platforms. Highly recommended!'
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Loved by Millions of Travellers
          </h2>
          <p className="text-gray-500">
            See what our users have to say about Jhatpat Booking
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-100">
                <FaQuoteRight className="text-4xl" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <IoStar
                    key={index}
                    className={`text-lg ${
                      index < testimonial.rating
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className={`${testimonial.avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {testimonial.avatar}
                  </div>
                  {/* Name & Location */}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div
                  className={`${testimonial.categoryColor} bg-orange-50 px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {testimonial.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
