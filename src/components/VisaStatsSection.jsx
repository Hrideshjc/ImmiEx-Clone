import React from 'react';
import canada from '../assets/canada.jpg';
import australia from '../assets/australia.jpg';
import usa from '../assets/usa.jpg';
import uk from '../assets/uk.jpg';
import europe from '../assets/europe.png';
import bgImage from '../assets/about-6.jpg'; 
import studentsImg from '../assets/image-08.png';

const OverseasEducation = () => {
  const flags = [
    { name: "CANADA", logo: canada },
    { name: "AUSTRALIA", logo: australia },
    { name: "USA", logo: usa },
    { name: "UK", logo: uk },
    { name: "EUROPE", logo: europe },
  ];

  return (
    <section 
      className="relative w-full min-h-[600px] bg-local lg:bg-fixed bg-center bg-cover flex items-center overflow-hidden py-16 sm:py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Students Image */}
        <div className="hidden lg:block self-end">
          <img 
            src={studentsImg} 
            alt="Students" 
            className="max-h-full object-contain"
          />
        </div>

        {/* Right Side: Content */}
        <div className="text-white py-16 lg:py-0">
          <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-gray-300 block mb-4">
            Overseas Education
          </span>
          
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] mb-8">
            Looking for Quality <br /> Abroad Education?
          </h2>
          
          <p className="text-gray-300 text-[17px] leading-relaxed mb-10 max-w-[550px]">
            Fringilla risus luctus mauris auctor purus euismod pretium purus at pretium 
            ligula rutrum viverra tortor sapien sodales quaerat sodales sapien blandit 
            dolores and aliquam.
          </p>

          <h4 className="text-[20px] font-bold mb-8">
            350+ Universities in 17 Countries:
          </h4>

          {/* Flags Row */}
          <div className="flex flex-wrap gap-8 items-end">
            {flags.map((flag) => (
              <div key={flag.name} className="flex flex-col items-center gap-3">
                {/* Note: Using a placeholder for flag visuals. 
                   Replace with your actual flag SVG/PNG assets 
                */}
                <div className="w-12 h-8 bg-white/10 rounded-sm overflow-hidden flex items-center justify-center border border-white/20">
                   <img src={flag.logo} alt={flag.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] font-bold tracking-widest">{flag.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OverseasEducation;