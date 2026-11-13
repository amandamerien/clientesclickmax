import { useEffect } from 'react'

export type FollowItem = {
  /** seletor do elemento que acompanha a rolagem */
  el: string
  /** seletor da seção de origem (define o ponto em que ele "gruda") */
  from: string
  /** seletor do elemento onde ele deve parar */
  target: string
  /** folga, em px, antes do alvo */
  gap: number
}

type Measured = {
  el: HTMLElement
  top: number
  h: number
  pin: number
  max: number
}

/** Posição no documento ignorando transforms (o reveal usa translateY). */
function docTop(el: HTMLElement | null) {
  let y = 0
  while (el) {
    y += el.offsetTop
    el = el.offsetParent as HTMLElement | null
  }
  return y
}

const MOBILE = 900

/**
 * Faz elementos acompanharem a rolagem (como `position: sticky`) e pararem
 * um pouco antes de um alvo em outra seção. Desligado em telas pequenas.
 */
export function useFollowScroll(items: FollowItem[]) {
  useEffect(() => {
    let data: Measured[] = []
    let ticking = false

    const update = () => {
      if (window.innerWidth <= MOBILE) {
        data.forEach((d) => (d.el.style.transform = ''))
        return
      }
      data.forEach((d) => {
        const off = Math.max(0, Math.min(window.scrollY + d.pin - d.top, d.max))
        const rot = getComputedStyle(d.el).getPropertyValue('--rot').trim()
        d.el.style.transform = (off > 0 ? `translateY(${off}px) ` : '') + (rot ? `rotate(${rot})` : '')
      })
    }

    const measure = () => {
      data = items.flatMap((f) => {
        const el = document.querySelector<HTMLElement>(f.el)
        const from = document.querySelector<HTMLElement>(f.from)
        const target = document.querySelector<HTMLElement>(f.target)
        if (!el || !from || !target) return []
        el.style.transform = ''
        const top = docTop(el)
        const h = el.offsetHeight
        return [{ el, top, h, pin: top - docTop(from), max: docTop(target) - f.gap - h - top }]
      })
      update()
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('load', measure)
    document.fonts?.ready.then(measure)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
      data.forEach((d) => (d.el.style.transform = ''))
    }
  }, [items])
}
