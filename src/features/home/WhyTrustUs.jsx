import { IoPeople, IoShieldCheckmark, IoFlash, IoCash, IoCard } from 'react-icons/io5'
import { MdVerified, MdLocationCity, MdHeadset } from 'react-icons/md'

const WhyTrustUs = () => {
  const stats = [
    {
      id: 1,
      icon: IoPeople,
      value: '50L+',
      label: 'Happy Travellers'
    },
    {
      id: 2,
      icon: MdLocationCity,
      value: '10K+',
      label: 'Partner Properties'
    },
    {
      id: 3,
      icon: MdVerified,
      value: '500+',
      label: 'Cities Covered'
    },
    {
      id: 4,
      icon: MdHeadset,
      value: '24/7',
      label: 'Customer Support'
    }
  ]

  const features = [
    {
      id: 1,
      icon: IoShieldCheckmark,
      title: 'Secure Payments',
      description: 'Bank-grade 256-bit encryption on all transactions'
    },
    {
      id: 2,
      icon: IoFlash,
      title: 'Instant Confirmation',
      description: 'Get e-tickets & vouchers within seconds of booking'
    },
    {
      id: 3,
      icon: IoCash,
      title: 'Best Price Guarantee',
      description: 'Found a lower price? We\'ll match it + give cashback'
    },
    {
      id: 4,
      icon: IoCard,
      title: 'Flexible Payments',
      description: 'UPI, Cards, Net Banking, EMI, and Jhatpat Wallet'
    }
  ]

  const paymentPartners = [
    'Visa',
    'Mastercard',
    'RuPay',
    'UPI',
    'Paytm',
    'Google Pay',
    'PhonePe',
    'Net Banking'
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                    <IconComponent className="text-orange-500 text-2xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Why Millions Trust Jhatpat
          </h2>
          <p className="text-gray-500">
            Built for Indian travellers, designed for excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Payment Partners */}
        <div className="text-center">
          <div className="text-xs text-gray-400 uppercase tracking-wider mb-4">
            Trusted Payment Partners
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {paymentPartners.map((partner, index) => (
              <div
                key={index}
                className="text-gray-400 font-medium text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyTrustUs
