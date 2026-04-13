"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Gauge, Timer, ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LightboxImage } from "@/components/image-lightbox"

interface Spec {
  label: string
  value: string
}

interface CobraDetailProps {
  model: string
  tagline: string
  ps: string
  kw: string
  rpm: string
  nm: string
  nmRpm: string
  topSpeed: string
  accel100: string
  accel200: string
  price: string
  priceNet: string
  brakesFront: string
  brakesRear: string
  wheelsFront: string
  wheelsRear: string
  tiresFront: string
  tiresRear: string
  gearbox: string
  differential: string
  extras?: string[]
  heroImage: string
  images: string[]
}

export function CobraDetailPage(props: CobraDetailProps) {
  const specs: Spec[] = [
    { label: "Leistung", value: `${props.ps} / ${props.kw}` },
    { label: "bei Drehzahl", value: props.rpm },
    { label: "Drehmoment", value: props.nm },
    { label: "bei Drehzahl", value: props.nmRpm },
    { label: "Höchstgeschwindigkeit", value: props.topSpeed },
    { label: "0–100 km/h", value: props.accel100 },
    { label: "0–200 km/h", value: props.accel200 },
    { label: "Antrieb", value: "Hinterradantrieb" },
    { label: "Motor", value: "Frontmittelmotor Aluminium GM V8, G-Kat." },
    { label: "Schmierung", value: "Trockensumpfschmierung" },
    { label: "Getriebe", value: props.gearbox },
    { label: "Differential", value: props.differential },
    { label: "Bremse VA", value: props.brakesFront },
    { label: "Bremse HA", value: props.brakesRear },
    { label: "Felgen VA", value: `BBS RS 3-teilig ${props.wheelsFront}` },
    { label: "Felgen HA", value: `BBS RS 3-teilig ${props.wheelsRear}` },
    { label: "Reifen VA", value: props.tiresFront },
    { label: "Reifen HA", value: props.tiresRear },
  ]

  return (
    <>
      <PageHeader
        tag={`CN-Cobra ${props.model}`}
        title={`CN-Cobra ${props.model}.`}
        titleAccent={props.tagline}
        description={`${props.ps} Leistung, ${props.nm} Drehmoment, ${props.accel100} auf 100 km/h – handgebaut in Dormagen.`}
        image={props.heroImage}
        breadcrumbs={[
          { label: "Fahrzeuge", href: "/fahrzeuge/cobra" },
          { label: "Cobra", href: "/fahrzeuge/cobra" },
          { label: props.model },
        ]}
      />

      {/* Quick Stats */}
      <section className="relative z-10 py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            className="grid grid-cols-4 overflow-hidden rounded-2xl border border-cn-red/20 bg-cn-red/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: props.ps, label: "Leistung" },
              { value: props.nm, label: "Drehmoment" },
              { value: props.accel100, label: "0–100 km/h" },
              { value: props.topSpeed, label: "V-Max" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-6 text-center ${i > 0 ? "border-l border-cn-red/10" : ""}`}
              >
                <div className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-cn-red sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Image Gallery */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-6">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
              Galerie
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              CN-Cobra {props.model} im Detail
            </h2>
          </div>

          {/* Hero grid: 1 large + 2 side */}
          <div className="grid grid-cols-6 grid-rows-2 gap-2">
            <div className="col-span-4 row-span-2">
              <LightboxImage
                src={props.images[0]}
                alt={`CN-Cobra ${props.model} Hauptbild`}
                images={props.images}
                index={0}
                className="aspect-[16/10] w-full rounded-xl"
                sizes="60vw"
              />
            </div>
            {props.images.slice(1, 3).map((src, i) => (
              <div key={src} className="col-span-2">
                <LightboxImage
                  src={src}
                  alt={`CN-Cobra ${props.model} Bild ${i + 2}`}
                  images={props.images}
                  index={i + 1}
                  className="aspect-[16/10] w-full rounded-xl"
                  sizes="30vw"
                />
              </div>
            ))}
          </div>

          {/* Remaining images */}
          {props.images.length > 3 && (
            <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              {props.images.slice(3).map((src, i) => (
                <LightboxImage
                  key={src}
                  src={src}
                  alt={`CN-Cobra ${props.model} Detail ${i + 1}`}
                  images={props.images}
                  index={i + 3}
                  className="aspect-[4/3] w-full rounded-lg"
                  sizes="16vw"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-white">
                  Technische Daten
                </h2>
                <p className="mb-8 text-cn-gray">
                  CN-Cobra {props.model} – alle Spezifikationen im Überblick.
                </p>
              </ScrollReveal>

              <div className="overflow-hidden rounded-xl border border-white/5">
                {specs.map((spec, i) => (
                  <div
                    key={`${spec.label}-${i}`}
                    className={`flex items-center justify-between px-5 py-3 text-sm ${
                      i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                    }`}
                  >
                    <span className="font-medium text-cn-red">{spec.label}</span>
                    <span className="font-medium text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-white">
                  Serienausstattung
                </h2>
                <p className="mb-8 text-cn-gray">
                  Im Preis {props.price} inkl. MwSt. ({props.priceNet} exkl.
                  MwSt.) enthalten:
                </p>
              </ScrollReveal>

              <div className="space-y-3">
                {[
                  "Tremec Rennschaltgetriebe",
                  "Brembo Bremsanlage vorne & hinten",
                  "Aluminium-Ölkühler",
                  "BBS RS Rennsport 18 Zoll Felgen 3-teilig",
                  "Michelin Sportreifen",
                  "Trockensumpfschmierung",
                  "Lederausstattung",
                  "Automatisches Sperrdifferential",
                  ...(props.extras || []),
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cn-red" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Price CTA */}
              <div className="mt-10 rounded-xl border border-cn-red/20 bg-cn-red/5 p-6">
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-cn-red">
                  Preis CN-Cobra {props.model}
                </div>
                <div className="mb-1 text-3xl font-bold text-white">
                  {props.price}
                </div>
                <div className="mb-4 text-xs text-cn-gray">
                  inkl. MwSt. · {props.priceNet} exkl. MwSt.
                </div>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-cn-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
                >
                  Jetzt anfragen
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Models */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white">Weitere Modelle</h2>
          <div className="flex gap-3">
            {["RS3", "RS4", "RS6"]
              .filter((m) => m !== props.model)
              .map((m) => (
                <Link
                  key={m}
                  href={`/fahrzeuge/cobra/${m.toLowerCase()}`}
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:border-cn-red/30 hover:bg-cn-red/5"
                >
                  CN-Cobra {m}
                </Link>
              ))}
            <Link
              href="/fahrzeuge/cobra"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-cn-gray transition-all hover:border-white/20 hover:text-white"
            >
              Alle Cobra-Modelle
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
