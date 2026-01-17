'use client'

import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProductsSection from '@/components/ProductsSection'
import VisionSection from '@/components/VisionSection'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import AnimatedFooter from '@/components/AnimatedFooter'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <VisionSection />
      <StatsSection />
      <CTASection />
      <AnimatedFooter />
    </>
  )
}
