import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface LGPDModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LGPDModal: React.FC<LGPDModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl glass-panel-dark rounded-3xl border border-[#7FB68E]/40 p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#123B2A] text-[#F5F0E4] hover:text-[#C98A2D]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 border-b border-[#7FB68E]/20 pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#123B2A] border border-[#C98A2D] flex items-center justify-center text-[#C98A2D]">
            {isPrivacy ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-[#F5F0E4]">
              {isPrivacy ? 'Política de Privacidade e Cookies (LGPD)' : 'Termos de Uso e Condições'}
            </h3>
            <span className="text-xs text-[#7FB68E] font-mono">
              Fazenda Jutuba • Santarém/PA
            </span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-[#E7DCC6]/90 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                A <strong>FAZENDA JUTUBA</strong> está totalmente comprometida com a proteção dos seus dados pessoais, em cumprimento estrito à Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
              <h4 className="font-bold text-[#F5F0E4] text-sm">1. Coleta de Dados</h4>
              <p>
                Coletamos apenas os dados fornecidos voluntariamente através dos nossos formulários de cadastro e interação via chatbot (Nome, E-mail, WhatsApp e objetivo de compra).
              </p>
              <h4 className="font-bold text-[#F5F0E4] text-sm">2. Finalidade e Uso</h4>
              <p>
                Os dados coletados são utilizados exclusivamente para agendar visitas presenciais ou virtuais, enviar a apresentação oficial do empreendimento e responder a dúvidas sobre documentação jurídica (Matrícula, CAR e SIGEF).
              </p>
              <h4 className="font-bold text-[#F5F0E4] text-sm">3. Não Compartilhamento</h4>
              <p>
                Garantimos que suas informações não serão vendidas, alugadas ou compartilhadas com terceiros não autorizados.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao portal oficial da <strong>FAZENDA JUTUBA</strong>. Ao navegar e utilizar este site, você concorda com os termos e condições descritos abaixo.
              </p>
              <h4 className="font-bold text-[#F5F0E4] text-sm">1. Informações do Imóvel</h4>
              <p>
                As imagens, perspectivas e descrições dos 272 hectares e dos 2 km de praia de rio são ilustrativas e sujeitas a confirmações na tabela de lançamento oficial.
              </p>
              <h4 className="font-bold text-[#F5F0E4] text-sm">2. Propriedade Intelectual</h4>
              <p>
                Todo o conteúdo visual, marcas, logos e textos pertencem exclusivamente à incorporadora responsável pela Fazenda Jutuba.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#7FB68E]/20 flex justify-end">
          <button
            onClick={onClose}
            className="btn-sol px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            ENTENDI E CONCORDO
          </button>
        </div>

      </div>
    </div>
  );
};
