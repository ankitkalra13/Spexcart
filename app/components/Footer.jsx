"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="w-full text-white">
      <div className="w-full flex justify-center items-center bg-[#F6F6F6] text-center z-20">
        <div className="w-full flex flex-col justify-center xl:justify-between items-center text-left px-3 xl:px-8 xl:flex-row bg-gray-800 z-10 min-h-[150px] lg:min-h-[150px] xl:min-h-[100px]">
          <div className="w-full lg:w-[60%] text-center mb-3 xl:w-[70%] xl:text-left xl:mb-0">
            <p className="font-bold text-lg md:text-xl m-0 text-black">
              Exclusive launches, early offers, and some fun.
            </p>
          </div>
          <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%]">
            <div className="relative rounded-full flex gap-3">
              <form className="relative w-full rounded-full flex gap-3" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Join Our Newsletter (Email)"
                  className="border border-gray-600 relative w-[70%] h-[42px] outline-none px-3 text-sm rounded-full bg-white text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="flex justify-center items-center w-[30%] h-[42px] bg-teal-500 text-white gap-1 rounded-full text-base hover:bg-teal-600 transition-colors"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col bg-[#391749] relative justify-center items-center overflow-hidden">
        <div className="w-full flex flex-col h-auto overflow-hidden py-5 px-8">
         
          <div className="w-full flex flex-row sm:flex-col sm:items-start justify-between items-center bg-purple border-b border-gray-600 pb-5">
            <div className="w-auto flex gap-5 sm:items-start items-center flex-wrap">
              
              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-2xl font-bold text-white">Specscart.</div>
                <a
                  href="https://uk.trustpilot.com/review/specscart.co.uk"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors"
                >
                  <span className="text-sm lg:text-base font-bold">Excellent</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm lg:text-base font-bold">Trustpilot</span>
                </a>
              </div>
            </div>
            
          
            <div className="w-[30%] sm:w-full sm:justify-start flex gap-2 justify-end items-end">
              <div className="flex gap-2 text-white text-xs sm:mt-5 sm:flex-wrap">
                <span>PayPal</span>
                <span>Apple Pay</span>
                <span>Google Pay</span>
                <span>Visa</span>
                <span>Mastercard</span>
                <span>Klarna</span>
                <span>Clearpay</span>
              </div>
            </div>
          </div>

          
          <div className="w-full flex flex-col pt-5 z-10">
            <div className="w-full flex sm:flex-wrap">
              <div className="w-[65%] sm:w-full flex flex-col sm:pr-0 sm:border-none pr-8 border-r border-gray-600 justify-between py-5 xl:w-1/2">
                <div className="w-full flex sm:flex-wrap">
                  <div className="w-full basis-full sm:w-1/2 sm:basis-1/2 sm:flex-wrap sm:flex-row flex flex-col gap-7">
                    {/* Glasses */}
                    <div className="group w-full relative">
                      <p className="text-base text-white capitalize font-medium cursor-pointer transition-all group-hover:text-teal-400 m-0">
                        Glasses
                      </p>
                    </div>
                    
                    <div className="group w-full relative">
                      <p className="text-base text-white capitalize font-medium cursor-pointer transition-all group-hover:text-teal-400 m-0">
                        Sunglasses
                      </p>
                    </div>
                    
                    <div className="group w-full relative">
                      <p className="text-base text-white capitalize font-medium cursor-pointer transition-all group-hover:text-teal-400 m-0">
                        Lenses
                      </p>
                    </div>
                    
                    <div className="group w-full relative">
                      <p className="text-base text-white capitalize font-medium cursor-pointer transition-all group-hover:text-teal-400 m-0">
                        Services
                      </p>
                    </div>
                    
                    <div className="group w-full relative">
                      <p className="text-base text-white capitalize font-medium cursor-pointer transition-all group-hover:text-teal-400 m-0">
                        Brands
                      </p>
                    </div>
                    
                    <div className="group w-full relative">
                      <p className="text-base text-white capitalize font-medium cursor-pointer transition-all group-hover:text-teal-400 m-0">
                        Offers
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full basis-full sm:w-1/2 sm:basis-1/2 flex flex-col gap-7">
                    <a href="/about-us" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400">
                      About us
                    </a>
                    
                    <p className="text-base font-semibold text-white capitalize cursor-pointer transition-all hover:text-teal-400 m-0">
                      Guides
                    </p>
                    
                    <a href="/blog" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400">
                      Blogs
                    </a>
                    
                    <p className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400 m-0">
                      Stores
                    </p>
                    
                    <a href="/reviews" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400">
                      Reviews
                    </a>
                    
                    <a href="/jobs" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400 flex items-center gap-2">
                      Jobs
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">We Are Hiring</span>
                    </a>
                  </div>
                  
                  <div className="w-full basis-full flex sm:mt-5 sm:pt-5 sm:border-t sm:border-white flex-col gap-7">
                    <a href="/help" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400">
                      Help & FAQs
                    </a>
                    
                    <a href="/press" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400">
                      Press
                    </a>
                    
                    <p className="text-base text-white capitalize font-medium cursor-pointer transition-all hover:text-teal-400 m-0">
                      Payments
                    </p>
                    
                    <p className="text-base text-white capitalize font-medium cursor-pointer transition-all hover:text-teal-400 m-0">
                      Awards & Featured
                    </p>
                    
                    <a href="/contact-us" className="text-base text-white capitalize font-semibold cursor-pointer transition-all hover:text-teal-400">
                      Contact Us
                    </a>
                  </div>
                </div>
                
                <div className="w-full flex gap-3 mt-[30px] mb-0">
                  <a href="https://www.instagram.com/specscart/" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">IG</span>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/c/Specscart" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">YT</span>
                    </div>
                  </a>
                  <a href="https://x.com/specscartuk" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">X</span>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/specscart" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">LI</span>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/specscart/" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">FB</span>
                    </div>
                  </a>
                  <a href="https://www.pinterest.co.uk/specscartuk/" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">PI</span>
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@specscart" className="group" target="_blank" rel="nofollow">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-400 transition-colors">
                      <span className="text-black group-hover:text-white text-sm font-bold">TT</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="w-[35%] sm:w-full flex flex-col sm:pl-0 pl-16 justify-start items-center py-5 xl:w-1/2">
                <div className="w-full relative">
                  <p className="text-base text-white capitalize font-semibold">Help is always here</p>
                </div>
                
                <div className="w-full flex justify-between items-center mt-3 flex-wrap">
                  <div className="w-full flex min-h-[90px] pt-4 p-3 border border-gray-600 rounded-[15px] justify-start items-start mb-3 xl:w-[46%] xl:mb-8 group">
                    <div className="w-[20px] h-[20px] bg-white rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black text-xs">📞</span>
                    </div>
                    <div className="w-auto flex flex-col gap-1">
                      <p className="text-white text-base font-semibold m-0">Call Us</p>
                      <a href="tel:+44 (0) 161 312 5767" className="text-gray-300 transition-all group-hover:text-teal-400">
                        +44 (0) 161 312 5767
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-full flex min-h-[90px] pt-4 p-3 border border-gray-600 rounded-[15px] justify-start items-start mb-3 xl:w-[46%] xl:mb-8 group">
                    <div className="w-[20px] h-[20px] bg-white rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black text-xs">✉️</span>
                    </div>
                    <div className="w-auto flex flex-col gap-1">
                      <p className="text-white text-base font-semibold m-0">Email Us</p>
                      <a href="mailto:support@specscart.co.uk" className="text-gray-300 underline transition-all group-hover:text-teal-400">
                        support@specscart.co.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-full flex min-h-[90px] pt-4 p-3 border border-gray-600 rounded-[15px] justify-start items-start mb-3 xl:w-[46%] xl:mb-8 group">
                    <div className="w-[20px] h-[20px] bg-white rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black text-xs">💬</span>
                    </div>
                    <div className="w-auto flex flex-col gap-1">
                      <p className="text-white text-base font-semibold m-0">Live Chat</p>
                      <p className="text-gray-300 underline transition-all group-hover:text-teal-400 cursor-pointer">
                        Chat Now
                      </p>
                    </div>
                  </div>
                  
                  {/* Open From */}
                  <div className="w-full flex min-h-[80px] p-3 border border-gray-600 rounded-[15px] justify-start items-start mb-3 xl:w-[46%] xl:mb-8">
                    <div className="w-[20px] h-[20px] bg-white rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black text-xs">🕐</span>
                    </div>
                    <div className="w-auto flex flex-col gap-1">
                      <p className="text-white text-base font-semibold m-0">Open From</p>
                      <p className="text-gray-300 text-sm m-0">
                        <span>Mon - Sat 9:00 AM - 5:30 PM</span>
                        <span className="block">Sun 10:00 AM - 4:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Copyright and Legal */}
          <div className="w-full flex border-t border-gray-600 mt-5 min-h-[90px] items-center sm:flex-wrap sm:pt-5">
            <p className="text-white w-1/2 sm:w-full text-sm m-0">
              Developed by HRM International Limited © 2025 Specscart.
            </p>
            <div className="w-1/2 sm:w-full flex gap-3 sm:justify-start sm:mt-2 sm:items-center justify-end text-white text-sm">
              <a className="underline hover:text-teal-400" href="/privacy-policy">Privacy Policy</a>
              <span>|</span>
              <a className="underline hover:text-teal-400" href="/terms-and-conditions">Terms & Conditions</a>
              <span>|</span>
              <a className="underline hover:text-teal-400" href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
        
        {/* Background Watermark */}
        <p className="footer_overlay absolute bottom-[-9%] left-0 w-full text-purple-800 text-center opacity-50 z-0 m-0 text-6xl font-bold">
          SPECSCART
        </p>
      </div>
      

      <button
        id="backToTop"
        title="Back To Top"
        className="border border-white md:border-0 fixed bottom-6 md:bottom-4 left-4 z-40 rounded-md bg-purple-900 shadow-lg text-white outline-none duration-200 w-[40px] h-[40px] flex justify-center items-center hover:bg-teal-500 transition-all text-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
        </svg>
      </button>
    </footer>
  );
}
