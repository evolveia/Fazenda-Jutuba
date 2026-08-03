import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileCheck, PhoneCall } from 'lucide-react';
import { FAQ_DATA } from '../data/jutubaData';

interface FAQSectionProps {
  onOpenVisitModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenVisitModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0A2A1C] border-t border-[#7FB68E]/20 relative overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511497584788-876761c12355?auto=format&fit=crop&w=2000&q=85"
          alt="Mata Amazônica Fazenda Jutuba"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A1C] via-[#0A2A1C]/90 to-[#0A2A1C]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4 text-[#C98A2D]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#F5F0E4] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-[#E7DCC6]/80 mt-2">
            Transparência jurídica e clareza sobre o investimento na Fazenda Jutuba.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="glass-panel-dark rounded-2xl border border-[#7FB68E]/25 overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#123B2A]/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold font-heading text-[#F5F0E4] pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 flex items-center justify-center text-[#C98A2D] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C98A2D] text-[#0A2A1C]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#E7DCC6]/90 leading-relaxed border-t border-[#7FB68E]/10">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner at Bottom */}
        <div className="mt-12 p-6 rounded-2xl bg-[#123B2A] border border-[#7FB68E]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-bold font-heading text-[#F5F0E4]">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-xs text-[#7FB68E]">
              Nossa equipe comercial e departamento jurídico em Santarém respondem na hora.
            </p>
          </div>

          <button
            onClick={onOpenVisitModal}
            className="btn-sol px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 flex-shrink-0 shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-[#0A2A1C]" />
            <span>FALAR COM UM ESPECIALISTA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
