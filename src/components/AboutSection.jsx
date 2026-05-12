import React from 'react';
import { Play } from 'lucide-react';
import aboutImage from '../assets/image-03.png';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        
        <div className="relative w-full lg:w-[45%] flex justify-center">
          
          
          <div className="absolute -left-8 -bottom-8 w-32 h-32 opacity-10 pointer-events-none z-0">
             <div className="grid grid-cols-5 gap-4">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="text-gray-400 text-lg">+</div>
                ))}
              </div>
          </div>

          

          
          <div className="relative z-10 w-full max-w-[440px]">
            <img 
              src={aboutImage} 
              alt="Consultation" 
              className="w-full h-auto sm:h-[420px] md:h-[520px] object-cover rounded-md shadow-sm" 
            />
            
          
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300">
                <div className="w-16 h-16 rounded-full border border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)]">
                  <Play fill="var(--primary-color)" size={24} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full lg:w-[55%] pt-8 lg:pt-0">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-3">
            About Agency
          </span>
          
          <h2 className="text-[42px] lg:text-[52px] text-[#222] leading-[1.15] mb-8">
            Consultations for prospective immigrants
          </h2>

          <div className="space-y-7">
            {[
              "An magnis nulla dolor sapien augue erat iaculis purus tempor magna ipsum vitae purus primis pretium ligula rutrum luctus blandit porta justo integer. Feugiat a primis ultrice ligula",
              "Nemo ipsam egestas volute turpis dolores and aliquam quaerat sodales sapien undo pretium purus ligula tempus ipsum undo auctor a mauris lectus ipsum blandit",
              "Quaerat sodales sapien undo euismod purus and blandit laoreet augue an augue egestas. Augue iaculis purus and augue tempor congue magna egestas magna ligula"
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-2 flex-shrink-0">
                  <div className="w-[10px] h-[10px] rounded-full border-2 border-gray-400"></div>
                </div>
                <p className="text-[#666] text-[16px] leading-[1.7]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;