import React, { useState } from 'react';
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

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Brands', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <header className="w-full font-sans shadow-sm relative">
      {/* 1. TOP BAR - Hidden on extra small screens, simplified on mobile */}
      <div className="bg-[#0f172a] text-gray-300 text-[10px] md:text-sm py-2 px-4 md:px-10 flex justify-between items-center">
        <div className="hidden sm:flex gap-4 md:gap-6">
          <a href="#" className="hover:text-white transition">Help Center</a>
          <a href="#" className="hover:text-white transition">Track Order</a>
        </div>
        <div className="flex gap-4 md:gap-6 items-center w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <Phone size={12} className="md:w-[14px]" />
            <span>+91-1234-567890</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-600 pl-4 md:pl-6">
            <Mail size={12} className="md:w-[14px]" />
            <span className="hidden xs:inline">support@motohub.com</span>
            <span className="xs:hidden inline">Email Us</span>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR */}
      <div className="bg-white py-4 px-4 md:px-10">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start flex-1 lg:flex-none">
            <h1 className="text-2xl md:text-3xl font-bold text-[#ff4d00] leading-none">
              JSRAP
            </h1>
            <p className="text-[8px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wider">
              Premium Auto Parts
            </p>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center w-full border border-gray-200 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search for parts, brands, or models..."
                className="w-full py-2.5 px-4 outline-none text-gray-600 text-sm"
              />
              <button className="bg-gradient-to-r from-[#ff4d00] to-[#ff6a00] p-2.5 px-5 text-white">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <IconButton icon={<User size={20} />} className="hidden sm:flex" />
            <IconButton 
              icon={<ShoppingCart size={20} />} 
              badge={3} 
            />
            <IconButton icon={<Settings size={20} />} className="hidden sm:flex" />
          </div>
        </div>

        {/* Search Bar - Mobile Only (Visible below logo) */}
        <div className="mt-4 lg:hidden">
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
            <li key={link.name} className="cursor-pointer border-b-2 border-transparent pb-1 transition hover:text-[#ff4d00] hover:border-[#ff4d00]">
              {link.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* 4. MOBILE DRAWER MENU */}
      {/* 4. MOBILE DRAWER MENU - With Blur Effect */}
<div className={`
  fixed inset-0 z-50 transition-all duration-300 lg:hidden
  ${isMenuOpen 
    ? "opacity-100 pointer-events-auto backdrop-blur-md bg-black/10" 
    : "opacity-0 pointer-events-none backdrop-blur-none bg-transparent"}
`} onClick={() => setIsMenuOpen(false)}>
  
  <div 
    className={`
      fixed top-0 left-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out transform
      ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    onClick={(e) => e.stopPropagation()}
  >
    {/* ... rest of the menu content remains same ... */}
    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
      <span className="font-bold text-[#ff4d00] text-xl">MENU</span>
      <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
        <X size={24} />
      </button>
    </div>
    
    <ul className="flex flex-col p-4">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href} 
            className="block py-4 px-4 text-gray-700 font-semibold border-b border-gray-50 hover:bg-orange-50 hover:text-[#ff4d00] rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
    </header>
  );
};

// Reusable Icon Button Component
interface IconButtonProps {
  icon: React.ReactNode;
  badge?: number;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, badge, className = "" }) => (
  <button className={`relative p-2 md:p-2.5 border border-gray-200 rounded-md text-gray-600 hover:border-[#ff4d00] hover:bg-orange-50 transition ${className}`}>
    {icon}
    {badge !== undefined && (
      <span className="absolute -top-2 -right-2 bg-[#ff4d00] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
        {badge}
      </span>
    )}
  </button>
);

export default Header;