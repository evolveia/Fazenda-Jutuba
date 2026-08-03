import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, Monitor, ArrowRight, Lock } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface FinancialLegalSectionProps {
  onOpenVisitModal: () => void;
}

export const FinancialLegalSection: React.FC<FinancialLegalSectionProps> = ({ onOpenVisitModal }) => {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Lastro Real em Imóveis',
      description:
        'Seu capital garantido por patrimônio físico e ecológico de alta valorização em Santarém/PA, com total transparência e registro em cartório.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparência Jurídica',
      description:
        'Escrituração, aprovação ambiental no CAR/INCRA, contratos claros e assessoria jurídica completa e independente em todas as etapas do investimento.',
    },
    {
      icon: CheckCircle2,
      title: 'Risco Zero de Passivo',
      description:
        'Estrutura societária de alta proteção que isola o investidor de qualquer passivo adicional ou obrigações operacionais ao investimento.',
    },
    {
      icon: Monitor,
      title: 'Governança Sólida',
      description:
        'Processos digitais de gestão, compliance rigoroso e acompanhamento em tempo real para máxima previsibilidade, controle e segurança.',
    },
  ];

  const handleWhatsAppDirect = () => {
    const phone = FAZENDA_JUTUBA_CONFIG.whatsappNumber;
    const msg = encodeURIComponent('Olá! Gostaria de entender mais sobre a Estrutura Financeira e Jurídica da Fazenda Jutuba.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <section id="estrutura-financeira" className="py-20 lg:py-28 bg-[#0A2A1C] border-t border-[#7FB68E]/20 relative overflow-hidden">
      {/* Background Amazon Forest Image with Subtle Luxury Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=85"
          alt="Floresta Amazônica e Reserva Jutuba em Santarém"
          className="w-full h-full object-cover opacity-15"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=85";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A1C] via-[#0A2A1C]/95 to-[#0A2A1C]" />
      </div>

      {/* Ambient background light gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#2F7A4D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C98A2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            <span>SEGURANÇA & PATRIMÔNIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F5F0E4] tracking-tight">
            Estrutura Financeira e Jurídica
          </h2>

          <p className="text-sm sm:text-base text-[#E7DCC6]/90 leading-relaxed">
            Nosso objetivo é oferecer garantia e segurança ao investidor através de lastro real em imóveis, estrutura jurídica com transparência, risco zero de passivo para investidor e governança sólida na Amazônia.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group glass-panel-dark rounded-2xl p-6 sm:p-8 border border-[#7FB68E]/30 shadow-2xl flex flex-col items-center text-center hover:border-[#C98A2D]/60 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Subtle top card accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C98A2D]/40 to-transparent group-hover:via-[#C98A2D] transition-colors" />

                {/* Glowing Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#123B2A] border border-[#7FB68E]/40 flex items-center justify-center text-[#C98A2D] group-hover:text-[#F5F0E4] group-hover:bg-[#C98A2D] transition-all duration-300 shadow-lg mb-6 group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold font-heading text-[#F5F0E4] mb-3 group-hover:text-[#C98A2D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E7DCC6]/80 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenVisitModal}
            className="btn-sol px-8 py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>SAIBA MAIS COM NOSSOS CORRETORES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleWhatsAppDirect}
            className="px-6 py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest bg-[#123B2A] border border-[#7FB68E]/40 text-[#F5F0E4] hover:bg-[#7FB68E]/20 transition-colors"
          >
            ATENDIMENTO JURÍDICO NO WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};
