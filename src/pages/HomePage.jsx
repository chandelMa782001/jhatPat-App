import { Navbar, Footer } from '../components/layout'
import Hero from '../features/home/Hero'
import Services from '../features/home/Services'
import ExclusiveOffer from '../features/home/ExclusiveOffer'
import TrendingDestinations from '../features/home/TrendingDestinations'
import TopHotelDeals from '../features/home/TopHotelDeals'
import CheapestFlights from '../features/home/CheapestFlights'
import MarriageBanner from '../features/home/MarriageBanner'
import PopularRoutes from '../features/home/PopularRoutes'
import GrowWithJhatpat from '../features/home/GrowWithJhatpat'
import Testimonials from '../features/home/Testimonials'
import TravelInspiration from '../features/home/TravelInspiration'
import AppDownload from '../features/home/AppDownload'
import WhyTrustUs from '../features/home/WhyTrustUs'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ExclusiveOffer />
      <TrendingDestinations />
      <TopHotelDeals />
      <CheapestFlights />
      <MarriageBanner />
      <PopularRoutes />
      <GrowWithJhatpat />
      <Testimonials />
      <TravelInspiration />
      <AppDownload />
      <WhyTrustUs />
      <Footer />
    </div>
  )
}

export default HomePage
