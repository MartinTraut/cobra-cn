"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LightboxImage } from "@/components/image-lightbox"

const B = "https://www.cobra-cn.de/wp-content/uploads"

export default function CamaroPage() {
  return (
    <>
      <PageHeader
        tag="Camaro Tuning"
        title="Legendäres Pony Car,"
        titleAccent="perfektioniert."
        description="Seit 2011 bieten wir unter Camaro-Tuning.com Produkte und Dienstleistungen für den Chevrolet Camaro Gen. 5 und Gen. 6 an. Vom Clubsport-Umbau über Nockenwellenumbau bis hin zu kompletten Motorumbauten."
        image={`${B}/2016/12/IMG_0015.jpg`}
        breadcrumbs={[
          { label: "Fahrzeuge", href: "/fahrzeuge/cobra" },
          { label: "Camaro" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Services Grid */}
          <ScrollReveal>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-white">
              Unser Leistungsspektrum
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Clubsport-Umbau", desc: "Kompletter Umbau für Track und Straße mit Käfig, Fahrwerk und Gewichtsoptimierung.", img: `${B}/2017/01/9-1024x768.jpg` },
              { title: "Nockenwellenumbau", desc: "Performance-Nockenwellen für mehr Drehmoment und Leistung im gesamten Drehzahlband.", img: `${B}/2017/01/11-1024x768.jpg` },
              { title: "Kompressorumbau", desc: "Forced Induction für maximale Leistung – professionell installiert und abgestimmt.", img: `${B}/2017/01/18-1024x768.jpg` },
              { title: "Motorumbau LS7/LT4/Stroker", desc: "Komplette Motorumbauten auf LS7, LT4 oder Stroker-Motoren für extreme Performance.", img: `${B}/2016/02/IMG_2993-1024x683.png` },
              { title: "Fahrwerk & Bremsen", desc: "KW, Öhlins und Brembo Upgrades für verbesserte Fahrdynamik und Bremsleistung.", img: `${B}/2017/01/22-1024x768.jpg` },
              { title: "Design & Optik", desc: "Aerodynamik-Kits, Felgen, Folierungen und Carbon-Teile für den individuellen Look.", img: `${B}/2016/06/IMG_2991-1024x683.jpg` },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="group overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-cn-red/20">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white">{item.title}</h3>
                    <p className="text-sm text-cn-gray">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Camaro Gallery */}
          <div className="mt-16">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-white">Galerie</h2>
              <Link href="/galerie" className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-cn-red hover:text-cn-red-light">
                Alle Bilder <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
              {[
                `${B}/2016/12/IMG_0015.jpg`,
                `${B}/2016/02/IMG_2993-1024x683.png`,
                `${B}/2016/02/IMG_2152-1024x683.jpg`,
                `${B}/2018/05/gen5_4.jpg`,
                `${B}/2016/06/IMG_2991-1024x683.jpg`,
                `${B}/2016/02/IMG_1807.jpg`,
                `${B}/2017/01/20-1024x768.jpg`,
                `${B}/2017/11/5-1024x768.jpg`,
                `${B}/2015/06/n2-1024x768.jpg`,
                `${B}/2017/01/23-1024x768.jpg`,
              ].map((src, i) => (
                <div key={src} className={`group relative overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}>
                  <Image src={src} alt={`Camaro ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes={i === 0 ? "40vw" : "20vw"} />
                </div>
              ))}
            </div>
          </div>

          {/* Motorsport */}
          <ScrollReveal>
            <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <h3 className="mb-3 text-xl font-bold text-white">Motorsport mit dem Camaro</h3>
              <p className="text-cn-gray leading-relaxed">
                Mit unseren Camaros nehmen wir mehrfach im Jahr an Trackdays und Motorsportveranstaltungen teil. Modernste Technik und Know-How aus dem Motorsport lassen die Camaros in neuem Glanz erstrahlen!
              </p>
              <Link href="/motorsport" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cn-red hover:text-cn-red-light">
                Zum Motorsport <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
