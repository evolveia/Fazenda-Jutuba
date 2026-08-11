import React, { useState } from 'react';
import { X, Send, CheckCircle2, Lock, Sparkles, PhoneCall } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    objetivo: 'Agendar Visita Guiada Presencial',
    lgpd: true,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [waUrl, setWaUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.whatsapp.trim()) {
      setErrorMsg('Por favor, preencha Nome e WhatsApp.');
      return;
    }

    setLoading(true);

    const cleanPhone = FAZENDA_JUTUBA_CONFIG.whatsappNumber; // 5591996156672
    const msgText = `Olá! Solicitei um Agendamento VIP no site da Fazenda Jutuba.
*Nome:* ${formData.nome}
*E-mail:* ${formData.email || 'Não informado'}
*WhatsApp:* ${formData.whatsapp}
*Interesse:* ${formData.objetivo}

Gostaria de agendar a visita presencial para conhecer a Fazenda Jutuba em Santarém!`;

    const generatedWaUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msgText)}`;
    setWaUrl(generatedWaUrl);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          origem: 'Modal Visita VIP',
        }),
      });
    } catch (err) {
      console.error('Erro ao registrar lead:', err);
    } finally {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        window.open(generatedWaUrl, '_blank');
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg glass-panel-dark rounded-3xl border border-[#7FB68E]/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#123B2A] text-[#F5F0E4] hover:text-[#C98A2D] focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123B2A] text-[11px] font-bold text-[#C98A2D] uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AGENDAMENTO VIP</span>
          </div>
          <h3 className="text-2xl font-black font-heading text-[#F5F0E4]">
            Visite a Fazenda Jutuba
          </h3>
          <p className="text-xs text-[#E7DCC6]/80 mt-1">
            Conheça o terreno de 2,74 km² (perímetro de 272,70 ha) e +400m de orla com atendimento exclusivo.
          </p>
        </div>

        {success ? (
          <div className="text-center p-6 bg-[#123B2A] rounded-2xl border border-[#2F7A4D] space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#C98A2D] mx-auto" />
            <h4 className="text-base font-bold text-[#F5F0E4]">Agendamento Solicitado!</h4>
            <p className="text-xs text-[#E7DCC6]">
              Seus dados foram gravados. Clique no botão abaixo para concluir o agendamento no WhatsApp <strong>(91) 996156672</strong>:
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-[#20bd5a] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>ENVIAR PARA WHATSAPP (91) 996156672</span>
            </a>
            <button
              onClick={onClose}
              className="text-xs text-[#7FB68E] hover:text-[#C98A2D] underline font-medium block mx-auto pt-1"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-red-900/40 border border-red-500/40 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Ex: Ana Paula Ribeiro"
                className="w-full px-4 py-3 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 text-xs text-[#F5F0E4] focus:outline-none focus:border-[#C98A2D]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="(93) 99999-9999"
                className="w-full px-4 py-3 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 text-xs text-[#F5F0E4] focus:outline-none focus:border-[#C98A2D]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu.email@exemplo.com.br"
                className="w-full px-4 py-3 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 text-xs text-[#F5F0E4] focus:outline-none focus:border-[#C98A2D]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1">
                Interesse Principal
              </label>
              <select
                value={formData.objetivo}
                onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 text-xs text-[#F5F0E4] focus:outline-none focus:border-[#C98A2D]"
              >
                <option value="Agendar Visita Guiada Presencial">Agendar Visita Guiada Presencial</option>
                <option value="Receber Tabela e Plantas">Receber Tabela de Preços e Plantas</option>
                <option value="Informações do Píer e Marina">Informações do Píer & Marina</option>
                <option value="Dúvidas Jurídicas e Matrícula">Dúvidas Jurídicas (Matrícula/CAR)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-sol py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-transform"
            >
              <Send className="w-4 h-4 text-[#0A2A1C]" />
              <span>{loading ? 'AGENDANDO...' : 'SOLICITAR AGENDAMENTO VIP'}</span>
            </button>

            <div className="flex items-center justify-center gap-1 text-[10px] text-[#7FB68E]">
              <Lock className="w-3 h-3" />
              <span>Em conformidade com a LGPD. Seus dados estão seguros.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
