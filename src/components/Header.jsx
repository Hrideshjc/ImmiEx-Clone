import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Settings, Menu, X } from 'lucide-react';
import logo from '../assets/logo-black.png';

const Header = ({ selectedColor, setSelectedColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const colors = [
    '#17a2b8', '#ff4500', '#007bff',
    '#dc3545', '#82ae46', '#f67280',
    '#008080', '#ffa500', '#40c057'
  ];

  const handleColorSelect = (color) => setSelectedColor(color);
  const handleReset = () => setSelectedColor('#24a0ad');

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-sm shadow-sm font-sans">
        {/* --- Top Bar --- */}
        <div className="border-b border-gray-100 py-2.5 hidden md:block">
          {/* This container centers your content */}
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[13px] text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gray-400" />
              <span>121 King St, Melbourne, Victoria 3000</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400" />
                <span>+61-2 3456 7890, +61-2 7890 3456</span>
              </div>
              <div className="flex items-center gap-2 border-l pl-8 border-gray-200">
                <Mail size={14} className="text-gray-400" />
                <span>hello@domain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Main Navbar --- */}
        <nav className="py-5">
          {/* This container centers your content */}
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-36 md:w-48" />
              
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-10">
              <ul className="hidden lg:flex items-center gap-10 font-bold text-[#333] text-[14px] tracking-wide">
                <li className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  HOME <ChevronDown size={14} strokeWidth={3} />
                </li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  PAGES <ChevronDown size={14} strokeWidth={3} />
                </li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  MEGA MENU <ChevronDown size={14} strokeWidth={3} />
                </li>
                <li className="cursor-pointer hover:text-[var(--primary-color)] transition-colors">
                  SIMPLE LINK
                </li>
              </ul>

              {/* CTA Button */}
              <button className="hidden md:block bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-3.5 px-9 rounded text-[14px] transition-all uppercase tracking-wider shadow-sm">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#333] hover:text-[var(--primary-color)] transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <ul className="space-y-4">
                <li className="flex items-center justify-between cursor-pointer hover:text-[var(--primary-color)] transition-colors font-bold text-[#333] py-2">
                  HOME <ChevronDown size={14} strokeWidth={3} />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-[var(--primary-color)] transition-colors font-bold text-[#333] py-2">
                  PAGES <ChevronDown size={14} strokeWidth={3} />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-[var(--primary-color)] transition-colors font-bold text-[#333] py-2">
                  MEGA MENU <ChevronDown size={14} strokeWidth={3} />
                </li>
                <li className="cursor-pointer hover:text-[var(--primary-color)] transition-colors font-bold text-[#333] py-2">
                  SIMPLE LINK
                </li>
              </ul>
              <button className="w-full mt-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-3 px-6 rounded text-[14px] transition-all uppercase tracking-wider shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* --- Floating Switcher (Stays on the right) --- */}
      <div className={`fixed top-48 right-0 z-50 flex transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[260px]'}`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[var(--primary-color)] p-3 text-white rounded-l-md shadow-xl h-fit self-start"
        >
          <Settings size={24} className={isOpen ? 'animate-spin' : ''} />
        </button>

        <div className="w-[260px] max-w-full bg-white shadow-2xl h-[70vh] border-l border-gray-100 p-6 overflow-y-auto">
          <h3 className="text-center font-bold text-gray-800 mb-6 uppercase text-sm">Color Scheme</h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {colors.map((color, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleColorSelect(color)}
                style={{ backgroundColor: color }}
                className="w-10 h-10 rounded-full shadow-inner transition-transform duration-300 hover:scale-110"
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
          <button onClick={handleReset} className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-3 rounded uppercase text-xs mb-8">
            Reset Color
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;