import React from 'react';


import consultBg from '../assets/request-form.jpg'; 

const Consultation = () => {
  return (
    <section 
      
      className="relative w-full py-16 md:py-24 bg-local md:bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${consultBg})` }}
    >

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-white">
          <span className="text-[var(--primary-color)] font-bold text-sm tracking-widest uppercase">
            Free 24/7 Support
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
            Get Free & Quality <br className="hidden md:block" /> Online Consultation
          </h2>
          
          <p className="text-lg md:text-xl font-semibold mb-4 text-gray-100">
            Euismod risus auctor egestas augue mauri viverra euismod tortor fugiat a mauris placerat
          </p>
          
          <p className="text-gray-300 leading-relaxed max-w-xl">
            Fringilla risus nec, luctus mauris orci auctor purus euismod and pretium purus at pretium ligula rutrum viverra tortor sapien sodales and primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum viverra tortor gravida
          </p>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl w-full max-w-[500px] sm:max-w-[520px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Request Free Consultation
            </h3>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter Your Name*" 
                className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[var(--primary-color)] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Enter Your Email*" 
                className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[var(--primary-color)] transition-colors"
              />
              <input 
                type="text" 
                placeholder="Enter Your Phone Number*" 
                className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[var(--primary-color)] transition-colors"
              />
              
              <select className="w-full p-3 border border-gray-200 rounded-sm text-gray-500 focus:outline-none focus:border-[var(--primary-color)]">
                <option>Select Visa</option>
                <option>Student Visa</option>
                <option>Business Visa</option>
              </select>

              <select className="w-full p-3 border border-gray-200 rounded-sm text-gray-500 focus:outline-none focus:border-[var(--primary-color)]">
                <option>Visa For</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>UK</option>
              </select>

              <button 
                type="submit" 
                className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-4 mt-4 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Consultation;