import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

export function Reviews() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.1);

  return (
    <section id="avaliacoes" ref={ref} className="relative bg-[#0F1110] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
              Prova Social
            </span>
            <h2 className="mt-3 font-serif-editorial text-3xl font-medium leading-tight text-[#F5F3EF] sm:text-4xl lg:text-[2.85rem]">
              O que dizem nossos clientes em Lages
            </h2>
          </div>

          {/* Google 5.0 Verified Badge */}
          <div className="inline-flex items-center gap-3.5 self-start rounded-2xl border border-[#D4AF37]/35 bg-[#161917] px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/15" />
            <div>
              <p className="text-sm font-semibold text-[#F5F3EF]">5.0 ★</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#A3A098]">
                Avaliações Verificadas no Google
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, idx) => (
            <article
              key={review.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#161917] p-6 transition-all duration-700 hover:-translate-y-1.5 hover:border-[#D4AF37]/50 hover:shadow-[0_18px_42px_rgba(0,0,0,0.5)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-[#D4AF37]/35 transition-colors group-hover:text-[#D4AF37]/70" />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#F5F3EF]/90">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="font-serif-editorial text-lg font-medium text-[#F5F3EF]">
                    {review.author}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#A3A098]">
                    Cliente Google {review.year ? `• ${review.year}` : ''}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
