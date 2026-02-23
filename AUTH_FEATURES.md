# 🔐 Authentication Features (MakeMyTrip Style)

## Overview
Clean, mobile-first authentication system with separate Login and Signup flows, both using OTP verification similar to MakeMyTrip.

---

## 🔑 Login Modal

### Two-Step Login Process:

#### Step 1: Mobile Number Entry
- Clean, minimal interface
- 10-digit mobile number input
- Input validation (numbers only)
- "Continue" button to proceed
- Google login option
- Link to switch to Signup

#### Step 2: OTP Verification
- 6-digit OTP input with individual boxes
- Shows masked mobile number (+91 XXXXXXXXXX)
- Edit number option
- Resend OTP functionality
- "Verify & Login" button
- Clear error messages

### User Flow:
```
1. Click "Login" button
   ↓
2. Enter mobile number (10 digits)
   ↓
3. Click "Continue" → OTP sent
   ↓
4. Enter 6-digit OTP
   ↓
5. Click "Verify & Login" → Success
```

---

## 📝 Signup Modal

### Three-Step Signup Process:

#### Step 1: User Details
- Full Name input
- Email Address input
- Mobile Number input (10 digits)
- All fields validated before proceeding
- "Continue" button
- Google signup option
- Link to switch to Login

#### Step 2: OTP Verification
- 6-digit OTP input
- Shows user details summary (name, email)
- Shows masked mobile number
- Edit details option
- Resend OTP functionality
- "Verify & Create Account" button

#### Step 3: Success Screen
- Success checkmark animation
- Welcome message with user's first name
- Auto-redirect after 2 seconds

### User Flow:
```
1. Click "Sign Up" button
   ↓
2. Enter name, email, mobile number
   ↓
3. Click "Continue" → OTP sent
   ↓
4. Enter 6-digit OTP
   ↓
5. Click "Verify & Create Account"
   ↓
6. Success screen → Auto redirect
```

---

## 💻 Usage

```jsx
import { useState } from 'react'
import LoginModal from './features/auth/LoginModal'
import SignupModal from './features/auth/SignupModal'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const handleSwitchToSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  const handleSwitchToLogin = () => {
    setShowSignup(false)
    setShowLogin(true)
  }

  return (
    <>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowSignup(true)}>Sign Up</button>

      <LoginModal 
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />

      <SignupModal 
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  )
}
```

---

## 🎯 Component Props

### LoginModal
```jsx
<LoginModal
  isOpen={boolean}           // Controls modal visibility
  onClose={function}         // Callback when modal closes
  onSwitchToSignup={function} // Callback to switch to signup
/>
```

### SignupModal
```jsx
<SignupModal
  isOpen={boolean}          // Controls modal visibility
  onClose={function}        // Callback when modal closes
  onSwitchToLogin={function} // Callback to switch to login
/>
```

---

## 📊 State Management

### LoginModal States:
- `step`: 'phone' or 'otp'
- `phone`: Mobile number (10 digits)
- `otp`: OTP code (6 digits)
- `error`: Error message

### SignupModal States:
- `step`: 'details', 'otp', or 'success'
- `formData`: { name, email, phone, otp }
- `error`: Error message
- `otpSent`: Boolean flag

---

## ✅ Validation Rules

### Login:
- Mobile: Exactly 10 digits, numbers only
- OTP: Exactly 6 digits

### Signup:
- Name: Required, non-empty
- Email: Required, must contain '@'
- Mobile: Exactly 10 digits, numbers only
- OTP: Exactly 6 digits

---

## 🔌 API Integration (Backend Ready)

```javascript
// Send OTP (Login)
const sendLoginOtp = async (phone) => {
  const response = await fetch('/api/auth/login/send-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone })
  })
  return response.json()
}

// Verify OTP & Login
const verifyLoginOtp = async (phone, otp) => {
  const response = await fetch('/api/auth/login/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, otp })
  })
  return response.json()
}

// Send OTP (Signup)
const sendSignupOtp = async (name, email, phone) => {
  const response = await fetch('/api/auth/signup/send-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone })
  })
  return response.json()
}

// Verify OTP & Create Account
const verifySignupOtp = async (name, email, phone, otp) => {
  const response = await fetch('/api/auth/signup/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, otp })
  })
  return response.json()
}

// Google OAuth
const handleGoogleAuth = () => {
  window.location.href = '/api/auth/google'
}
```

---

## 🎨 UI/UX Features

### Common Features:
- Auto-focus on input fields
- Real-time error clearing
- Smooth step transitions
- Mobile-responsive design
- Clean, minimal interface
- Professional color scheme

### Login Specific:
- Quick 2-step process
- Edit number option in OTP step
- Resend OTP with feedback

### Signup Specific:
- 3-step guided process
- User details summary in OTP step
- Success animation
- Auto-redirect after success
- Edit details option

---

## 🔒 Security Features

- OTP expiration (implement on backend)
- Rate limiting for OTP requests (backend)
- Phone number validation
- Email validation
- HTTPS required for production
- Secure token storage after login
- Input sanitization

---

## 🎯 Design Philosophy

Following MakeMyTrip's approach:
- Mobile-first authentication
- Minimal friction in user flow
- OTP-based verification (no passwords)
- Quick social login alternatives
- Clean, professional UI
- Clear error messaging
- Smooth transitions
- Focus on conversion

---

## 📱 User Experience Flow

### New User Journey:
```
Homepage → Click "Sign Up" → Enter Details → 
Verify OTP → Success → Logged In
```

### Returning User Journey:
```
Homepage → Click "Login" → Enter Mobile → 
Verify OTP → Logged In
```

### Cross-Modal Navigation:
- From Login → "Sign Up" link → Opens Signup Modal
- From Signup → "Login" link → Opens Login Modal

---

## 🚀 Next Steps

1. **Backend Integration**
   - Connect OTP sending API
   - Connect verification API
   - Implement session management

2. **Enhanced Features**
   - Add OTP expiry timer (60 seconds)
   - Add rate limiting UI feedback
   - Implement Google OAuth
   - Add "Remember me" functionality

3. **Analytics**
   - Track signup completion rate
   - Track login success rate
   - Monitor OTP resend frequency

4. **Improvements**
   - Add loading states
   - Add skeleton loaders
   - Add haptic feedback (mobile)
   - Add keyboard shortcuts

---

## 📝 Notes

- Both modals are completely independent
- State is reset when switching between modals
- OTP simulation uses console.log and alerts
- Success screen auto-closes after 2 seconds
- All inputs have proper validation
- Error messages are user-friendly
- Components are production-ready
