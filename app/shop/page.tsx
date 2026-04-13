"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal, ShoppingBag } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import {
  products,
  categoryLabels,
  type ShopCategory,
} from "@/lib/shop-data"

const categories: ShopCategory[] = [
  "alle",
  "corvette-c8",
  "corvette-z06",
  "camaro-gen5",
  "camaro-gen6",
  "cobra",
  "motorenteile",
]

type SortOption = "name" | "price-asc" | "price-desc"

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ShopCategory>("alle")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState<SortOption>("name")

  const filtered = products
    .filter((p) => activeCategory === "alle" || p.category === activeCategory)
    .filter(
      (p) =>
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price
      if (sort === "price-desc") return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  const formatPrice = (price: number) =>
    price.toLocaleString("de-DE", { minimumFractionDigits: 0 }) + " €"

  return (
    <>
      <PageHeader
        tag="Online Shop"
        title="Premium-Teile"
        titleAccent="für Ihr Fahrzeug."
        description="Hochleistungskomponenten für Corvette C8, Camaro und Cobra – direkt aus dem Motorsport. Alle Produkte auf Lager und versandbereit."
        breadcrumbs={[{ label: "Shop" }]}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Filter Bar */}
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-cn-gray" />
              <input
                type="text"
                placeholder="Produkt suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-cn-red/50 focus:ring-1 focus:ring-cn-red/20"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="size-4 text-cn-gray" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none [&>option]:bg-cn-darker [&>option]:text-white"
              >
                <option value="name">Name A–Z</option>
                <option value="price-asc">Preis aufsteigend</option>
                <option value="price-desc">Preis absteigend</option>
              </select>
              <span className="text-xs text-cn-gray">
                {filtered.length} Produkte
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            {/* Sidebar Categories */}
            <aside className="hidden lg:block">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                Kategorien
              </h3>
              <nav className="space-y-1">
                {categories.map((cat) => {
                  const count =
                    cat === "alle"
                      ? products.length
                      : products.filter((p) => p.category === cat).length
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                        activeCategory === cat
                          ? "bg-cn-red/10 font-medium text-white"
                          : "text-cn-gray hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {categoryLabels[cat]}
                      <span
                        className={`text-xs ${
                          activeCategory === cat
                            ? "text-cn-red"
                            : "text-white/30"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </aside>

            {/* Mobile Category Pills */}
            <div className="flex flex-wrap gap-2 lg:hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-cn-red text-white"
                      : "bg-white/5 text-cn-gray hover:bg-white/10"
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div>
              <motion.div
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/shop/produkt/${product.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-cn-red/20 hover:bg-white/[0.04]"
                      >
                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden bg-white/[0.03]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {product.badge && (
                            <span className="absolute right-3 top-3 rounded-full bg-cn-red px-3 py-1 text-[10px] font-bold text-white">
                              {product.badge}
                            </span>
                          )}
                          <span className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                            {product.subcategory}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex flex-1 flex-col justify-between p-5">
                          <div>
                            <span className="text-[10px] font-medium uppercase tracking-wider text-cn-red">
                              {product.categoryLabel}
                            </span>
                            <h3 className="mt-1 text-sm font-semibold leading-tight text-white">
                              {product.name}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-cn-gray">
                              {product.description}
                            </p>
                          </div>

                          <div className="mt-4 flex items-end justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-white">
                                  {formatPrice(product.price)}
                                </span>
                                {product.priceMax && (
                                  <span className="text-xs text-cn-gray">
                                    – {formatPrice(product.priceMax)}
                                  </span>
                                )}
                              </div>
                              {product.originalPrice && (
                                <span className="text-xs text-cn-gray line-through">
                                  {formatPrice(product.originalPrice)}
                                </span>
                              )}
                            </div>
                            <div className="flex size-9 items-center justify-center rounded-lg bg-cn-red/10 text-cn-red transition-colors group-hover:bg-cn-red group-hover:text-white">
                              <ShoppingBag className="size-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filtered.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-lg text-cn-gray">
                    Keine Produkte gefunden.
                  </p>
                  <button
                    onClick={() => {
                      setSearch("")
                      setActiveCategory("alle")
                    }}
                    className="mt-3 text-sm text-cn-red hover:text-cn-red-light"
                  >
                    Filter zurücksetzen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
