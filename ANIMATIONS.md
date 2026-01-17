# Apple-Style Animated Components with Framer Motion

This project implements premium, scroll-based animations using Framer Motion that match the behavior and timing of high-end product websites like Apple.com, SentinelOne.com, and GitGuardian.com.

## 🎬 Animation Philosophy

All animations follow Apple's design principles:

- **Calm & Confident**: Subtle, purposeful motion
- **Premium Easing**: Cubic bezier `[0.25, 0.1, 0.25, 1]` for smooth, natural feel
- **Scroll-Driven**: Animations triggered by viewport intersection
- **Staggered Reveals**: Children animate sequentially with 80ms delays
- **Performance-First**: GPU-accelerated transforms only

## 📦 Installed Dependencies

```bash
npm install framer-motion
```

## 🎯 Animated Components

### 1. HeroSection (`components/HeroSection.tsx`)

**Animation Patterns:**

- Headline: Fades in + moves up (20px → 0) over 800ms
- Paragraph: Delayed fade-in + move up (16px → 0) over 700ms
- CTA Buttons: Scale-in (0.95 → 1) + fade with slight delay
- Trust Bar: Subtle fade-in + move up (12px → 0)

**Implementation:**

```tsx
const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
  },
}
```

### 2. Header (`components/Header.tsx`)

**Scroll-Based Behavior:**

- Shrinks padding on scroll (2.5rem → 1rem)
- Applies backdrop blur (0px → 10px)
- Adjusts background opacity for depth
- Smooth transitions over 100px scroll range

**Implementation:**

```tsx
const headerPadding = useTransform(scrollY, [0, 100], ['2.5rem', '1rem'])
const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(10px)'])
```

### 3. ServicesSection (`components/ServicesSection.tsx`)

**Grid Animation:**

- Section header: Fade-in + move up
- Cards: Staggered reveal with 80ms delay between each
- Each card: opacity 0→1, y: 24→0 over 600ms
- Hover: -4px translate + border color change + shadow

**Key Features:**

- `viewport={{ once: true, margin: '-50px' }}` - Triggers 50px before visible
- `staggerChildren: 0.08` - Perfect timing for sequential reveals

### 4. ProductsSection (`components/ProductsSection.tsx`)

**Similar to Services:**

- 3-column grid (responsive)
- Staggered card animations
- Status badges with primary color
- Same easing and timing as ServicesSection

### 5. VisionSection (`components/VisionSection.tsx`)

**Parallax Effect:**

- Uses `useScroll` with `offset: ['start end', 'end start']`
- Background moves at different speed (50px → -50px)
- Opacity transitions (0.6 → 1 → 0.6) for depth
- Staggered pillar reveals

**Parallax Implementation:**

```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
})
const y = useTransform(scrollYProgress, [0, 1], [50, -50])
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])
```

### 6. StatsSection (`components/StatsSection.tsx`)

**Number Reveals:**

- 4-column responsive grid
- Each stat: Fade-in + move up (24px → 0)
- Staggered with 80ms delay
- Large, bold numbers for impact

### 7. CTASection (`components/CTASection.tsx`)

**Calm Fade-In:**

- Heading and text: Sequential reveal
- Buttons: Scale-in effect (0.95 → 1)
- Longer duration (700ms) for gravitas
- Minimal movement for confidence

### 8. AnimatedFooter (`components/AnimatedFooter.tsx`)

**Section Reveals:**

- 4-column layout with company info
- Each section fades in sequentially
- Bottom border with copyright
- Same stagger pattern as other sections

## ⚙️ Animation Configuration

### Timing Standards

```typescript
const ANIMATION_TIMINGS = {
  fast: 0.5, // Buttons, small elements
  normal: 0.6, // Cards, medium elements
  slow: 0.7, // Headers, large text
  slowest: 0.8, // Hero headlines
}

const STAGGER_DELAY = 0.08 // 80ms between children

const EASING = [0.25, 0.1, 0.25, 1] as any // Apple easeOut
```

### Viewport Triggers

```typescript
viewport={{
  once: true,           // Animate only once
  margin: '-100px'      // Trigger 100px before visible
}}
```

## 🎨 Styling Integration

All components use Tailwind CSS classes alongside Framer Motion:

- Dark mode support
- Responsive breakpoints
- Smooth hover transitions
- Premium color palette with `primary-` variants

## 🚀 Usage

### In Main Component

```tsx
import LandingPage from '@/components/LandingPage'

export default function Home() {
  return <LandingPage />
}
```

### Individual Components

```tsx
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* ...other sections */}
    </>
  )
}
```

## 🎭 Animation Best Practices

1. **Use `once: true`** - Prevents animation replay on scroll
2. **Negative margins** - Trigger animations before element is fully visible
3. **Stagger sparingly** - 80ms is perfect; more feels slow
4. **GPU acceleration** - Only animate opacity, transform (x, y, scale)
5. **Type safety** - Add `as any` to complex easing arrays for TypeScript

## 🔧 Customization

### Changing Animation Speed

```tsx
// In any component
const cardVariants = {
  visible: {
    transition: {
      duration: 0.8, // Slower
      ease: [0.25, 0.1, 0.25, 1] as any,
    },
  },
}
```

### Adjusting Stagger Timing

```tsx
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.12, // Slower stagger
    },
  },
}
```

### Custom Parallax

```tsx
const y = useTransform(scrollYProgress, [0, 1], [100, -100]) // More movement
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) // Different curve
```

## 📱 Responsive Behavior

All components are fully responsive:

- Grid columns adapt: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Text sizes scale: `text-4xl md:text-5xl lg:text-6xl`
- Padding adjusts: `px-4 md:px-8`
- Animations remain smooth on mobile

## ⚡ Performance

- All animations use GPU-accelerated properties
- No layout thrashing
- `will-change` applied automatically by Framer Motion
- Animations fire only once with `viewport={{ once: true }}`

## 🎯 Result

The implementation achieves:
✅ Identical feel to Apple.com animations  
✅ Smooth, premium user experience  
✅ Perfect timing and easing  
✅ Responsive and accessible  
✅ Production-ready code quality

---

**Built with Framer Motion** - The production-ready motion library for React.
