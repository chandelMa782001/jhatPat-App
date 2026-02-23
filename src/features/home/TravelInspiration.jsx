import { IoArrowForward, IoTimeOutline } from 'react-icons/io5'

const TravelInspiration = () => {
  const featuredArticle = {
    id: 1,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    badge: 'Trending',
    badgeColor: 'bg-orange-500',
    title: '10 Best Beaches in Goa You Must Visit in 2026',
    description: 'From the vibrant shores of Baga to the serene beauty of Palolem — your ultimate Goa beach guide.',
    readTime: '5 min read'
  }

  const articles = [
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400',
      badge: 'Guides',
      badgeColor: 'bg-gray-500',
      title: 'Kerala Backwaters: Complete Travel Guide',
      description: 'Everything you need to know about houseboat stays, pricing, and the best time to visit.',
      readTime: '7 min read'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=400',
      badge: 'Family',
      badgeColor: 'bg-green-500',
      title: 'Top 15 Family-Friendly Destinations in India',
      description: 'Perfect getaways for families with kids — from hill stations to beach resorts.',
      readTime: '6 min read'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      badge: 'Offbeat',
      badgeColor: 'bg-teal-500',
      title: 'Andaman Islands: Hidden Paradise of India',
      description: 'Crystal-clear waters, untouched beaches, and incredible marine life await.',
      readTime: '4 min read'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400',
      badge: 'Weekend',
      badgeColor: 'bg-purple-500',
      title: 'Quick Weekend Getaways from Major Cities',
      description: 'Escape the city hustle with these perfectly planned 2-day itineraries.',
      readTime: '5 min read'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      badge: 'Offbeat',
      badgeColor: 'bg-teal-500',
      title: 'Andaman Islands: Hidden Paradise of India',
      description: 'Crystal-clear waters, untouched beaches, and incredible marine life await.',
      readTime: '4 min read'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400',
      badge: 'Weekend',
      badgeColor: 'bg-purple-500',
      title: 'Quick Weekend Getaways from Major Cities',
      description: 'Escape the city hustle with these perfectly planned 2-day itineraries.',
      readTime: '5 min read'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Inspiration</h2>
          <p className="text-gray-500">Guides, tips, and stories to plan your perfect trip</p>
        </div>
        <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">
          View All Articles
          <IoArrowForward />
        </button>
      </div>

      {/* Grid Layout: 1 Large + 6 Small */}
      <div className="grid grid-cols-2 gap-6">
        {/* Featured Article - Large (Left Side) */}
        <div className="row-span-2">
          <div className="relative rounded-2xl overflow-hidden h-full group cursor-pointer">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Badge */}
            <div
              className={`absolute top-4 left-4 ${featuredArticle.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
            >
              {featuredArticle.badge}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{featuredArticle.title}</h3>
              <p className="text-gray-200 text-sm mb-4">{featuredArticle.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <IoTimeOutline />
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - 6 Small Articles in 2 columns */}
        <div className="grid grid-cols-2 gap-4 row-span-2">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Badge */}
                <div
                  className={`absolute top-2 left-2 ${article.badgeColor} text-white px-2 py-0.5 rounded text-xs font-semibold`}
                >
                  {article.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs mb-2 line-clamp-2">{article.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <IoTimeOutline className="text-sm" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelInspiration
