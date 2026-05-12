import React from 'react';
import worldMap from '../assets/world-map.png';

const ConsultantSection = () => {
  return (
    <section className="py-16 bg-white">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-[42px] text-[#222] mb-4">
            Find a consultant by:
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, 
            felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          
          <div className="lg:col-span-3">
            <h3 className="text-[20px] font-bold text-[#222] mb-6">Country:</h3>
            <ul className="space-y-3">
              {["Canada", "Australia", "United Kingdom", "USA", "New Zealand", "South Korea"].map((item) => (
                <li key={item} className="text-gray-600 hover:text-[var(--primary-color)] cursor-pointer transition-colors text-[16px]">
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 text-[var(--primary-color)] font-bold flex items-center gap-2 group">
              View All 
              <span className="transform group-hover:translate-x-1 transition-transform">▶</span>
            </button>
          </div>

          
          <div className="lg:col-span-4">
            <h3 className="text-[20px] font-bold text-[#222] mb-6">Practice Area:</h3>
            <ul className="space-y-3">
              {["Student Visa", "Skilled Work Visa", "Business visa", "Spouse/Family Visa", "Tourist & Visitor Visa", "Immigration Consult"].map((item) => (
                <li key={item} className="text-gray-600 hover:text-[var(--primary-color)] cursor-pointer transition-colors text-[16px]">
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 text-[var(--primary-color)] font-bold flex items-center gap-2 group">
              View All 
              <span className="transform group-hover:translate-x-1 transition-transform">▶</span>
            </button>
          </div>

          
          <div className="lg:col-span-5 flex justify-end">
            <img 
              src={worldMap} 
              alt="World Map" 
              className="w-full h-auto max-w-[500px] object-contain opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultantSection;