import React from 'react';
import statisticBg from '../assets/statistic.jpg';

const ParallaxStatsSection = () => {
  const stats = [
    { value: "820+", label: "Happy Clients" },
    { value: "150", label: "Visa Categories" },
    { value: "20+", label: "Years Experience" },
    { value: "99%", label: "Success Rates" }
  ];

  return (
    <section 
      className="relative min-h-[440px] bg-local lg:bg-fixed bg-center bg-cover flex items-center py-20 md:py-24"
      style={{ backgroundImage: `url(${statisticBg})` }}
    >

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full text-center">
        
        {/* Top Content - Increased Font Size */}
        <div className="mb-10">
          <h4 className="text-white text-[32px] sm:text-[38px] md:text-[45px] leading-tight">
            "Thousands of people choose our service"
          </h4>
        </div>

        {/* The Long Blue Divider Line */}
        <div className="w-full flex justify-center mb-14">
          <div className="w-full max-w-[1100px] h-[1.5px] bg-[var(--primary-color)]"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              {/* Numbers - Thinner Font Weight & Golden Color */}
              <h3 className="text-[#ffb400] text-[42px] sm:text-[52px] md:text-[60px] lg:text-[72px] font-semibold tracking-tight leading-none mb-4">
                {stat.value}
              </h3>
              
              {/* Labels - Smaller & Spaced Out */}
              <p className="text-white text-[11px] md:text-[12px] font-bold uppercase tracking-[0.3em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxStatsSection;