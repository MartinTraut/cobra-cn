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
      {/* Background */}
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

      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cn-red/10 blur-[120px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-36"
        style={{ opacity }}
      >
        {/* TOP */}
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cn-red/30 bg-cn-red/10 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-cn-red-light sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[11px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cn-red animate-[pulse_2s_ease-in-out_infinite]" />
            Seit über 30 Jahren Motorsport-Exzellenz
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-5 text-4xl font-bold leading-[1.08] text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pure Kraft.
            <br />
            <span className="text-gradient">Perfekte Technik.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-md text-[15px] leading-relaxed text-white/55 sm:max-w-lg sm:text-base lg:max-w-xl lg:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            CN Racing GmbH – Ihr Spezialist für Corvette, Camaro und
            Cobra-Tuning. Motorsport-Technologie für die Straße,
            handgefertigt in Dormagen.
          </motion.p>
        </div>

        {/* BOTTOM */}
        <div>
          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <Link
              href="/fahrzeuge/cobra"
              className="group inline-flex items-center gap-2 rounded-full bg-cn-red px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-cn-red-light hover:shadow-xl hover:shadow-cn-red/25 sm:px-7 sm:py-3.5 sm:text-xs"
            >
              Entdecken
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 sm:px-7 sm:py-3.5 sm:text-xs"
            >
              Kontakt
            </Link>
          </motion.div>

          {/* Divider + Stats */}
          <motion.div
            className="mt-7 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6 lg:mt-10 lg:pt-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <div className="flex justify-between max-w-2xl">
              {[
                { value: "30+", label: "Jahre" },
                { value: "170+", label: "Cobras" },
                { value: "1500", label: "PS Prüfstand" },
                { value: "900", label: "PS RS6" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[8px] uppercase tracking-[0.1em] text-white/35 sm:text-[10px] lg:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center sm:mt-5">
              <button
                onClick={() => handleScroll("#fahrzeuge")}
                className="animate-bounce"
                aria-label="Nach unten scrollen"
              >
                <ChevronDown className="size-4 text-white/30 sm:size-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
