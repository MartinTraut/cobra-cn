"use client"

import { HeroSection } from "@/components/hero-section"
import { FahrzeugeSection } from "@/components/fahrzeuge-section"
import { ScrollShowcase } from "@/components/scroll-showcase"
import { PruefstandSection } from "@/components/pruefstand-section"
import { MotorsportSection } from "@/components/motorsport-section"
import { PhilosophieSection } from "@/components/philosophie-section"
import { ShopSection } from "@/components/shop-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <FahrzeugeSection />
      <ScrollShowcase />
      <PruefstandSection />
      <MotorsportSection />
      <PhilosophieSection />
      <ShopSection />
    </>
  )
}
