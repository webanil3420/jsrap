import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: MotoHub Info */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-bold">MotoHub</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for premium two-wheeler auto parts and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Newsletter</h3>
            <p className="text-sm">Subscribe to get updates on new products and offers</p>
            <form className="flex mt-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-none text-white text-sm rounded-l-md px-4 py-3 w-full focus:ring-1 focus:ring-orange-500 outline-none"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-6 py-3 rounded-r-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-xs">
              © 2026 MotoHub. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Manage Cookies Button */}
        <div className="mt-8 flex justify-start md:justify-center lg:justify-start">
           <button className="bg-white text-gray-500 text-xs px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
              Manage cookies or opt out
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;