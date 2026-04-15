"use client"

import { useState, useCallback, useEffect, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxContextType {
  open: (images: string[], index: number) => void
}

const LightboxContext = createContext<LightboxContextType>({ open: () => {} })

export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<string[]>([])
  const [index, setIndex] = useState<number | null>(null)

  const open = useCallback((imgs: string[], idx: number) => {
    setImages(imgs)
    setIndex(idx)
  }, [])

  const close = useCallback(() => setIndex(null), [])

  const goNext = useCallback(() => {
    if (index === null) return
    setIndex((index + 1) % images.length)
  }, [index, images.length])

  const goPrev = useCallback(() => {
    if (index === null) return
    setIndex((index - 1 + images.length) % images.length)
  }, [index, images.length])

  useEffect(() => {
    if (index === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handler)
    }
  }, [index, close, goNext, goPrev])

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {index !== null && images[index] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/97"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Schließen"
            >
              <X className="size-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}

            <motion.div
              key={images[index]}
              className="relative mx-16 h-[80vh] w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index]}
                alt="Vergrößerte Ansicht"
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-xs text-white/60">
                {index + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}

/** Clickable image that opens in the lightbox */
export function LightboxImage({
  src,
  alt,
  images,
  index,
  className,
  sizes,
}: {
  src: string
  alt: string
  images: string[]
  index: number
  className?: string
  sizes?: string
}) {
  const { open } = useLightbox()

  return (
    <button
      onClick={() => open(images, index)}
      className={`group relative cursor-zoom-in overflow-hidden ${className ?? ""}`}
      aria-label={`${alt} – Bild vergrößern`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes={sizes ?? "50vw"}
      />
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
    </button>
  )
}
