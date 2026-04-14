"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Gauge, CheckCircle2, ArrowRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
          {suffix}
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </motion.span>
  )
}

export function PruefstandSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="pruefstand"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://www.cobra-cn.de/wp-content/uploads/2019/01/f115t17151p597673n3_lczHrXqA-1024x768.jpg"
          alt="MAHA Leistungsprüfstand"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cn-darker via-cn-darker/95 to-cn-darker/80" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                Leistungsprüfstand
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-normal text-white lg:text-5xl">
                1.500 PS MAHA
                <br />
                Scheitelrollen-Prüfstand
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-cn-gray">
                Unser hochmoderner MAHA MSR 850 Leistungsprüfstand ist ein
                Qualitätsprodukt vom deutschen Hersteller MAHA. Messungen bis
                1.500 PS, Prüfgeschwindigkeit bis 320 km/h – mit einer Toleranz
                von nur ±1%.
              </p>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal delay={0.1}>
              <div className="mb-8 space-y-3">
                {[
                  "Normiert nach DIN 70020, EWG 80/1269, ISO 1585",
                  "Rollendurchmesser 762mm (30 Zoll)",
                  "Ohne Rampe – ideal für tiefliegende Fahrzeuge",
                  "Radleistung, Verlustleistung, Normleistung & Drehmoment",
                  "Professionelles Leistungsdiagramm inklusive",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 flex-shrink-0 text-cn-red" />
                    {feature}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Pricing Cards */}
            <ScrollReveal delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-cn-red/20 bg-cn-red/5 p-5 transition-colors duration-300 hover:border-cn-red/40">
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-cn-red">
                    Leistungsmessung
                  </div>
                  <div className="mb-1 text-3xl font-bold text-white">
                    159 €
                  </div>
                  <div className="text-xs text-cn-gray">
                    inkl. MwSt. + Diagramm
                    <br />
                    Front-/Heckantrieb
                  </div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/10">
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-cn-gray">
                    Tachoüberprüfung
                  </div>
                  <div className="mb-1 text-3xl font-bold text-white">
                    99 €
                  </div>
                  <div className="text-xs text-cn-gray">
                    inkl. MwSt.
                    <br />
                    Front-/Heckantrieb
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href="/kontakt"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cn-red transition-colors hover:text-cn-red-light"
              >
                Termin vereinbaren
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://www.cobra-cn.de/wp-content/uploads/2015/06/n1-1024x768.jpg"
                  alt="Leistungsprüfstand MAHA MSR 850"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-cn-darker/90 p-5 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Gauge className="mb-2 size-6 text-cn-red" />
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter value={1500} suffix=" PS" />
                </div>
                <div className="text-xs text-cn-gray">Maximale Messleistung</div>
              </motion.div>

              <motion.div
                className="absolute -right-4 -top-4 rounded-xl border border-white/10 bg-cn-darker/90 p-4 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="text-lg font-bold text-cn-red">±1%</div>
                <div className="text-xs text-cn-gray">Toleranz</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
