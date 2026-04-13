"use client"
import React, { useRef } from "react"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const rotate = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [70, 30, 5, 0])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    isMobile ? [0.5, 0.7, 0.9, 0.95] : [0.6, 0.8, 0.95, 1]
  )
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="relative h-[200vh] sm:h-[250vh] md:h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 md:px-16">
        <div
          className="relative w-full py-10 md:py-24"
          style={{ perspective: "1000px" }}
        >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} translate={translate} scale={scale}>
            {children}
          </Card>
        </div>
      </div>
    </div>
  )
}

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>
  titleComponent: React.ReactNode
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="-mt-12 mx-auto h-[30rem] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-cn-darker shadow-2xl md:h-[40rem] md:rounded-3xl"
    >
      <div className="h-full w-full overflow-hidden">{children}</div>
    </motion.div>
  )
}
