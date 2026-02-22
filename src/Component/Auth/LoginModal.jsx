import { useState, useEffect } from 'react'
import { IoClose, IoCall } from 'react-icons/io5'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [step, setStep] = useState('phone') // 'phone' or 'otp'
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)

  // Timer for OTP resend
  useEffect(() => {
    let interval
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setCanResend(true)
    }
    return () => clearInterval(interval)
  }, [step, timer])

  const handlePhoneSubmit = async (e) => {
    e.preventDefault()
    // TODO: API call to send OTP
    console.log('Sending OTP to:', phone)
    // Simulate API call
    setStep('otp')
    setTimer(30)
    setCanResend(false)
  }

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus()
    }
  }

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    const otpValue = otp.join('')
    // TODO: API call to verify OTP
    console.log('Verifying OTP:', otpValue, 'for phone:', phone)
    // After successful verification:
    // onClose()
  }

  const handleResendOtp = async () => {
    if (!canResend) return
    // TODO: API call to resend OTP
    console.log('Resending OTP to:', phone)
    setTimer(30)
    setCanResend(false)
    setOtp(['', '', '', '', '', ''])
  }

  const handleSocialLogin = (provider) => {
    // TODO: Social login API integration
    console.log(`Login with ${provider}`)
  }

  const handleBack = () => {
    setStep('phone')
    setOtp(['', '', '', '', '', ''])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {step === 'phone' ? 'Welcome Back!' : 'Verify OTP'}
          </h2>
          <p className="text-gray-500 text-sm">
            {step === 'phone' 
              ? 'Login to access your bookings and exclusive deals'
              : `Enter the 6-digit OTP sent to +91 ${phone}`
            }
          </p>
        </div>

        {step === 'phone' ? (
          <>
            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="text-red-500 text-xl" />
                <span className="font-medium text-gray-700">Continue with Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin('facebook')}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors"
              >
                <FaFacebook className="text-blue-600 text-xl" />
                <span className="font-medium text-gray-700">Continue with Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or login with mobile</span>
              </div>
            </div>

            {/* Phone Form */}
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <IoCall className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Enter 10 digit mobile number</p>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send OTP
              </button>
            </form>
          </>
        ) : (
          <>
            {/* OTP Form */}
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              {/* OTP Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                  Enter 6-Digit OTP
                </label>
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      maxLength="1"
                    />
                  ))}
                </div>
              </div>

              {/* Timer / Resend */}
              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Resend OTP in <span className="font-semibold text-orange-500">{timer}s</span>
                  </p>
                )}
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                disabled={otp.some(digit => !digit)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Verify & Login
              </button>

              {/* Back Button */}
              <button
                type="button"
                onClick={handleBack}
                className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm"
              >
                ← Change Mobile Number
              </button>
            </form>
          </>
        )}

        {/* Switch to Signup */}
        {step === 'phone' && (
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button
              onClick={onSwitchToSignup}
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginModal
