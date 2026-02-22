import { useState } from 'react'
import { IoClose, IoMail, IoLockClosed, IoEye, IoEyeOff, IoPerson, IoCall } from 'react-icons/io5'

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    agreeToTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: API integration here
    console.log('Signup data:', formData)
    // After successful signup:
    // onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Create Account</h2>
          <p className="text-gray-500 text-sm">Join Jhatpat and start booking smarter</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <IoPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <IoMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <IoCall className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <IoLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full pl-10 pr-12 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <IoEyeOff className="text-lg" /> : <IoEye className="text-lg" />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-0.5"
              required
            />
            <label className="text-xs text-gray-600 leading-tight">
              I agree to the{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-semibold transition-colors mt-4"
          >
            Create Account
          </button>
        </form>

        {/* Switch to Login */}
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <button
            onClick={onSwitchToLogin}
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
