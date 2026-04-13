"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gauge, Zap, Timer, Weight } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"

const vehicles = [
  {
    id: "cobra",
    name: "CN-Cobra",
    subtitle: "Die weltweit modernste Cobra",
    description:
      "30 Jahre nachdem die erste Cobra von CN das Licht der Welt erblickte, kommt nun die weltweit modernste Cobra auf den Asphalt. Ursprünglich als Rennwagen entwickelt, jetzt als Straßenversion – ein Unikat in präziser Handarbeit gefertigt.",
    image:
      "https://www.cobra-cn.de/wp-content/uploads/2016/02/Cobra-GV-2.jpg",
    models: [
      {
        name: "RS3",
        ps: "530 PS",
        nm: "670 Nm",
        speed: "280 km/h",
        accel: "3,9s",
        weight: "930 kg",
        price: "ab 102.900 €",
        image:
          "https://www.cobra-cn.de/wp-content/uploads/2015/09/ELF_9989-1024x683.jpg",
      },
      {
        name: "RS4",
        ps: "580 PS",
        nm: "710 Nm",
        speed: "290 km/h",
        accel: "3,7s",
        weight: "950 kg",
        price: "ab 109.900 €",
        image:
          "https://www.cobra-cn.de/wp-content/uploads/2016/02/IMG_0868-1024x683.jpg",
      },
      {
        name: "RS6",
        ps: "900 PS",
        nm: "1.080 Nm",
        speed: ">300 km/h",
        accel: "<3,2s",
        weight: "990 kg",
        price: "ab 159.900 €",
        image:
          "https://www.cobra-cn.de/wp-content/uploads/2016/07/7.jpg",
      },
    ],
  },
  {
    id: "corvette",
    name: "Corvette C8",
    subtitle: "Eine neue Ära der Performance",
    description:
      "Die Corvette – ein Name, der seit Generationen für atemberaubendes Design, unbändige Leistung und pure Faszination steht. Mit dem 6,2-Liter-LT2-V8-Motor, 495 PS und 637 Nm Drehmoment bieten wir ein breites Spektrum an Upgrades.",
    image:
      "https://www.cobra-cn.de/wp-content/uploads/2024/02/z06_con_6.jpg",
    models: [],
  },
  {
    id: "camaro",
    name: "Camaro",
    subtitle: "Legendäres Pony Car, perfektioniert",
    description:
      "Seit 2011 bieten wir unter Camaro-Tuning.com Produkte und Dienstleistungen für den Chevrolet Camaro Gen. 5 und Gen. 6 an. Vom Clubsport-Umbau über Nockenwellenumbau bis hin zu kompletten Motorumbauten auf LS7, LT4 oder Stroker.",
    image:
      "https://www.cobra-cn.de/wp-content/uploads/2018/05/gen5_4.jpg",
    models: [],
  },
]

export function FahrzeugeSection() {
  const [activeVehicle, setActiveVehicle] = useState(0)
  const [activeModel, setActiveModel] = useState(0)
  const vehicle = vehicles[activeVehicle]

  return (
    <section id="fahrzeuge" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cn-darker via-background to-cn-darker" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
              Unsere Fahrzeuge
            </span>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Drei Legenden.
              <br />
              Ein Standard: Perfektion.
            </h2>
            <p className="text-lg text-cn-gray">
              Modernste Technik und Know-How aus dem Motorsport – für Fahrzeuge,
              die keine Kompromisse kennen.
            </p>
          </div>
        </ScrollReveal>

        {/* Vehicle Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex gap-2 overflow-x-auto pb-2">
            {vehicles.map((v, i) => (
              <button
                key={v.id}
                onClick={() => {
                  setActiveVehicle(i)
                  setActiveModel(0)
                }}
                className={`relative flex-shrink-0 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeVehicle === i
                    ? "bg-cn-red text-white shadow-lg shadow-cn-red/20"
                    : "bg-white/5 text-cn-gray hover:bg-white/10 hover:text-white"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Vehicle Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Vehicle Card */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src={
                    vehicle.models.length > 0
                      ? vehicle.models[activeModel].image
                      : vehicle.image
                  }
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Price badge */}
                {vehicle.models.length > 0 && (
                  <div className="absolute bottom-4 left-4 rounded-full bg-cn-red px-4 py-1.5 text-xs font-bold text-white sm:bottom-6 sm:left-6 sm:px-5 sm:py-2 sm:text-sm">
                    {vehicle.models[activeModel].price}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                  {vehicle.subtitle}
                </span>
                <h3 className="mb-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  {vehicle.name}
                </h3>
                <p className="mb-8 leading-relaxed text-cn-gray">
                  {vehicle.description}
                </p>

                {/* Model Selector (Cobra) */}
                {vehicle.models.length > 0 && (
                  <>
                    <div className="mb-6 flex gap-3">
                      {vehicle.models.map((m, i) => (
                        <button
                          key={m.name}
                          onClick={() => setActiveModel(i)}
                          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                            activeModel === i
                              ? "bg-white text-black"
                              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>

                    {/* Stats Grid */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeModel}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                      >
                        {[
                          {
                            icon: Zap,
                            value: vehicle.models[activeModel].ps,
                            label: "Leistung",
                          },
                          {
                            icon: Gauge,
                            value: vehicle.models[activeModel].nm,
                            label: "Drehmoment",
                          },
                          {
                            icon: Timer,
                            value: vehicle.models[activeModel].accel,
                            label: "0–100 km/h",
                          },
                          {
                            icon: Weight,
                            value: vehicle.models[activeModel].weight,
                            label: "Gewicht",
                          },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                          >
                            <stat.icon className="mb-2 size-4 text-cn-red" />
                            <div className="text-lg font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs text-cn-gray">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </>
                )}

                {/* Features for non-Cobra */}
                {vehicle.id === "corvette" && (
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Fahrwerks-Upgrades",
                      "Aerodynamik-Kits",
                      "Carbon-Anbauteile",
                      "Abgasanlagen",
                      "Motortuning",
                      "Felgen & Reifen",
                    ].map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm text-cn-gray"
                      >
                        <div className="h-1 w-1 rounded-full bg-cn-red" />
                        {f}
                      </div>
                    ))}
                  </div>
                )}
                {vehicle.id === "camaro" && (
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Clubsport-Umbau",
                      "Nockenwellenumbau",
                      "Kompressorumbau",
                      "Motorumbau LS7/LT4",
                      "Fahrwerk & Bremsen",
                      "Design & Optik",
                    ].map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm text-cn-gray"
                      >
                        <div className="h-1 w-1 rounded-full bg-cn-red" />
                        {f}
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href="/kontakt"
                  className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cn-red transition-colors hover:text-cn-red-light"
                >
                  Jetzt beraten lassen
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Cobra Technical Highlights */}
            {vehicle.id === "cobra" && (
              <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-3" staggerDelay={0.1}>
                {[
                  {
                    title: "Chassis & Fahrwerk",
                    desc: "Gitterrohrrahmen mit Doppel-Dreieckslenker, 3D-Computerberechnung, KW & Öhlins Gewindefahrwerk",
                  },
                  {
                    title: "Bremsanlage",
                    desc: "Brembo 4-6 Kolben Festsattel, bis 355mm geschlitzte & innenbelüftete Scheiben",
                  },
                  {
                    title: "Made in Germany",
                    desc: "Jedes Fahrzeug wird als Unikat in präziser Handarbeit nach individuellen Kundenvorgaben gefertigt",
                  },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cn-red/20 hover:bg-white/[0.04]">
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-cn-gray">
                        {item.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
