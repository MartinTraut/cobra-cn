"use client"

import { Briefcase, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function KarriereSection() {
  return (
    <section id="karriere" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <ScrollReveal>
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
                Karriere
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-normal text-white lg:text-5xl">
                Werde Teil
                <br />
                unseres Teams.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-cn-gray">
                Du brennst für Motorsport und Fahrzeugtechnik? CN Racing sucht
                engagierte Fachkräfte, die gemeinsam mit uns an außergewöhnlichen
                Projekten arbeiten.
              </p>

              {/* Job Card */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cn-red/10">
                    <Briefcase className="size-5 text-cn-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Kfz-Mechatroniker / Werkstatthelfer / Schlosser (m/w/d)
                    </h3>
                    <span className="text-xs text-cn-gray">
                      Festanstellung · Vollzeit
                    </span>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-cn-gray">
                    <MapPin className="size-3" />
                    41541 Dormagen
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-cn-gray">
                    <Clock className="size-3" />
                    Mo–Fr
                  </span>
                </div>

                <div className="mb-4 border-t border-white/5 pt-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Aufgabenbereiche
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Prototypenfertigung im Motorsportbereich",
                      "Restauration historischer Rennfahrzeuge",
                      "Sportwagenoptimierung",
                      "Komponenten-Montage und Wartungsarbeiten",
                    ].map((task) => (
                      <div
                        key={task}
                        className="flex items-start gap-2 text-sm text-cn-gray"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 flex-shrink-0 text-cn-red" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:info@cobra-cn.de?subject=Bewerbung%20Kfz-Mechatroniker"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-cn-red px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-cn-red-light hover:shadow-lg hover:shadow-cn-red/20"
                >
                  Jetzt bewerben
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex flex-col justify-center">
              <h3 className="mb-6 text-xl font-bold text-white">
                Das erwartet dich bei CN Racing
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Einzigartige Projekte",
                    desc: "Arbeite an Hochleistungsfahrzeugen, die es kein zweites Mal gibt – von der CN-Cobra bis zur modifizierten Corvette C8.",
                  },
                  {
                    title: "Motorsport-Atmosphäre",
                    desc: "Erlebe Trackdays und Rennveranstaltungen hautnah mit – Technik direkt an der Strecke.",
                  },
                  {
                    title: "Tradition & Innovation",
                    desc: "Über 30 Jahre Erfahrung verbinden sich mit modernster Technik und permanenter Weiterentwicklung.",
                  },
                  {
                    title: "Familiäres Team",
                    desc: "Flache Hierarchien, direkte Wege und ein Team, das Leidenschaft für Fahrzeuge teilt.",
                  },
                ].map((benefit, i) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-cn-red/30 text-xs font-bold text-cn-red">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-cn-gray">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
