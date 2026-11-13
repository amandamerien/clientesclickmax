/**
 * Todo o conteúdo editável da página fica aqui.
 * Troque textos, números e links sem mexer nos componentes.
 */

export const brand = {
  name: 'Esperandino Viaggio',
  cnpj: '00.000.000/0001-00',
  year: 2026,
  reserveHref: '#reservar',
  howHref: '#sinal',
}

export const hero = {
  kicker: ['Pré-venda', 'reserva exclusiva'],
  title: 'Chegue ao portão sem esforço, com o celular carregado.',
  lead: 'Mala elétrica de cabine com design italiano. Você senta, ela anda. Do táxi ao portão sem esforço, com o celular carregado.',
  primary: 'Reservar minha vaga',
  secondary: 'Como funciona',
  cells: [
    { title: 'Porta USB-C', text: 'Celular sempre carregado' },
    { title: 'Embarca com você', text: 'Bateria liberada para voo' },
  ],
  lot: {
    label: 'Reserva exclusiva',
    reserved: 31,
    total: 50,
    rows: [
      { k: 'Entrega prevista', v: 'Março 2027' },
      { k: 'Preço de lote', v: 'Travado na reserva' },
    ],
    cta: 'Reservar minha vaga',
  },
}

export const motion = {
  eyebrow: 'Em movimento',
  title: ['Do táxi ao portão,', 'sem puxar nada.'],
  lead: 'Guidão telescópico, acelerador no polegar e um motor silencioso. Quando chega a hora de embarcar, ela dobra e vira uma mala comum.',
  frames: [
    { label: 'Suba e vá', text: ['Estenda o guidão.', 'Acelere com o polegar.'] },
    { label: 'Leve na mão', text: ['Recolha o guidão.', 'Carregue pela alça.'] },
    { label: 'Vá mais longe', text: ['Roda motorizada', 'para agilizar o trajeto.'] },
  ],
}

export const why = {
  eyebrow: 'Por que elétrica',
  title: 'Feita para quem passa mais tempo em aeroportos do que gostaria.',
}

export const specs = {
  eyebrow: 'Especificações',
  title: ['Os números', 'que importam.'],
  seal: 'Bateria removível · dentro do limite para cabine',
  cta: 'Reservar minha vaga',
  items: [
    { value: '10', unit: 'km/h', label: 'Velocidade máx.' },
    { value: '12', unit: 'km', label: 'Autonomia' },
    { value: '110', unit: 'kg', label: 'Carga máxima' },
    { value: '8,5', unit: 'kg', label: 'Peso' },
    { value: '26', unit: 'L', label: 'Capacidade' },
    { value: '3', unit: 'h', label: 'Recarga completa' },
    { value: 'USB', unit: 'C', label: 'Carregamento' },
    { value: 'TSA', unit: '', label: 'Cadeado', peek: true },
  ],
}

export const colors = {
  eyebrow: 'Design',
  title: ['Duas cores.', 'Uma assinatura.'],
  lead: 'Casco escovado, placa do logo em metal com relevo e a faixa tricolor que marca a origem. Cada detalhe foi pensado para ser notado de perto.',
  options: [
    { id: 'dark-blue-gray', name: 'Dark Blue Gray', hex: '#272D3B' },
    { id: 'ivory-white', name: 'Ivory White', hex: '#D7D7D7' },
  ],
}

export const guarantee = {
  eyebrow: 'O que o sinal garante',
  title: ['R$ 100 que', 'voltam para você.'],
  lead: 'O sinal não é uma taxa. É a sua posição na fila, e ele é descontado do valor final no dia do lançamento.',
  items: [
    { title: 'Vaga no primeiro lote', text: 'Entrega antes da venda pública.' },
    { title: 'Preço de lançamento travado', text: 'Mesmo que o preço público suba depois.' },
    { title: 'R$ 100 abatidos do valor final', text: 'O sinal vira desconto na compra.' },
    { title: 'Reembolso integral se desistir', text: 'A qualquer momento antes do lançamento, sem perguntas.' },
    { title: 'Acesso ao grupo com o fundador', text: 'Bastidores da produção e decisões em conjunto.' },
  ],
}

export const price = {
  eyebrow: 'Investimento',
  title: ['Preço de', 'pré-venda'],
  lead: 'Quem reserva agora paga o preço de lote, mesmo que o valor público suba no lançamento.',
  publicPrice: 'Valor público previsto R$ 9.900',
  currency: 'R$',
  value: '3.450',
  cta: 'Reservar com R$ 100',
  fine: 'Reembolsável · abatido do valor final',
}

export const founder = {
  eyebrow: 'Origem',
  title: ['Nasceu de uma', 'conexão perdida', 'em Milão.'],
  quote: '"Eu corria pelo terminal arrastando uma mala de dois mil reais e pensei: isso aqui deveria estar me levando."',
  lead: 'Esperandino Viaggio une a engenharia de mobilidade elétrica ao acabamento que a gente espera de um produto italiano. Produzida em pequenos lotes, cada unidade é numerada.',
  name: 'John Esperandino',
  role: 'Fundador · Esperandino Viaggio',
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'Antes de reservar.',
  items: [
    { q: 'Posso embarcar com a bateria?', a: 'Sim. A bateria é removível e fica abaixo do limite de Wh exigido pelas companhias aéreas. Você retira em segundos e leva na mão.' },
    { q: 'O sinal de R$ 100 é reembolsável?', a: 'Integralmente, a qualquer momento antes do lançamento. Basta pedir no grupo ou por e-mail.' },
    { q: 'Quando recebo a mala?', a: 'O primeiro lote tem entrega prevista para março de 2027. Quem reserva recebe antes da venda pública.' },
    { q: 'Qual a garantia?', a: 'Dois anos para motor e bateria, com assistência no Brasil.' },
    { q: 'Ela cabe como bagagem de mão?', a: 'Sim. As dimensões seguem o padrão de cabine das principais companhias nacionais e internacionais.' },
    { q: 'Como pago o valor restante?', a: 'No lançamento, à vista com desconto ou em até 12 vezes no cartão. O sinal é descontado automaticamente.' },
  ],
}

export const reserve = {
  eyebrow: 'Reserve a sua',
  title: ['Garanta sua', 'reserva agora'],
  lead: 'Preencha, pague o sinal e entre no grupo.',
  fields: [
    { id: 'nome', label: 'Nome completo', type: 'text', placeholder: 'Como você gostaria de ser chamado', autoComplete: 'name' },
    { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com', autoComplete: 'email' },
    { id: 'whatsapp', label: 'WhatsApp', type: 'tel', placeholder: '(11) 90000-0000', autoComplete: 'tel' },
  ],
  cta: 'Garantir minha vaga · R$ 100',
  fine: 'Reembolsável e abatido do valor final. Seus dados não são compartilhados.',
}

export const footer = {
  links: [
    { label: 'Política do sinal', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}
