import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NatureModeVideoProps {
  onOpenVisitModal: () => void;
}

export const NatureModeVideo: React.FC<NatureModeVideoProps> = ({ onOpenVisitModal }) => {
  return (
    <section id="modo-floresta" className="py-20 lg:py-28 bg-[#0A2A1C] border-y border-[#7FB68E]/20 relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct Unblocked YouTube Video Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#7FB68E]/30 bg-[#123B2A] aspect-video shadow-2xl group">
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KBSQy8EkIyw?rel=0&controls=1"
                title="Fazenda Jutuba - Vídeo Imersivo Santarém"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Bottom tag bar */}
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#0A2A1C]/90 text-[10px] font-mono text-[#7FB68E] uppercase tracking-wider border border-[#7FB68E]/30 pointer-events-none">
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
              A Região Metropolitana de Santarém ganha um empreendimento com conceito inédito de moradia e preservação: <strong className="text-[#F5F0E4]">Fazenda Jutuba</strong>, a Reserva Particular em Santarém.
            </p>

            <p className="text-xs sm:text-sm text-[#7FB68E] leading-relaxed">
              Um terreno de 2,74 km² (perímetro de 272,70 ha) com mais de +400 metros de orla de praia no Rio Tapajós, pier privativo e lazer integrado ao bioma preservado.
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
