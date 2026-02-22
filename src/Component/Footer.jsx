import { image } from '../utils/Image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  const productLinks = [
    'Hotels',
    'Flights',
    'Trains',
    'Buses',
    'Cabs',
    'Events & Venues',
    'Hourly Hotels',
    'PNR Status',
    'Travel Insurance'
  ]

  const partnerLinks = [
    'List Your Property',
    'Become a Driver',
    'Affiliate Program',
    'Business Travel',
    'Corporate Bookings',
    'Travel Agent'
  ]

  const aboutLinks = [
    'About Us',
    'Careers',
    'Press',
    'Blog',
    'Contact Us',
    'Investor Relations'
  ]

  const supportLinks = [
    'Help Center',
    'Cancellation Policy',
    'Refund Status',
    'Report a Bug',
    'Safety Resources',
    'Accessibility'
  ]

  const socialLinks = [
    { icon: FaFacebookF, url: '#' },
    { icon: FaTwitter, url: '#' },
    { icon: FaInstagram, url: '#' },
    { icon: FaLinkedinIn, url: '#' },
    { icon: FaYoutube, url: '#' }
  ]

  const bottomLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Cancellation Policy',
    'Guest Policy'
  ]

  return (
    <footer className="bg-[#0f1c3f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={image.logo} alt="Jhatpat Booking" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 mb-4">
              India's most comprehensive booking platform. Hotels, flights, trains, buses, cabs, and event venues — all in one place.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MdEmail className="text-gray-400" />
                <span>info@jhatpatbooking.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-gray-400" />
                <span>1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-gray-400" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner With Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Partner With Us</h3>
            <ul className="space-y-2 text-sm">
              {partnerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Jhatpat */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Jhatpat</h3>
            <ul className="space-y-2 text-sm">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-gray-700">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <IconComponent className="text-white" />
              </a>
            )
          })}
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          {bottomLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © 2026 Jhatpat Booking. All rights reserved. Made with ❤️ in India
        </div>
      </div>
    </footer>
  )
}

export default Footer
