import React, { useState } from 'react';
import { useAppSelector } from "../app/hooks";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Search,
  User,
  ShoppingCart,
  Settings,
  Menu,
  X
} from 'lucide-react';

type HeaderProps = {
  productRef?: React.RefObject<HTMLDivElement | null>;
};

const Header: React.FC<HeaderProps> = ({ productRef }) => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const cartItems = useAppSelector((state) => state.Product.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (action: string) => {
    setIsMenuOpen(false); 

    if (action === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } 
    else if (action === 'products') {
      if (location.pathname === '/') {
        productRef?.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
       
        navigate('/');
        
      }
    } 
    else if (action.startsWith("/")) {
      navigate(action);
    }
  };

  const navLinks = [
    { name: 'Home', action: 'home' },
    { name: 'Products', action: 'products' },
    { name: 'Brands', action: '/brands' }, 

    { name: 'Service', action: '/service' },
    { name: 'About', action: '/about' },
  ];

  return (
    // STICKY HEADER ADDED: sticky top-0 z-50
    <header className="w-full font-sans shadow-md sticky top-0 z-50 bg-white">
      {/* 1. TOP BAR */}
      <div className="bg-[#0f172a] text-gray-300 text-[10px] md:text-sm py-2 px-4 md:px-10 flex justify-between items-center">
        <div className="hidden sm:flex gap-4 md:gap-6">
          <a href="#" className="hover:text-white transition cursor-pointer">Help Center</a>
          <a href="#" className="hover:text-white transition cursor-pointer">Track Order</a>
        </div>
        <div className="flex gap-4 md:gap-6 items-center w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <Phone size={12} className="md:w-[14px]" />
            <span>+91-7489-893420</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-600 pl-4 md:pl-6">
            <Mail size={12} className="md:w-[14px]" />
            <span className="hidden xs:inline">support@motohub.com</span>
            <span className="xs:hidden inline">Email Us</span>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR */}
      <div className="bg-white py-3 px-4 md:px-10 border-b border-gray-50">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div 
            className="flex flex-col items-center lg:items-start flex-1 lg:flex-none cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-[#ff4d00] leading-none">
              JSRAP
            </h1>
            <p className="text-[8px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wider">
              jay shree ram auto parts
            </p>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center w-full border border-gray-200 rounded-md overflow-hidden focus-within:border-[#ff4d00] transition">
              <input
                type="text"
                placeholder="Search for parts, brands, or models..."
                className="w-full py-2.5 px-4 outline-none text-gray-600 text-sm"
              />
              <button className="bg-gradient-to-r from-[#ff4d00] to-[#ff6a00] p-2.5 px-5 text-white hover:opacity-90 transition">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <IconButton icon={<User size={20} />} className="hidden sm:flex" />
            <IconButton
              icon={<ShoppingCart size={20} />}
              badge={cartItems.length}
              onClick={() => navigate("/orderPage")}
            />
            <IconButton icon={<Settings size={20} />} className="hidden sm:flex" />
          </div>
        </div>

        {/* Search Bar - Mobile Only */}
        <div className="mt-3 lg:hidden">
          <div className="relative flex items-center w-full border border-gray-200 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search parts..."
              className="w-full py-2 px-4 outline-none text-gray-600 text-sm"
            />
            <button className="bg-[#ff4d00] p-2 px-4 text-white">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR - Desktop */}
      <nav className="hidden lg:block bg-white border-t border-gray-100 px-10 py-3">
        <ul className="flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              onClick={() => handleNavClick(link.action)} 
              className={`cursor-pointer border-b-2 pb-1 transition-all duration-200 hover:text-[#ff4d00] 
                ${location.pathname === link.action ? 'border-[#ff4d00] text-[#ff4d00]' : 'border-transparent hover:border-[#ff4d00]'}`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* 4. MOBILE DRAWER MENU */}
     {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-[280px] h-full bg-white shadow-2xl p-6 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-col">
                <span className="font-bold text-[#ff4d00] text-xl">JSRAP</span>
                <span className="text-[8px] text-gray-400">AUTO PARTS</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => handleNavClick(link.action)}
                  className="cursor-pointer font-semibold text-gray-700 hover:text-[#ff4d00] text-lg flex items-center justify-between group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#ff4d00]">→</span>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-10 left-6 right-6">
                <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold text-sm">
                    Login / Register
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Reusable Icon Button Component
interface IconButtonProps {
  icon: React.ReactNode;
  badge?: number;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, badge, className = "", onClick }) => (
  <button 
    onClick={onClick} 
    className={`relative p-2 md:p-2.5 border border-gray-200 rounded-md text-gray-600 hover:border-[#ff4d00] hover:bg-orange-50 hover:text-[#ff4d00] transition-all duration-200 ${className}`}
  >
    {icon}
    {badge !== undefined && (
      <span className="absolute -top-2 -right-2 bg-[#ff4d00] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
        {badge}
      </span>
    )}
  </button>
);

export default Header;