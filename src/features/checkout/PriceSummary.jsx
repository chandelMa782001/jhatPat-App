import { useState } from 'react'
import { Button, Input } from '../../components/common'
import { MdLocalOffer, MdLock } from 'react-icons/md'
import { AVAILABLE_COUPONS } from '../../constants/checkout'

const PriceSummary = ({ pricing }) => {
  const [couponCode, setCouponCode] = useState('')
  const [selectedCoupon, setSelectedCoupon] = useState(pricing.appliedCoupon)
  const [showAllCoupons, setShowAllCoupons] = useState(false)

  const totalAmount = pricing.roomPrice + pricing.taxesAndFees - pricing.discount

  const displayCoupons = showAllCoupons ? AVAILABLE_COUPONS : AVAILABLE_COUPONS.slice(0, 4)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Price Summary</h2>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Deluxe Room × 1 Night</span>
          <span className="font-semibold text-gray-900">₹{pricing.roomPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Taxes & Fees (18% GST)</span>
          <span className="font-semibold text-gray-900">₹{pricing.taxesAndFees}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-green-600">Jhatpat Discount</span>
          <span className="font-semibold text-green-600">+₹{pricing.discount}</span>
        </div>
        <button className="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 font-medium">
          <MdLocalOffer />
          <span>Apply Coupon</span>
          <span className="ml-auto">→</span>
        </button>
        {pricing.appliedCoupon && (
          <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
            <MdLocalOffer className="text-green-600" />
            <span className="text-sm font-medium text-green-700">{pricing.appliedCoupon}</span>
            <span className="text-xs text-green-600 ml-auto">applied!</span>
          </div>
        )}
      </div>

      {/* Total Amount */}
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-lg font-bold text-gray-900">Total Amount</span>
          <span className="text-2xl font-bold text-orange-500">₹{totalAmount.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-500">Inclusive of all taxes and fees</p>
      </div>

      {/* Payment Button */}
      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold mb-3">
        <MdLock className="inline mr-2" />
        Pay & Book Hotel — ₹{totalAmount.toLocaleString()}
      </Button>
      <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
        <MdLock className="text-green-600" />
        SSL Encrypted - 100% Secure Payment
      </p>

      {/* Coupon Code Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Coupon Code</h3>
          <button 
            onClick={() => setShowAllCoupons(!showAllCoupons)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {showAllCoupons ? 'Show Less' : 'View All'}
          </button>
        </div>

        <div className="mb-4">
          <label className="text-xs text-gray-600 mb-2 block">Have a Coupon Code ?</label>
          <Input
            placeholder="yourname@upi"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
        </div>

        {/* Coupon Options */}
        <div className="space-y-3">
          {displayCoupons.map((coupon, index) => (
            <label
              key={index}
              className="flex items-start gap-3 p-3 border-2 border-orange-400 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors"
            >
              <input
                type="radio"
                name="coupon"
                checked={selectedCoupon === coupon.code}
                onChange={() => setSelectedCoupon(coupon.code)}
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900 text-sm">{coupon.code}</span>
                  <span className="font-bold text-gray-900">₹{coupon.discount}</span>
                </div>
                <p className="text-xs text-gray-600">{coupon.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PriceSummary
