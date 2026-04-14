"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons"
import { ScrollReveal } from "./scroll-reveal"

export function KontaktSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Kontaktanfrage über Website")
    const body = encodeURIComponent(
      `Name: ${formState.name}\nE-Mail: ${formState.email}\n\nNachricht:\n${formState.message}`
    )
    window.location.href = `mailto:info@cobra-cn.de?subject=${subject}&body=${body}`
  }

  return (
    <section id="kontakt" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider absolute left-0 right-0 top-0" />

      {/* Background glow */}
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cn-red/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
              Kontakt
            </span>
            <h2 className="mb-4 text-4xl font-bold tracking-normal text-white lg:text-5xl">
              Sprechen Sie
              <br />
              mit uns.
            </h2>
            <p className="text-lg text-cn-gray">
              Ob Tuning-Projekt, Leistungsmessung oder individuelle Beratung –
              wir sind für Sie da.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8"
            >
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-cn-gray"
                  >
                    Ihr Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cn-red/50 focus:ring-1 focus:ring-cn-red/20"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-cn-gray"
                  >
                    Ihre E-Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cn-red/50 focus:ring-1 focus:ring-cn-red/20"
                    placeholder="max@beispiel.de"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-cn-gray"
                >
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cn-red/50 focus:ring-1 focus:ring-cn-red/20"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                />
              </div>
              <motion.button
                type="submit"
                className="group flex items-center gap-2 rounded-full bg-cn-red px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
                whileTap={{ scale: 0.98 }}
              >
                Nachricht senden
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Address */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-cn-red/10">
                    <MapPin className="size-4 text-cn-red" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Adresse</h3>
                </div>
                <p className="text-sm leading-relaxed text-cn-gray">
                  CN Racing GmbH
                  <br />
                  Sachtlebenstraße 6<br />
                  41541 Dormagen
                </p>
              </div>

              {/* Phone & Mail */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="space-y-3">
                  <a
                    href="tel:+4921332178460"
                    className="flex items-center gap-3 text-sm text-cn-gray transition-colors hover:text-white"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-cn-red/10">
                      <Phone className="size-4 text-cn-red" />
                    </div>
                    02133 / 21 78 460
                  </a>
                  <a
                    href="mailto:info@cobra-cn.de"
                    className="flex items-center gap-3 text-sm text-cn-gray transition-colors hover:text-white"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-cn-red/10">
                      <Mail className="size-4 text-cn-red" />
                    </div>
                    info@cobra-cn.de
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-cn-red/10">
                    <Clock className="size-4 text-cn-red" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Öffnungszeiten
                  </h3>
                </div>
                <div className="space-y-1.5 text-sm text-cn-gray">
                  <div className="flex justify-between">
                    <span>Montag – Freitag</span>
                    <span className="font-medium text-white">
                      08:00 – 16:30
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span>nach Absprache</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span>geschlossen</span>
                  </div>
                </div>
              </div>

              {/* Social */}
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
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cn-gray transition-all duration-300 hover:border-cn-red/30 hover:bg-cn-red/10 hover:text-cn-red"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Google Maps */}
        <ScrollReveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.5!2d6.8317!3d51.0964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b7a5a5a5a5a5%3A0x0!2sSachtlebenstra%C3%9Fe%206%2C%2041541%20Dormagen!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="350"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CN Racing GmbH Standort Dormagen"
              className="w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
