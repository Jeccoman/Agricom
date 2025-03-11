import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      image: '/agricom-banner-1.png',
      title: 'Welcome to Agricom',
      description: 'Transforming agriculture through innovative solutions and sustainable practices'
    },
    {
      image: '/agricom-banner-2.webp',
      title: 'Sustainable Farming',
      description: 'Leading the way in modern agricultural technologies'
    },
    {
      image: '/agricom-banner-3.webp',
      title: 'Growing Together',
      description: 'Building partnerships for a better agricultural future'
    }
  ];

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;