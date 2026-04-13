"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ShoppingBag,
  Check,
  Truck,
  Shield,
  Phone,
} from "lucide-react"
import { products, getProductBySlug } from "@/lib/shop-data"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">
            Produkt nicht gefunden
          </h1>
          <Link
            href="/shop"
            className="text-sm text-cn-red hover:text-cn-red-light"
          >
            Zurück zum Shop
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) =>
    price.toLocaleString("de-DE", { minimumFractionDigits: 0 }) + " €"

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <div className="min-h-screen pt-24 lg:pt-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cn-gray">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Start
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-white/20">/</span>
                <Link
                  href="/shop"
                  className="transition-colors hover:text-white"
                >
                  Shop
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-white/20">/</span>
                <span className="text-white/60">{product.name}</span>
              </li>
            </ol>
          </nav>

          {/* Product Layout */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-cn-red px-4 py-1.5 text-xs font-bold text-white">
                    {product.badge}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                {product.categoryLabel} · {product.subcategory}
              </span>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-white">
                  {formatPrice(product.price)}
                </span>
                {product.priceMax && (
                  <span className="text-lg text-cn-gray">
                    – {formatPrice(product.priceMax)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-lg text-cn-gray line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="mb-6 leading-relaxed text-cn-gray">
                {product.description}
              </p>

              {/* Details */}
              <div className="mb-8 space-y-2.5">
                {product.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <Check className="mt-0.5 size-4 flex-shrink-0 text-cn-red" />
                    {detail}
                  </div>
                ))}
              </div>

              {/* Add to Cart */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center overflow-hidden rounded-lg border border-white/10">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-3 text-sm text-white transition-colors hover:bg-white/5"
                  >
                    –
                  </button>
                  <span className="w-12 text-center text-sm font-medium text-white">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-3 text-sm text-white transition-colors hover:bg-white/5"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    added
                      ? "bg-green-600 text-white"
                      : "bg-cn-red text-white hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="size-4" />
                      Hinzugefügt
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="size-4" />
                      In den Warenkorb
                    </>
                  )}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Truck, label: "Versandfertig", sub: "2–4 Werktage" },
                  { icon: Shield, label: "Garantie", sub: "12 Monate" },
                  { icon: Phone, label: "Beratung", sub: "02133 / 21 78 460" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center"
                  >
                    <badge.icon className="mx-auto mb-1 size-4 text-cn-red" />
                    <div className="text-xs font-medium text-white">
                      {badge.label}
                    </div>
                    <div className="text-[10px] text-cn-gray">{badge.sub}</div>
                  </div>
                ))}
              </div>

              {/* Stock */}
              <div className="mt-4 flex items-center gap-2 text-xs text-cn-gray">
                <div className="size-2 rounded-full bg-green-500" />
                Auf Lager – versandbereit
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-white/5 py-16">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">
                Ähnliche Produkte
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <ScrollReveal key={p.id}>
                    <Link
                      href={`/shop/produkt/${p.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-cn-red/20 hover:bg-white/[0.04]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="33vw"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-cn-red">
                          {p.subcategory}
                        </span>
                        <h3 className="mt-1 text-sm font-semibold text-white">
                          {p.name}
                        </h3>
                        <span className="mt-2 block text-sm font-bold text-white">
                          {formatPrice(p.price)}
                          {p.priceMax && (
                            <span className="font-normal text-cn-gray">
                              {" "}
                              – {formatPrice(p.priceMax)}
                            </span>
                          )}
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
