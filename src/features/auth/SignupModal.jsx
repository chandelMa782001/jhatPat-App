import { useState } from 'react'
import { Modal, Input, Button, OTPInput } from '../../components/common'
import { MdPhone, MdPerson, MdEmail } from 'react-icons/md'
import { FaGoogle } from 'react-icons/fa'

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [step, setStep] = useState('details') // 'details', 'otp', 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: ''
  })
  const [error, setError] = useState('')

  const handleSendOtp = () => {
    setError('')
    
    // Validate all fields
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email')
      return
    }
    if (formData.phone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }
    
    setStep('otp')
    console.log('OTP sent to:', formData.phone)
  }

  const handleVerifyAndSignup = (e) => {
    e.preventDefault()
    setError('')
    
    if (formData.otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      return
    }
    
    console.log('Signup successful:', formData)
    // Handle successful signup
    setStep('success')
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  const handleResendOtp = () => {
    setFormData({ ...formData, otp: '' })
    setError('')
    console.log('OTP resent to:', formData.phone)
    alert('OTP has been resent to your mobile number')
  }

  const handleEditDetails = () => {
    setStep('details')
    setFormData({ ...formData, otp: '' })
    setError('')
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={step === 'success' ? 'Welcome!' : 'Create Account'} 
      size="sm"
    >
      <div className="space-y-2.5">
        {/* Details Step */}
        {step === 'details' && (
          <div className="space-y-2.5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Full Name
              </label>
              <Input
                type="text"
                icon={MdPerson}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  setError('')
                }}
                required
                autoFocus
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                icon={MdEmail}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  setError('')
                }}
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Mobile Number
              </label>
              <Input
                type="tel"
                icon={MdPhone}
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')
                  setFormData({ ...formData, phone: value })
                  setError('')
                }}
                maxLength="10"
                required
              />
            </div>

            {error && (
              <p className="text-xs text-red-500">{error}</p>
            )}

            <Button onClick={handleSendOtp} className="w-full mt-3">
              Continue
            </Button>

            {/* Divider */}
            <div className="relative py-1.5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            {/* Google Signup */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-red-500 text-lg" />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>

            {/* Login Link */}
            <p className="text-xs text-gray-600 text-center">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-blue-600 hover:underline font-semibold"
              >
                Login
              </button>
            </p>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By continuing, you agree to Jhatpat's{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        )}

        {/* OTP Verification Step */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyAndSignup} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-600">
                  OTP sent to <span className="font-semibold text-gray-800">+91 {formData.phone}</span>
                </p>
                <button
                  type="button"
                  onClick={handleEditDetails}
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  Edit
                </button>
              </div>

              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Enter OTP
              </label>
              
              <OTPInput
                length={6}
                value={formData.otp}
                onChange={(value) => {
                  setFormData({ ...formData, otp: value })
                  setError('')
                }}
              />

              {error && (
                <p className="text-xs text-red-500 mt-2">{error}</p>
              )}

              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500">
                  Didn't receive OTP?
                </p>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  Resend OTP
                </button>
              </div>
            </div>

            {/* User Details Summary */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <p className="text-xs text-gray-500">Creating account for:</p>
              <p className="text-sm font-semibold text-gray-800">{formData.name}</p>
              <p className="text-xs text-gray-600">{formData.email}</p>
            </div>

            <Button type="submit" className="w-full">
              Verify & Create Account
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Please enter the 6-digit OTP sent to your mobile number
            </p>
          </form>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Account Created!</h3>
              <p className="text-sm text-gray-600">
                Welcome to Jhatpat, {formData.name.split(' ')[0]}!
              </p>
            </div>
            <div className="animate-pulse">
              <p className="text-xs text-gray-500">Redirecting...</p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default SignupModal
