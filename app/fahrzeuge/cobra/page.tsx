"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { LightboxImage } from "@/components/image-lightbox"

const B = "https://www.cobra-cn.de/wp-content/uploads"

const models = [
  {
    name: "RS3",
    ps: "530 PS",
    nm: "670 Nm",
    speed: "280 km/h",
    accel: "3,9s",
    price: "ab 102.900 €",
    image: `${B}/2015/09/ELF_9989-1024x683.jpg`,
    href: "/fahrzeuge/cobra/rs3",
    desc: "Der Einstieg in die CN-Cobra Welt – 530 PS V8 mit Brembo-Bremsanlage und BBS-Felgen.",
  },
  {
    name: "RS4",
    ps: "580 PS",
    nm: "710 Nm",
    speed: "290 km/h",
    accel: "3,7s",
    price: "ab 109.900 €",
    image: `${B}/2016/02/IMG_0868.jpg`,
    href: "/fahrzeuge/cobra/rs4",
    desc: "Mehr Leistung, Tremec-Renngetriebe und 6-Kolben Brembo – für den anspruchsvollen Fahrer.",
  },
  {
    name: "RS6",
    ps: "900 PS",
    nm: "1.080 Nm",
    speed: ">300 km/h",
    accel: "<3,2s",
    price: "ab 159.900 €",
    image: `${B}/2016/07/7.jpg`,
    href: "/fahrzeuge/cobra/rs6",
    desc: "Die Spitze – 900 PS Kompressor-V8, Drexler-Rennsperrdifferential, Traktionskontrolle.",
  },
]

export default function CobraPage() {
  return (
    <>
      <PageHeader
        tag="CN-Cobra"
        title="Pure Kraft."
        titleAccent="Handgebaut."
        description="30 Jahre nachdem die erste Cobra von CN das Licht der Welt erblickte, kommt nun die weltweit modernste Cobra auf den Asphalt. Ursprünglich als Rennwagen entwickelt, jetzt als Straßenversion – jedes Fahrzeug ein Unikat in präziser Handarbeit gefertigt."
        image={`${B}/2016/02/Cobra-GV-2.jpg`}
        breadcrumbs={[
          { label: "Fahrzeuge", href: "/fahrzeuge/cobra" },
          { label: "Cobra" },
        ]}
      />

      {/* Models Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-white">
              Wählen Sie Ihr Modell
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
            {models.map((model) => (
              <StaggerItem key={model.name}>
                <Link
                  href={model.href}
                  className="group block overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-cn-red/20 hover:bg-white/[0.04]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={model.image}
                      alt={`CN-Cobra ${model.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full bg-cn-red px-3 py-1 text-xs font-bold text-white">
                        {model.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-2xl font-bold text-white">
                      CN-Cobra {model.name}
                    </h3>
                    <p className="mb-4 text-sm text-cn-gray">{model.desc}</p>
                    <div className="mb-4 grid grid-cols-2 gap-2">
                      {[
                        { label: "Leistung", value: model.ps },
                        { label: "Drehmoment", value: model.nm },
                        { label: "0–100", value: model.accel },
                        { label: "V-Max", value: model.speed },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                        >
                          <div className="text-sm font-bold text-white">{s.value}</div>
                          <div className="text-[10px] text-cn-gray">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <span className="group/link flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-cn-red">
                      Details ansehen
                      <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Highlights */}
      <section className="border-t border-white/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-white">
              Technik auf Rennsport-Niveau
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gitterrohrrahmen",
                desc: "Doppel-Dreieckslenker mit 3D-Computerberechnung für optimale Fahrwerksgeometrie.",
                img: `${B}/2016/02/001.jpg`,
              },
              {
                title: "Brembo Bremsanlage",
                desc: "4-6 Kolben Festsattel mit bis zu 355mm geschlitzten & innenbelüfteten Scheiben.",
                img: `${B}/2016/07/1.jpg`,
              },
              {
                title: "BBS RS Felgen",
                desc: "3-teilige BBS Rennsport-Felgen, 9×18 vorne und 11,5×18 hinten mit Michelin Sportreifen.",
                img: `${B}/2016/02/IMG_0583.jpg`,
              },
              {
                title: "Tremec Getriebe",
                desc: "Verstärktes 6-Gang Rennschaltgetriebe Tremec mit automatischem Sperrdifferential.",
                img: `${B}/2016/07/2.jpg`,
              },
              {
                title: "GFK / CFK Karosserie",
                desc: "Nur 80 kg Karosserie-Gewicht in GFK, optional in Carbon. Fahrzeuggewicht ab 930 kg.",
                img: `${B}/2016/02/39.jpg`,
              },
              {
                title: "Lederausstattung",
                desc: "Serienmäßig Leder-Innenraum, Kofferraum für 14-tägige Urlaubsreisen. Made in Germany.",
                img: `${B}/2016/02/Innen.jpg`,
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="group overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-cn-red/20">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cn-gray">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="border-t border-white/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white">Impressionen</h2>
            <Link
              href="/galerie"
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-cn-red hover:text-cn-red-light"
            >
              Zur Galerie <ArrowRight className="size-4" />
            </Link>
          </div>
          {(() => {
            const imgs = [
              `${B}/2016/02/ELF_9896.jpg`,
              `${B}/2016/02/ELF_9925.jpg`,
              `${B}/2016/04/CN_RS4_1.jpg`,
              `${B}/2016/02/CN_BRG1.jpg`,
              `${B}/2016/02/DSC_0445.jpg`,
              `${B}/2016/02/IMG_3303.jpg`,
              `${B}/2015/10/DSC_2567_2-e1444902295564.jpg`,
              `${B}/2016/05/cab_ss_salon.jpg`,
            ]
            return (
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {imgs.map((src, i) => (
                  <LightboxImage
                    key={src}
                    src={src}
                    alt={`CN-Cobra Impression ${i + 1}`}
                    images={imgs}
                    index={i}
                    className="aspect-[4/3] rounded-lg"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Interesse an einer CN-Cobra?
          </h2>
          <p className="mb-6 text-cn-gray">
            Jede CN-Cobra wird als Unikat nach Ihren individuellen Wünschen
            gefertigt. Kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-cn-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
          >
            Jetzt beraten lassen
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
