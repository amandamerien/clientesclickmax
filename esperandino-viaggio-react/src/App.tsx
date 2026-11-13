import Nav from './components/Nav'
import Hero from './components/Hero'
import Motion from './components/Motion'
import Why from './components/Why'
import Specs from './components/Specs'
import Colors from './components/Colors'
import Guarantee from './components/Guarantee'
import Price from './components/Price'
import Founder from './components/Founder'
import Faq from './components/Faq'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useFollowScroll } from './hooks/useFollowScroll'

/**
 * Elementos que acompanham a rolagem e param um pouco antes do texto da seção seguinte.
 * `el` e `target` são seletores de data-attributes definidos nos componentes.
 */
const FOLLOW = [
  { el: '[data-follow="lot"]', from: '[data-section="hero"]', target: '[data-section="motion"] [data-head]', gap: 40 },
  // As fotos param antes do fim da própria seção, sem invadir a seção escura seguinte.
  { el: '[data-follow="photo-left"]', from: '[data-section="why"]', target: '[data-section="specs"]', gap: 48 },
  { el: '[data-follow="photo-right"]', from: '[data-section="why"]', target: '[data-section="specs"]', gap: 48 },
]

export default function App() {
  useReveal()
  useFollowScroll(FOLLOW)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Motion />
        <Why />
        <Specs />
        <Colors />
        <Guarantee />
        <Price />
        <Founder />
        <Faq />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
