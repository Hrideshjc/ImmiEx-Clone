import React, { useState } from 'react';
// Asset imports
import tabImg1 from '../assets/image-1.png';
import tabImg2 from '../assets/image-03.png';
import tabImg3 from '../assets/image-2.png';

const VisaTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: "Government Approved",
      heading: "We make the visa process faster",
      subheading: "Getting a visa",
      desc: "An magnis nulla dolor sapien augue erat iaculis purus tempor magna ipsum vitae purus primis pretium ligula rutrum luctus blandit porta justo integer. Feugiat a primis ultrice ligula",
      points: [
        "Magna egestas magna ipsum vitae purus ipsum",
        "Nemo ipsam egestas volute turpis dolores",
        "Magna egestas magna ipsum vitae purus ipsum"
      ],
      image: tabImg1
    },
    {
      title: "No hidden costs",
      heading: "Work in the best companies abroad",
      subheading: "We love our clients",
      desc: "Nemo ipsam egestas volute turpis dolores and aliquam quaerat sodales sapien undo pretium purus ligula tempus ipsum undo auctor a mauris lectus ipsum blandit",
      points: [
        "Aliquam quaerat sodales sapien undo pretium",
        "Luctus blandit porta justo integer feugiat",
        "Purus primis pretium ligula rutrum luctus"
      ],
      image: tabImg2
    },
    {
      title: "Fast, Easy & Secure",
      heading: "Explore the world with ease",
      subheading: "Professional Advisors",
      desc: "Quaerat sodales sapien undo euismod purus and blandit laoreet augue an augue egestas. Augue iaculis purus and augue tempor congue magna egestas magna ligula",
      points: [
        "Tempor congue magna egestas magna ligula",
        "Sapien undo euismod purus and blandit",
        "Laoreet augue an augue egestas iaculis"
      ],
      image: tabImg3
    }
  ];

  return (
    <section className="pt-16 pb-0 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- Tab Selector with Underline --- */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 border-b border-gray-100">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative pb-4 text-[14px] font-bold uppercase tracking-[0.2em] transition-all duration-300
                ${activeTab === index ? 'text-[var(--primary-color)]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {tab.title}
              <div 
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-[var(--primary-color)] transition-transform duration-300 origin-left
                ${activeTab === index ? 'scale-x-100' : 'scale-x-0'}`}
              />
            </button>
          ))}
        </div>

        {/* --- Content Area --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          
          {/* Left Side: Image */}
          <div className="relative w-full lg:w-[45%] flex justify-center order-2 lg:order-1">
            <div className="absolute -left-8 -bottom-8 w-32 h-32 opacity-10 pointer-events-none z-0">
               <div className="grid grid-cols-5 gap-4">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="text-gray-400 text-lg">+</div>
                  ))}
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[440px]">
              <img 
                src={tabData[activeTab].image} 
                alt={tabData[activeTab].title}
                className="w-full h-auto max-h-[420px] sm:max-h-[520px] object-cover rounded-md shadow-sm transition-opacity duration-500" 
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-[55%] pt-8 lg:pt-0 order-1 lg:order-2">
            <h2 className='text-[13px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-3'> 
              {tabData[activeTab].subheading}
            </h2>
            <h2 className="text-[38px] lg:text-[46px] font-bold text-[#222] leading-[1.15] mb-8">
              {tabData[activeTab].heading}
            </h2>

            <div className="space-y-7">
              <p className="text-[#666] text-[17px] leading-[1.8]">
                {tabData[activeTab].desc}
              </p>

              <div className="space-y-5 pt-2">
                {tabData[activeTab].points.map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-2 flex-shrink-0">
                      <div className="w-[10px] h-[10px] rounded-full border-2 border-gray-400"></div>
                    </div>
                    <p className="text-[#666] text-[16px] leading-snug">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Dashed Divider --- */}
<div className="max-w-[1200px] mx-auto px-6 pb-12">
  <div className="w-full border-t-[4px] border-r-10 border-dashed border-gray-300" />
</div>
        
      </div>
    </section>
  );
};

export default VisaTabsSection;