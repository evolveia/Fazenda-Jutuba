import React, { useState } from 'react';
import {
  MapPin,
  Plane,
  Palmtree,
  Building2,
  Navigation,
  Lock,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { DISTANCES, FAZENDA_JUTUBA_CONFIG } from '../data/jutubaData';

const distanceIconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-7 h-7 text-[#C98A2D]" />,
  Palmtree: <Palmtree className="w-7 h-7 text-[#C98A2D]" />,
  Building2: <Building2 className="w-7 h-7 text-[#C98A2D]" />,
  Navigation: <Navigation className="w-7 h-7 text-[#C98A2D]" />,
};

export const LocationSection: React.FC = () => {
  const [mapCookiesAccepted, setMapCookiesAccepted] = useState(false);

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#0A2A1C] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Privilegiada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F5F0E4] tracking-tight">
            PERTO DE TUDO, LONGE DO COMUM.
          </h2>
          <p className="text-sm sm:text-base text-[#E7DCC6]/90 mt-3 leading-relaxed">
            A Fazenda Jutuba está estrategicamente situada em Santarém/Pará, com facilidade de acesso terrestre e hidroviário. A poucos minutos de Alter do Chão e do Aeroporto Internacional de Santarém (STM), combinando isolamento paradisíaco e conveniência urbana.
          </p>
        </div>

        {/* Map & Satellite Aerial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Map View with LGPD Cookie Consent Overlay */}
          <div className="relative rounded-2xl overflow-hidden border border-[#7FB68E]/30 bg-[#123B2A] h-[360px] sm:h-[420px] shadow-xl group">
            {!mapCookiesAccepted ? (
              <div className="absolute inset-0 bg-[#0A2A1C]/92 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#123B2A] border border-[#C98A2D]/50 flex items-center justify-center text-[#C98A2D] mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#F5F0E4] mb-1">
                  Mapa Interativo do Google Maps
                </h3>
                <p className="text-xs text-[#E7DCC6]/80 max-w-xs mb-4">
                  Clique para aceitar os cookies de mapa e carregar o mapa de rotas de Santarém e Alter do Chão.
                </p>
                <button
                  onClick={() => setMapCookiesAccepted(true)}
                  className="btn-sol px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0A2A1C]" />
                  <span>Aceitar cookies e ativar este conteúdo</span>
                </button>
              </div>
            ) : (
              <iframe
                title="Mapa Fazenda Jutuba Santarém"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127453.86178783428!2d-54.8000!3d-2.4300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f8303f0d36cd%3A0x889816e87f3b0630!2sSantar%C3%A9m%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 filter grayscale contrast-125 brightness-90 hover:filter-none transition-all duration-500"
                loading="lazy"
              />
            )}
            
            {/* Overlay badge */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0A2A1C]/90 text-[11px] font-bold text-[#F5F0E4] uppercase tracking-wider border border-[#7FB68E]/30 z-10">
              MAPA DE ACESSO TERRESTRE & FLUVIAL
            </div>
          </div>

          {/* Satellite Aerial Photo + Google Earth Link */}
          <div className="relative rounded-2xl overflow-hidden border border-[#7FB68E]/30 bg-[#123B2A] h-[360px] sm:h-[420px] shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
              alt="Vista Aérea do Terreno Fazenda Jutuba no Google Earth"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1C] via-transparent to-black/30" />

            <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0A2A1C]/90 text-[11px] font-bold text-[#C98A2D] uppercase tracking-wider border border-[#7FB68E]/30">
              SATELLITE VIEW • GOOGLE EARTH
            </div>

            {/* Coordinates & Google Earth CTA */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A2A1C]/90 backdrop-blur-md border border-[#7FB68E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="block text-[10px] text-[#7FB68E] uppercase tracking-widest font-mono">
                  COORDENADAS GEOGRÁFICAS
                </span>
                <span className="text-xs sm:text-sm font-bold font-mono text-[#F5F0E4]">
                  {FAZENDA_JUTUBA_CONFIG.coordenadas}
                </span>
              </div>

              <a
                href={FAZENDA_JUTUBA_CONFIG.googleEarthLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sol px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md flex-shrink-0"
              >
                <span>VER NO GOOGLE EARTH</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Dark Bar with 4 Distances Icons */}
        <div className="glass-panel-dark rounded-2xl p-6 sm:p-8 border border-[#7FB68E]/30 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#7FB68E]/20">
            {DISTANCES.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#123B2A] border border-[#7FB68E]/30 flex items-center justify-center flex-shrink-0">
                  {distanceIconMap[item.iconName]}
                </div>
                <div>
                  <span className="block text-xl font-heading font-black text-[#F5F0E4]">
                    {item.distanceTime}
                  </span>
                  <span className="block text-xs font-bold font-heading text-[#C98A2D] uppercase tracking-wider">
                    {item.destination}
                  </span>
                  {item.tag && (
                    <span className="block text-[10px] text-[#7FB68E] mt-0.5">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
