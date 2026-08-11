import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { LeadFormSection } from './components/LeadFormSection';
import { ExperiencesCarousel } from './components/ExperiencesCarousel';
import { BannerHeroImage } from './components/BannerHeroImage';
import { NatureModeVideo } from './components/NatureModeVideo';
import { LocationSection } from './components/LocationSection';
import { FeatureSection } from './components/FeatureSection';
import { FinancialLegalSection } from './components/FinancialLegalSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { VisitModal } from './components/VisitModal';
import { LGPDModal } from './components/LGPDModal';

export default function App() {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [lgpdModalType, setLgpdModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#0A2A1C] text-[#F5F0E4] font-['Inter',sans-serif] selection:bg-[#C98A2D] selection:text-[#0A2A1C] relative">
      {/* 0. Animated Preloader */}
      <Preloader />

      {/* 1. Header Navigation */}
      <Header onOpenVisitModal={() => setVisitModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenVisitModal={() => setVisitModalOpen(true)} />

        {/* 3. Stats Bar */}
        <StatsBar />

        {/* 4. A Fazenda Narrative + Lead Capture Form Panel */}
        <LeadFormSection />

        {/* 5. Experiences Carousel */}
        <ExperiencesCarousel />

        {/* 6. Banner Hero Image */}
        <BannerHeroImage />

        {/* 7. Modo Floresta Video Section + LGPD Overlay */}
        <NatureModeVideo onOpenVisitModal={() => setVisitModalOpen(true)} />

        {/* 8. Location & Map Section */}
        <LocationSection />

        {/* 9. Alternating Feature Sections (Reserva Jutuba) */}
        <FeatureSection onOpenVisitModal={() => setVisitModalOpen(true)} />

        {/* 10. Estrutura Financeira e Jurídica */}
        <FinancialLegalSection onOpenVisitModal={() => setVisitModalOpen(true)} />

        {/* 11. FAQ Accordion Section */}
        <FAQSection onOpenVisitModal={() => setVisitModalOpen(true)} />

        {/* 12. Final High-Impact Conversion CTA */}
        <FinalCTA onOpenVisitModal={() => setVisitModalOpen(true)} />
      </main>

      {/* 13. Complete 4-Column Footer */}
      <Footer
        onOpenPrivacy={() => setLgpdModalType('privacy')}
        onOpenTerms={() => setLgpdModalType('terms')}
      />

      {/* Floating Action Element (Chatbot Only) */}
      <Chatbot />

      {/* Modals */}
      <VisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />

      <LGPDModal
        type={lgpdModalType}
        onClose={() => setLgpdModalType(null)}
      />
    </div>
  );
}

/* 
================================================================================
CHECKLIST DE ASSETS NECESSÁRIOS PARA SUBSTITUIÇÃO FINAL NA FAZENDA JUTUBA:
================================================================================
1. [FOTOS AÉREAS DA RESERVA]
   - Foto aérea em alta resolução do perímetro de 272 hectares com o Rio Tapajós ao fundo (Substituir no Hero e na seção A Fazenda).
   - Foto aérea mostrando o loteamento / delimitação de áreas de preservação.

2. [FOTOS DA PRAIA PARTICULAR]
   - Fotos da orla de 2 km de praia de rio com areias brancas e águas límpidas em Santarém.
   - Fotos do píer flutuante estruturado, lanchas e decks solarium.

3. [VÍDEO INSTITUCIONAL]
   - Vídeo drone MP4 / YouTube de alta qualidade gravado em Santarém/Alter do Chão (Modo Floresta).

4. [LOGOMARCA VETORIAL]
   - Logo vetorial em SVG/PNG transparente da FAZENDA JUTUBA (Versão clara e escura).

5. [DADOS COMERCIAIS & JURÍDICOS PARA SUBSTITUIR OS COLCHETES]
   - Número de WhatsApp oficial do plantão de vendas com DDD (ex: 5593991000000 em jutubaData.ts).
   - Número da Matrícula no Cartório de Registro de Imóveis de Santarém/PA.
   - Código CAR (Cadastro Ambiental Rural) e número do SIGEF/INCRA.
   - CNPJ da Incorporadora / Loteadora.
   - Distâncias exatas ajustadas (Aeroporto STM, Alter do Chão, Centro de Santarém, BR-163).
================================================================================
*/
