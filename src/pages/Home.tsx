
import { useState, useEffect } from 'react';
import Header from '../layouts/Header'
import Card from '../components/ui/Card';
import { Wrench, Shield, Zap, ChevronRight ,Star, ShoppingCart } from 'lucide-react';
import React from 'react';
import productsData from './ProductSection.json';
import Footer from '../layouts/Footer';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = [
        { title: "Engine Parts", count: "200+ Products", icon: <Wrench size={35} />, color: "bg-[#3b82f6]" },
        { title: "Brake System", count: "200+ Products", icon: <Shield size={35} />, color: "bg-[#ef4444]" },
        { title: "Suspension", count: "200+ Products", icon: <Zap size={35} />, color: "bg-[#ff5a00]" },
        { title: "Electrical", count: "200+ Products", icon: <Zap size={35} />, color: "bg-[#a855f7]" },
    ];

    return (
        <div>
            <div>
                <Header />
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
                                Experience peak performance with our latest collection of high-end components designed for durability and speed.
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
                                    src="https://images.unsplash.com/photo-1571568495363-99048b36777b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtb3RvcmN5Y2xlJTIwcmlkaW5nfGVufDF8fHx8MTc3MTQ5ODAyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Premium Motorcycle Part"
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
                        <a href="#" className="text-red-600 font-bold flex items-center hover:underline">
                            View All <ChevronRight size={20} className="ml-1" />
                        </a>
                    </div>

                    {/* 2. Responsive Grid/Slider Section */}
                    {/* 
        Mobile: flex + overflow-x-auto (Sliding)
        Desktop: md:grid + md:grid-cols-4 (Normal Grid)
    */}
                    <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 pb-6 snap-x snap-mandatory scrollbar-hide">
                        {categories.map((cat, i) => (
                            <Card
                                key={i}
                                size="full"
                                // Mobile par 'min-w-[280px]' slider ke liye jaruri hai
                                // 'snap-center' se card slide hone par beech me rukega
                                className={`${cat.color} !border-none h-[210px] shadow-lg flex-shrink-0 min-w-[280px] md:min-w-0 snap-center !rounded-2xl`}
                            >
                                <Card.Body className="flex flex-col justify-between !p-7">
                                    {/* Icon Top Par */}
                                    <div className="text-white opacity-95">
                                        {/* Icon size mobile ke liye thoda chota rakha hai */}
                                        {React.cloneElement(cat.icon, { size: 40, strokeWidth: 1.5 })}
                                    </div>

                                    {/* Text Bottom Par */}
                                    <div className="text-white">
                                        <Card.Title className="font-bold text-2xl mb-1 tracking-wide">
                                            {cat.title}
                                        </Card.Title>
                                        <Card.Text className="text-sm font-medium opacity-90 !mt-0">
                                            {cat.count}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* products card */}


            <div className="bg-gray-50 p-4 md:p-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Products</h2>
        <button className="text-red-600 font-bold flex items-center hover:gap-2 transition-all">
          View All <ChevronRight size={20} />
        </button>
      </div>

      {/* Grid for Desktop / Slider for Mobile */}
      <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 max-w-[1400px] mx-auto">
        {productsData.map((item) => (
          <div key={item.id} className="group relative flex-shrink-0 w-[85%] md:w-full snap-center">
            <Card 
              size="full" 
              className="!border-none !shadow-sm hover:shadow-xl transition-all duration-300 !rounded-2xl overflow-hidden bg-white"
            >
              {/* Media Container */}
              <div className="relative overflow-hidden aspect-square md:aspect-auto md:h-[320px]">
                <Card.Media 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Sale Badge */}
                {item.sale && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-md">
                    SALE
                  </div>
                )}

                {/* --- DESKTOP ANIMATION: Slide up Button on Hover --- */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block z-20">
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-red-700 active:scale-95 transition-all">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <Card.Body className="!p-5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.category}
                </span>

                <Card.Title className="!text-lg !font-bold text-gray-900 mt-1 mb-2">
                  {item.title}
                </Card.Title>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                    />
                  ))}
                  <span className="text-gray-400 text-xs ml-1 font-medium">({item.reviews})</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-red-600">₹{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-sm text-gray-400 line-through font-medium">₹{item.oldPrice}</span>
                    )}
                  </div>
                </div>

                {/* --- MOBILE VIEW: Always visible button --- */}
                <div className="mt-5 md:hidden">
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md active:bg-red-700">
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    <Footer />
        </div>

    )
}
