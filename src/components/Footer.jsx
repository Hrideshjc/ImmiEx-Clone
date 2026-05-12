import React from 'react';
import logo from '../assets/logo-black.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10">
      
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          
          <div>
            <h4 className="text-[20px] font-bold text-[#222] mb-8">Contact Details</h4>
            <div className="text-[#777] text-[15px] space-y-4 leading-relaxed">
              <p>121 King Street, Melbourne, <br /> Victoria 3000 Australia</p>
              <p>Phone: +12 9 8765 4321</p>
              <p>Email: <span className="text-[var(--primary-color)] cursor-pointer">hello@demo.com</span></p>
              <div className="pt-2">
                <p>Mon-Fri: 9:00AM - 6:30PM</p>
                <p>Saturday: 8:30AM - 3:30PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          
          <div>
            <h4 className="text-[20px] font-bold text-[#222] mb-8">Useful Links</h4>
            <ul className="text-[#777] text-[15px] space-y-3">
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">About ImmiEx</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Visa Information</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Immigration FAQ</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Immigration Assistance</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">ImmiEx Testimonials</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Terms and Conditions</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-[20px] font-bold text-[#222] mb-8">Visas</h4>
            <ul className="text-[#777] text-[15px] space-y-3">
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Visitor Visas</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Permanent Residence Visas</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Business Visas</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Working Holiday Visas</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Studying & Training Visas</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Skilled Work Visas</li>
              <li className="hover:text-[var(--primary-color)] cursor-pointer transition-colors">Family & Partner Visas</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-[20px] font-bold text-[#222] mb-8">Stay Always In Touch</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[var(--primary-color)]"
              />
              <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-3 px-6 rounded-sm transition-all uppercase tracking-wider text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            
           <img src={logo} alt="Logo" className="w-36 md:w-48" />
          </div>

          <div className="text-right">
             <p className="text-[14px] text-gray-500 mb-2">
               © Copyright <span className="font-bold text-[#222]">ImmiEx 2019</span>. All Rights Reserved
             </p>
             <div className="flex gap-4 text-[13px] text-gray-400 justify-center md:justify-end">
               <span className="hover:text-[var(--primary-color)] cursor-pointer">Privacy Policy</span>
               <span className="hover:text-[var(--primary-color)] cursor-pointer">Terms & Conditions</span>
               <span className="hover:text-[var(--primary-color)] cursor-pointer">Cookies</span>
               <span className="hover:text-[var(--primary-color)] cursor-pointer">Replicated by Hridesh Shrestha</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;