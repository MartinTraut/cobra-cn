"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const B = "https://www.cobra-cn.de/wp-content/uploads"

const showcaseItems = [
  {
    src: `${B}/2016/02/Cobra-GV-2.jpg`,
    title: "CN Cobra",
    desc: "Handgebaut in Dormagen. Über 170 Fahrzeuge seit 1993. Die weltweit modernste Cobra mit GM V8, Brembo Bremsen und BBS Felgen.",
    tag: "Ab 102.900 €",
  },
  {
    src: `${B}/2022/11/racetracker_19894361_313124-scaled.jpg`,
    title: "Corvette C8",
    desc: "495 PS LT2 V8. CN Racing bietet Fahrwerks-Upgrades, Carbon-Anbauteile, Titan-Abgasanlagen und professionelles Motortuning.",
    tag: "Tuning & Performance",
  },
  {
    src: `${B}/2016/12/IMG_0015.jpg`,
    title: "Camaro",
    desc: "Gen. 5 und Gen. 6. Vom Clubsport-Umbau über Kompressor-Kits bis zum kompletten Motorumbau auf LS7, LT4 oder Stroker.",
    tag: "Gen. 5 & Gen. 6",
  },
  {
    src: `${B}/2016/07/7.jpg`,
    title: "Cobra RS6",
    desc: "900 PS Kompressor V8 mit 1.080 Nm. Drexler Rennsperrdifferential, Traktionskontrolle. 0-100 in unter 3,2 Sekunden.",
    tag: "900 PS Kompressor",
  },
  {
    src: `${B}/2019/05/BH_7.jpg`,
    title: "Motorsport",
    desc: "YTCC Rennkalender 2026: Nürburgring, Zolder, Red Bull Ring, Spa. Technik vom Rennsport auf die Straße seit Jahrzehnten.",
    tag: "YTCC 2026",
  },
  {
    src: `${B}/2021/02/pruefstand_1-1024x768.jpg`,
    title: "Leistungsprüfstand",
    desc: "MAHA MSR 850 mit 1.500 PS Kapazität. Messungen ab 159 €. Normiert nach DIN 70020, Toleranz ±1%. Ohne Rampe für tiefe Fahrzeuge.",
    tag: "1.500 PS MAHA",
  },
]

export function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const doorY = useTransform(scrollYProgress, [0, 0.7], ["0%", "-100%"])
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  return (
    <section ref={containerRef} className="relative h-[280vh] sm:h-[350vh] md:h-[450vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#111]">

        {/* ============ CONTENT BEHIND THE DOOR ============ */}
        <motion.div
          className="absolute inset-0 z-10 overflow-y-auto bg-[#111] px-5 pb-8 pt-20 lg:pt-24"
          style={{ opacity: contentOpacity }}
        >
          <div className="mx-auto w-full max-w-6xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                Unsere Werkstatt
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-normal text-white md:text-4xl">
                Entdecken Sie unsere <span className="text-cn-red">Fahrzeuge.</span>
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-cn-gray">
                Klicken Sie auf ein Bild für mehr Informationen.
              </p>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:gap-3">
              {showcaseItems.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setSelectedItem(i)}
                  className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10 text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="33vw"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/90" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <span className="mb-1 inline-block rounded-md bg-cn-red/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                      {item.tag}
                    </span>
                    <h4 className="text-sm font-bold text-white lg:text-base">{item.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 rounded-xl border border-white/5 bg-white/[0.02] py-4 sm:grid-cols-4">
              {[
                { value: "170+", label: "Cobras" },
                { value: "30+", label: "Jahre" },
                { value: "1.500", label: "PS Prüfstand" },
                { value: "100%", label: "Germany" },
              ].map((stat, i, arr) => (
                <div key={stat.label} className={`text-center ${i < arr.length - 1 ? "border-r border-white/5" : ""}`}>
                  <div className="text-lg font-bold text-cn-red md:text-xl">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-wider text-cn-gray md:text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ THE GARAGE DOOR ============ */}
        <motion.div
          className="absolute inset-0 z-20 will-change-transform"
          style={{ y: doorY }}
        >
          <div className="relative flex h-full w-full flex-col bg-cn-darker">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="relative flex-1 border-b border-white/[0.03]">
                <div className="absolute inset-x-0 top-0 h-px bg-white/[0.015]" />
              </div>
            ))}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-r from-white/[0.04] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1.5 bg-gradient-to-l from-white/[0.04] to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cn-red">
                Motorsport-Technologie für die Straße
              </span>
              <h2 className="text-center text-4xl font-bold tracking-normal text-white md:text-6xl lg:text-7xl">
                Über 30 Jahre
              </h2>
              <h2 className="text-center text-4xl font-bold tracking-normal text-cn-red md:text-6xl lg:text-7xl">
                Leidenschaft.
              </h2>
              <p className="mt-4 max-w-md text-center text-sm text-cn-gray md:text-base">
                Scrollen Sie, um unsere Werkstatt zu betreten.
              </p>
              <div
                className="mt-8 h-8 w-px animate-bounce bg-gradient-to-b from-transparent via-cn-red to-transparent"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-white/[0.06] to-transparent" />
            <div className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/10" />
          </div>
        </motion.div>
      </div>

      {/* ============ DETAIL MODAL ============ */}
      <AnimatePresence>
        {selectedItem !== null && showcaseItems[selectedItem] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Schließen"
            >
              <X className="size-5" />
            </button>

            <motion.div
              className="mx-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-cn-darker"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large Image */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={showcaseItems[selectedItem].src}
                  alt={showcaseItems[selectedItem].title}
                  fill
                  className="object-cover"
                  sizes="90vw"
                  quality={95}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cn-darker via-transparent to-transparent" />
              </div>

              {/* Info below */}
              <div className="p-6 md:p-8">
                <span className="mb-2 inline-block rounded-md bg-cn-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cn-red">
                  {showcaseItems[selectedItem].tag}
                </span>
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                  {showcaseItems[selectedItem].title}
                </h3>
                <p className="max-w-2xl leading-relaxed text-cn-gray">
                  {showcaseItems[selectedItem].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
