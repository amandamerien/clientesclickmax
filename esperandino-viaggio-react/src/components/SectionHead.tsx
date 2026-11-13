import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  /** Linhas do título; cada item vira uma linha. */
  title: string[] | string
  spaced?: boolean
  children?: ReactNode
  className?: string
}

/** Eyebrow + título, com animação de revelação. */
export default function SectionHead({ eyebrow, title, spaced, children, className }: Props) {
  const lines = Array.isArray(title) ? title : [title]
  return (
    <div className={className}>
      <p className={`eyebrow ${spaced ? 'eyebrow--spaced' : ''}`} data-reveal>{eyebrow}</p>
      <h2 data-reveal>
        {lines.map((l, i) => (
          <span key={l}>
            {i > 0 && <br />}
            {l}
          </span>
        ))}
      </h2>
      {children}
    </div>
  )
}
