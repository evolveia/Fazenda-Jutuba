import React from 'react';
import {
  ShieldCheck,
  Camera,
  Anchor,
  MapPin,
  Sun,
  Waves,
  Zap,
  Users,
  Dog,
  Car,
  Shield,
  Check
} from 'lucide-react';
import { COMFORT_SAFETY_ITEMS } from '../data/jutubaData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#C98A2D]" />,
  Camera: <Camera className="w-8 h-8 text-[#C98A2D]" />,
  Anchor: <Anchor className="w-8 h-8 text-[#C98A2D]" />,
  MapPin: <MapPin className="w-8 h-8 text-[#C98A2D]" />,
  Sun: <Sun className="w-8 h-8 text-[#C98A2D]" />,
  Waves: <Waves className="w-8 h-8 text-[#C98A2D]" />,
  Zap: <Zap className="w-8 h-8 text-[#C98A2D]" />,
  Users: <Users className="w-8 h-8 text-[#C98A2D]" />,
  Dog: <Dog className="w-8 h-8 text-[#C98A2D]" />,
  Car: <Car className="w-8 h-8 text-[#C98A2D]" />,
};

export const ComfortSafetyGrid: React.FC = () => {
  return (
    <section id="conforto-seguranca" className="py-20 lg:py-28 bg-[#0A2A1C] relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=85"
          alt="Vegetação Amazônica Fazenda Jutuba"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A1C] via-[#0A2A1C]/90 to-[#0A2A1C]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4 text-[#C98A2D]" />
            <span>Infraestrutura Completa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F5F0E4] tracking-tight">
            More com Conforto e Segurança
          </h2>
          <p className="text-sm sm:text-base text-[#E7DCC6]/80 mt-3">
            Projetado para unir a máxima privacidade da floresta com conveniências tecnológicas, autonomia energética e segurança 24 horas.
          </p>
        </div>

        {/* 10 Labeled Linear Icons Grid (5x2 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {COMFORT_SAFETY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel-dark rounded-2xl p-5 sm:p-6 border border-[#7FB68E]/20 text-center flex flex-col items-center justify-center hover:border-[#C98A2D] hover:bg-[#123B2A] transition-all duration-300 group shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#123B2A] border border-[#7FB68E]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0A2A1C] transition-transform">
                {iconMap[item.iconName] || <Check className="w-8 h-8 text-[#C98A2D]" />}
              </div>
              <h3 className="text-sm font-bold font-heading text-[#F5F0E4] group-hover:text-[#C98A2D] transition-colors leading-snug">
                {item.label}
              </h3>
              {item.description && (
                <p className="text-[11px] text-[#E7DCC6]/70 mt-2 leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
