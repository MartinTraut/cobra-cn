"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  tag: string
  title: string
  titleAccent?: string
  description?: string
  image?: string
  breadcrumbs?: Breadcrumb[]
}

export function PageHeader({
  tag,
  title,
  titleAccent,
  description,
  image,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cn-darker/80 via-cn-darker/95 to-cn-darker" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-b from-cn-darker via-background to-background" />
      )}

      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cn-red/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cn-gray">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Start
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <span className="text-white/20">/</span>
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/60">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cn-red">
            {tag}
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-6xl">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-gradient">{titleAccent}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-cn-gray">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
