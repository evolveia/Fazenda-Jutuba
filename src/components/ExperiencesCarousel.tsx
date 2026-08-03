import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Palmtree, Eye } from 'lucide-react';
import { EXPERIENCES } from '../data/jutubaData';

export const ExperiencesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="experiencias" className="py-20 bg-[#123B2A] border-y border-[#7FB68E]/20 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A2A1C] border border-[#7FB68E]/30 text-xs font-bold text-[#C98A2D] uppercase tracking-widest mb-3">
              <Palmtree className="w-3.5 h-3.5" />
              <span>Lazer & Imersão na Amazônia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-[#F5F0E4] tracking-tight">
              Experiências Vivas na Fazenda Jutuba
            </h2>
            <p className="text-xs sm:text-sm text-[#E7DCC6]/80 mt-1 max-w-xl">
              De águas quentes e cristalinas a trilhas na copa das árvores, viva o melhor do eco-resort sem sair da sua propriedade.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-[#0A2A1C] border border-[#7FB68E]/30 flex items-center justify-center text-[#F5F0E4] hover:border-[#C98A2D] hover:text-[#C98A2D] transition-colors focus:outline-none"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-[#0A2A1C] border border-[#7FB68E]/30 flex items-center justify-center text-[#F5F0E4] hover:border-[#C98A2D] hover:text-[#C98A2D] transition-colors focus:outline-none"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[280px] sm:w-[320px] md:w-[360px] glass-panel-dark rounded-2xl overflow-hidden border border-[#7FB68E]/20 group hover:border-[#C98A2D] transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex flex-col"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A1C] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0A2A1C]/90 backdrop-blur-md text-[10px] font-bold text-[#C98A2D] uppercase tracking-wider border border-[#7FB68E]/30">
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0A2A1C]/90">
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#F5F0E4] group-hover:text-[#C98A2D] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E7DCC6]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#7FB68E]/15 flex items-center justify-between text-xs text-[#7FB68E]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#C98A2D]" />
                    <span>Fazenda Jutuba</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#C98A2D] tracking-wider">
                    EXCLUSIVO
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
