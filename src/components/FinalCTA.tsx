import React from 'react';
import { Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface FinalCTAProps {
  onOpenVisitModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenVisitModal }) => {
  const handleWhatsAppDirect = () => {
    const cleanPhone = FAZENDA_JUTUBA_CONFIG.whatsappNumber;
    const msg = encodeURIComponent(
      "Olá! Gostaria de falar com um consultor especialista para saber mais detalhes sobre a Fazenda Jutuba em Santarém/PA."
    );
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative py-24 bg-[#0A2A1C] overflow-hidden border-t border-[#7FB68E]/20">
      {/* Background Image with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe53nNXsPFWR21kw_qjoAYOS4n7QS5hlgX7rfWDYi9rB84qSPhYr79YLNt&s=10"
          alt="Praia de Rio e Orla na Fazenda Jutuba em Santarém"
          className="w-full h-full object-cover object-center brightness-50"
          onError={(e) => {
            e.currentTarget.src = "https://www.tapajosdefato.com.br/images/noticias/1133/353e5368b6ebdfe74b750ccfa06fb8ef.jpeg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A1C]/95 via-[#0A2A1C]/85 to-[#0A2A1C]/90" />
      </div>

      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123B2A]/90 border border-[#C98A2D]/50 text-xs font-bold text-[#C98A2D] uppercase tracking-widest mb-6 shadow-xl">
          <Sparkles className="w-4 h-4 text-[#C98A2D]" />
          <span>Oportunidade Única de Investimento em Santarém/PA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-[#F5F0E4] leading-tight tracking-tight mb-6">
          Venda de Terreno de Luxo na <span className="text-[#C98A2D]">Amazônia</span>.
        </h2>

        <p className="text-base sm:text-xl text-[#E7DCC6]/90 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Adquira uma propriedade única de <strong className="text-[#F5F0E4]">2,74 km²</strong> (perímetro de <strong className="text-[#F5F0E4]">272,70 ha</strong>) com <strong className="text-[#C98A2D]">+400 metros de Orla</strong> no Rio Tapajós. Documentação 100% regularizada em Santarém/PA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenVisitModal}
            className="w-full sm:w-auto btn-sol px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <span>AGENDAR VISITA GUIADA</span>
          </button>

          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto btn-outline-verde px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 bg-[#123B2A]/80 hover:bg-[#123B2A]"
          >
            <PhoneCall className="w-4 h-4 text-[#25D366]" />
            <span>ATENDIMENTO WHATSAPP</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#7FB68E]">
          <ShieldCheck className="w-4 h-4 text-[#C98A2D]" />
          <span>Matrícula Registrada no CRI de Santarém/PA • CAR & SIGEF Regularizados</span>
        </div>
      </div>
    </section>
  );
};
