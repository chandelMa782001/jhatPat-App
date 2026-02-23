import { MdBusiness, MdDirectionsCar, MdCheckCircle, MdArrowForward } from 'react-icons/md'

const GrowWithJhatpat = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Grow with Jhatpat
        </h2>
        <p className="text-gray-500">
          Partner with India's fastest growing booking platform
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* List Your Property Card */}
        <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-3xl p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <MdBusiness className="text-3xl" />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold mb-3">List Your Property</h3>
            <p className="text-gray-300 text-sm mb-6">
              Hotels, PGs, marriage halls, event venues — reach millions of customers on Jhatpat.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold mb-1">10K+</div>
                <div className="text-xs text-gray-300">Properties</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold mb-1">50L+</div>
                <div className="text-xs text-gray-300">Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold mb-1">0%</div>
                <div className="text-xs text-gray-300">Listing Fee</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <MdCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                <span className="text-sm">Free registration & listing</span>
              </div>
              <div className="flex items-center gap-2">
                <MdCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                <span className="text-sm">Dashboard with real-time analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <MdCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                <span className="text-sm">Dedicated partner support team</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Start Listing
              <MdArrowForward />
            </button>
          </div>
        </div>

        {/* Become a Driver Partner Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <MdDirectionsCar className="text-3xl" />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold mb-3">Become a Driver Partner</h3>
            <p className="text-white/90 text-sm mb-6">
              Drive with Jhatpat, earn on your own schedule. Join 5,000+ drivers across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold mb-1">₹40K+</div>
                <div className="text-xs text-white/80">Avg. Earnings</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold mb-1">5K+</div>
                <div className="text-xs text-white/80">Drivers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold mb-1">Weekly</div>
                <div className="text-xs text-white/80">Payouts</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <MdCheckCircle className="text-white text-lg flex-shrink-0" />
                <span className="text-sm">Quick onboarding in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MdCheckCircle className="text-white text-lg flex-shrink-0" />
                <span className="text-sm">Flexible hours, work when you want</span>
              </div>
              <div className="flex items-center gap-2">
                <MdCheckCircle className="text-white text-lg flex-shrink-0" />
                <span className="text-sm">24/7 driver support & insurance</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Join as Driver
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrowWithJhatpat
