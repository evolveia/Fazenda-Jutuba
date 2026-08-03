import React, { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  PhoneCall,
  CheckCircle2,
  RefreshCw,
  MessageSquareText
} from 'lucide-react';
import { ChatMessage } from '../types';
import { FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

type LeadStep = 'idle' | 'name' | 'phone' | 'location' | 'completed';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<LeadStep>('idle');
  
  const [leadData, setLeadData] = useState({
    nome: '',
    phone: '',
    location: '',
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: 'Olá! Sou o Assistente Jutuba 🌿. Como posso ajudar você a conhecer a Fazenda Jutuba e nossa reserva particular de 272 hectares em Santarém?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const startLeadFlow = () => {
    setStep('name');
    const promptMsg: ChatMessage = {
      id: `lead_start_${Date.now()}`,
      sender: 'assistant',
      text: 'Excelente! Vamos preparar seu atendimento VIP. Para começar, por favor informe o seu **Nome Completo**:',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, promptMsg]);
  };

  const resetChat = () => {
    setStep('idle');
    setLeadData({ nome: '', phone: '', location: '' });
    setMessages([
      {
        id: `welcome_${Date.now()}`,
        sender: 'assistant',
        text: 'Olá novamente! Como posso te ajudar a conhecer a Fazenda Jutuba?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleSend = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText) return;

    const userMsg: ChatMessage = {
      id: `msg_user_${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // If currently in multi-step lead collection flow:
    if (step === 'name') {
      const nome = messageText;
      setLeadData((prev) => ({ ...prev, nome }));
      setStep('phone');

      setTimeout(() => {
        const nextMsg: ChatMessage = {
          id: `step_phone_${Date.now()}`,
          sender: 'assistant',
          text: `Prazer, **${nome}**! Qual é o seu **Telefone / WhatsApp com DDD** para contato?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, nextMsg]);
      }, 400);
      return;
    }

    if (step === 'phone') {
      const phone = messageText;
      setLeadData((prev) => ({ ...prev, phone }));
      setStep('location');

      setTimeout(() => {
        const nextMsg: ChatMessage = {
          id: `step_loc_${Date.now()}`,
          sender: 'assistant',
          text: `Perfeito! De qual **Estado e Município** você fala? (ex: Pará - Santarém, SP - São Paulo)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, nextMsg]);
      }, 400);
      return;
    }

    if (step === 'location') {
      const location = messageText;
      const finalName = leadData.nome || 'Cliente';
      const finalPhone = leadData.phone || 'Informado';
      setLeadData((prev) => ({ ...prev, location }));
      setStep('completed');

      // Save lead to backend
      try {
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: finalName,
            whatsapp: finalPhone,
            objetivo: `Atendimento via Chatbot (${location})`,
            origem: 'Chatbot Interativo',
          }),
        }).catch((e) => console.log('Lead sync:', e));
      } catch (e) {
        console.log('Lead sync error:', e);
      }

      setTimeout(() => {
        const completedMsg: ChatMessage = {
          id: `step_complete_${Date.now()}`,
          sender: 'assistant',
          text: `🎉 **Informações registradas com sucesso!**\n\n👤 **Nome:** ${finalName}\n📱 **WhatsApp:** ${finalPhone}\n📍 **Local:** ${location}\n\nClique no botão verde abaixo para enviar esses dados diretamente para o nosso WhatsApp oficial **${FAZENDA_JUTUBA_CONFIG.whatsappFormatted}**!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, completedMsg]);
      }, 400);
      return;
    }

    // Default AI Chat behaviour via /api/chat
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `msg_assistant_${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Como posso ajudar você com a Fazenda Jutuba em Santarém?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Erro na conversa:', err);
      const fallbackMsg: ChatMessage = {
        id: `msg_assistant_${Date.now()}`,
        sender: 'assistant',
        text: 'A Fazenda Jutuba oferece 272 hectares de reserva preservada e mais de 2 km de praia de rio particular em Santarém/PA. Clique em "Cadastrar Atendimento" para falar no WhatsApp!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenWhatsAppFinal = () => {
    const cleanPhone = FAZENDA_JUTUBA_CONFIG.whatsappNumber; // 5591996156672
    const msg = encodeURIComponent(
      `Olá! Sou *${leadData.nome || 'Cliente'}*, telefone/WhatsApp *${leadData.phone || ''}*, residente em *${leadData.location || ''}*. Tenho interesse na Fazenda Jutuba e gostaria de atendimento VIP!`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Floating Chatbot FAB Button (The sole action button as requested) */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#123B2A] border-2 border-[#C98A2D] text-[#F5F0E4] shadow-2xl hover:scale-105 transition-all focus:outline-none"
            aria-label="Abrir Chatbot Jutuba"
          >
            <div className="w-8 h-8 rounded-full bg-[#C98A2D] flex items-center justify-center text-[#0A2A1C]">
              <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-xs font-bold font-heading uppercase text-[#F5F0E4] tracking-wider leading-none">
                Assistente Jutuba
              </span>
              <span className="block text-[10px] text-[#7FB68E] font-medium leading-tight">
                Atendimento VIP WhatsApp
              </span>
            </div>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C98A2D] rounded-full border-2 border-[#0A2A1C] animate-ping" />
          </button>
        )}
      </div>

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[420px] sm:h-[620px] z-50 flex flex-col bg-[#0A2A1C] border border-[#7FB68E]/40 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl animate-fade-in">
          
          {/* Header */}
          <div className="bg-[#123B2A] p-4 border-b border-[#7FB68E]/20 flex items-center justify-between text-[#F5F0E4]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#0A2A1C] border border-[#C98A2D] flex items-center justify-center text-[#C98A2D]">
                <Leaf className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#123B2A]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-sm text-[#F5F0E4] flex items-center gap-1.5">
                  <span>Assistente Jutuba</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C98A2D]" />
                </h3>
                <span className="text-[10px] text-[#7FB68E] uppercase tracking-wider font-semibold">
                  Online • WhatsApp (91) 996156672
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg hover:bg-[#0A2A1C] text-[#7FB68E] hover:text-[#C98A2D] focus:outline-none"
                title="Reiniciar conversa"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[#0A2A1C] text-[#E7DCC6] focus:outline-none"
                aria-label="Fechar Chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0A2A1C]/95">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#123B2A] border border-[#7FB68E]/40 flex items-center justify-center text-[#C98A2D] flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[84%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-md ${
                    m.sender === 'user'
                      ? 'bg-[#C98A2D] text-[#0A2A1C] font-semibold rounded-br-none'
                      : 'bg-[#123B2A] text-[#F5F0E4] border border-[#7FB68E]/25 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-[#0A2A1C]/70' : 'text-[#7FB68E]'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#C98A2D] flex items-center justify-center text-[#0A2A1C] flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#7FB68E] p-2 bg-[#123B2A]/50 rounded-xl w-fit">
                <Loader2 className="w-4 h-4 animate-spin text-[#C98A2D]" />
                <span>Assistente Jutuba está digitando...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Action Trigger / WhatsApp Redirect Banner */}
          {step === 'completed' ? (
            <div className="p-3 bg-[#123B2A] border-t border-[#7FB68E]/30 text-center space-y-2">
              <button
                onClick={handleOpenWhatsAppFinal}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-[#20bd5a] transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>ENVIAR PARA WHATSAPP (91) 996156672</span>
              </button>
            </div>
          ) : (
            <div className="px-3 py-2 bg-[#0A2A1C] border-t border-[#7FB68E]/15 flex gap-2 overflow-x-auto no-scrollbar">
              {step === 'idle' && (
                <button
                  onClick={startLeadFlow}
                  className="px-3 py-1.5 rounded-full bg-[#C98A2D] text-[#0A2A1C] text-[11px] font-extrabold whitespace-nowrap hover:bg-[#e09d36] transition-colors flex items-center gap-1.5 shadow-md flex-shrink-0"
                >
                  <MessageSquareText className="w-3.5 h-3.5" />
                  <span>📲 Fazer Atendimento VIP</span>
                </button>
              )}
              <button
                onClick={() => handleSend('A Fazenda Jutuba é legalizada? Matrícula e CAR?')}
                className="px-3 py-1.5 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-[11px] font-semibold text-[#E7DCC6] whitespace-nowrap hover:border-[#C98A2D] hover:text-[#C98A2D] transition-colors flex-shrink-0"
              >
                📜 Documentação Legal
              </button>
              <button
                onClick={() => handleSend('Onde fica a Fazenda Jutuba e distâncias?')}
                className="px-3 py-1.5 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-[11px] font-semibold text-[#E7DCC6] whitespace-nowrap hover:border-[#C98A2D] hover:text-[#C98A2D] transition-colors flex-shrink-0"
              >
                📍 Localização & Distâncias
              </button>
              <button
                onClick={() => handleSend('Quais são as opções de valores e financiamento?')}
                className="px-3 py-1.5 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-[11px] font-semibold text-[#E7DCC6] whitespace-nowrap hover:border-[#C98A2D] hover:text-[#C98A2D] transition-colors flex-shrink-0"
              >
                💰 Tabela de Lançamento
              </button>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-[#123B2A] border-t border-[#7FB68E]/20 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={
                step === 'name'
                  ? 'Digite seu Nome Completo...'
                  : step === 'phone'
                  ? 'Digite seu WhatsApp (ex: 91 996156672)...'
                  : step === 'location'
                  ? 'Digite seu Estado e Município...'
                  : 'Digite sua mensagem ou dúvida...'
              }
              className="flex-1 bg-[#0A2A1C] border border-[#7FB68E]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#F5F0E4] placeholder-[#7FB68E]/70 focus:outline-none focus:border-[#C98A2D]"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-xl bg-[#C98A2D] text-[#0A2A1C] flex items-center justify-center hover:bg-[#e09d36] transition-colors disabled:opacity-40 focus:outline-none flex-shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
