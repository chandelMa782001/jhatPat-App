import { useState } from 'react'
import { Modal, Input, Button } from '../../components/common'
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup:', formData)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Your Account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          icon={MdPerson}
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <Input
          label="Email"
          type="email"
          icon={MdEmail}
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          icon={MdPhone}
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />

        <Input
          label="Password"
          type="password"
          icon={MdLock}
          placeholder="Create a password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          icon={MdLock}
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />

        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" className="mt-1 rounded" required />
          <span className="text-gray-600">
            I agree to the{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        <Button type="submit" className="w-full">
          Create Account
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <FaGoogle className="text-red-500" />
            Google
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <FaFacebook className="text-blue-600" />
            Facebook
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-orange-500 hover:underline font-medium"
          >
            Login
          </button>
        </p>
      </form>
    </Modal>
  )
}

export default SignupModal
