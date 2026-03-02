
import { useState, useEffect } from 'react';
import Header from '../layouts/Header'
import Card from '../components/ui/Card';
import { Wrench, ChevronRight } from 'lucide-react';

import Footer from '../layouts/Footer';
import { Products } from './Products';
import { useRef } from 'react';

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCategory } from "../app/features/products/productSlice";
import { categories } from './data/categories';
import HeroSection from './HeroSection';
import BrandsPage from './Brands';



export default function Home() {

  const dispatch = useAppDispatch();
  const productRef = useRef<HTMLDivElement | null>(null);


  const selectedCategory = useAppSelector(
    (state) => state.Product.selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    console.log("Clicked:", category);
    dispatch(setCategory(category));
    console.log("Clicked:", category);
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <div>
        <Header productRef={productRef} />
      </div>
      <div>
        < HeroSection />
      </div>

<div>
  <div className="p-4 md:p-10 bg-white">
    {/* 1. Header Section */}
    <div className="flex justify-between items-end mb-6 px-2">
      <div>
        <h2 className="text-lg md:text-2xl font-extrabold text-slate-900 tracking-tight">
          Shop By Category
        </h2>
        <div className="h-1 w-10 bg-orange-500 mt-1 rounded-full"></div>
      </div>
      <span
        onClick={() => handleCategoryClick("All")}
        className="text-orange-600 text-xs md:text-sm font-bold flex items-center cursor-pointer hover:text-orange-700 transition-colors"
      >
        View All <ChevronRight size={16} />
      </span>
    </div>

    {/* 2. Categories Scroll Area */}
    <div className="flex overflow-x-auto gap-4 md:gap-6 pt-2 pb-6 px-2 scroll-smooth no-scrollbar">
      {categories.map((cat, i) => {
        const isActive = selectedCategory === cat.title;
        return (
          <div
            key={i}
            onClick={() => handleCategoryClick(cat.title)}
            className={`
              relative flex-shrink-0 cursor-pointer transition-all duration-300
              /* CIRCLE SIZE: Mobile me 110px, Desktop me 130px */
              w-[110px] h-[110px] md:w-[130px] md:h-[130px] 
              rounded-full flex flex-col items-center justify-center text-center
              /* PADDING: 4px safe zone from border */
              p-2 md:p-3
              ${isActive 
                ? "ring-4 ring-orange-500/20 bg-orange-50 border-2 border-orange-500 shadow-md" 
                : "bg-white border border-gray-100 shadow-sm hover:border-orange-200"
              }
            `}
          >
            {/* Image/Icon Container */}
            <div className="relative mb-1">
              <div className={`
                /* Image size thodi choti taaki text ko jagah mile */
                h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center
                ${isActive ? "bg-orange-100" : "bg-gray-50"}
              `}>
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover rounded-full"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <Wrench size={20} className={isActive ? "text-orange-500" : "text-gray-400"} />
                )}
              </div>
            </div>

            {/* Text Section - Optimized to stay inside border */}
            <div className="w-full px-1 overflow-hidden">
              <h3 className={`
                /* Small Text Size: Mobile 11px, Desktop 12px */
                font-bold text-[11px] md:text-[12px] leading-[1.2] transition-colors
                /* Line clamp taaki text bahar na nikle */
                display-webkit-box overflow-hidden line-clamp-2
                ${isActive ? "text-orange-600" : "text-slate-800"}
              `}>
                {cat.title}
              </h3>
              <p className="text-[9px] md:text-[10px] text-gray-400 font-medium mt-0.5">
                {cat.count} Items
              </p>
            </div>
            
            {/* Small Active Dot */}
            {isActive && (
              <div className="absolute bottom-1 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            )}
          </div>
        );
      })}
    </div>
  </div>

  <style dangerouslySetInnerHTML={{ __html: `
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}} />
</div>
      {/* products card */}

      <div ref={productRef}>

        <Products />
      </div>
      <div>
        <BrandsPage />
      </div>
      <Footer />
    </div>

  )
}
