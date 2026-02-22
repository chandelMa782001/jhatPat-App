import { MdCheckCircle, MdDownload, MdStar } from 'react-icons/md'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import mobile from '../assets/Image/mobileImage.png'
const AppDownload = () => {
  const features = [
    'Exclusive app-only discounts up to 50%',
    'Instant booking confirmation & e-tickets',
    'Real-time tracking for cabs & trains',
    'Jhatpat Wallet with extra cashback'
  ]

  return (
    <div className="bg-gradient-to-br from-[#0f1c3f] via-[#1a2847] to-[#0f1c3f] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MdDownload className="text-orange-500" />
              <span className="text-sm">Download the App</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book On the Go with Jhatpat App
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get exclusive app-only deals, instant booking confirmations, and manage everything from your phone.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3">
                <FaApple className="text-3xl" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MdStar className="text-yellow-400 text-xl" />
                <span className="font-bold">4.8</span>
                <span className="text-gray-400">Rating</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-400">10L+ Downloads</div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-400">Free</div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className='bg-[#101828] rounded-[32px] p-3 shadow-2xl'>
              {/* Phone Image */}
              <img 
                src={mobile} 
                alt="Jhatpat App" 
                className="w-72 h-auto rounded-[28px] relative z-10"
              />
              </div>

              {/* Floating Notification 1 */}
              <div className="absolute top-20 -right-4 bg-white rounded-xl shadow-lg p-4 w-56 animate-float z-20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdCheckCircle className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Booking Confirmed!</div>
                    <div className="text-gray-500 text-xs">Flight to Goa</div>
                  </div>
                </div>
              </div>

              {/* Floating Notification 2 */}
              <div className="absolute bottom-32 -left-4 bg-white rounded-xl shadow-lg p-4 w-56 animate-float-delayed z-20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdStar className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">+₹200 Cashback</div>
                    <div className="text-gray-500 text-xs">Added to wallet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
