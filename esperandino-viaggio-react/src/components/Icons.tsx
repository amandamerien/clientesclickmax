type IconProps = { className?: string }

/** Monograma da marca (ampulheta). */
export function Monogram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 19 17" aria-hidden="true" focusable="false">
      <path d="M9.1 8.41 17.02.49H1.18l7.92 7.92Zm0 0 7.92 7.92H1.18l7.92-7.92Z" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

/** Check duplo usado nas chamadas rápidas. */
export function DoubleTick({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 12.5 7.5 17 17 7.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".35" />
      <path d="M8 12.5 12.5 17 22 7.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Barra inclinada do contador "31 / 50". */
export function Slash({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 13 48" aria-hidden="true" focusable="false">
      <path d="M8.2 0h4.59L4.59 47.68H0L8.2 0Z" fill="currentColor" />
    </svg>
  )
}
