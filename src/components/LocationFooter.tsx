import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

export function LocationFooter() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.1);

  const floatingWhatsApp = getWhatsAppUrl(
    'Olá! Gostaria de falar com o Lana Buffet em Lages.'
  );

  return (
    <>
      <section
        id="localizacao"
        ref={ref}
        className="relative bg-[#0F1110] pt-20 pb-14 sm:pt-28 sm:pb-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={`max-w-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
              Localização &amp; Contato
            </span>
            <h2 className="mt-3 font-serif-editorial text-3xl font-medium leading-tight text-[#F5F3EF] sm:text-4xl lg:text-[2.85rem]">
              Visite nosso espaço em Lages ou fale diretamente conosco
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Contact Info Card */}
            <div
              className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-[#161917] p-7 sm:p-8 lg:col-span-5 transition-all duration-700 hover:border-[#D4AF37]/40 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <h3 className="font-serif-editorial text-2xl font-medium text-[#F5F3EF]">
                  {BRAND.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#C5A059]">
                  {BRAND.tagline}
                </p>

                <div className="mt-7 space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#0F1110] text-[#D4AF37]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#A3A098]">
                        Endereço
                      </p>
                      <p className="mt-0.5 leading-relaxed text-[#F5F3EF]">
                        {BRAND.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#0F1110] text-[#D4AF37]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#A3A098]">
                        Telefone / WhatsApp
                      </p>
                      <a
                        href={floatingWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0.5 inline-block font-medium text-[#F5F3EF] transition-colors hover:text-[#D4AF37]"
                      >
                        {BRAND.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#0F1110] text-[#D4AF37]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#A3A098]">
                        E-mail
                      </p>
                      <div className="mt-0.5 flex flex-col gap-0.5">
                        <a
                          href={`mailto:${BRAND.emailPrimary}`}
                          className="text-[#F5F3EF] transition-colors hover:text-[#D4AF37]"
                        >
                          {BRAND.emailPrimary}
                        </a>
                        <a
                          href={`mailto:${BRAND.emailSecondary}`}
                          className="text-xs text-[#A3A098] transition-colors hover:text-[#D4AF37]"
                        >
                          {BRAND.emailSecondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#D4AF37]/45 bg-transparent px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F3EF] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Abrir no Google Maps
                </a>
                <a
                  href={floatingWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F1110] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div
              className={`overflow-hidden rounded-2xl border border-white/10 bg-[#161917] lg:col-span-7 min-h-[340px] sm:min-h-[400px] transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <iframe
                title="Localização Lana Buffet em Lages, SC"
                src={BRAND.mapsEmbedUrl}
                className="h-full w-full min-h-[340px] sm:min-h-[400px] border-0 grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="border-t border-white/10 bg-[#0B0D0C] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="font-serif-editorial text-lg tracking-[0.14em] text-[#F5F3EF]">
              LANA BUFFET <span className="text-[#D4AF37]">|</span> {BRAND.city}
            </p>
            <p className="mt-1 text-xs text-[#A3A098]">
              {BRAND.tagline} • {BRAND.region}
            </p>
          </div>

          <p className="text-xs text-[#A3A098]">
            &copy; {new Date().getFullYear()} Lana Buffet. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Discreet & Elegant Floating WhatsApp Button */}
      <a
        href={floatingWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Lana Buffet no WhatsApp"
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/45 bg-[#161917]/95 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F3EF] shadow-[0_12px_35px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F1110]"
      >
        <MessageCircle className="h-4 w-4 text-[#D4AF37] transition-colors group-hover:text-[#0F1110]" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}
