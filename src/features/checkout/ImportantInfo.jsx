import { useState } from 'react'

const ImportantInfo = ({ info }) => {
  const [showAll, setShowAll] = useState(false)
  const displayInfo = showAll ? info : info.slice(0, 3)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Infromation</h3>
      
      <div className="space-y-3">
        <p className="text-sm text-gray-700 font-medium">Unmarried couples are allowed</p>
        
        <ul className="space-y-2">
          {displayInfo.slice(1).map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-gray-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {info.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
    </div>
  )
}

export default ImportantInfo
