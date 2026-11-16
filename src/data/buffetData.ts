export const BRAND = {
  name: 'Lana Buffet',
  tagline: 'Serviço de Bufê, Coquetel & Restaurante',
  city: 'Lages • SC',
  region: 'Lages & Serra Catarinense — SC',
  address: 'Rua Júlia Castelo Koeche, 224, Lages, Santa Catarina, CEP 88509-030',
  shortAddress: 'Rua Júlia Castelo Koeche, 224 — Lages, SC',
  cep: 'CEP 88509-030',
  phoneDisplay: '(49) 99809-8800',
  whatsappNumber: '5549998098800',
  emailPrimary: 'buffetlanas@gmail.com',
  emailSecondary: 'iedadutra1@hotmail.com',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Julia+Castelo+Koeche+224+Lages+SC+88509-030',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Rua%20J%C3%BAlia%20Castelo%20Koeche%2C%20224%2C%20Lages%20-%20SC%2C%2088509-030&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
  heroMain:
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85',
  heroSideTop:
    'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=900&q=80',
  heroSideBottom:
    'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=900&q=80',
  natureSpace:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  lasagna:
    'https://images.unsplash.com/photo-1572015124294-488267231e35?auto=format&fit=crop&w=1000&q=80',
  filet:
    'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1000&q=80',
  risotto:
    'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1000&q=80',
  charcuterie:
    'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1000&q=80',
  diningService:
    'https://images.unsplash.com/photo-1556742205-e10c9486e506?auto=format&fit=crop&w=1000&q=80',
  gourmetPlate:
    'https://images.unsplash.com/photo-1625173616412-7b403d49a41e?auto=format&fit=crop&w=1000&q=80',
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'buffet-completo',
    number: '01',
    title: 'Buffet Completo para Eventos',
    description:
      'Almoços e jantares completos para casamentos, formaturas, aniversários e eventos corporativos em Lages e região.',
    image: IMAGES.heroMain,
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento para Buffet Completo para Evento com o Lana Buffet.',
  },
  {
    id: 'coqueteis-finger-foods',
    number: '02',
    title: 'Coquetéis & Finger Foods',
    description:
      'Entradas finas, salgados artesanais e serviço volante dinâmico para recepções elegantes e confraternizações.',
    image: IMAGES.heroSideTop,
    whatsappMessage:
      'Olá! Gostaria de cotar o formato de Coquetéis & Finger Foods do Lana Buffet.',
  },
  {
    id: 'menus-degustacao',
    number: '03',
    title: 'Menus Personalizados & Degustação',
    description:
      'Cardápios desenhados conforme o perfil e número de convidados, com opção de degustação prévia sem compromisso.',
    image: IMAGES.heroSideBottom,
    whatsappMessage:
      'Olá! Gostaria de agendar uma sessão de degustação e montar um menu personalizado.',
  },
  {
    id: 'pratos-prontos',
    number: '04',
    title: 'Pratos Prontos & Encomendas',
    description:
      'Refeições frescas preparadas sob encomenda por quilo para almoços em família, reuniões íntimas e datas especiais.',
    image: IMAGES.lasagna,
    whatsappMessage:
      'Olá! Gostaria de fazer uma encomenda de Pratos Prontos por quilo com o Lana Buffet.',
  },
];

export type MenuCategory = 'eventos' | 'coqueteis' | 'encomendas';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  priceLabel: string;
  highlight?: boolean;
  badge?: string;
  image: string;
  ctaLabel: string;
  whatsappMessage: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'lasanha-camarao',
    category: 'encomendas',
    name: 'Lasanha de Camarão (1 Kg)',
    description:
      'Massa artesanal intercalada com molho cremoso de camarões selecionados e gratinada na medida certa.',
    priceLabel: 'R$ 41,00 / Kg',
    highlight: true,
    badge: 'Mais Vendido',
    image: IMAGES.lasagna,
    ctaLabel: 'Encomendar via WhatsApp',
    whatsappMessage:
      'Olá! Gostaria de encomendar a Lasanha de Camarão (R$ 41,00 / Kg) do Lana Buffet.',
  },
  {
    id: 'file-madeira',
    category: 'eventos',
    name: 'Filé Mignon ao Molho Madeira',
    description:
      'Cortes nobres selados ao ponto, finalizados com redução clássica de vinho Madeira e champignons frescos.',
    priceLabel: 'Sob Consulta / Personalizável',
    badge: 'Clássico de Banquete',
    image: IMAGES.filet,
    ctaLabel: 'Solicitar Orçamento',
    whatsappMessage:
      'Olá! Gostaria de incluir Filé Mignon ao Molho Madeira no orçamento do meu evento.',
  },
  {
    id: 'risoto-funghi',
    category: 'eventos',
    name: 'Risoto de Funghi Secchi',
    description:
      'Arroz arbóreo cremoso preparado com funghi hidratado, manteiga de ervas e parmesão maturado.',
    priceLabel: 'Sob Consulta / Personalizável',
    image: IMAGES.risotto,
    ctaLabel: 'Solicitar Orçamento',
    whatsappMessage:
      'Olá! Gostaria de consultar o Risoto de Funghi Secchi para o cardápio do meu evento.',
  },
  {
    id: 'ilha-frios',
    category: 'coqueteis',
    name: 'Ilha de Frios & Antepastos',
    description:
      'Curadoria de queijos finos, charcutaria artesanal, pães rústicos, geleias da serra e frutas frescas.',
    priceLabel: 'Sob Consulta / Personalizável',
    badge: 'Destaque Recepção',
    image: IMAGES.charcuterie,
    ctaLabel: 'Cotar Ilha de Frios',
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento para Ilha de Frios & Antepastos.',
  },
  {
    id: 'coquetel-volante',
    category: 'coqueteis',
    name: 'Coquetel Volante & Canapés Finos',
    description:
      'Seleção de finger foods quentes e frios servidos à francesa com agilidade e apresentação impecável.',
    priceLabel: 'Sob Consulta / Personalizável',
    image: IMAGES.heroSideTop,
    ctaLabel: 'Cotar Coquetel Volante',
    whatsappMessage:
      'Olá! Gostaria de um orçamento para Coquetel Volante & Canapés Finos.',
  },
  {
    id: 'menu-familia-kg',
    category: 'encomendas',
    name: 'Assados, Massas & Guarnições por Kg',
    description:
      'Opções frescas preparadas no dia sob encomenda para almoços de domingo, celebrações íntimas e feriados.',
    priceLabel: 'Sob Consulta / Personalizável',
    image: IMAGES.gourmetPlate,
    ctaLabel: 'Consultar Cardápio por Kg',
    whatsappMessage:
      'Olá! Gostaria de consultar as opções de assados e pratos prontos por quilo para encomenda.',
  },
];

export interface ReviewItem {
  id: string;
  author: string;
  year?: string;
  rating: number;
  text: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Jaise Dutra',
    year: '2026',
    rating: 5,
    text: 'O novo restaurante tem um espaço aconchegante, dá uma paz em meio a natureza. As comidas frescas e quentinhas, atendimento cortês e um ótimo custo-benefício.',
  },
  {
    id: 'rev-2',
    author: 'Adriano Correa',
    year: '2026',
    rating: 5,
    text: 'Muito bom, comida e local, top.',
  },
  {
    id: 'rev-3',
    author: 'Cleiton Dutra',
    rating: 5,
    text: 'Excelente preparação e variedade!',
  },
  {
    id: 'rev-4',
    author: 'Jaise Dutra',
    rating: 5,
    text: 'Super recomendo, comida com sabor caseiro, ótima qualidade, além do atendimento excepcional.',
  },
];

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: IMAGES.heroMain,
    title: 'Mesas Postas & Banquetes',
    caption: 'Montagem editorial para casamentos, formaturas e grandes recepções na Serra Catarinense.',
  },
  {
    id: 'gal-2',
    src: IMAGES.natureSpace,
    title: 'Restaurante em Meio à Natureza',
    caption: 'Ambiente aconchegante e tranquilo em Lages para almoços, degustações e eventos íntimos.',
  },
  {
    id: 'gal-3',
    src: IMAGES.heroSideTop,
    title: 'Coquetéis & Finger Foods',
    caption: 'Canapés artesanais e entradas finas pensadas para recepções dinâmicas.',
  },
  {
    id: 'gal-4',
    src: IMAGES.lasagna,
    title: 'Lasanha de Camarão Artesanal',
    caption: 'Um dos clássicos mais pedidos por quilo: massa fresca, camarões selecionados e gratinado dourado.',
  },
  {
    id: 'gal-5',
    src: IMAGES.charcuterie,
    title: 'Ilha de Frios & Antepastos',
    caption: 'Combinação equilibrada de queijos, charcutaria e acompanhamentos regionais.',
  },
  {
    id: 'gal-6',
    src: IMAGES.filet,
    title: 'Alta Gastronomia para Eventos',
    caption: 'Cortes selecionados e molhos clássicos preparados com rigor e carinho.',
  },
];
