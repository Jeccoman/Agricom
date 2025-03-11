"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      image: "/agricom-banner-1.png",
      title: "No 1 farm mechanization company in Tanzania",
    },
    {
      image: "/agricom-banner-2.webp",
      title: "Reliable After-Sale Services",
    },
    {
      image: "/agricom-banner-3.webp",
      title: "Total solution in the Agriculture value chain",
    },
  ]

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Thumbs]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center z-10">
                <div className="px-6 md:px-16 lg:px-24">
                  <h1 className="text-4xl md:text-6xl font-bold text-white text-left mb-6 max-w-2xl drop-shadow-lg">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev absolute left-4 top-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white cursor-pointer hover:bg-white/20 transition-all duration-300">
          <ChevronLeft className="w-6 h-6" />
        </div>
        <div className="swiper-button-next absolute right-4 top-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white cursor-pointer hover:bg-white/20 transition-all duration-300">
          <ChevronRight className="w-6 h-6" />
        </div>
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
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="object-cover w-full h-20" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero

