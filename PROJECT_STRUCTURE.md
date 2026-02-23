# 🏗️ Jhatpat Booking - Professional Project Structure

## 📁 Folder Structure

```
src/
├── components/              # Reusable UI Components
│   ├── common/             # Generic reusable components
│   │   ├── Button.jsx      # Reusable button with variants
│   │   ├── Input.jsx       # Reusable input with icons
│   │   ├── Card.jsx        # Reusable card component
│   │   ├── Modal.jsx       # Reusable modal component
│   │   └── index.js        # Barrel export
│   │
│   ├── layout/             # Layout components
│   │   ├── Navbar.jsx      # Main navigation
│   │   ├── Footer.jsx      # Footer component
│   │   └── index.js        # Barrel export
│   │
│   └── forms/              # Form components
│       ├── HotelsForm.jsx
│       ├── FlightsForm.jsx
│       ├── TrainsForm.jsx
│       ├── BusesForm.jsx
│       ├── CabsForm.jsx
│       └── EventsForm.jsx
│
├── features/               # Feature-based modules
│   ├── auth/              # Authentication feature
│   │   ├── LoginModal.jsx
│   │   └── SignupModal.jsx
│   │
│   └── home/              # Home page sections
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── ExclusiveOffer.jsx
│       ├── TrendingDestinations.jsx
│       ├── TopHotelDeals.jsx
│       ├── CheapestFlights.jsx
│       ├── MarriageBanner.jsx
│       ├── PopularRoutes.jsx
│       ├── GrowWithJhatpat.jsx
│       ├── Testimonials.jsx
│       ├── TravelInspiration.jsx
│       ├── AppDownload.jsx
│       └── WhyTrustUs.jsx
│
├── pages/                  # Page components
│   └── HomePage.jsx        # Main home page
│
├── constants/              # Constants and configurations
│   ├── footer.js          # Footer links and social media
│   ├── booking.js         # Booking tabs configuration
│   └── index.js           # Barrel export
│
├── utils/                  # Utility functions
│   └── Image.js           # Image imports
│
├── assets/                 # Static assets
│   ├── Image/
│   └── logo/
│
├── hooks/                  # Custom React hooks (future)
│
├── App.jsx                 # Main App component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎯 Design Principles

### 1. **Component Reusability**
- Common components (`Button`, `Input`, `Card`, `Modal`) are highly reusable
- Props-based customization for flexibility
- Consistent styling across the app

### 2. **Feature-Based Architecture**
- Related components grouped by feature (auth, home)
- Easy to scale and maintain
- Clear separation of concerns

### 3. **Barrel Exports**
- Clean imports using index.js files
- Example: `import { Button, Input } from '../components/common'`

### 4. **Constants Separation**
- Configuration data separated from components
- Easy to update without touching component logic
- Single source of truth

## 🚀 Usage Examples

### Using Common Components

```jsx
import { Button, Input, Card, Modal } from '@/components/common'

// Button with variants
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="outline">Cancel</Button>

// Input with icon
<Input 
  icon={MdEmail} 
  placeholder="Email" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Card component
<Card hover onClick={handleClick}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Using Layout Components

```jsx
import { Navbar, Footer } from '@/components/layout'

const Page = () => (
  <>
    <Navbar />
    <main>Content</main>
    <Footer />
  </>
)
```

### Path Aliases (jsconfig.json)

```jsx
// Instead of: import Button from '../../../components/common/Button'
// Use:
import Button from '@/components/common/Button'
import { BOOKING_TABS } from '@/constants'
```

## 📦 Component Props

### Button Component
```jsx
<Button
  variant="primary" | "secondary" | "outline"
  size="sm" | "md" | "lg"
  onClick={handleClick}
  disabled={false}
  type="button" | "submit"
>
  Button Text
</Button>
```

### Input Component
```jsx
<Input
  label="Email"
  icon={IconComponent}
  error="Error message"
  placeholder="Enter text"
  type="text"
  value={value}
  onChange={handleChange}
/>
```

### Modal Component
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  size="sm" | "md" | "lg" | "xl"
>
  Modal Content
</Modal>
```

## 🔄 Migration Guide

Old structure → New structure:
- `src/Component/` → `src/features/home/` or `src/components/`
- `src/Component/Auth/` → `src/features/auth/`
- `src/Component/HeroForms/` → `src/components/forms/`
- `src/Page/` → `src/pages/`

## 🎨 Benefits

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear structure, easy to find files
3. **Reusability**: Common components reduce code duplication
4. **Team Collaboration**: Clear conventions for team members
5. **Production Ready**: Industry-standard structure
6. **Type Safety**: jsconfig.json for better IDE support

## 🛠️ Next Steps

1. Add custom hooks in `src/hooks/`
2. Add API services in `src/services/`
3. Add state management (Redux/Zustand) in `src/store/`
4. Add routing with React Router
5. Add unit tests in `__tests__/` folders
