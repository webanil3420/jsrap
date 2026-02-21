
import { useState, useEffect } from 'react';
import Header from '../layouts/Header'
import Card from '../components/ui/Card';
import { Wrench ,ChevronRight} from 'lucide-react';

import Footer from '../layouts/Footer';
import { Products } from './Products';
import { useRef } from 'react';

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCategory } from "../app/features/products/productSlice";
import { categories } from './data/categories';
import VisitingCard from "../assets/IMG_20260222_012952.jpg"


export default function Home() {

  const dispatch = useAppDispatch();
  const productRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => setIsVisible(true), []);


  return (
    <div>
      <div>
        <Header productRef={productRef} />
      </div>

      <section className="relative w-full min-h-[600px] bg-[#0f172a] flex items-center justify-center overflow-hidden font-sans">
        {/* Background subtle gradient flare */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text Content */}
            <div
              className={`flex-1 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
              {/* Badge */}
              <div className="inline-block border border-red-800/40 bg-red-900/10 px-4 py-1.5 rounded-full mb-6">
                <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
                  New Arrivals 2026
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                Premium Auto Parts
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  For Your Ride
                </span>
              </h1>

              <p className="text-gray-400 text-lg max-w-lg mt-4 mb-8 leading-relaxed">
                Get genuine and high-quality 2-wheeler spare parts designed for durability, safety, and smooth performance. Upgrade your bike with trusted components at the best price.
              </p>

              {/* Optional CTA Button to balance the UI */}
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors duration-300 ">
                Shop Now
              </button>
            </div>

            {/* Image Container */}
            <div
              className={`flex-1 relative w-full transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
            >
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50 border border-white/5">
                {/* Using a placeholder motorcycle image that matches the vibe */}
                <img
                  src={VisitingCard}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Red glow overlay to match the image style */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative background shape */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-orange-600/10 blur-3xl rounded-full" />
            </div>

          </div>
        </div>

        {/* Custom Keyframe Styles for extra smoothness */}
        <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      </section>
      <div>
        <div className="p-6 md:p-10 bg-white">
          {/* 1. Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Shop By Category
            </h2>
            <span
              onClick={() => handleCategoryClick("All")}
              className="text-red-600 font-bold flex items-center cursor-pointer hover:underline"
            >
              View All <ChevronRight size={20} />
            </span>
          </div>

          {/* 2. Responsive Grid/Slider Section */}
          {/* 
        Mobile: flex + overflow-x-auto (Sliding)
        Desktop: md:grid + md:grid-cols-4 (Normal Grid)
    */}
          <div className="flex overflow-x-auto gap-6 pt-4 pb-8 px-2  scroll-smooth">
            {categories.map((cat, i) => {
              const isActive = selectedCategory === cat.title;
              return (
                <Card
                  key={i}
                  onClick={() => handleCategoryClick(cat.title)}
                  className={`
          cursor-pointer 
          ${isActive ? "ring-4 ring-orange-500 bg-orange-50 shadow-orange-100" : "bg-white border border-gray-100 shadow-sm"}
          h-50 flex-shrink-0 w-50 !rounded-full snap-start
        `}
                >
                  <Card.Body className="flex flex-col items-center justify-center text-center !p-6 h-full">

                    <div className="h-20 w-20 mb-3 relative flex items-center justify-center">

                      {/* Background Icon - Color changes when active */}
                      <div className={`absolute inset-0 rounded-full flex items-center justify-center border transition-colors duration-300
              ${isActive ? "bg-orange-100 border-orange-200" : "bg-gray-100 border-gray-200"}
            `}>
                        <Wrench size={28} className={isActive ? "text-orange-500" : "text-gray-400"} />
                      </div>

                      {cat.image && (
                        <img
                          src={cat.image || ""}
                          alt={cat.title}
                          className="h-20 w-20 object-cover rounded-full border-2 border-white shadow-md z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                    </div>

                    <div className="mt-2">
                      <Card.Title className={`font-bold text-[18px] leading-tight transition-colors
              ${isActive ? "text-orange-600" : "text-slate-800"}
            `}>
                        {cat.title}
                      </Card.Title>
                      <Card.Text className="text-xs text-gray-500 font-medium mt-1">
                        {cat.count}
                      </Card.Text>
                    </div>

                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* products card */}

      <div ref={productRef}>

        <Products />
      </div>
      <Footer />
    </div>

  )
}
