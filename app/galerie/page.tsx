"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, ArrowLeft, ZoomIn } from "lucide-react"
import {
  galleryImages,
  categoryLabels,
  type GalleryCategory,
} from "@/lib/gallery-data"

const categories: GalleryCategory[] = [
  "alle",
  "cobra",
  "camaro",
  "corvette",
  "motorsport",
  "pruefstand",
]

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("alle")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [loadedCount, setLoadedCount] = useState(24)

  const filtered =
    activeCategory === "alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const visible = filtered.slice(0, loadedCount)
  const hasMore = loadedCount < filtered.length

  const openLightbox = (idx: number) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + filtered.length) % filtered.length
    )
  }, [lightboxIndex, filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handler)
    }
  }, [lightboxIndex, goNext, goPrev])

  // Reset loaded count on category change
  useEffect(() => {
    setLoadedCount(24)
  }, [activeCategory])

  return (
    <>
      {/* Page */}
      <div className="min-h-screen bg-cn-darker pt-20">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-cn-gray transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Zurück zur Startseite
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
              Galerie
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Unsere Fahrzeuge
              <br />
              <span className="text-gradient">in Bildern.</span>
            </h1>
            <p className="max-w-xl text-lg text-cn-gray">
              Entdecken Sie unsere CN-Cobras, Camaro-Umbauten, Corvette
              C8-Projekte und Motorsport-Einsätze in der Übersicht.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="mt-10 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((cat) => {
              const count =
                cat === "alle"
                  ? galleryImages.length
                  : galleryImages.filter((i) => i.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-cn-red text-white shadow-lg shadow-cn-red/20"
                      : "bg-white/5 text-cn-gray hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {categoryLabels[cat]}
                  <span className="ml-2 text-xs opacity-60">{count}</span>
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div
            key={activeCategory}
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
          >
            {visible.map((img, idx) => (
              <button
                key={img.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                onClick={() => openLightbox(idx)}
                aria-label={`${img.alt} – Bild vergrößern`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/40">
                  <ZoomIn className="size-6 text-white opacity-0 transition-all duration-200 group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                  {categoryLabels[img.category]}
                </div>
              </button>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setLoadedCount((c) => c + 24)}
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                Mehr laden ({filtered.length - loadedCount} weitere)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Schließen"
            >
              <X className="size-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Image */}
            <motion.div
              key={filtered[lightboxIndex].src}
              className="relative mx-16 h-[80vh] w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Info Bar */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <span className="text-xs font-medium uppercase tracking-wider text-cn-red">
                {categoryLabels[filtered[lightboxIndex].category]}
              </span>
              <span className="text-xs text-white/60">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
