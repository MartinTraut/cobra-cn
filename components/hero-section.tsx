"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Mobile: no parallax scale, reduced y movement
  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 60 : 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 1.1])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale, willChange: "transform" }}
      >
        <Image
          src="https://www.cobra-cn.de/wp-content/uploads/2022/11/racetracker_19894361_313124-scaled.jpg"
          alt="CN Racing Corvette auf der Rennstrecke"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cn-darker via-transparent to-black/30" />
      </motion.div>

      {/* Red accent glow */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cn-red/10 blur-[120px]" />

      {/* Content - split top/bottom */}
      <motion.div
        className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 pb-20 pt-24 sm:px-5 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-36"
        style={{ opacity }}
      >
        {/* TOP: Badge + Headline + Description */}
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cn-red/30 bg-cn-red/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-cn-red-light sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cn-red animate-[pulse_2s_ease-in-out_infinite]" />
            Seit über 30 Jahren Motorsport-Exzellenz
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-3 text-[2.5rem] font-bold leading-[1.05] text-white sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pure Kraft.
            <br />
            <span className="text-gradient">Perfekte Technik.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="max-w-md text-sm leading-loose text-white/60 sm:max-w-xl sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            CN Racing GmbH – Ihr Spezialist für Corvette, Camaro und
            Cobra Tuning. Motorsport-Technologie für die Straße, handgefertigt
            in Dormagen.
          </motion.p>
        </div>

        {/* BOTTOM: CTAs + Stats */}
        <div>
          {/* CTAs */}
          <motion.div
            className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <Link
              href="/fahrzeuge/cobra"
              className="group flex items-center justify-center gap-2 rounded-full bg-cn-red px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-cn-red-light hover:shadow-xl hover:shadow-cn-red/25 sm:px-8 sm:py-4 sm:text-sm"
            >
              Entdecken
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
            </Link>
            <Link
              href="/kontakt"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 sm:px-8 sm:py-4 sm:text-sm"
            >
              Kontakt
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mx-auto mt-5 grid max-w-lg grid-cols-4 gap-4 border-t border-white/10 pt-5 sm:mt-8 sm:max-w-none sm:gap-8 sm:pt-8 lg:gap-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            {[
              { value: "30+", label: "Jahre" },
              { value: "170+", label: "Cobras" },
              { value: "1500", label: "PS Prüfstand" },
              { value: "900", label: "PS RS6" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-xl font-bold tracking-normal text-white sm:text-3xl lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[8px] uppercase tracking-wider text-white/40 sm:mt-1 sm:text-xs sm:normal-case sm:tracking-normal">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - pure CSS animation instead of JS */}
      <button
        onClick={() => handleScroll("#fahrzeuge")}
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 animate-bounce sm:bottom-8"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="size-5 text-white/40 sm:size-6" />
      </button>
    </section>
  )
}
