import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, PhoneCall } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface HeaderProps {
  onOpenVisitModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVisitModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'GARANTA JÁ A SUA', href: '#contato-rapido', highlight: true },
    { label: 'A FAZENDA', href: '#a-fazenda' },
    { label: 'EXPERIÊNCIAS', href: '#experiencias' },
    { label: 'SEGURANÇA', href: '#conforto-seguranca' },
    { label: 'LOCALIZAÇÃO', href: '#localizacao' },
    { label: 'RESERVA JUTUBA', href: '#reserva-jutuba' },
    { label: 'VILA DO RIO', href: '#vila-do-rio' },
    { label: 'GARANTIA & JURÍDICO', href: '#estrutura-financeira' },
    { label: 'PASSO A PASSO', href: '#passo-a-passo-investimento' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scrollspy
      const sections = ['a-fazenda', 'experiencias', 'conforto-seguranca', 'localizacao', 'reserva-jutuba', 'vila-do-rio', 'estrutura-financeira', 'passo-a-passo-investimento', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A2A1C]/90 backdrop-blur-md py-3 shadow-2xl border-b border-[#7FB68E]/20'
            : 'bg-gradient-to-b from-[#0A2A1C]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Fazenda Jutuba Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 flex items-center justify-center text-[#C98A2D] group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-heading text-lg sm:text-xl font-black uppercase tracking-wider text-[#F5F0E4] whitespace-nowrap">
                FAZENDA JUTUBA
              </span>
              <span className="block text-[10px] text-[#7FB68E] uppercase tracking-widest font-medium whitespace-nowrap">
                Santarém • Pará
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navItems.map((item) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;

              if (item.highlight) {
                return (
                  <button
                    key={item.label}
                    onClick={onOpenVisitModal}
                    className="btn-sol px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider ml-2 whitespace-nowrap shadow-md hover:scale-105 transition-all"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-colors relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#C98A2D]'
                      : 'text-[#F5F0E4]/80 hover:text-[#F5F0E4]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C98A2D] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenVisitModal}
              className="btn-sol px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Visitar</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#123B2A] border border-[#7FB68E]/30 text-[#F5F0E4] focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0A2A1C]/98 backdrop-blur-xl transition-all">
          <div className="p-4 flex items-center justify-between border-b border-[#7FB68E]/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#123B2A] flex items-center justify-center text-[#C98A2D]">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-heading font-black text-lg text-[#F5F0E4]">FAZENDA JUTUBA</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-[#123B2A] text-[#F5F0E4]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-4 flex flex-col justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest py-3 border-b border-[#7FB68E]/10 transition-colors ${
                  item.highlight
                    ? 'text-[#C98A2D] text-base font-extrabold'
                    : 'text-[#F5F0E4]/90 hover:text-[#C98A2D]'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisitModal();
                }}
                className="w-full btn-sol py-4 rounded-xl text-center text-sm uppercase tracking-widest font-extrabold shadow-lg"
              >
                QUERO CONHECER A FAZENDA
              </button>
              <p className="text-center text-xs text-[#7FB68E] mt-4">
                Santarém - Pará • Atendimento VIP
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
