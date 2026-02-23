import { useState } from 'react'
import { Modal, Input, Button } from '../../components/common'
import { MdEmail, MdLock } from 'react-icons/md'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', formData)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login to Jhatpat">
      <form onSubmit={handleSubmit} className="space-y-4">
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
          label="Password"
          type="password"
          icon={MdLock}
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-orange-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-orange-500 hover:underline font-medium"
          >
            Sign Up
          </button>
        </p>
      </form>
    </Modal>
  )
}

export default LoginModal
