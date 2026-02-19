
import { useState, useEffect } from 'react';
import Header from '../layouts/Header'
import Card from '../components/ui/Card';
import { Wrench, Shield, Zap, ChevronRight } from 'lucide-react';

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
                <div className="p-10 bg-white">
                    {/* 1. Header Section */}

                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold text-slate-900">Shop By Category</h2>
                                <a href="#" className="text-red-600 font-bold flex items-center">
                                    View All <ChevronRight size={20} />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {categories.map((cat, i) => (
                                    <Card
                                        key={i}
                                        size="full"
                                        // '!bg-...' use karne se purani white class override ho jayegi
                                        className={`${cat.color} !border-none h-[200px] shadow-lg`}
                                    >
                                        <Card.Body className="flex flex-col justify-between !p-6">
                                            {/* Icon Top Par */}
                                            <div className="text-white opacity-90">
                                                {cat.icon}
                                            </div>

                                            {/* Text Bottom Par */}
                                            <div className="text-white">
                                                <Card.Title className="font-bold text-2xl">{cat.title}</Card.Title>
                                                <Card.Text className="text-sm opacity-80">{cat.count}</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
          
    )
}
