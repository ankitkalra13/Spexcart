'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import GlassesSlider from './components/glassesSlider';
import EyewearCollectionsSlider from './components/eyewearCollectionsSlider';
import Footer from './components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const collections = [
    {
      id: 1,
      name: "SUMMER COLLECTION",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/assets/img/home-page/summer-collection.jpg",
      featured: true
    },
    {
      id: 2,
      name: "LIMITED COLLECTION", 
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/assets/img/home-page/limited-collection.jpg",
      featured: false
    },
    {
      id: 3,
      name: "TRINITY COLLECTION",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/assets/img/home-page/trinity-collection.jpg",
      featured: false
    }
  ];

  return (
    <div className="bg-[#282828]">
      <section className="relative min-h-[75vh] sm:min-h-[55vh] py-[120px] sm:py-[60px] mb-2 overflow-hidden bg-black">
        {/* Background Purple Curve */}
        
        <div className='container mx-auto px-4'>
          {/* Content */}
          <div className="relative z-10 text-center px-4 mx-auto">
            {/* Brand Name */}
            <h1 className="text-2xl sm:text-xl font-light mb-6 text-white">Specscart</h1>
            
            {/* Main Heading */}
            <h2 className="text-6xl sm:text-4xl md:text-8xl text-white font-serif font-bold mb-8 leading-tight">
              Collections
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Imperdiet et sit nisi vitae risus leo dolor elementum varius. Mattis sed mauris sit urna auctor sed nunc aliquam. In condimentum nunc orci tellus. Fringilla suscipit cras volutpat porttitor justo.
            </p>
          
            <div className="w-full flex justify-center items-center">
              <div className="flex items-center gap-4 text-white text-sm tracking-wider">
                
                {/* Left Divider */}
                <span className="h-6 w-px bg-white" />

                {/* Text */}
                <span>
                  LATEST COLLECTION - <strong>LIMITED EDITION</strong>
                </span>

                {/* Circle Arrow */}
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>

                {/* Right Divider */}
                <span className="h-6 w-px bg-white" />
              </div>
            </div>
          </div>
        </div>


        <div className="w-[65%] absolute left-1/2 -translate-x-1/2 bottom-[-420px] h-[650px] sm:h-[350px] sm:bottom-[-220px] sm:w-[90%] flex justify-center items-end">
          {/* Semi-circle */}
          <div className="w-full h-full bg-[#3C0523] rounded-t-[100%]"></div>
        </div>
        
      </section>
      
      <GlassesSlider/>

      <EyewearCollectionsSlider/>

      {/* Footer */}
     
     <Footer/>

    </div>
  );
}