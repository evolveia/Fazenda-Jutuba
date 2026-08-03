import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle2, Lock, Sparkles, PhoneCall } from 'lucide-react';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    objetivo: 'Moradia / Segunda Residência',
    lgpd: true,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [waUrl, setWaUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.nome.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }
    if (!formData.whatsapp.trim()) {
      setErrorMsg('Por favor, informe seu WhatsApp com DDD.');
      return;
    }
    if (!formData.lgpd) {
      setErrorMsg('Você precisa concordar com os termos de privacidade.');
      return;
    }

    setLoading(true);

    const cleanPhone = FAZENDA_JUTUBA_CONFIG.whatsappNumber; // 5591996156672
    const msgText = `Olá! Acabei de me cadastrar no site da Fazenda Jutuba.
*Nome:* ${formData.nome}
*E-mail:* ${formData.email || 'Não informado'}
*WhatsApp:* ${formData.whatsapp}
*Objetivo:* ${formData.objetivo}

Gostaria de atendimento VIP e mais informações sobre a reserva de 272 hectares em Santarém/PA!`;

    const generatedWaUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msgText)}`;
    setWaUrl(generatedWaUrl);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          whatsapp: formData.whatsapp,
          objetivo: formData.objetivo,
          origem: 'Formulário A Fazenda',
        }),
      });
    } catch (err) {
      console.error('Erro ao registrar lead:', err);
    } finally {
      setLoading(false);
      setSuccess(true);
      // Automatically trigger WhatsApp redirect
      setTimeout(() => {
        window.open(generatedWaUrl, '_blank');
      }, 800);
    }
  };

  return (
    <section id="a-fazenda" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A2A1C]">
      {/* Background Image of Amazon Rainforest with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=85"
          alt="Floresta Amazônica e Rio Tapajós em Santarém"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A1C] via-[#0A2A1C]/90 to-[#0A2A1C]" />
      </div>

      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2F7A4D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C98A2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title + Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Fazenda Jutuba</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F5F0E4] leading-tight tracking-tight">
              A primeira reserva residencial particular de Santarém.
            </h2>

            <p className="text-base sm:text-lg text-[#E7DCC6]/90 font-normal leading-relaxed">
              Um conceito inédito de moradia e preservação na Amazônia. São mais de <strong className="text-[#F5F0E4] font-semibold">272 hectares</strong> de floresta nativa preservada, com mais de <strong className="text-[#C98A2D] font-semibold">2 km de praia exclusiva de rio</strong>, águas calmas e límpidas e infraestrutura de suporte completa.
            </p>

            <p className="text-sm sm:text-base text-[#7FB68E] leading-relaxed">
              Viver na Fazenda Jutuba é unir a paz da floresta tropical com a segurança de um condomínio de alto padrão 100% legalizado (Matrícula individual no CRI de Santarém/PA, CAR e SIGEF regularizados).
            </p>

            {/* Checklist of highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#F5F0E4]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#C98A2D] flex-shrink-0" />
                <span>272 Hectares Protegidos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#C98A2D] flex-shrink-0" />
                <span>+2 km de Orla Privativa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#C98A2D] flex-shrink-0" />
                <span>Documentação 100% Regular</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#C98A2D] flex-shrink-0" />
                <span>Pier, Marina & Decks</span>
              </div>
            </div>

            <div className="pt-4 p-4 rounded-xl bg-[#123B2A]/60 border border-[#7FB68E]/20 flex items-center gap-4 text-xs text-[#E7DCC6]">
              <ShieldCheck className="w-8 h-8 text-[#7FB68E] flex-shrink-0" />
              <div>
                <strong className="block text-[#F5F0E4] font-semibold">Atendimento direto e seguro</strong>
                Nossa equipe local em Santarém está pronta para agendar sua visita guiada com total confidencialidade.
              </div>
            </div>
          </div>

          {/* Right Column: High-converting Lead Form Panel */}
          <div className="lg:col-span-6" id="contato-rapido">
            <div className="glass-panel-dark rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#7FB68E]/30 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#C98A2D] uppercase tracking-widest block mb-1">
                  SEJA UM DOS PRIMEIROS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E4]">
                  Garanta sua visita VIP na Fazenda Jutuba
                </h3>
                <p className="text-xs sm:text-sm text-[#E7DCC6]/80 mt-1">
                  Preencha os dados abaixo para receber o book do imóvel, planta do loteamento e tabela especial de lançamento.
                </p>
              </div>

              {success ? (
                <div className="p-6 rounded-xl bg-[#123B2A] border border-[#2F7A4D] text-center space-y-4 my-6">
                  <div className="w-14 h-14 rounded-full bg-[#2F7A4D]/30 border border-[#7FB68E] flex items-center justify-center mx-auto text-[#C98A2D]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-[#F5F0E4]">
                    Cadastro realizado com sucesso!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E7DCC6]">
                    Seus dados foram registrados! Clique no botão verde abaixo para enviar diretamente ao nosso WhatsApp oficial <strong>(91) 996156672</strong>:
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-[#20bd5a] transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>ENVIAR PARA WHATSAPP (91) 996156672</span>
                  </a>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs text-[#7FB68E] underline font-medium hover:text-[#C98A2D] block mx-auto pt-1"
                  >
                    Enviar outro cadastro
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/50 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: Roberto Silva"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#123B2A]/80 border border-[#7FB68E]/30 text-[#F5F0E4] placeholder-[#7FB68E]/60 text-sm focus:outline-none focus:border-[#C98A2D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1.5">
                      E-mail Principal
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-[#123B2A]/80 border border-[#7FB68E]/30 text-[#F5F0E4] placeholder-[#7FB68E]/60 text-sm focus:outline-none focus:border-[#C98A2D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1.5">
                      Celular / WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(93) 99999-9999"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#123B2A]/80 border border-[#7FB68E]/30 text-[#F5F0E4] placeholder-[#7FB68E]/60 text-sm focus:outline-none focus:border-[#C98A2D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F0E4] mb-1.5">
                      Informe seu objetivo
                    </label>
                    <select
                      name="objetivo"
                      value={formData.objetivo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#123B2A] border border-[#7FB68E]/30 text-[#F5F0E4] text-sm focus:outline-none focus:border-[#C98A2D] transition-colors"
                    >
                      <option value="Moradia / Segunda Residência">Moradia / Segunda Residência de Luxo</option>
                      <option value="Investimento Imobiliário">Investimento Imobiliário na Amazônia</option>
                      <option value="Agendar Visita Guiada">Agendar Visita Guiada Presencial</option>
                      <option value="Dúvidas Jurídicas / Documentação">Dúvidas sobre Matrícula / CAR / SIGEF</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="lgpd"
                      name="lgpd"
                      checked={formData.lgpd}
                      onChange={handleChange}
                      className="mt-1 rounded bg-[#123B2A] border-[#7FB68E] text-[#C98A2D] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="lgpd" className="text-xs text-[#E7DCC6]/80 leading-snug cursor-pointer">
                      Concordo em receber informações exclusivas da Fazenda Jutuba de acordo com a LGPD e Política de Privacidade.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-sol py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all mt-4 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>PROCESSANDO...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0A2A1C]" />
                        <span>QUERO VISITAR A JUTUBA!</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7FB68E] pt-1">
                    <Lock className="w-3 h-3" />
                    <span>Seus dados estão protegidos e não serão compartilhados.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
