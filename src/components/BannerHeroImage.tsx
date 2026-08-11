import React from 'react';
import { Waves, MapPin } from 'lucide-react';

export const BannerHeroImage: React.FC = () => {
  return (
    <section className="relative py-8 bg-[#0A2A1C]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative rounded-3xl overflow-hidden border border-[#7FB68E]/30 shadow-2xl group">
          {/* Main Large Image */}
          <div className="h-[360px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden relative">
            <img
              src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/santarem_foto_ivo_lima00306172016.jpeg"
              alt="Vista das Praias e Orla Fluvial de Santarém e Acesso à Fazenda Jutuba"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              onError={(e) => {
                e.currentTarget.src = "https://casasaimiri.com.br/wp-content/uploads/2023/12/WhatsApp-Image-2025-02-19-at-16.03.54-scaled-e1739991907727.jpeg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1C] via-transparent to-black/30" />
          </div>

          {/* Floating Top Badge */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-[#0A2A1C]/85 backdrop-blur-md border border-[#7FB68E]/40 text-xs font-bold text-[#F5F0E4] flex items-center gap-2 shadow-lg">
            <MapPin className="w-4 h-4 text-[#C98A2D]" />
            <span>ORLA DE PRAIA PARTICULA • SANTAREM/PA</span>
          </div>

          {/* Bottom Gold Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#C98A2D] via-[#e09d36] to-[#C98A2D] py-4 px-6 text-[#0A2A1C] font-heading font-black text-xs sm:text-sm md:text-base uppercase tracking-widest text-center flex items-center justify-center gap-3 shadow-2xl">
            <Waves className="w-5 h-5 flex-shrink-0 text-[#0A2A1C]" />
            <span>+400 METROS DE FRENTE PARA A PRAIA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
