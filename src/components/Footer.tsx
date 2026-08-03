import React, { useState } from 'react';
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Send,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsSuccess(false), 4000);
    }
  };

  return (
    <footer className="bg-[#071F15] text-[#F5F0E4] border-t border-[#7FB68E]/20 relative pt-16 pb-12">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* 4 Columns Top Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#7FB68E]/15">
          
          {/* Col 1: Logo + Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 flex items-center justify-center text-[#C98A2D]">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-heading text-xl font-black uppercase tracking-wider text-[#F5F0E4]">
                  FAZENDA JUTUBA
                </span>
                <span className="block text-[10px] text-[#7FB68E] uppercase tracking-widest font-medium">
                  Santarém • Pará
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E7DCC6]/80 leading-relaxed max-w-sm pt-2">
              Eco-living de alto padrão e preservação na Amazônia brasileira. 272 hectares de reserva particular protegida e mais de 2 km de orla de praia no Rio Tapajós.
            </p>

            <div className="pt-2 text-xs font-mono text-[#7FB68E]">
              SANTARÉM - PARÁ • BRASIL
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-heading text-[#C98A2D] uppercase tracking-widest mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2 text-xs text-[#E7DCC6]/80 font-medium">
              <li>
                <a href="#a-fazenda" className="hover:text-[#C98A2D] transition-colors">
                  A Fazenda Jutuba
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-[#C98A2D] transition-colors">
                  Lazer & Experiências
                </a>
              </li>
              <li>
                <a href="#conforto-seguranca" className="hover:text-[#C98A2D] transition-colors">
                  Segurança & Infraestrutura
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#C98A2D] transition-colors">
                  Localização & Distâncias
                </a>
              </li>
              <li>
                <a href="#reserva-jutuba" className="hover:text-[#C98A2D] transition-colors">
                  Reserva Jutuba
                </a>
              </li>
              <li>
                <a href="#vila-do-rio" className="hover:text-[#C98A2D] transition-colors">
                  Vila do Rio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C98A2D] transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-heading text-[#C98A2D] uppercase tracking-widest mb-4">
              CONTATO EM SANTARÉM
            </h4>
            <ul className="space-y-3 text-xs text-[#E7DCC6]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C98A2D] flex-shrink-0 mt-0.5" />
                <span>Santarém - PA • Região do Tapajós/Alter do Chão</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C98A2D] flex-shrink-0" />
                <span>{FAZENDA_JUTUBA_CONFIG.whatsappFormatted}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C98A2D] flex-shrink-0" />
                <span>{FAZENDA_JUTUBA_CONFIG.emailContato}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-heading text-[#C98A2D] uppercase tracking-widest mb-4">
              INFORME-SE
            </h4>
            <p className="text-[11px] text-[#E7DCC6]/70 leading-relaxed">
              Receba atualizações das fases da obra e relatórios de conservação.
            </p>

            {newsSuccess ? (
              <div className="p-2.5 rounded-lg bg-[#123B2A] border border-[#2F7A4D] text-xs text-[#7FB68E] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C98A2D]" />
                <span>Inscrição confirmada!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Seu e-mail principal"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#123B2A] border border-[#7FB68E]/30 text-xs text-[#F5F0E4] placeholder-[#7FB68E]/60 focus:outline-none focus:border-[#C98A2D]"
                />
                <button
                  type="submit"
                  className="w-full btn-sol py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3 text-[#0A2A1C]" />
                  <span>Cadastrar</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Base Bottom Row: Legal info & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7FB68E]">
          
          <div className="space-y-1 text-center md:text-left">
            <div>
              <strong>CNPJ: {FAZENDA_JUTUBA_CONFIG.cnpjPlaceholder}</strong> • {FAZENDA_JUTUBA_CONFIG.matriculaPlaceholder}
            </div>
            <div className="text-[11px] text-[#7FB68E]/80">
              {FAZENDA_JUTUBA_CONFIG.regimeLegal} • Todos os direitos reservados. © 2026 Fazenda Jutuba.
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#C98A2D] transition-colors focus:outline-none"
            >
              Política de Privacidade (LGPD)
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#C98A2D] transition-colors focus:outline-none"
            >
              Termos de Uso
            </button>
          </div>

          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-[#F5F0E4] hover:text-[#C98A2D] hover:border-[#C98A2D] transition-all focus:outline-none flex items-center gap-1 text-xs"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline font-bold">TOPO</span>
          </button>

        </div>

      </div>
    </footer>
  );
};
