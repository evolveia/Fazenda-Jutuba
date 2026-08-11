import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

function getFallbackResponse(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes('legal') || lower.includes('document') || lower.includes('matrícula') || lower.includes('car')) {
    return 'Sim! A propriedade Fazenda Jutuba está **100% legalizada e regularizada**. Conta com Matrícula individualizada no Cartório do Registro de Imóveis de Santarém/PA, CAR (Cadastro Ambiental Rural) ativo (PA-1506806) e SIGEF/georreferenciamento homologado pelo INCRA.';
  }
  if (lower.includes('visita') || lower.includes('agendar') || lower.includes('conhecer')) {
    return "Será um prazer recebê-lo em Santarém! Organizamos visitas presenciais guiadas para apresentar a área de 2,74 km² (perímetro de 272,70 ha) e os +400 metros de orla exclusiva de praia de rio. Clique em 'Falar no WhatsApp' para agendar com nosso corretor.";
  }
  if (lower.includes('onde') || lower.includes('local') || lower.includes('fica') || lower.includes('distância')) {
    return 'A Fazenda Jutuba fica no município de Santarém/Pará, com +400m de orla no Rio Tapajós. Fica a apenas ~20 min de Alter do Chão e ~35 min do Aeroporto Maestro Wilson Fonseca (STM).';
  }
  if (lower.includes('valor') || lower.includes('preço') || lower.includes('custo') || lower.includes('condições')) {
    return 'Oferecemos excelentes condições de aquisição e investimento direto para a compra deste terreno de 2,74 km² (272,70 ha) com +400m de orla em Santarém. Preencha o formulário ou chame no WhatsApp para receber a proposta comercial oficial.';
  }

  return 'A Fazenda Jutuba é um terreno de 2,74 km² (perímetro de 272,70 ha) com +400m de orla de praia particular no Rio Tapajós em Santarém/PA. Gostaria de agendar uma visita ou receber a proposta de venda do terreno?';
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

    const systemInstruction = `Você é o "Assistente Jutuba", um consultor imobiliário especialista na VENDA DO TERRENO FAZENDA JUTUBA, localizado em Santarém, Pará (Amazônia Brasileira).
Seu tom de voz é extremamente cortês, sofisticado, acolhedor e focado nas oportunidades de investimento e aquisição do terreno de alto padrão.

Mantenha suas respostas concisas (2 a 4 parágrafos pequenos), elegantes e persuasivas. Sempre convide o cliente a agendar uma visita guiada ou conversar diretamente com um corretor pelo WhatsApp.

Fatos Chave do Terreno Fazenda Jutuba:
- Localização: Santarém/Pará (próximo a Alter do Chão e ao Rio Tapajós / Arapiuns). Coordenadas: 2°25'26.60"S 54°52'08.14"W.
- Perímetro & Área Total: Perímetro de 272,70 ha e Área total de 2,74 km² de floresta amazônica preservada.
- Orla de praia: +400 metros de Orla de praia de rio de areia clara e águas límpidas do Rio Tapajós.
- Link Google Earth: https://earth.google.com/earth/d/1UD5jUDUDnTdcA3PxCegttr9b8lU3bFAn?usp=sharing
- Status Jurídico: 100% legalizada e regularizada. Matrícula registrada no Cartório de Imóveis de Santarém/PA, CAR (Cadastro Ambiental Rural PA-1506806) ativo e georreferenciamento SIGEF aprovado.
- Potencial do Terreno: Excelente para eco-resort, loteamento de luxo, marina, pousada boutique ou reserva particular residencial.
- Segurança & Infraestrutura: Acesso por via terrestre e fluvial, poço artesiano, energia solar, portaria e georreferenciamento.
- Distâncias: ~35 min do Aeroporto de Santarém (STM), ~20 min de Alter do Chão, ~40 min do Centro de Santarém, ~15 min da Rodovia PA-457 / BR-163.
- Venda e Condições: Negociação direta para aquisição do terreno com atendimento VIP.

Idiomas: Sempre responda em Português do Brasil com excelente redação. Se o usuário perguntar algo fora do contexto do imóvel, responda gentilmente e redirecione para a oportunidade da Fazenda Jutuba.`;

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
