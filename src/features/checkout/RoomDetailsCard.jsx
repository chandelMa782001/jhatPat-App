const RoomDetailsCard = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{room.name}</h3>
          <p className="text-sm text-gray-600">{room.guests} Adults</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          See Inclusions
        </button>
      </div>

      {/* Inclusions */}
      <ul className="space-y-2 mb-4">
        {room.inclusions.map((inclusion, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-gray-400 mt-1">•</span>
            <span>{inclusion}</span>
          </li>
        ))}
      </ul>

      {/* Refund Policy */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-start gap-2 mb-2">
          <span className="font-semibold text-gray-900 text-sm">Non - Refundable</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Refund is not applicable for this booking
        </p>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Cancellation policy details
        </button>
      </div>
    </div>
  )
}

export default RoomDetailsCard
