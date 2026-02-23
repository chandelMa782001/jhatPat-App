import { useState } from 'react'
import { FaGift, FaBriefcase, FaHeadset, FaGlobe, FaWallet, FaClipboardList, FaUser } from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import { image } from '../../utils/Image'
import { Button } from '../common'
import LoginModal from '../../features/auth/LoginModal'
import SignupModal from '../../features/auth/SignupModal'

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  const handleSwitchToSignup = () => {
    setShowLoginModal(false)
    setShowSignupModal(true)
  }

  const handleSwitchToLogin = () => {
    setShowSignupModal(false)
    setShowLoginModal(true)
  }

  return (
    <>
      <nav className="w-full">
        {/* Top Bar */}
        <div className="bg-[#1a1a2e] text-white py-2 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <FaGift className="text-orange-500" />
                <span>Jhatpat Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-blue-400" />
                <span>Corporate Travel</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeadset className="text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <span>Coming Soon Page</span>
              <div className="flex items-center gap-1">
                <FaGlobe className="text-blue-400" />
                <span>EN</span>
                <IoChevronDown className="text-xs" />
              </div>
              <div className="flex items-center gap-2">
                <FaWallet className="text-orange-500" />
                <span>JhatpatCash</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white shadow-md py-3 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img src={image.logo} alt="Jhatpat Booking" className="h-10" />
            </div>
            
            <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-orange-500 transition-colors">
              <FaClipboardList className="text-xl" />
              <span className="font-medium">My Trips</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div 
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-orange-500 transition-colors"
              >
                <FaUser />
                <span>Login or Create Account</span>
              </div>
              <Button onClick={() => setShowSignupModal(true)}>
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  )
}

export default Navbar
