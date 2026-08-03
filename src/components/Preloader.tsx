import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(removeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A2A1C] transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing circle ring */}
        <div className="absolute -inset-4 rounded-full bg-[#C98A2D]/20 blur-xl animate-pulse" />
        
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-[#7FB68E]/30 bg-[#123B2A] shadow-2xl mb-6">
          <Leaf className="w-10 h-10 text-[#C98A2D] animate-bounce" />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-[#F5F0E4] font-heading uppercase text-center">
          FAZENDA JUTUBA
        </h1>
        <p className="text-xs md:text-sm text-[#7FB68E] uppercase tracking-widest mt-2 font-medium">
          Santarém • Pará • Amazônia
        </p>

        {/* Loading progress bar */}
        <div className="w-48 h-1 bg-[#123B2A] rounded-full overflow-hidden mt-6">
          <div className="h-full bg-gradient-to-r from-[#2F7A4D] via-[#C98A2D] to-[#7FB68E] animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
};
