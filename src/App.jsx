import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Services from './Component/Services'
import ExclusiveOffer from './Page/ExclusiveOfffer'
import TrendingDestinations from './Component/TrendingDestinations'
import TopHotelDeals from './Component/TopHotelDeals'
import CheapestFlights from './Component/CheapestFlights'
import MarriageBanner from './Component/MarriageBanner'
import PopularRoutes from './Component/PopularRoutes'
import GrowWithJhatpat from './Component/GrowWithJhatpat'

const App = () => {
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
    </div>
  )
}
export default App
