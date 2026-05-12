import React, { useState } from 'react';

const VisaCategoriesGrid = () => {
  
  const [activeTab, setActiveTab] = useState("All Countries");

  
  const categories = [
    "All Countries", "Canada", "Australia", "USA", 
    "United Kingdom", "New Zealand", "China", "South Korea"
  ];

  
  const universityData = {
    "All Countries": [
      { name: "University of Toronto", logo: "https://logo.clearbit.com/utoronto.ca" },
      { name: "University of Melbourne", logo: "https://logo.clearbit.com/unimelb.edu.au" },
      { name: "Harvard University", logo: "https://logo.clearbit.com/harvard.edu" },
      { name: "University of Oxford", logo: "https://logo.clearbit.com/ox.ac.uk" },
      { name: "University of Auckland", logo: "https://logo.clearbit.com/auckland.ac.nz" },
      { name: "Peking University", logo: "https://logo.clearbit.com/pku.edu.cn" },
      { name: "Seoul National University", logo: "https://logo.clearbit.com/snu.ac.kr" },
      { name: "McGill University", logo: "https://logo.clearbit.com/mcgill.ca" },
      { name: "Stanford University", logo: "https://logo.clearbit.com/stanford.edu" },
      { name: "Imperial College London", logo: "https://logo.clearbit.com/imperial.ac.uk" },
      { name: "University of British Columbia", logo: "https://logo.clearbit.com/ubc.ca" },
      { name: "Australian National University", logo: "https://logo.clearbit.com/anu.edu.au" },
      { name: "University of Sydney", logo: "https://logo.clearbit.com/sydney.edu.au" },
      { name: "Fudan University", logo: "https://logo.clearbit.com/fudan.edu.cn" },
      { name: "Yonsei University", logo: "https://logo.clearbit.com/yonsei.ac.kr" },
    ],
    "Canada": [
      { name: "University of Toronto", logo: "https://logo.clearbit.com/utoronto.ca" },
      { name: "McGill University", logo: "https://logo.clearbit.com/mcgill.ca" },
      { name: "University of British Columbia", logo: "https://logo.clearbit.com/ubc.ca" },
      { name: "University of Alberta", logo: "https://logo.clearbit.com/ualberta.ca" },
      { name: "University of Waterloo", logo: "https://logo.clearbit.com/waterloo.ca" },
      { name: "McMaster University", logo: "https://logo.clearbit.com/mcmaster.ca" },
      { name: "Queen's University", logo: "https://logo.clearbit.com/queensu.ca" },
      { name: "University of Calgary", logo: "https://logo.clearbit.com/ucalgary.ca" },
    ],
    "Australia": [
      { name: "University of Melbourne", logo: "https://logo.clearbit.com/unimelb.edu.au" },
      { name: "University of Sydney", logo: "https://logo.clearbit.com/sydney.edu.au" },
      { name: "Australian National University", logo: "https://logo.clearbit.com/anu.edu.au" },
      { name: "University of Technology Sydney", logo: "https://logo.clearbit.com/uts.edu.au" },
      { name: "University of New South Wales", logo: "https://logo.clearbit.com/unsw.edu.au" },
      { name: "Monash University", logo: "https://logo.clearbit.com/monash.edu" },
      { name: "University of Queensland", logo: "https://logo.clearbit.com/uq.edu.au" },
      { name: "University of Adelaide", logo: "https://logo.clearbit.com/adelaide.edu.au" },
      { name: "Curtin University", logo: "https://logo.clearbit.com/curtin.edu.au" },
      { name: "Deakin University", logo: "https://logo.clearbit.com/deakin.edu.au" },
    ],
    "USA": [
      { name: "Harvard University", logo: "https://logo.clearbit.com/harvard.edu" },
      { name: "Massachusetts Institute of Technology", logo: "https://logo.clearbit.com/mit.edu" },
      { name: "Stanford University", logo: "https://logo.clearbit.com/stanford.edu" },
      { name: "New York University", logo: "https://logo.clearbit.com/nyu.edu" },
      { name: "University of California, Los Angeles", logo: "https://logo.clearbit.com/ucla.edu" },
      { name: "Columbia University", logo: "https://logo.clearbit.com/columbia.edu" },
      { name: "University of Chicago", logo: "https://logo.clearbit.com/uchicago.edu" },
      { name: "Georgia Institute of Technology", logo: "https://logo.clearbit.com/gatech.edu" },
      { name: "University of Michigan", logo: "https://logo.clearbit.com/umich.edu" },
      { name: "University of Texas at Austin", logo: "https://logo.clearbit.com/utexas.edu" },
      { name: "University of Washington", logo: "https://logo.clearbit.com/washington.edu" },
      { name: "University of Florida", logo: "https://logo.clearbit.com/ufl.edu" },
    ],
    "United Kingdom": [
      { name: "University of Oxford", logo: "https://logo.clearbit.com/ox.ac.uk" },
      { name: "University of Cambridge", logo: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/images/brand-logo.svg" },
      { name: "Imperial College London", logo: "https://logo.clearbit.com/imperial.ac.uk" },
      { name: "University College London", logo: "https://logo.clearbit.com/ucl.ac.uk" },
      { name: "University of Manchester", logo: "https://logo.clearbit.com/manchester.ac.uk" },
    ],
    "New Zealand": [
      { name: "University of Auckland", logo: "https://logo.clearbit.com/auckland.ac.nz" },
      { name: "Victoria University of Wellington", logo: "https://logo.clearbit.com/victoria.ac.nz" },
      { name: "University of Otago", logo: "https://logo.clearbit.com/otago.ac.nz" },
      { name: "University of Canterbury", logo: "https://logo.clearbit.com/canterbury.ac.nz" },
      { name: "Auckland University of Technology", logo: "https://logo.clearbit.com/aut.ac.nz" },
      { name: "Lincoln University", logo: "https://logo.clearbit.com/lincoln.ac.nz" },
    ],
    "China": [
      { name: "Peking University", logo: "https://logo.clearbit.com/pku.edu.cn" },
      { name: "Tsinghua University", logo: "https://logo.clearbit.com/tsinghua.edu.cn" },
      { name: "Fudan University", logo: "https://logo.clearbit.com/fudan.edu.cn" },
      { name: "Shanghai Jiao Tong University", logo: "https://logo.clearbit.com/sjtu.edu.cn" },
    ],
    "South Korea": [
      { name: "Seoul National University", logo: "https://logo.clearbit.com/snu.ac.kr" },
      { name: "Korea University", logo: "https://logo.clearbit.com/korea.ac.kr" },
      { name: "Yonsei University", logo: "https://logo.clearbit.com/yonsei.ac.kr" },
      { name: "KAIST", logo: "https://logo.clearbit.com/kaist.ac.kr" },
      { name: "POSTECH", logo: "https://logo.clearbit.com/postech.ac.kr" },
      { name: "Hanyang University", logo: "https://logo.clearbit.com/hanyang.ac.kr" },
      { name: "Sungkyunkwan University", logo: "https://logo.clearbit.com/skku.edu" },
    ],
  };

  const currentItems = universityData[activeTab] || [];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
       
        
        <div className="text-center mb-10">
          <h2 className="text-[38px] md:text-[48px] text-[#222] leading-tight mb-6">
            Partner Institutes & Universities
          </h2>
          <p className="text-[#666] text-[17px] leading-relaxed max-w-[800px] mx-auto">
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis 
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-16 text-[18px] font-medium">
          {categories.map((tab, index) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`transition-all duration-300 pb-1 border-b-2 ${
                  activeTab === tab 
                  ? 'text-[var(--primary-color)] border-[var(--primary-color)]' 
                  : 'text-[#999] border-transparent hover:text-[#666]'
                }`}
              >
                {tab}
              </button>
              
              
              {index !== categories.length - 1 && (
                <span className="text-[#ccc] select-none text-[20px]">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {currentItems.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center bg-white p-8 h-[220px] rounded-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center w-full h-[70px] mb-6 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="w-[120px] h-[60px] bg-gray-100 flex items-center justify-center rounded">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Logo Here</span>
                  </div>
                )}
              </div>
              
              
              <p className="text-[#666] text-[14px] font-medium text-center leading-snug group-hover:text-[#222] transition-colors">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisaCategoriesGrid;