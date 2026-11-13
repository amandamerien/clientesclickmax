import { brand, footer } from '../content/site'
import { Monogram } from './Icons'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`wrap ${s.row}`}>
        <p className={s.brand}>
          <Monogram className={s.mono} />
          {brand.name}
        </p>
        <nav className={s.links} aria-label="Rodapé">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <p>© {brand.year} · CNPJ {brand.cnpj}</p>
      </div>
    </footer>
  )
}
