import { IoPeople } from 'react-icons/io5'
import MarriageBannerImg from '../../assets/Image/weddingBg.png'

const MarriageBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div 
        className="relative rounded-3xl overflow-hidden h-64"
        style={{
          backgroundImage: `url(${MarriageBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-12">
          <div className="mb-2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
              New Service
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            Book Marriage Halls & Event Venues
          </h2>
          <p className="text-gray-200 text-lg mb-6 max-w-xl">
            Find and compare verified venues for weddings, parties, and corporate events across India.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Venues
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <IoPeople />
              100 - 2000+ Guests
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarriageBanner
