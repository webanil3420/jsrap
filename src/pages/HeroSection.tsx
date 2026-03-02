import { useState, useEffect } from "react";
import VisitingCard from "../assets/951601cf-839a-4c4a-8e53-845b54da5b50 shop.jfif"

export default function HeroSection() {
      const [isVisible, setIsVisible] = useState(false);
    useEffect(() => setIsVisible(true), []);
  return (
    <div>
      <section className="relative w-full bg-[#0f172a] py-16 md:py-24 flex items-center overflow-hidden font-sans">

  {/* Soft Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-blue-900/10 pointer-events-none" />

  <div className="container mx-auto px-6 lg:px-16 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-14">

      {/* Left Content */}
      <div
        className={`flex-1 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        {/* Badge */}
        <div className="inline-block border border-orange-700/40 bg-orange-900/10 px-4 py-1.5 rounded-full mb-6">
          <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
            New Arrivals 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Premium Auto Parts
          <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            For Your Ride
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-lg mt-6 mb-8 leading-relaxed">
          Get genuine and high-quality 2-wheeler spare parts designed for
          durability, safety, and smooth performance. Upgrade your bike with
          trusted components at the best price.
        </p>

        {/* Button */}
        <button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-600/20 transition-all duration-300 hover:scale-105">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div
        className={`flex-1 transition-all duration-1000 delay-300 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10">

          <img
            src={VisitingCard}
            alt="Motorcycle Parts"
            className="w-full h-[300px] md:h-[420px] object-contain rounded-2xl transition-transform duration-700 hover:scale-105"
          />

        </div>

        {/* Soft Glow */}
        <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-orange-600/20 blur-3xl rounded-full" />
      </div>

    </div>
  </div>
</section>
    </div>
  )
}
