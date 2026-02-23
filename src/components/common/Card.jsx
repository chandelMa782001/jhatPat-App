const Card = ({ 
  children, 
  className = '',
  hover = false,
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md p-4 ${
        hover ? 'hover:shadow-xl transition-shadow cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
