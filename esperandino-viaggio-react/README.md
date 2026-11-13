# Esperandino Viaggio · Pré-venda

Landing page de pré-venda da mala elétrica de cabine. React + Vite + TypeScript, sem dependências de UI.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4341
npm run build    # gera a pasta dist/ pronta para publicar
npm run preview  # testa o build localmente
```

## Estrutura

```
src/
  content/site.ts        # todos os textos, números e links da página (edite aqui)
  components/            # uma pasta lógica por seção, cada uma com seu CSS Module
    Nav, Hero, Motion, Why, Specs, Colors, Guarantee, Price, Founder, Faq, Reserve, Footer
    SectionHead.tsx      # eyebrow + título reutilizável
    Icons.tsx            # monograma, check duplo e barra do contador
  hooks/
    useReveal.ts         # animação de entrada ([data-reveal])
    useFollowScroll.ts   # card do lote e fotos acompanham a rolagem até a seção seguinte
  styles/global.css      # tokens (cores, fontes), tipografia, botões
  assets/images/         # webp já otimizados, importados pelos componentes
  assets/fonts/          # Aspekta (variável)
```

## Decisões

- **Conteúdo separado do layout**: `src/content/site.ts` concentra copy, preço, specs, FAQ e links.
- **CSS Modules**: cada seção tem seu escopo; tokens globais em `styles/global.css`.
- **Imagens**: webp, com `width`/`height` para evitar layout shift, `loading="lazy"` fora da hero e `fetchpriority="high"` na hero.
- **Acessibilidade**: swatches como `radiogroup`, formulário com `label`/`autocomplete`, `aria-live` na confirmação, `prefers-reduced-motion` respeitado.
- **Mobile**: efeitos de rolagem desligados abaixo de 900px; hero vira foto + texto empilhados.

## Pendências com o cliente

- Checkout do sinal (R$ 100): ver `TODO` em `components/Reserve.tsx`.
- Preço (R$ 3.450), specs, CNPJ e textos do fundador são placeholders em `content/site.ts`.
- Foto da cor Ivory White é uma versão dessaturada da Dark Blue Gray; substituir por render real em `assets/images/cor-ivory-white.webp`.
