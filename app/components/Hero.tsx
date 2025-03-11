// app/components/HeroCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "/images/agricom-banner-1.png",
    title: "No. 1 Farm Mechanization Company",
    highlight: "Tanzania",
  },
  {
    image: "/images/agricom-banner-2.webp",
    title: "Reliable After-Sale",
    highlight: "Services",
  },
];

export function Hero() {
  return (
    <section className="relative h-[640px] lg:h-[840px] -translate-y-20">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full bg-gradient-to-b from-primary-950 to-primary-500"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-full">
            <div className="relative h-full w-full">
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-transparent to-transparent z-10" />
              
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover object-center"
              />
              
              {/* Text Content */}
              <div className="absolute top-32 lg:top-52 left-4 lg:left-20 text-5xl lg:text-6xl text-white space-y-2 font-bold z-20">
                <h1 className="leading-tight">
                  {slide.title}
                  <br />
                  <span className="text-secondary">{slide.highlight}</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}