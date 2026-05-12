import React from 'react';


import canada from '../assets/canada.jpg';
import australia from '../assets/australia.jpg';
import unitedKingdom from '../assets/uk.jpg';
import usa from '../assets/usa.jpg';
import newZealand from '../assets/newzealand.jpg';
import china from '../assets/china.jpg';

import singapore from '../assets/singapore.jpg';

const CountryGridSection = () => {
  const countryData = [
    { name: "Canada", img: canada },
    { name: "Australia", img: australia },
    { name: "United Kingdom", img: unitedKingdom },
    { name: "USA", img: usa },
    { name: "New Zealand", img: newZealand },
    { name: "China", img: china },
    { name: "Singapore", img: singapore },
  ];

  return (
    <section className="py-20 bg-white">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex justify-center flex-col items-center text-center gap-4">
          <h2 className="text-[42px] text-[#222] mb-4">
            Immigration Opportunities
          </h2>
          <p className="text-gray-500 text-[16px] max-w-2xl leading-relaxed">
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countryData.map((country, index) => (
            <div 
              key={index} 
              className="group relative h-[270px] overflow-hidden rounded-md cursor-pointer shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              {/* Background Image */}
              <img 
                src={country.img} 
                alt={country.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

             
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                <h3 className="text-white text-[22px] font-bold mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {country.name}
                </h3>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryGridSection;