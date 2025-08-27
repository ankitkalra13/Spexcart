"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import "swiper/css";
import IMAGES from "@/lib/images";
import Image from "next/image";
import Loader from "./Loader";

const collections = [
  {
    title: "SUMMER COLLECTION",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: IMAGES.HomeNew.glasses.src
  },
  {
    title: "LIMITED COLLECTION",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: IMAGES.HomeNew.glasses.src
  },
  {
    title: "TRINITY COLLECTION",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: IMAGES.HomeNew.glasses.src
  },
  {
    title: "SUMMER COLLECTION",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: IMAGES.HomeNew.glasses.src
  },
];

export default function EyewearCollectionsSlider() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full pt-[120px] pb-20 sm:pt-[60px] sm:pb-10 bg-black relative overflow-hidden">

      <div className="w-[65%] absolute left-1/2 -translate-x-1/2 top-[-420px] h-[650px] sm:h-[350px] sm:top-[-220px] sm:w-[90%] flex justify-center items-end">
        <div className="w-full h-full bg-[#D895B8] rounded-b-[100%]"></div>
      </div>

      <div className="container mt-[200px] sm:mt-[100px] mx-auto px-4">
        
         {/* LATES COLLECTION Banner */}
         <div className="my-12 text-center">
          <div className="flex items-center justify-start space-x-6">
            <div className="w-px h-8 bg-white"></div>
            
            <h3 className="text-2xl sm:text-xl font-medium text-white uppercase tracking-wider">
              LATES COLLECTION - FRAMES
            </h3>
            
            <div className="w-px h-8 bg-white"></div>
            
            <button className="px-6 py-3 bg-[#3C0523] hover:bg-[#3C0523] text-white font-medium rounded-[8px] transition-colors duration-300">
              Featured
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="my-16">
            <Loader text="Loading Collections..." />
          </div>
        )}

        {!isLoading && (
          <Swiper
            modules={[Mousewheel]}
            spaceBetween={100}
            slidesPerView={3.2} 
            loop={true}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              320: { slidesPerView: 1.4, spaceBetween: 25 }, 
              768: { slidesPerView: 2.4, spaceBetween: 50 },
              1024: { slidesPerView: 3.4, spaceBetween: 150 },
            }}
          >
            {collections.map((collection, index) => (
              <SwiperSlide
                key={index}
                className={`transition-all duration-300 ${
                  index % 2 === 0 ? "mt-[100px]" : "mb-0"
                }`}
              >
                <div className="group cursor-pointer">
                  <div className="relative shadow-xl hover:shadow-2xl rounded-xl p-2 transition-all duration-300">
                    
                    <div className="relative mb-6">
                      <div className="w-full sm:h-[250px] h-[400px] rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
                        <Image
                          src={collection.image}
                          alt={collection.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          width={300}
                          height={256}
                        />
                      </div>
                    </div>

                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                      <p className="text-white mb-4 text-sm leading-relaxed">
                        {collection.description}
                      </p>

                      
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300 shadow-md">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      
      <div className="mt-16 sm:mt-8 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-[32px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
              WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD OF SPECSCART COLLECTIONS
            </span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
