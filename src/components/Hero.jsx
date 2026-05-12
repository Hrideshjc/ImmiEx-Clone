import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: "https://jthemes.net/themes/html/immiex/files/images/slider/slide-3.jpg",
    sub: "Welcome to ImmiEx Agency",
    title: "WE MAKE THE VISA PROCESS FASTER",
    btn: "DISCOVER MORE"
  },
  {
    image: "https://img.freepik.com/free-photo/learning-concept-close-up-student-using-laptop-alibrary_1150-16609.jpg?semt=ais_hybrid&w=740&q=80",
    sub: "We have 20+ years experience in",
    title: "IMMIGRATION & VISA CONSULTATION",
    btn: "BOOK CONSULTATION NOW"
  },
  {
    image: "https://media.istockphoto.com/id/1333039919/photo/solo-traveller-exploring-europe.jpg?s=612x612&w=0&k=20&c=K1iWHIyx9QNv7QggMqbzTwDN74UhZYTlGmwr9u6QSJM=",
    sub: "High-Class Professionals",
    title: "WE'RE MOST TRUSTED IMMIGRATION AGENCY",
    btn: "WHAT WE DO"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(true);
    }, 50);
  };

  const handlePrev = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(true);
    }, 50);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-[120px] md:pt-[140px]">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={slide.image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8">
        {isAnimating && (
          <div className="max-w-4xl w-full space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl font-medium animate-slide-top [animation-delay:200ms]">
              {slides[current].sub}
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight animate-slide-top [animation-delay:400ms] px-2">
              {slides[current].title}
            </h1>

            <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg animate-slide-top [animation-delay:600ms] px-4">
              Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat 
              eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor
            </p>

            <div className="pt-4 animate-slide-top [animation-delay:800ms]">
              <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:px-10 rounded text-sm sm:text-base transition-all uppercase tracking-widest">
                {slides[current].btn}
              </button>
            </div>
          </div>
        )}

        
        <div className="absolute bottom-6 sm:bottom-10 flex gap-4 z-30">
          <button 
            onClick={handlePrev}
            className="p-2 sm:p-3 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 sm:p-3 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;