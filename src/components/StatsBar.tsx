import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../data/jutubaData';

export const StatsBar: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>(STATS_DATA.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const steps = 40;
          const intervalMs = duration / steps;

          let stepCount = 0;
          const timer = setInterval(() => {
            stepCount++;
            const progress = stepCount / steps;

            setAnimatedValues(
              STATS_DATA.map((item) => Math.min(Math.round(item.value * progress), item.value))
            );

            if (stepCount >= steps) {
              clearInterval(timer);
            }
          }, intervalMs);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-bar" ref={sectionRef} className="relative z-20 -mt-8 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS_DATA.map((stat, idx) => (
          <div
            key={stat.id}
            className="glass-panel-dark rounded-2xl p-6 border border-[#7FB68E]/30 shadow-2xl relative overflow-hidden group hover:border-[#C98A2D]/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F7A4D] via-[#C98A2D] to-[#2F7A4D] opacity-40 group-hover:opacity-100 transition-opacity" />

            {/* Label in uppercase gold */}
            <span className="block text-xs font-heading font-extrabold text-[#C98A2D] tracking-widest uppercase mb-2">
              {stat.label}
            </span>

            {/* Big white number */}
            <div className="flex items-baseline gap-1 my-1">
              {stat.prefix && (
                <span className="text-2xl sm:text-3xl font-heading font-black text-[#F5F0E4]">
                  {stat.prefix}
                </span>
              )}
              <span className="text-4xl sm:text-5xl font-heading font-black text-[#F5F0E4] tracking-tight">
                {hasAnimated ? animatedValues[idx] : 0}
              </span>
              <span className="text-xl sm:text-2xl font-heading font-bold text-[#7FB68E] ml-1">
                {stat.unit}
              </span>
            </div>

            {/* Detail subtitle */}
            <p className="text-xs text-[#E7DCC6]/80 font-medium mt-1">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
