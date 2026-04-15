"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {
  Wrench,
  Shield,
  Award,
  Cog,
  Hammer,
  CircleDot,
} from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"

const values = [
  {
    icon: Wrench,
    title: "Handarbeit",
    desc: "Jedes Fahrzeug wird als Unikat in präziser Handarbeit von Spezialisten gefertigt",
  },
  {
    icon: Shield,
    title: "Qualität",
    desc: "Ultraleichte und hochfeste Materialien, nur die besten Komponenten",
  },
  {
    icon: Award,
    title: "Made in Germany",
    desc: "Entwicklung und Fertigung komplett am Standort Dormagen",
  },
  {
    icon: Cog,
    title: "Motorsport-DNA",
    desc: "Technik und Know-How direkt aus dem aktiven Rennsporteinsatz",
  },
  {
    icon: Hammer,
    title: "Individualität",
    desc: "Exakt nach individuellen Kundenvorgaben konfiguriert und gebaut",
  },
  {
    icon: CircleDot,
    title: "Präzision",
    desc: "3D-Computerberechnungen für optimale Fahrwerksgeometrie und Gewichtsverteilung",
  },
]

export function PhilosophieSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])

  return (
    <section
      id="philosophie"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Decorative line */}
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top Section: Split layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <motion.div className="absolute inset-0" style={{ scale: imgScale, willChange: "transform" }}>
                <Image
                  src="https://www.cobra-cn.de/wp-content/uploads/2015/09/ELF_9990-1024x683.jpg"
                  alt="CN Racing Werkstatt – Cobra-Fertigung"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl bg-black/80 p-4">
                  <p className="text-sm font-medium italic text-white/90">
                    &ldquo;Das Ziel war von Anfang an klar: die schnellste und
                    zuverlässigste Cobra mit neuester Technik zu entwickeln.&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-cn-red">
                    — Christian Nowak, Geschäftsführer
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                Unsere Philosophie
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-normal text-white lg:text-5xl">
                Leidenschaft trifft
                <br />
                Ingenieurskunst.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-cn-gray">
                Die CN-Cobra entstand aus langjähriger Motorsportleidenschaft
                von Christian Nowak. Ursprünglich als Rennwagen für die
                Nordschleife konzipiert, wurde sie zum Symbol für Speed und
                technischen Vorsprung.
              </p>
              <p className="mb-8 leading-relaxed text-cn-gray">
                Nach über 170 produzierten Cobras und zahlreichen
                Rennerfolgen steht CN Racing heute für drei starke
                Säulen: die legendäre CN-Cobra, professionelles
                Corvette C8-Tuning und Camaro-Performance auf
                Motorsport-Niveau. Alles vereint unter einem Dach in
                Dormagen.
              </p>
            </ScrollReveal>

            {/* Key Specs */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "170+", label: "Cobras gebaut" },
                  { value: "30+", label: "Jahre Erfahrung" },
                  { value: "100%", label: "Made in Germany" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-cn-red">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] text-cn-gray">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Values Grid */}
        <StaggerContainer
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cn-red/20 hover:bg-white/[0.04]">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-cn-red/10 transition-colors duration-300 group-hover:bg-cn-red/20">
                  <value.icon className="size-5 text-cn-red" />
                </div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-cn-gray">
                  {value.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
