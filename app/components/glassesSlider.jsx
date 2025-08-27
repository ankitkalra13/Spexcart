"use client";

import { useState, useEffect } from "react";
import IMAGES from "@/lib/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Loader from "./Loader";

export default function GlassesSlider() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    { id: 1, img: IMAGES.HomeNew.specOne.src },
    { id: 2, img: IMAGES.HomeNew.specTwo.src },
    { id: 3, img: IMAGES.HomeNew.specThree.src },
    { id: 4, img: IMAGES.HomeNew.specFive.src },
    { id: 5, img: IMAGES.HomeNew.specFive.src },
  ];

  return (
    <section className="py-[120px] sm:py-[60px] bg-gradient-to-br from-[#3C0523] via-[#5a0a2e] to-[#F0AFD2] text-center mb-2">
      <div className="container mx-auto px-4">
        
        {isLoading && (
          <div className="my-16">
            <Loader text="Loading Glasses..." />
          </div>
        )}
        
        {!isLoading && (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={80}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 400,
              modifier: 1.5,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Mousewheel]}
            mousewheel={{ forceToAxis: true }}
            className="max-w-7xl mx-auto"
            breakpoints={{
              320: { 
                slidesPerView: 3, 
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 15,
                  stretch: 0,
                  depth: 300,
                  modifier: 1.3,
                  slideShadows: true,
                }
              },
              768: { 
                slidesPerView: 3, 
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 18,
                  stretch: 0,
                  depth: 300,
                  modifier: 1.3,
                  slideShadows: true,
                }
              },
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 80,
                coverflowEffect: {
                  rotate: 20,
                  stretch: 0,
                  depth: 400,
                  modifier: 1.5,
                  slideShadows: true,
                }
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                className="flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all duration-500"
                style={{
                  transform: `rotateY(${(index - 2) * 25}deg) translateZ(${(index - 2) * 120}px) scale(${index === 2 ? 1 : 0.85})`,
                }}
              >
                <div className="relative w-full h-full group">
                  <Image
                    src={slide.img}
                    alt="Glasses"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={400}
                    height={500}
                  />
                  
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white sm:hidden">
                      <h3 className="text-2xl text-center font-bold mb-2">Collection {slide.id}</h3>
                      <p className="text-sm text-white text-center">Discover the latest styles</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        
        <div className="mt-16 text-center sm:mt-8">
          <h2 className="text-[32px] leading-[1.15] sm:text-[24px] sm:leading-[1.1] font-medium">
            <span className="gradient-text">
              Discover Our Entire Collections -
            </span>{' '}
            <span className="font-bold text-white">New.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
