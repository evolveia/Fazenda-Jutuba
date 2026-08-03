import React from 'react';
import { UserCheck, Pencil, CheckCircle2, FileText, DollarSign, ArrowRight, Sparkles } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface InvestorStepsSectionProps {
  onOpenVisitModal: () => void;
}

export const InvestorStepsSection: React.FC<InvestorStepsSectionProps> = ({ onOpenVisitModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Formulário',
      description: 'Preencha nosso formulário de interesse para identificarmos seu perfil de investidor.',
      icon: UserCheck,
      iconPosition: 'bottom' as const,
    },
    {
      num: '02',
      title: 'Briefing',
      description: 'Reunião online para explicar planos, garantias, prazos e apresentar as opções na Reserva.',
      icon: Pencil,
      iconPosition: 'top' as const,
    },
    {
      num: '03',
      title: 'Decisão',
      description: 'Definimos seu perfil, a cota ou unidade adquirida e a melhor forma de pagamento.',
      icon: CheckCircle2,
      iconPosition: 'bottom' as const,
    },
    {
      num: '04',
      title: 'Contrato',
      description: 'Assinatura dos contratos (SCP, mútuo, Contrato de Promessa de Compra/Venda) com suporte jurídico.',
      icon: FileText,
      iconPosition: 'top' as const,
    },
    {
      num: '05',
      title: 'Aportes',
      description: 'Você realiza os aportes financeiros conforme especificado nos contratos e recebe sua titularidade.',
      icon: DollarSign,
      iconPosition: 'bottom' as const,
    },
  ];

  const handleWhatsApp = () => {
    const phone = FAZENDA_JUTUBA_CONFIG.whatsappNumber;
    const msg = encodeURIComponent('Olá! Quero iniciar o processo para me tornar investidor na Fazenda Jutuba em Santarém.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <section id="passo-a-passo-investimento" className="py-20 lg:py-28 bg-[#071F15] border-t border-[#7FB68E]/20 relative overflow-hidden">
      {/* Background Subtle Amazon Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=85"
          alt="Paisagem Amazônica Fazenda Jutuba"
          className="w-full h-full object-cover opacity-10"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=85";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F15] via-[#071F15]/95 to-[#071F15]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PASSO A PASSO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F5F0E4] tracking-tight">
            Como se tornar um <span className="text-[#C98A2D]">investidor</span>?
          </h2>

          <p className="text-sm sm:text-base text-[#E7DCC6]/90 leading-relaxed">
            Um processo transparente, seguro e guiado para você investir com total tranquilidade na Fazenda Jutuba.
          </p>
        </div>

        {/* 5-Step Connected Workflow Grid */}
        <div className="relative">
          {/* Desktop Connecting Line behind icons */}
          <div className="hidden lg:block absolute left-12 right-12 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#C98A2D]/20 via-[#C98A2D] to-[#C98A2D]/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isTop = step.iconPosition === 'top';

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center group relative"
                >
                  {/* Top Icon Badge (For even steps or top position) */}
                  <div
                    className={`hidden lg:flex w-14 h-14 rounded-2xl bg-[#123B2A] border border-[#C98A2D] text-[#C98A2D] items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#C98A2D] group-hover:text-[#0A2A1C] transition-all duration-300 z-20 mb-4 ${
                      isTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Main Step Card */}
                  <div className="w-full glass-panel-dark rounded-2xl p-6 border border-[#7FB68E]/30 shadow-2xl flex flex-col justify-between text-center hover:border-[#C98A2D] transition-all duration-300 hover:-translate-y-1.5 relative bg-[#0A2A1C]/90 min-h-[220px]">
                    <div className="space-y-3">
                      <span className="inline-block text-xs font-mono font-extrabold text-[#C98A2D] uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#123B2A] border border-[#7FB68E]/20">
                        ETAPA {step.num}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-[#F5F0E4] group-hover:text-[#C98A2D] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#E7DCC6]/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile/Tablet Badge (visible on smaller screens) */}
                  <div className="lg:hidden mt-3 w-12 h-12 rounded-xl bg-[#123B2A] border border-[#C98A2D] text-[#C98A2D] flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Bottom Icon Badge (For odd steps or bottom position on Desktop) */}
                  <div
                    className={`hidden lg:flex w-14 h-14 rounded-2xl bg-[#123B2A] border border-[#C98A2D] text-[#C98A2D] items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#C98A2D] group-hover:text-[#0A2A1C] transition-all duration-300 z-20 mt-4 ${
                      !isTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              onOpenVisitModal();
              handleWhatsApp();
            }}
            className="btn-sol px-10 py-4 sm:py-5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
          >
            <span>QUERO INVESTIR NA FAZENDA JUTUBA</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
