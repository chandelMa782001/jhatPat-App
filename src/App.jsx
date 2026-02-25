import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelListingPage from './pages/HotelListingPage'
import HotelDetailsPage from './pages/HotelDetailsPage'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelListingPage />} />
        <Route path="/hotels/:hotelId" element={<HotelDetailsPage />} />
        <Route path="/checkout/:hotelId" element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}

export default App
