import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

function getFallbackResponse(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes('legal') || lower.includes('document') || lower.includes('matrícula') || lower.includes('car')) {
    return 'Sim! A Fazenda Jutuba está **100% legalizada e regularizada**. Conta com Matrícula individualizada no Cartório do Registro de Imóveis de Santarém/PA, CAR (Cadastro Ambiental Rural) ativo e SIGEF/georreferenciamento homologado pelo INCRA.';
  }
  if (lower.includes('visita') || lower.includes('agendar') || lower.includes('conhecer')) {
    return "Será um enorme prazer recebê-lo em Santarém! Organizamos visitas presenciais guiadas de barco ou veículo terrestre para apresentar os 272 hectares e os 2 km de praia de rio particular. Clique em 'Falar no WhatsApp' para alinhar a data ideal com nosso consultor.";
  }
  if (lower.includes('onde') || lower.includes('local') || lower.includes('fica') || lower.includes('distância')) {
    return 'A Fazenda Jutuba fica no município de Santarém/Pará, às margens de águas cristalinas do bioma amazônico. Fica a apenas ~20 min de Alter do Chão e ~35 min do Aeroporto Maestro Wilson Fonseca (STM).';
  }
  if (lower.includes('valor') || lower.includes('preço') || lower.includes('custo') || lower.includes('condições')) {
    return 'Temos condições exclusivas de pré-lançamento direto com a incorporadora, com opções facilitadas de parcelamento. Por gentileza, preencha o formulário ou chame diretamente no WhatsApp para receber a tabela oficial de investimentos.';
  }

  return 'A Fazenda Jutuba oferece 272 hectares de reserva preservada e mais de 2 km de orla de praia particular em Santarém do Pará. Gostaria de agendar uma visita VIP ou tirar dúvidas sobre localização, infraestrutura e legalização?';
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensagem inválida.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    const fallbackReply = getFallbackResponse(message);
    return res.json({
      reply: fallbackReply,
      source: 'rule-based',
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemInstruction = `Você é o "Assistente Jutuba", um consultor imobiliário de alto padrão e especialista no empreendimento eco-resort FAZENDA JUTUBA, localizado em Santarém, Pará (Amazônia Brasileira).
Seu tom de voz é extremamente cortês, sofisticado, acolhedor e focado no conceito de "Sua vida em modo floresta todo dia".

Mantenha suas respostas concisas (2 a 4 parágrafos pequenos), elegantes e persuasivas. Sempre convide o cliente a agendar uma visita guiada ou conversar diretamente com um corretor especialista pelo WhatsApp.

Fatos Chave da Fazenda Jutuba:
- Localização: Santarém/Pará (próximo a Alter do Chão e ao Rio Tapajós / Arapiuns). Coordenadas aproximadas 2°25'26.60"S 54°52'08.14"W.
- Área Total: Reserva particular de 272 hectares de floresta amazônica preservada.
- Orla de praia: Mais de 2 km de praia de rio particular de areia branca e águas limpas e quentes.
- Status Jurídico: 100% legalizada e regularizada. Matrícula registrada no Cartório de Imóveis de Santarém/PA, CAR (Cadastro Ambiental Rural) ativo e georreferenciamento SIGEF aprovado.
- Estrutura & Lazer: Mais de 20 experiências naturais (Píer estruturado no rio, Deck solarium, Espaço gourmet com churrasqueira, Lounge da mata, Trilhas ecológicas, Birdwatching, Mirante do Pôr do Sol, Fogueira e camping, Quadra de beach tennis, Caiaque e SUP).
- Segurança & Sustentabilidade: Portaria com controle de acesso, guarita blindada, monitoramento 24h, energia solar, poço artesiano e projeto ecologicamente responsável.
- Distâncias: ~35 min do Aeroporto de Santarém (STM), ~20 min de Alter do Chão, ~40 min do Centro de Santarém, ~15 min da Rodovia PA-457 / BR-163.
- Condições: Lotes e frações exclusivas com condições especiais de lançamento e parcelamento direto com a incorporadora.

Idiomas: Sempre responda em Português do Brasil com excelente redação. Se o usuário perguntar algo fora do contexto do imóvel, responda gentilmente e redirecione para a beleza e oportunidade da Fazenda Jutuba.`;

    let promptText = message;
    if (history && Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-6);
      const formattedHistory = recentHistory
        .map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Cliente' : 'Assistente'}: ${h.text}`)
        .join('\n');
      promptText = `Histórico da conversa:\n${formattedHistory}\n\nNova mensagem do cliente: ${message}\n\nAssistente:`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Desculpe, tive uma oscilação momentânea. Como posso ajudar com a Fazenda Jutuba?';

    return res.json({
      reply,
      source: 'gemini',
    });
  } catch (error) {
    console.error('Erro na API Gemini no Vercel serverless:', error);
    const fallbackReply = getFallbackResponse(message);
    return res.json({
      reply: fallbackReply,
      source: 'rule-based-fallback',
    });
  }
}
