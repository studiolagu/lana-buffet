import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/buffetData';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cardápio & Encomendas', href: '#cardapio' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaUrl = getWhatsAppUrl(
    'Olá! Gostaria de solicitar um orçamento com o Lana Buffet em Lages.'
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0F1110]/85 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
          : 'bg-[#0F1110]/55 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Typographic Editorial Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Lana Buffet - Página inicial"
        >
          <span className="font-serif-editorial text-xl sm:text-2xl font-semibold tracking-[0.14em] text-[#F5F3EF] transition-colors group-hover:text-[#D4AF37]">
            LANA BUFFET
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-[#D4AF37]/40" />
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-medium">
            Lages • SC
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.16em] text-[#A3A098] hover:text-[#F5F3EF] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F1110] shadow-[0_6px_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Solicitar Orçamento
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex lg:hidden items-center justify-center rounded-full border border-white/15 bg-[#161917]/80 p-2.5 text-[#F5F3EF] transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="mx-5 mt-3 mb-4 flex flex-col gap-1 rounded-2xl border border-[#D4AF37]/20 bg-[#161917]/95 p-4 backdrop-blur-xl"
          aria-label="Navegação móvel"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm tracking-wide text-[#F5F3EF]/90 transition-colors hover:bg-white/5 hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F1110]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
