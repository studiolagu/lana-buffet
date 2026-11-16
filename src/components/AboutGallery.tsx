import { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Trees,
  Sparkles,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto, getWhatsAppUrl } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

export function AboutGallery() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.1);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto: GalleryPhoto | null =
    selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % GALLERY_PHOTOS.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const distance = direction === 'left' ? -360 : 360;
    carouselRef.current.scrollBy({ left: distance, behavior: 'smooth' });
  };

  return (
    <section id="sobre" ref={ref} className="bg-[#FAF8F5] py-20 text-[#1A1D1B] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div
            className={`lg:col-span-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9E7B2F]">
              Sobre &amp; Nosso Espaço
            </span>
            <h2 className="mt-3 font-serif-editorial text-3xl font-semibold leading-[1.12] text-[#141715] sm:text-4xl lg:text-[2.85rem]">
              O encontro entre o sabor caseiro autêntico e a sofisticação de grandes eventos.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#524F48] sm:text-[1.0625rem]">
              No <strong className="font-semibold text-[#141715]">Lana Buffet</strong>, cada
              cardápio nasce da cozinha afetiva da Serra Catarinense elevada à apresentação
              editorial. Atendemos desde pequenas reuniões íntimas e almoços em família até
              casamentos, formaturas e eventos corporativos de grande porte em Lages e região.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#524F48]">
              Trabalhamos com ingredientes frescos, preparo no dia e menus moldados conforme o
              perfil e o número de convidados — unindo fartura, pontualidade e cuidado em cada
              detalhe.
            </p>
          </div>

          {/* Highlight Cards: Espaço na Natureza & Degustação */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            <div
              className={`group rounded-2xl border border-[#141715]/10 bg-white p-6 shadow-[0_10px_35px_rgba(15,17,16,0.05)] transition-all duration-700 hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[0_18px_45px_rgba(197,160,89,0.14)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F1110] text-[#D4AF37]">
                <Trees className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif-editorial text-2xl font-semibold text-[#141715]">
                Restaurante &amp; Espaço em Meio à Natureza
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5C5952]">
                Um refúgio aconchegante em Lages, cercado por verde e tranquilidade — elogiado
                pelos clientes pela paz do ambiente, comida quentinha e excelente custo-benefício.
              </p>
              <a
                href="#localizacao"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#9E7B2F] transition-colors group-hover:text-[#141715]"
              >
                Conhecer localização
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div
              className={`group rounded-2xl border border-[#141715]/10 bg-[#0F1110] p-6 text-[#F5F3EF] shadow-[0_14px_40px_rgba(15,17,16,0.18)] transition-all duration-700 hover:-translate-y-1.5 hover:border-[#D4AF37]/60 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '220ms' }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#161917] text-[#D4AF37]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif-editorial text-2xl font-semibold text-[#F5F3EF]">
                Sessões de Degustação Personalizadas
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#A3A098]">
                Noivos, formandos e anfitriões podem agendar uma degustação prévia sem compromisso
                para experimentar nossos pratos e definir cada etapa do menu.
              </p>
              <a
                href={getWhatsAppUrl(
                  'Olá! Gostaria de agendar uma sessão de degustação sem compromisso no Lana Buffet.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] transition-colors hover:text-[#F5F3EF]"
              >
                Agendar degustação
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Horizontal Photo Carousel + Lightbox */}
        <div className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E7B2F]">
                Galeria Editorial
              </span>
              <h3 className="mt-1 font-serif-editorial text-2xl font-semibold text-[#141715] sm:text-3xl">
                Detalhes da nossa cozinha e montagens
              </h3>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#141715]/15 bg-white text-[#141715] transition-all hover:border-[#C5A059] hover:text-[#9E7B2F]"
                aria-label="Fotos anteriores"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#141715]/15 bg-white text-[#141715] transition-all hover:border-[#C5A059] hover:text-[#9E7B2F]"
                aria-label="Próximas fotos"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {GALLERY_PHOTOS.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#141715]/10 bg-[#161917] text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[0_18px_40px_rgba(15,17,16,0.18)] sm:w-[330px]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1110]/90 via-[#0F1110]/20 to-transparent" />
                <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0F1110]/70 text-[#F5F3EF] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif-editorial text-xl font-medium text-[#F5F3EF]">
                    {photo.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-[#A3A098]">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1110]/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#161917] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F1110]/80 text-[#F5F3EF] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
              aria-label="Fechar visualização"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-[#0F1110]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                  )
                }
                className="absolute top-1/2 left-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F1110]/75 text-[#F5F3EF] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % GALLERY_PHOTOS.length)
                }
                className="absolute top-1/2 right-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F1110]/75 text-[#F5F3EF] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col justify-between gap-2 p-6 sm:flex-row sm:items-center">
              <div>
                <h4 className="font-serif-editorial text-2xl font-semibold text-[#F5F3EF]">
                  {selectedPhoto.title}
                </h4>
                <p className="mt-1 text-sm text-[#A3A098]">{selectedPhoto.caption}</p>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                {selectedIndex + 1} / {GALLERY_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
