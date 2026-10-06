'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    const onModalToggle = (event: Event) => {
      const paused = (event as CustomEvent<{ paused?: boolean }>).detail?.paused;
      if (paused) lenis.stop()
      else lenis.start()
    }
    window.addEventListener('journal-modal:toggle', onModalToggle)

    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      lenis.destroy()
      window.removeEventListener('journal-modal:toggle', onModalToggle)
      lenisRef.current = null
      rafRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!pathname.startsWith('/projects/')) return

    const reset = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }

    reset()
    const frame = requestAnimationFrame(reset)
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return <>{children}</>
}
