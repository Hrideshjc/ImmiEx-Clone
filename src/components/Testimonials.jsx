import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Replace these with your actual local asset paths
import heroBg from '../assets/tra-city.png'; 

const Testimonials = () => {
  // Add as many testimonials here as you like
  const testimonialData = [
    {
      id: 1,
      name: "Amelie Peterson",
      role: "France Working Visa",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "An orci nullam tempor sapien, gravida donec enim ipsum a porta. An augue in cubilia laoreet magna suscipit egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue ultrice at ligula egestas magna suscipit lectus gestas magna viverra dolor neque est gravida justo integer and velna auctor"
    },
    {
      id: 2,
      name: "Scott Boxer",
      role: "Germany Travel Visa",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "An augue cubilia laoreet magna suscipit egestas magna ipsum vitae purus undo ipsum primis in cubilia laoreet augue ultrice ligula egestas magna viverra dolor lectus gestas magna viverra dolor neque est gravida. Mauris donec ociis magnis sapien etiam sapien sem sagittis"
    },
    {
      id: 3,
      name: "Evelyn",
      role: "Australia PR Visa",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "USA Student Visa",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Donec enim ipsum porta justo integer velna vitae auctor integer congue magna pretium purus pretium. An magnis nulla dolor sapien augue erat iaculis"
    },
    {
      id: 5,
      name: "Sarah Jenkins",
      role: "UK Business Visa",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      text: "Cubilia augue vitae laoreet augue in cubilia augue egestas an ipsum turpis. Mauris donec ociis et magnis sapien etiam sapien sem sagittis"
    }
  ];

  return (
    <section 
      className="relative w-full min-h-[auto] md:min-h-[100vh] py-16 md:py-24 overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      <div className="absolute inset-0 bg-white/20 z-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[36px] md:text-[52px] text-[#222] mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[#777] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[780px] mx-auto">
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, 
            felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* --- Swiper Slider --- */}
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="testimonial-swiper pb-6"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white border border-gray-100 p-6 md:p-10 rounded-lg shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-md">
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-[70px] h-[70px] rounded-full object-cover border-2 border-gray-50" 
                    />
                    <div>
                      <h4 className="text-[19px] font-bold text-[#222]">{item.name}</h4>
                      <p className="text-[14px] text-gray-400">({item.role})</p>
                    </div>
                  </div>

                  
                  <p className="text-[#666] text-[16px] leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="flex justify-center items-center gap-6 mt-10 md:mt-12">
            <button className="swiper-button-prev-custom text-[#222] text-2xl md:text-3xl hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              ←
            </button>
            <button className="swiper-button-next-custom text-[#222] text-2xl md:text-3xl hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;