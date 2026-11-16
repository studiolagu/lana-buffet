import { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, Users, Utensils } from 'lucide-react';
import { getWhatsAppUrl } from '../data/buffetData';
import { useReveal } from '../hooks/useReveal';

const ORDER_TYPES = [
  'Buffet para Evento',
  'Coquetel',
  'Encomenda de Pratos Prontos / Kg',
] as const;

const GUEST_RANGES = [
  'Até 30 pessoas',
  '30 a 80 pessoas',
  '80 a 150 pessoas',
  'Mais de 150 pessoas',
] as const;

export function QuoteSimulator() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.1);
  const [orderType, setOrderType] = useState<string>(ORDER_TYPES[0]);
  const [guests, setGuests] = useState<string>(GUEST_RANGES[1]);
  const [eventDate, setEventDate] = useState<string>('');

  const formattedDate = eventDate
    ? new Date(`${eventDate}T12:00:00`).toLocaleDateString('pt-BR')
    : 'A definir';

  const whatsappMessage = [
    'Olá, Lana Buffet! Gostaria de solicitar um orçamento:',
    `• Tipo de pedido: ${orderType}`,
    `• Estimativa de convidados: ${guests}`,
    `• Data prevista: ${formattedDate}`,
    'Poderia me enviar mais detalhes e disponibilidade?',
  ].join('\n');

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section
      id="orcamento"
      ref={ref}
      className="relative overflow-hidden bg-[#FAF8F5] py-20 text-[#1A1D1B] sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div
          className={`relative overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-[#0F1110] p-7 text-[#F5F3EF] shadow-[0_28px_70px_rgba(15,17,16,0.22)] sm:p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Subtle gold ambient corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/[0.1] blur-[90px]"
          />

          <div className="relative">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                Simulador Rápido de Orçamento
              </span>
              <h2 className="mt-3 font-serif-editorial text-3xl font-medium leading-tight text-[#F5F3EF] sm:text-4xl">
                Monte sua solicitação em segundos
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#A3A098] sm:text-base">
                Selecione o formato, a quantidade aproximada de convidados e a data prevista para
                iniciar seu atendimento personalizado direto no WhatsApp.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Interactive Form Controls */}
              <div className="space-y-7 lg:col-span-7">
                {/* 1. Tipo de Pedido */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                    <Utensils className="h-3.5 w-3.5" />
                    1. Tipo de pedido
                  </label>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {ORDER_TYPES.map((type) => {
                      const active = orderType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={`rounded-xl border px-3.5 py-3 text-left text-xs font-medium leading-snug transition-all duration-300 ${
                            active
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F5F3EF] shadow-[0_0_20px_rgba(212,175,55,0.18)]'
                              : 'border-white/10 bg-[#161917] text-[#A3A098] hover:border-[#D4AF37]/40 hover:text-[#F5F3EF]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Número de Convidados */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                    <Users className="h-3.5 w-3.5" />
                    2. Número estimado de convidados
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    {GUEST_RANGES.map((range) => {
                      const active = guests === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setGuests(range)}
                          className={`rounded-xl border px-4 py-3 text-left text-xs font-medium transition-all duration-300 ${
                            active
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F5F3EF] shadow-[0_0_20px_rgba(212,175,55,0.18)]'
                              : 'border-white/10 bg-[#161917] text-[#A3A098] hover:border-[#D4AF37]/40 hover:text-[#F5F3EF]'
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Data Prevista */}
                <div>
                  <label
                    htmlFor="event-date"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    3. Data prevista (opcional)
                  </label>
                  <input
                    id="event-date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="mt-3 w-full rounded-xl border border-white/15 bg-[#161917] px-4 py-3 text-sm text-[#F5F3EF] outline-none transition-colors focus:border-[#D4AF37] [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Summary & WhatsApp CTA Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#D4AF37]/25 bg-[#161917] p-6 lg:col-span-5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                    Resumo da Solicitação
                  </span>
                  <h3 className="mt-2 font-serif-editorial text-2xl font-medium text-[#F5F3EF]">
                    Pronto para atendimento
                  </h3>

                  <ul className="mt-5 space-y-3.5 border-t border-white/10 pt-5 text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-[#A3A098]">
                          Formato
                        </span>
                        <span className="font-medium text-[#F5F3EF]">{orderType}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-[#A3A098]">
                          Convidados
                        </span>
                        <span className="font-medium text-[#F5F3EF]">{guests}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-[#A3A098]">
                          Data Prevista
                        </span>
                        <span className="font-medium text-[#F5F3EF]">{formattedDate}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#0F1110] shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(212,175,55,0.45)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enviar Solicitação no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
