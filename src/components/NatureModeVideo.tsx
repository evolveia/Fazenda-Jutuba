import React, { useState } from 'react';
import { Play, Lock, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';

interface NatureModeVideoProps {
  onOpenVisitModal: () => void;
}

export const NatureModeVideo: React.FC<NatureModeVideoProps> = ({ onOpenVisitModal }) => {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="modo-floresta" className="py-20 lg:py-28 bg-[#0A2A1C] border-y border-[#7FB68E]/20 relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Video Container with LGPD Overlay */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#7FB68E]/30 bg-[#123B2A] aspect-video shadow-2xl group">
              
              {!cookieAccepted ? (
                /* LGPD Cookie Consent Overlay Blocking Embed */
                <div className="absolute inset-0 bg-[#0A2A1C]/92 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#123B2A] border border-[#C98A2D]/50 flex items-center justify-center text-[#C98A2D] mb-4">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#F5F0E4] mb-2">
                    Conteúdo de Mídia Bloqueado
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E7DCC6]/80 max-w-md mb-6">
                    Clique abaixo para aceitar os cookies de marketing e privacidade para carregar o vídeo imersivo em alta definição da Fazenda Jutuba.
                  </p>
                  <button
                    onClick={() => {
                      setCookieAccepted(true);
                      setIsPlaying(true);
                    }}
                    className="btn-sol px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0A2A1C]" />
                    <span>Clique para aceitar os cookies e ativar o vídeo</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#7FB68E] mt-4">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Em conformidade com a LGPD (Lei Geral de Proteção de Dados)</span>
                  </div>
                </div>
              ) : null}

              {/* Video Player or Thumbnail */}
              {isPlaying && cookieAccepted ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1" // Placeholder video
                  title="Fazenda Jutuba Vídeo Institucional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85"
                    alt="Vídeo Modo Floresta Fazenda Jutuba na Amazônia"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => {
                        if (cookieAccepted) setIsPlaying(true);
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C98A2D] text-[#0A2A1C] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                      aria-label="Tocar Vídeo"
                    >
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom tag bar */}
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#0A2A1C]/90 text-[10px] font-mono text-[#7FB68E] uppercase tracking-wider border border-[#7FB68E]/30">
                SANTARÉM • PARÁ • TAPAJÓS
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Action Button */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold font-heading text-[#C98A2D] uppercase tracking-widest block">
              EXPERIÊNCIA IMERSIVA
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#F5F0E4] leading-tight">
              Sua vida em modo floresta na Amazônia.
            </h2>

            <p className="text-sm sm:text-base text-[#E7DCC6]/90 leading-relaxed">
              A Região Metropolitana de Santarém ganha um empreendimento com conceito inédito de moradia e preservação: <strong className="text-[#F5F0E4]">Fazenda Jutuba</strong>, o 1º Condomínio Reserva Particular de Santarém.
            </p>

            <p className="text-xs sm:text-sm text-[#7FB68E] leading-relaxed">
              Um projeto urbanístico inovador com conceito de eco-resort dentro da floresta, com diversas áreas de convivência, pier privativo, orla de praia e lazer espalhados por 272 hectares.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenVisitModal}
                className="btn-sol px-8 py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
              >
                <span>SAIBA MAIS</span>
                <ArrowRight className="w-4 h-4 text-[#0A2A1C]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
