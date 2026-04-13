"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Trophy, Calendar, MapPin, Flag } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"

const rennkalender = [
  {
    date: "29.–31. Mai",
    location: "Nürburgring",
    series: "YTCC",
    country: "DE",
  },
  {
    date: "03.–05. Juli",
    location: "Zolder",
    series: "YTCC",
    country: "BE",
  },
  {
    date: "28.–30. August",
    location: "Red Bull Ring",
    series: "YTCC",
    country: "AT",
  },
  {
    date: "24.–26. September",
    location: "Spa-Francorchamps",
    series: "YTCC",
    country: "BE",
  },
]

const galleryImages = [
  "https://www.cobra-cn.de/wp-content/uploads/2019/05/BH_7.jpg",
  "https://www.cobra-cn.de/wp-content/uploads/2019/12/IMG_5255.jpg",
  "https://www.cobra-cn.de/wp-content/uploads/2015/01/14-1024x768.jpg",
  "https://www.cobra-cn.de/wp-content/uploads/2019/12/IMG_4319.jpg",
]

export function MotorsportSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      id="motorsport"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cn-darker via-background to-cn-darker" />

      {/* Large background text */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[15vw] font-black uppercase leading-none tracking-tighter text-white/[0.02]"
        style={{ x }}
      >
        MOTORSPORT · RACING · SPEED ·
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
              Motorsport
            </span>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Vom Rennsport
              <br />
              auf die Straße.
            </h2>
            <p className="text-lg text-cn-gray">
              Motorsport ist bei uns seit Jahrzehnten ein wichtiges Instrument
              für die permanente Weiterentwicklung unserer Fahrzeuge. Jeder
              Renneinsatz liefert wertvolle Erkenntnisse für die Serienproduktion.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Racing Gallery */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((src, i) => (
                  <motion.div
                    key={src}
                    className={`group relative overflow-hidden rounded-xl ${
                      i === 0 ? "col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={src}
                      alt={`CN Racing Motorsport ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes={
                        i === 0
                          ? "(max-width: 1024px) 100vw, 60vw"
                          : "(max-width: 1024px) 50vw, 30vw"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Achievements */}
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Youngtimer Trophy",
                  "DMV Touring Car Cup",
                  "German TourenWagen Cup",
                  "Spezial Tourenwagen Trophy",
                  "Histo-Cup Austria",
                ].map((series) => (
                  <span
                    key={series}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-cn-gray"
                  >
                    {series}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cn-red/10">
                    <Calendar className="size-5 text-cn-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Rennkalender 2026
                    </h3>
                    <span className="text-xs text-cn-gray">
                      YTCC – Youngtimer Touring Car Challenge
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {rennkalender.map((event, i) => (
                    <motion.div
                      key={event.location}
                      className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/5 hover:bg-white/[0.02]"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03]">
                        <Flag className="size-4 text-cn-red" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">
                          {event.location}
                        </div>
                        <div className="text-xs text-cn-gray">{event.date}</div>
                      </div>
                      <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cn-gray">
                        {event.country}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <p className="text-xs leading-relaxed text-cn-gray">
                    Besuchen Sie uns an der Rennstrecke! Unsere Kunden profitieren
                    von technischer Unterstützung und geführten Runden vor Ort.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
