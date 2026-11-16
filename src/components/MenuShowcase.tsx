import { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { MENU_ITEMS, MenuCategory, getWhatsAppUrl } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

type TabFilter = 'todos' | MenuCategory;

const TABS: { id: TabFilter; label: string }[] = [
  { id: 'todos', label: 'Todos os Destaques' },
  { id: 'eventos', label: 'Eventos & Banquetaria' },
  { id: 'coqueteis', label: 'Coquetéis' },
  { id: 'encomendas', label: 'Pratos Prontos por Kg' },
];

export function MenuShowcase() {
  const [activeTab, setActiveTab] = useState<TabFilter>('todos');
  const { ref, isVisible } = useReveal<HTMLElement>(0.1);

  const filteredItems =
    activeTab === 'todos'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="cardapio" ref={ref} className="bg-[#FAF8F5] py-20 text-[#1A1D1B] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header + Category Tabs */}
        <div
          className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9E7B2F]">
              Cardápio &amp; Encomendas
            </span>
            <h2 className="mt-3 font-serif-editorial text-3xl font-semibold leading-tight text-[#141715] sm:text-4xl lg:text-[2.85rem]">
              Destaques da nossa cozinha gastronômica
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#524F48] sm:text-base">
              Explore nossas sugestões clássicas de banquetes, coquetéis e pratos prontos por
              quilo. Todos os menus podem ser adaptados ao seu evento.
            </p>
          </div>

          {/* Navigable Tabs */}
          <div
            className="flex flex-wrap gap-2 rounded-2xl border border-[#141715]/10 bg-white p-1.5 shadow-sm"
            role="tablist"
            aria-label="Categorias do cardápio"
          >
            {TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    active
                      ? 'bg-[#0F1110] text-[#D4AF37] shadow-md'
                      : 'text-[#524F48] hover:bg-[#FAF8F5] hover:text-[#141715]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(15,17,16,0.12)] ${
                item.highlight
                  ? 'border-[#C5A059] ring-1 ring-[#C5A059]/30'
                  : 'border-[#141715]/10 hover:border-[#C5A059]'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161917]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1110]/70 via-transparent to-transparent" />
                {item.badge && (
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#0F1110]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] backdrop-blur-md">
                    <Sparkles className="h-3 w-3" />
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif-editorial text-2xl font-semibold leading-snug text-[#141715]">
                      {item.name}
                    </h3>
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#5C5952]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#141715]/10 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`font-serif-editorial text-xl font-semibold ${
                        item.highlight ? 'text-[#9E7B2F]' : 'text-[#141715]'
                      }`}
                    >
                      {item.priceLabel}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                      item.highlight
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0F1110] shadow-[0_8px_24px_rgba(197,160,89,0.3)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.45)]'
                        : 'bg-[#0F1110] text-[#F5F3EF] hover:bg-[#1E221F] hover:text-[#D4AF37]'
                    }`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {item.ctaLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
