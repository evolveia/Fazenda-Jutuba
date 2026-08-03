import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';

export const BannerHeroImage: React.FC = () => {
  return (
    <section className="relative py-8 bg-[#0A2A1C]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative rounded-3xl overflow-hidden border border-[#7FB68E]/30 shadow-2xl group">
          {/* Main Large Image */}
          <div className="h-[360px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=90"
              alt="Reserva Particular e Portal Principal da Fazenda Jutuba na Amazônia em Santarém"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=2000&q=90";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1C] via-transparent to-black/30" />
          </div>

          {/* Floating Top Badge */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-[#0A2A1C]/85 backdrop-blur-md border border-[#7FB68E]/40 text-xs font-bold text-[#F5F0E4] flex items-center gap-2 shadow-lg">
            <MapPin className="w-4 h-4 text-[#C98A2D]" />
            <span>PORTAL PRINCIPAL DE ENTRADA • SANTAREM/PA</span>
          </div>

          {/* Bottom Gold Caption Bar (Match reference pattern) */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#C98A2D] via-[#e09d36] to-[#C98A2D] py-4 px-6 text-[#0A2A1C] font-heading font-black text-xs sm:text-sm md:text-base uppercase tracking-widest text-center flex items-center justify-center gap-3 shadow-2xl">
            <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#0A2A1C]" />
            <span>PORTARIA COM GUARITA BLINDADA, MONITORAÇÃO E SEGURANÇA 24 HORAS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
