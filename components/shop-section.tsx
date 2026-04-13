"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

const B = "https://www.cobra-cn.de/wp-content/uploads"

const products = [
  { name: "KW Gewindefahrwerk V3 inox", category: "Corvette C8", price: "3.515 €", image: `${B}/2026/03/250_001-200x200.jpg`, slug: "kw-gewindefahrwerk-v3-inox" },
  { name: "Sichtcarbon ZR1 Fronthaube", category: "C8 Z06", price: "2.290 €", originalPrice: "2.790 €", image: `${B}/2026/02/IMG_0599-200x200.jpg`, slug: "sichtcarbon-zr1-fronthaube" },
  { name: "Titan Abgasanlage inkl. OPF", category: "Corvette C8", price: "5.618 €", image: `${B}/2026/02/IMG_0807-200x200.jpg`, slug: "titan-abgasanlage-opf" },
  { name: "Motor Sichtfenster", category: "Corvette C8", price: "799 €", image: `${B}/2026/02/IMG_01891-200x200.jpg`, slug: "motor-sichtfenster-heckabdeckung" },
  { name: "Carbon Schaltwippen", category: "C8 Z06", price: "199 €", image: `${B}/2026/02/shift1-200x200.jpg`, slug: "carbon-schaltwippen-magnetisch" },
  { name: "Carbon Heckdiffusor", category: "C8 Z06", price: "2.490 €", image: `${B}/2022/12/2-2-300x225.jpg`, slug: "carbon-heckdiffusor-z06" },
  { name: "Carbon Heckspoiler", category: "Corvette C8", price: "1.890 €", image: `${B}/2021/12/endrohr6-300x225.jpg`, slug: "carbon-heckspoiler-high-wing" },
  { name: "Bremsscheiben Set", category: "Corvette C8", price: "1.290 €", image: `${B}/2021/12/endrohr5-300x225.jpg`, slug: "bremsscheiben-set-geschlitzt" },
]

export function ShopSection() {
  return (
    <section id="shop" className="relative bg-cn-darker">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
              Online Shop
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Premium-Teile
            </h2>
            <h2 className="text-4xl font-bold tracking-tight text-cn-red md:text-5xl lg:text-6xl">
              für Ihr Fahrzeug.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-cn-gray md:text-base">
              Hochleistungskomponenten für Corvette C8, Camaro und Cobra.
              Direkt aus dem Motorsport.
            </p>
          </div>
        }
      >
        <div className="flex h-full w-full flex-col bg-cn-darker">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-8">
            <div className="flex items-center gap-2">
              <ShoppingBag className="size-4 text-cn-red" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Beliebte Produkte
              </span>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-1.5 text-xs font-medium text-cn-red hover:text-cn-red-light"
            >
              Alle im Shop
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Products — NO filters, NO overlays */}
          <div className="grid flex-1 grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2">
            {products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/shop/produkt/${product.slug}`}
                className={`group flex flex-col border-white/10 transition-colors hover:bg-white/[0.04] ${
                  i % 2 !== 1 ? "border-r md:border-r-0" : ""
                } ${i % 4 !== 3 ? "md:border-r" : ""} ${i < 6 ? "border-b md:border-b-0" : ""} ${i < 4 ? "md:border-b" : ""}`}
              >
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="25vw"
                    quality={95}
                    unoptimized
                  />
                  {product.originalPrice && (
                    <span className="absolute right-2 top-2 rounded bg-cn-red px-1.5 py-0.5 text-[8px] font-bold text-white">
                      SALE
                    </span>
                  )}
                </div>
                <div className="border-t border-white/10 p-3 md:p-4">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-cn-red">
                    {product.category}
                  </span>
                  <h3 className="mt-0.5 text-[11px] font-bold leading-snug text-white md:text-xs">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-white md:text-sm">
                      {product.price}
                    </span>
                    <div className="flex size-6 items-center justify-center rounded-md bg-cn-red/10 transition-colors group-hover:bg-cn-red">
                      <ShoppingBag className="size-3 text-cn-red transition-colors group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-center border-t border-white/10 py-3">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-cn-red px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
            >
              Alle Produkte im Shop
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}
