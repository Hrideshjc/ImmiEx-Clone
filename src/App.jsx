// App.jsx
import { useEffect, useMemo, useState } from 'react';
import AboutSection from './components/AboutSection';
import ConsultantSection from './components/ConsultantSection';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ParallaxStatsSection from './components/ParallaxStatsSection';
import VisaTabsSection from './components/VisaTabsSection';
import CountryGridSection from './components/CountryGridSection';
import VisaCategoriesGrid from './components/VisaCategoriesGrid';
import VisaStatsSection from './components/VisaStatsSection';
import Testimonials from './components/Testimonials';
import LatestNews from './components/LatestNews';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

const DEFAULT_PRIMARY = '#24a0ad';

const darkenColor = (hex, amount = 0.16) => {
  const sanitized = hex.replace('#', '');
  const r = Math.round(parseInt(sanitized.substring(0, 2), 16) * (1 - amount));
  const g = Math.round(parseInt(sanitized.substring(2, 4), 16) * (1 - amount));
  const b = Math.round(parseInt(sanitized.substring(4, 6), 16) * (1 - amount));
  return `rgb(${r}, ${g}, ${b})`;
};

function App() {
  const [primaryColor, setPrimaryColor] = useState(DEFAULT_PRIMARY);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const storedColor = window.localStorage.getItem('immiex-primary-color');
    if (storedColor) setPrimaryColor(storedColor);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('immiex-primary-color', primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const primaryHover = useMemo(() => darkenColor(primaryColor, 0.16), [primaryColor]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-gray-200"
      style={{
        '--primary-color': primaryColor,
        '--primary-hover-color': primaryHover,
      }}
    >
      <Header selectedColor={primaryColor} setSelectedColor={setPrimaryColor} />
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <ConsultantSection />
      <ParallaxStatsSection />
      <VisaTabsSection />
      <CountryGridSection />
      <VisaStatsSection />
      <VisaCategoriesGrid />
      <Testimonials />
      <LatestNews />
      <Consultation />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-color)] text-white shadow-xl transition duration-300 ease-in-out hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-4 focus:ring-[rgba(36,160,173,0.3)]"
          aria-label="Scroll to top"
          title="Back to top"
          type="button"
          style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.18)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
            <path fill="currentColor" d="M12 6.5l-6 6 1.4 1.4L11 10.3V18h2V10.3l3.6 3.6L18 12.5l-6-6z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;