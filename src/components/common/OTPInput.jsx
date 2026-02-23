import { useRef, useState } from 'react'

const OTPInput = ({ length = 6, value, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''))
  const inputRefs = useRef([])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)
    onChange(newOtp.join(''))

    // Focus next input
    if (element.value && index < length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    // Focus previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, length)
    const newOtp = [...otp]
    
    pastedData.split('').forEach((char, index) => {
      if (index < length && !isNaN(char)) {
        newOtp[index] = char
      }
    })
    
    setOtp(newOtp)
    onChange(newOtp.join(''))
    
    // Focus last filled input
    const lastFilledIndex = newOtp.findIndex(val => val === '')
    if (lastFilledIndex !== -1) {
      inputRefs.current[lastFilledIndex].focus()
    } else {
      inputRefs.current[length - 1].focus()
    }
  }

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-10 h-10 text-center text-lg font-semibold border border-gray-300 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all"
        />
      ))}
    </div>
  )
}

export default OTPInput
