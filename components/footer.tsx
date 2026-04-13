"use client"

import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-white/5 bg-cn-darker">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="CN Racing GmbH"
              className="mb-4 h-12 w-auto"
            />
            <p className="mb-6 text-sm leading-relaxed text-cn-gray">
              Ihr Spezialist für Corvette C8 Tuning, Camaro Performance und die
              legendäre CN-Cobra. Motorsport-Technologie seit über 30 Jahren.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: FacebookIcon,
                  href: "https://www.facebook.com/CN.Racing.GmbH/",
                  label: "Facebook",
                },
                {
                  icon: InstagramIcon,
                  href: "https://instagram.com/cn_racing_gmbh/",
                  label: "Instagram",
                },
                {
                  icon: YoutubeIcon,
                  href: "https://www.youtube.com/channel/UC5JwWX6y8k9fWw_42PeZGYg",
                  label: "YouTube",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-cn-gray transition-all duration-300 hover:border-cn-red/30 hover:text-cn-red"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Fahrzeuge */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Fahrzeuge
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "CN-Cobra RS3", href: "#fahrzeuge" },
                { label: "CN-Cobra RS4", href: "#fahrzeuge" },
                { label: "CN-Cobra RS6", href: "#fahrzeuge" },
                { label: "Corvette C8 Tuning", href: "#fahrzeuge" },
                { label: "Camaro Tuning", href: "#fahrzeuge" },
                { label: "Gebrauchtfahrzeuge", href: "https://www.cobra-cn.de/gebrauchtfahrzeuge/" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cn-gray transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Leistungsprüfstand", href: "#pruefstand" },
                { label: "Motorsport", href: "#motorsport" },
                { label: "ABS & ESP Systeme", href: "#fahrzeuge" },
                { label: "Online Shop", href: "#shop" },
                { label: "Karriere", href: "#karriere" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cn-gray transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Kontakt
            </h3>
            <address className="space-y-2.5 text-sm not-italic text-cn-gray">
              <p>
                CN Racing GmbH
                <br />
                Sachtlebenstraße 6<br />
                41541 Dormagen
              </p>
              <p>
                <a
                  href="tel:+4921332178460"
                  className="transition-colors hover:text-white"
                >
                  Tel: 02133 / 21 78 460
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@cobra-cn.de"
                  className="transition-colors hover:text-white"
                >
                  info@cobra-cn.de
                </a>
              </p>
              <p>
                Mo–Fr: 08:00 – 16:30 Uhr
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex flex-wrap items-center gap-4 text-xs text-cn-gray">
            <span>&copy; {new Date().getFullYear()} CN Racing GmbH</span>
            <span className="hidden md:inline">·</span>
            <a
              href="https://www.cobra-cn.de/impressum/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Impressum
            </a>
            <a
              href="https://www.cobra-cn.de/datenschutzbelehrung/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Datenschutz
            </a>
            <a
              href="https://www.cobra-cn.de/agb/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              AGB
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-cn-gray/60">
              Geschäftsführer: Christian Nowak · HRB 20699 · USt-ID: DE326723522
            </span>
            <button
              onClick={scrollToTop}
              className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-cn-gray transition-all duration-300 hover:border-cn-red/30 hover:text-cn-red"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
