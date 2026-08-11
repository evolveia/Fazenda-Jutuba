import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Sparkles, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_INDICATORS } from '../data/jutubaData';

interface HeroProps {
  onOpenVisitModal: () => void;
}

const HERO_IMAGES = [
  {
    url: "https://casasaimiri.com.br/wp-content/uploads/2023/12/WhatsApp-Image-2025-02-19-at-16.03.54-scaled-e1739991907727.jpeg",
    alt: "Praia e Orla com +400m na Fazenda Jutuba em Santarém",
    caption: "+400 metros de Orla Exclusiva no Rio Tapajós"
  },
  {
    url: "https://flordejambu.com/wp-content/uploads/2022/07/Pontos-Turisticos-em-Santarem.png",
    alt: "Pontos Turísticos e praias de Santarém/PA",
    caption: "Belezas Naturais e Turismo Exclusivo em Santarém"
  },
  {
    url: "https://s2-g1.glbimg.com/EIoWOTc8cH835ktZZruDGHurh54=/0x0:4000x2800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/Y/nFKbpsQtynxV39RpPlng/2023-08-04t123850z-1758023215-rc2u8x9wbysc-rtrmadp-3-brazil-environment-amazon.jpg",
    alt: "Vista aérea exuberante da floresta preservada e Rio Tapajós",
    caption: "Terreno de 2,74 km² (272,70 ha) de Floresta e Rio Tapajós"
  },
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMPMzDY6GEAf6cXMy8X9Mfbat21Q7WgEa2XWJQmEzqJ31FW2pEYfa0KnlOA_OnmJaHNDAu7bDNK_h-9BaSq28mP1E4LKkZPiNEV0Hdrqm_Ln2kef50jRtffpnLyC9NCI9xoJgqX1w9gBdl/s1600/Boto+Tamara+Sar%25C3%25A9.jpg",
    alt: "Fauna e Boto do Rio Tapajós em Santarém",
    caption: "Santarém • Riqueza Natural do Bioma Tapajós"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-alternate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevImage = () => {
    setCurrentIdx((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const nextImage = () => {
    setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      
      {/* Background Image Carousel with Alternating Images & Enhanced Visibility (Light Overlays) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover object-center animate-kenburns scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=90";
              }}
            />
          </div>
        ))}

        {/* High-visibility overlay (Reduced darkness so images shine through clearly) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0A2A1C]/85 via-[#0A2A1C]/50 to-[#0A2A1C]/20" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A2A1C] via-[#0A2A1C]/30 to-[#0A2A1C]/40" />
      </div>

      {/* Background Carousel Controls (Left & Right subtle arrows) */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
        <button
          onClick={prevImage}
          className="pointer-events-auto p-2.5 rounded-full bg-[#0A2A1C]/60 border border-[#7FB68E]/30 text-[#F5F0E4] hover:bg-[#C98A2D] hover:text-[#0A2A1C] transition-colors shadow-lg backdrop-blur-md"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="pointer-events-auto p-2.5 rounded-full bg-[#0A2A1C]/60 border border-[#7FB68E]/30 text-[#F5F0E4] hover:bg-[#C98A2D] hover:text-[#0A2A1C] transition-colors shadow-lg backdrop-blur-md"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Dots & Caption Indicator */}
      <div className="absolute bottom-20 right-6 sm:right-12 z-30 flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 bg-[#0A2A1C]/80 px-3 py-1.5 rounded-full border border-[#7FB68E]/30 backdrop-blur-md">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIdx ? 'w-6 bg-[#C98A2D]' : 'w-2 bg-[#F5F0E4]/40 hover:bg-[#F5F0E4]/70'
              }`}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono text-[#7FB68E] bg-[#0A2A1C]/80 px-2.5 py-1 rounded-md border border-[#7FB68E]/20 backdrop-blur-md hidden sm:block">
          {HERO_IMAGES[currentIdx].caption}
        </span>
      </div>

      {/* Vertical Indicators on the Far Right (01 - 06) */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-5">
        {HERO_INDICATORS.map((ind) => (
          <a
            key={ind.id}
            href={`#${ind.sectionId}`}
            className="group flex items-center gap-3 text-right focus:outline-none"
          >
            <span className="text-[10px] font-bold text-[#7FB68E] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {ind.label}
            </span>
            <span className="text-xs font-mono font-bold text-[#F5F0E4]/70 group-hover:text-[#C98A2D] transition-colors">
              {ind.id}
            </span>
            <div className="w-3 h-0.5 bg-[#7FB68E]/40 group-hover:w-6 group-hover:bg-[#C98A2D] transition-all" />
          </a>
        ))}
      </div>

      {/* Main Content Container (Wide Screen Enhanced: max-w-[1536px]) */}
      <div className="relative z-20 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full py-12">
        <div className="max-w-3xl bg-[#0A2A1C]/40 p-6 sm:p-8 rounded-3xl border border-[#7FB68E]/20 backdrop-blur-sm shadow-2xl">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/90 border border-[#7FB68E]/50 backdrop-blur-md mb-6 shadow-lg">
            <MapPin className="w-4 h-4 text-[#C98A2D] flex-shrink-0" />
            <span className="text-xs font-semibold text-[#F5F0E4] tracking-wider uppercase whitespace-nowrap">
              Santarém • Pará • Amazônia Brasileira
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-[#F5F0E4] leading-[1.08] tracking-tight mb-6 drop-shadow-md">
            Venda de Terreno na <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F0E4] via-[#7FB68E] to-[#C98A2D]">
              Amazônia
            </span>{' '}
            em Santarém.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-[#E7DCC6] font-normal leading-relaxed mb-8 max-w-2xl drop-shadow">
            Área privilegiada com <strong className="text-[#C98A2D] font-bold">+400 metros de Orla</strong> no Rio Tapajós, perímetro de <strong className="text-[#F5F0E4] font-bold">272,70 ha</strong> e extensão de <strong className="text-[#7FB68E] font-bold">2,74 km²</strong> com documento 100% regularizado em Santarém/PA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenVisitModal}
              className="btn-sol px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] transition-transform whitespace-nowrap"
            >
              <Sparkles className="w-5 h-5 text-[#0A2A1C]" />
              <span>GARANTA JÁ A SUA VISITA</span>
            </button>

            <a
              href="#a-fazenda"
              className="btn-outline-verde px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#123B2A]/80 backdrop-blur-md whitespace-nowrap"
            >
              <Compass className="w-5 h-5 text-[#7FB68E]" />
              <span>VER A RESERVA</span>
            </a>
          </div>

          {/* Highlights tag bar */}
          <div className="mt-8 pt-6 border-t border-[#7FB68E]/25 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#7FB68E]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C98A2D] animate-ping" />
              <span className="font-semibold text-[#F5F0E4] whitespace-nowrap">100% Legalizada</span> (Matrícula + CAR + SIGEF)
            </div>
            <div className="hidden sm:inline">•</div>
            <div className="whitespace-nowrap">Atendimento VIP em Santarém/PA</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow Indicator (Fixed font label wrapping) */}
      <a
        href="#stats-bar"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-[#7FB68E] hover:text-[#C98A2D] transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest group-hover:translate-y-0.5 transition-transform whitespace-nowrap bg-[#0A2A1C]/60 px-2 py-0.5 rounded backdrop-blur-sm">
          ROLAR
        </span>
        <div className="w-9 h-9 rounded-full bg-[#123B2A]/90 border border-[#7FB68E]/40 flex items-center justify-center text-[#C98A2D] shadow-md group-hover:scale-110 transition-transform">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </a>
    </section>
  );
};
