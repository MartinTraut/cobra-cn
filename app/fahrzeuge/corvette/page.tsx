"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LightboxImage } from "@/components/image-lightbox"
import { ShopSection } from "@/components/shop-section"

const B = "https://www.cobra-cn.de/wp-content/uploads"

const galleryImages = [
  `${B}/2022/11/racetracker_19894361_313124-scaled.jpg`,
  `${B}/2024/02/z06_con_6.jpg`,
  `${B}/2021/12/endrohr6-300x225.jpg`,
  `${B}/2021/12/endrohr5-300x225.jpg`,
  `${B}/2022/11/racetracker_19894361_313124-scaled.jpg`,
  `${B}/2022/12/2-2-300x225.jpg`,
]

export default function CorvettePage() {
  return (
    <>
      <PageHeader
        tag="Corvette C8"
        title="Eine neue Ära"
        titleAccent="der Performance."
        description="Die Corvette – ein Name, der seit Generationen für atemberaubendes Design, unbändige Leistung und pure Faszination im Automobilbau steht. Mit ihrem 6,2-Liter-LT2-V8-Motor, 495 PS und 637 Nm Drehmoment."
        image={`${B}/2022/11/racetracker_19894361_313124-scaled.jpg`}
        breadcrumbs={[
          { label: "Fahrzeuge", href: "/fahrzeuge/cobra" },
          { label: "Corvette C8" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={`${B}/2024/02/z06_con_6.jpg`}
                  alt="Corvette C8 Z06 CN Racing"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Unser Know-how für Ihre C8
                </h2>
                <p className="mb-6 leading-relaxed text-cn-gray">
                  CN Racing bietet ein breites Spektrum an Produkten und
                  Dienstleistungen für die Corvette C8. Unser Angebot reicht von
                  Fahrwerks- und Aerodynamik-Upgrades über Carbon-Anbauteile bis
                  zu Abgasanlagen und Motortuning.
                </p>
                <div className="space-y-3">
                  {[
                    "KW Gewindefahrwerk V3 inox",
                    "Sichtcarbon ZR1 Fronthaube",
                    "Titan Abgasanlage",
                    "Motor-Sichtfenster Heckabdeckung",
                    "Carbon Schaltwippen",
                    "Fahrwerks- & Aerodynamik-Upgrades",
                    "Individuelle Motortuning-Lösungen",
                  ].map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <CheckCircle2 className="size-4 flex-shrink-0 text-cn-red" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Gallery */}
          <ScrollReveal>
            <div className="mt-20">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                    Impressionen
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Corvette C8 in Aktion
                  </h2>
                </div>
                <Link
                  href="/galerie"
                  className="group flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-cn-red hover:text-cn-red-light"
                >
                  Zur Galerie
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-6 grid-rows-2 gap-2">
                {/* Large featured image */}
                <div className="col-span-4 row-span-2">
                  <LightboxImage
                    src={galleryImages[0]}
                    alt="Corvette C8 auf der Rennstrecke"
                    images={galleryImages}
                    index={0}
                    className="aspect-[16/10] w-full rounded-xl"
                    sizes="60vw"
                  />
                </div>
                {/* Right column */}
                <div className="col-span-2">
                  <LightboxImage
                    src={galleryImages[1]}
                    alt="Corvette C8 Z06"
                    images={galleryImages}
                    index={1}
                    className="aspect-[16/10] w-full rounded-xl"
                    sizes="30vw"
                  />
                </div>
                <div className="col-span-2">
                  <LightboxImage
                    src={galleryImages[4]}
                    alt="Corvette C8 Tuning"
                    images={galleryImages}
                    index={4}
                    className="aspect-[16/10] w-full rounded-xl"
                    sizes="30vw"
                  />
                </div>
              </div>

              {/* Bottom row */}
              <div className="mt-2 grid grid-cols-4 gap-2">
                {galleryImages.slice(2, 6).map((src, i) => (
                  <LightboxImage
                    key={src}
                    src={src}
                    alt={`Corvette C8 Detail ${i + 1}`}
                    images={galleryImages}
                    index={i + 2}
                    className="aspect-[4/3] w-full rounded-xl"
                    sizes="25vw"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Community */}
          <ScrollReveal>
            <div className="mt-20 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="grid lg:grid-cols-5">
                <div className="relative aspect-[16/9] lg:col-span-2 lg:aspect-auto">
                  <Image
                    src={`${B}/2022/11/racetracker_19894361_313124-scaled.jpg`}
                    alt="CN Racing Corvette Motorsport"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-10">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                    Community
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    Motorsport, Community & Forum
                  </h3>
                  <p className="leading-relaxed text-cn-gray">
                    Unsere Kunden profitieren von unserer Expertise vor Ort, sei
                    es durch technische Unterstützung, geführte Runden auf der
                    Rennstrecke oder individuelle Beratung. Mit unserer
                    Motorsport-Erfahrung bringen wir Ihre Corvette C8 auf ein
                    neues Level.
                  </p>
                  <Link
                    href="/kontakt"
                    className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-cn-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
                  >
                    Jetzt beraten lassen
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ShopSection />
    </>
  )
}
