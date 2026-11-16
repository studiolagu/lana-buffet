import { ArrowDownRight, MessageCircle, Star, Sparkles, UtensilsCrossed, Trees } from 'lucide-react';
import { IMAGES, getWhatsAppUrl } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

const CREDENTIALS = [
  {
    icon: Star,
    title: 'Nota 5.0',
    subtitle: 'Satisfação no Google',
  },
  {
    icon: UtensilsCrossed,
    title: 'Sob Medida',
    subtitle: 'Pequenas reuniões a grandes eventos',
  },
  {
    icon: Sparkles,
    title: 'Degustação',
    subtitle: 'Agendamento sem compromisso',
  },
  {
    icon: Trees,
    title: 'Espaço Próprio',
    subtitle: 'Restaurante em meio à natureza',
  },
];

export function Hero() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.05);

  const whatsappHero = getWhatsAppUrl(
    'Olá! Vi o site do Lana Buffet e gostaria de pedir um orçamento para meu evento ou encomenda.'
  );

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative overflow-hidden bg-[#0F1110] pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Subtle ambient editorial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/[0.06] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-[#C5A059]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Editorial Copy Column */}
          <div
            className={`lg:col-span-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/30 bg-[#161917]/90 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Gastronomia para Eventos &amp; Encomendas • Lages - SC
            </div>

            <h1 className="mt-7 font-serif-editorial text-4xl font-medium leading-[1.08] tracking-tight text-[#F5F3EF] sm:text-5xl lg:text-[3.55rem]">
              Transformamos celebrações em{' '}
              <span className="italic text-[#D4AF37]">experiências gastronômicas</span>{' '}
              memoráveis.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A3A098] sm:text-lg">
              Do coquetel intimista aos grandes banquetes na Serra Catarinense. Sabor afetivo,
              ingredientes selecionados e atendimento impecável.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={whatsappHero}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#0F1110] shadow-[0_10px_32px_rgba(212,175,55,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(212,175,55,0.42)]"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir Orçamento no WhatsApp
              </a>

              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-transparent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F3EF] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
              >
                Conhecer Cardápios
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Static High-Res Editorial Photo Grid (Zero Video, Smooth Hover) */}
          <div
            className={`lg:col-span-6 transition-all duration-1000 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-12 gap-3.5 sm:gap-4">
              {/* Main Vertical Banquet Frame */}
              <div className="group relative col-span-7 overflow-hidden rounded-2xl border border-white/10 bg-[#161917] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={IMAGES.heroMain}
                    alt="Mesa de banquete sofisticada montada para eventos"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1110]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    Banquetaria
                  </span>
                  <p className="mt-0.5 font-serif-editorial text-lg text-[#F5F3EF]">
                    Casamentos &amp; Grandes Eventos
                  </p>
                </div>
              </div>

              {/* Right Column Stacked Frames */}
              <div className="col-span-5 flex flex-col gap-3.5 sm:gap-4">
                <div className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#161917] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50">
                  <div className="aspect-[4/3] h-full w-full overflow-hidden">
                    <img
                      src={IMAGES.heroSideTop}
                      alt="Finger foods e canapés artesanais para coquetéis"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1110]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <p className="font-serif-editorial text-base text-[#F5F3EF]">
                      Finger Foods
                    </p>
                  </div>
                </div>

                <div className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#161917] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50">
                  <div className="aspect-[4/3] h-full w-full overflow-hidden">
                    <img
                      src={IMAGES.heroSideBottom}
                      alt="Ambiente gastronômico acolhedor para recepções"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1110]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <p className="font-serif-editorial text-base text-[#F5F3EF]">
                      Atendimento Impecável
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials / Metrics Bar */}
        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {CREDENTIALS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{ transitionDelay: `${idx * 90}ms` }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161917] p-5 transition-all duration-700 hover:-translate-y-1 hover:border-[#D4AF37]/45 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#0F1110] text-[#D4AF37]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-serif-editorial text-xl font-semibold text-[#F5F3EF]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#A3A098]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
