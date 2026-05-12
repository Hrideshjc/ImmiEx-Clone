import React from 'react';
import { 
  GraduationCap, 
  Wallet, 
  Wrench, 
  Users, 
  Briefcase, 
  Globe 
} from 'lucide-react';

const services = [
  {
    title: "Education Visa",
    desc: "Porta semper lacus cursus a feugiat primis an ultrice dolor undo congue placerat",
    Icon: GraduationCap,
  },
  {
    title: "Business Immigration",
    desc: "Porta semper lacus cursus a feugiat primis an ultrice dolor undo congue placerat",
    Icon: Wallet,
  },
  {
    title: "Skilled Immigration",
    desc: "Porta semper lacus cursus a feugiat primis an ultrice dolor undo congue placerat",
    Icon: Wrench,
  },
  {
    title: "Spouse/Family Visa",
    desc: "Porta semper lacus cursus a feugiat primis an ultrice dolor undo congue placerat",
    Icon: Users,
  },
  {
    title: "Tourist & Visitor Visa",
    desc: "Porta semper lacus cursus a feugiat primis an ultrice dolor undo congue placerat",
    Icon: Briefcase,
  },
  {
    title: "Language Courses",
    desc: "Porta semper lacus cursus a feugiat primis an ultrice dolor undo congue placerat",
    Icon: Globe,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white relative z-30">
      {/* Container matching Navbar width */}
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group flex items-start gap-5 p-10 border border-gray-100 rounded-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <service.Icon 
                  size={50} 
                  strokeWidth={1} 
                  className="text-gray-500 group-hover:text-[var(--primary-color)] transition-colors duration-300" 
                />
              </div>

              {/* Text Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;