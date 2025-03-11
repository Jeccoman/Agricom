import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    {
      image: '/agricom-banner-1.png',
      title: 'No 1 farm mechanization company in Tanzania',
    },
    {
      image: '/agricom-banner-2.webp',
      title: 'Reliable After-Sale Services',
    },
    {
      image: '/agricom-banner-3.webp',
      title: 'Total solution in the Agriculture value chain',
    }
  ];

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent h-full"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-start text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-start mb-6">
                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="absolute bottom-0 left-0 right-0 w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.title} className="object-cover w-full h-20" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;