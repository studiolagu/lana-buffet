import { ArrowRight } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

export function Services() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.1);

  return (
    <section id="servicos" ref={ref} className="relative bg-[#0F1110] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
              Nossos Serviços
            </span>
            <h2 className="mt-3 font-serif-editorial text-3xl font-medium leading-tight text-[#F5F3EF] sm:text-4xl lg:text-[2.85rem]">
              Soluções gastronômicas para cada formato de celebração
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#A3A098]">
            Da recepção intimista ao grande banquete na Serra Catarinense, adaptamos equipe,
            louças e cardápio ao seu momento.
          </p>
        </div>

        {/* 4 Interactive Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#161917] transition-all duration-700 hover:-translate-y-1.5 hover:border-[#D4AF37]/60 hover:shadow-[0_22px_50px_rgba(0,0,0,0.6)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Subtle gold ambient glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Image container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161917] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#0F1110]/85 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] backdrop-blur-md">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col justify-between p-6 pt-3">
                <div>
                  <h3 className="font-serif-editorial text-2xl font-medium leading-snug text-[#F5F3EF] transition-colors group-hover:text-[#D4AF37]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A3A098]">
                    {service.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] transition-colors group-hover:border-[#D4AF37]/30 group-hover:text-[#F5F3EF]"
                >
                  Cotar este formato
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
