import { useState } from 'react'
import { Modal, Input, Button, OTPInput } from '../../components/common'
import { MdPhone, MdEmail, MdPerson } from 'react-icons/md'
import { FaGoogle } from 'react-icons/fa'

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [step, setStep] = useState('phone') // 'phone' or 'otp' or 'details'
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [signupData, setSignupData] = useState({
    name: '',
    email: ''
  })

  const handleContinue = (e) => {
    e.preventDefault()
    setError('')
    
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }
    
    setStep('otp')
    // Simulate OTP sent
    setTimeout(() => {
      console.log('OTP sent to:', phone)
    }, 300)
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault()
    setError('')
    
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      return
    }
    
    // If signup mode, go to details step
    if (mode === 'signup') {
      setStep('details')
      return
    }
    
    // If login mode, complete login
    console.log('Login successful:', { phone, otp })
    onClose()
  }

  const handleSignupComplete = (e) => {
    e.preventDefault()
    setError('')
    
    if (!signupData.name.trim()) {
      setError('Please enter your name')
      return
    }
    
    if (!signupData.email.trim() || !signupData.email.includes('@')) {
      setError('Please enter a valid email')
      return
    }
    
    console.log('Signup successful:', { phone, otp, ...signupData })
    // Handle successful signup
    onClose()
  }

  const handleResendOtp = () => {
    setOtp('')
    setError('')
    console.log('OTP resent to:', phone)
    alert('OTP has been resent to your mobile number')
  }

  const handleEditNumber = () => {
    setStep('phone')
    setOtp('')
    setError('')
  }

  const switchToSignup = () => {
    setMode('signup')
    setStep('phone')
    setPhone('')
    setOtp('')
    setError('')
    setSignupData({ name: '', email: '' })
  }

  const switchToLogin = () => {
    setMode('login')
    setStep('phone')
    setPhone('')
    setOtp('')
    setError('')
    setSignupData({ name: '', email: '' })
  }

  const getTitle = () => {
    if (step === 'details') return 'Complete Your Profile'
    if (step === 'otp') return 'Verify OTP'
    return mode === 'login' ? 'Login' : 'Sign Up'
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={getTitle()} 
      size="sm"
    >
      <div className="space-y-5">
        {/* Phone Number Step */}
        {step === 'phone' && (
          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Mobile Number
              </label>
              <Input
                type="tel"
                icon={MdPhone}
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')
                  setPhone(value)
                  setError('')
                }}
                maxLength="10"
                required
                autoFocus
              />
              {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                {mode === 'login' 
                  ? "We'll send you an OTP to verify your number"
                  : "We'll send you an OTP to create your account"
                }
              </p>
            </div>

            <Button type="submit" className="w-full">
              Continue
            </Button>

            {/* Switch between Login/Signup */}
            <p className="text-center text-sm text-gray-600 pt-2">
              {mode === 'login' ? (
                <>
                  New to Jhatpat?{' '}
                  <button
                    type="button"
                    onClick={switchToSignup}
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={switchToLogin}
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Login
                  </button>
                </>
              )}
            </p>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-500">Or login with</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-red-500 text-lg" />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By continuing, you agree to Jhatpat's{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>

            {/* Signup Link */}
            <p className="text-xs text-gray-600 text-center pt-2">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign Up
              </button>
            </p>
          </form>
        )}

        {/* OTP Verification Step */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-600">
                  OTP sent to <span className="font-semibold text-gray-800">+91 {phone}</span>
                </p>
                <button
                  type="button"
                  onClick={handleEditNumber}
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
                value={otp}
                onChange={(value) => {
                  setOtp(value)
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

            <Button type="submit" className="w-full">
              Verify & Login
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Please enter the 6-digit OTP sent to your mobile number
            </p>
          </form>
        )}
      </div>
    </Modal>
  )
}

export default LoginModal
