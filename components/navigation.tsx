"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons"

const navLinks = [
  { label: "Start", href: "/" },
  {
    label: "Fahrzeuge",
    href: "/fahrzeuge/cobra",
    children: [
      {
        group: "Cobra",
        items: [
          { label: "Cobra Übersicht", href: "/fahrzeuge/cobra" },
          { label: "RS3 – 530 PS", href: "/fahrzeuge/cobra/rs3" },
          { label: "RS4 – 580 PS", href: "/fahrzeuge/cobra/rs4" },
          { label: "RS6 – 900 PS", href: "/fahrzeuge/cobra/rs6" },
        ],
      },
      {
        group: "Weitere",
        items: [
          { label: "Corvette C8", href: "/fahrzeuge/corvette" },
          { label: "Camaro", href: "/fahrzeuge/camaro" },
        ],
      },
    ],
  },
  { label: "Leistungsprüfstand", href: "/leistungspruefstand" },
  { label: "Motorsport", href: "/motorsport" },
  { label: "Galerie", href: "/galerie" },
  { label: "Philosophie", href: "/philosophie" },
  { label: "Shop", href: "/shop" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Main Nav */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 border-b border-white/5 bg-cn-darker/95 backdrop-blur-xl"
            : "top-0 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:h-22 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="CN Racing GmbH Logo"
              className="h-[100px] w-auto lg:h-[120px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-0.5 lg:flex" ref={dropdownRef}>
            {navLinks.map((link) => {
              const hasChildren = "children" in link && link.children
              const active = isActive(link.href)

              if (hasChildren) {
                return (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                        active ? "text-white" : "text-cn-gray hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`size-3 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                      {active && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 bg-cn-red"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          className="absolute left-0 top-full mt-2 min-w-[280px] rounded-xl border border-white/10 bg-cn-darker/98 p-4 shadow-2xl backdrop-blur-xl"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.children!.map((group) => (
                            <div key={group.group} className="mb-3 last:mb-0">
                              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-cn-red">
                                {group.group}
                              </span>
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                                    pathname === item.href
                                      ? "bg-cn-red/10 font-medium text-white"
                                      : "text-cn-gray hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                    active ? "text-white" : "text-cn-gray hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && !hasChildren && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 bg-cn-red"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Desktop */}
          <Link
            href="/kontakt"
            className="hidden rounded-full bg-cn-red px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20 lg:block"
          >
            Anfrage
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-10 p-2 text-white lg:hidden"
            aria-label={isMobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-cn-darker/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-1 overflow-y-auto py-20">
              {navLinks.map((link, i) => {
                const hasChildren = "children" in link && link.children

                if (hasChildren) {
                  return (
                    <div key={link.label} className="w-full text-center">
                      <motion.button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.label ? null : link.label
                          )
                        }
                        className="inline-flex items-center gap-2 text-xl font-light tracking-wide uppercase text-white/70 hover:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                      >
                        {link.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileExpanded === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 py-3">
                              {link.children!.map((group) =>
                                group.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block text-base ${
                                      pathname === item.href
                                        ? "text-cn-red"
                                        : "text-white/50 hover:text-white"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <motion.div key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-xl font-light tracking-wide uppercase transition-colors ${
                        isActive(link.href)
                          ? "text-cn-red"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="block"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className="border-t border-white/5 p-6 text-center text-sm text-cn-gray">
              <a href="tel:+4921332178460" className="block py-1 hover:text-white">
                02133 / 21 78 460
              </a>
              <a
                href="mailto:info@cobra-cn.de"
                className="block py-1 hover:text-white"
              >
                info@cobra-cn.de
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
