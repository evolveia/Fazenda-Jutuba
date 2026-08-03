import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CHECKLIST_SECTIONS } from '../data/jutubaData';

interface FeatureSectionProps {
  onOpenVisitModal: () => void;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ onOpenVisitModal }) => {
  return (
    <div className="bg-[#0A2A1C]">
      {CHECKLIST_SECTIONS.map((sec, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={sec.id}
            id={sec.id}
            className={`py-20 lg:py-28 border-t border-[#7FB68E]/20 relative ${
              isEven ? 'bg-[#0A2A1C]' : 'bg-[#123B2A]/50'
            }`}
          >
            <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Content Column (Order flips based on even/odd) */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#123B2A] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{sec.subtitle}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#F5F0E4] tracking-tight">
                    {sec.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#E7DCC6]/90 leading-relaxed">
                    {sec.description}
                  </p>

                  {/* Checklist Card */}
                  <div className="glass-panel-dark rounded-2xl p-6 border border-[#7FB68E]/30 shadow-xl">
                    <h3 className="text-xs font-extrabold font-heading text-[#C98A2D] uppercase tracking-widest mb-4">
                      DESTAQUES & INFRAESTRUTURA
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F5F0E4]">
                      {sec.checkpoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C98A2D] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenVisitModal}
                      className="btn-sol px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
                    >
                      CONHECER {sec.title.toUpperCase()}
                    </button>
                  </div>
                </div>

                {/* Photo Carousel / Gallery Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ImageCarouselGallery images={sec.images} title={sec.title} />
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

// Internal component for the section image carousel with controls
const ImageCarouselGallery: React.FC<{
  images: { url: string; caption: string }[];
  title: string;
}> = ({ images, title }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#7FB68E]/30 bg-[#123B2A] shadow-2xl group">
      <div className="h-[320px] sm:h-[420px] w-full relative">
        <img
          src={images[activeIdx].url}
          alt={images[activeIdx].caption}
          className="w-full h-full object-cover transition-all duration-700"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1C] via-transparent to-transparent opacity-90" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A2A1C]/80 border border-[#7FB68E]/30 flex items-center justify-center text-[#F5F0E4] hover:text-[#C98A2D] transition-colors shadow-lg"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A2A1C]/80 border border-[#7FB68E]/30 flex items-center justify-center text-[#F5F0E4] hover:text-[#C98A2D] transition-colors shadow-lg"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute top-4 right-4 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === activeIdx ? 'bg-[#C98A2D] w-6' : 'bg-[#F5F0E4]/40'
            }`}
          />
        ))}
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-[#0A2A1C]/95 backdrop-blur-md border-t border-[#7FB68E]/20">
        <span className="block text-[10px] font-mono text-[#C98A2D] uppercase tracking-wider mb-0.5">
          {title} • REGISTRO FOTOGRÁFICO #{activeIdx + 1}
        </span>
        <p className="text-xs sm:text-sm font-medium text-[#F5F0E4]">
          {images[activeIdx].caption}
        </p>
      </div>
    </div>
  );
};
