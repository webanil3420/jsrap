import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Globe,
  Clock
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Shop Info */}
          <div className="space-y-5">
            <h2 className="text-white text-xl font-bold leading-snug">
              Jay Shri Ram Auto Parts And Service Center
            </h2>

            <div className="flex items-start gap-3 text-sm leading-relaxed">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>
                G-4 Shri Ji Trade Centre, Shri Mangal Nagar,  
                380 Bicholi Hapsi Main Rd, Sukh Shanti Nagar,  
                Indore, Madhya Pradesh 452016
              </span>
            </div>

            <div className="flex items-start gap-3 text-sm leading-relaxed">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>
                <span className="text-white font-semibold">
                  Jay Shri Ram Auto Garage
                </span><br />
                1, Sarv Suvidha Nagar, Bicholi Hapsi Road,  
                Indore, Madhya Pradesh 452016
              </span>
            </div>
          </div>

          {/* Owners (Only Names) */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Our Team</h3>
            <ul className="text-sm space-y-2">
              <li>Shri Ram Patidar</li>
              <li>Sunil Patidar</li>
              <li>Deepak Patidar</li>
              <li>Anil Patidar</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact</h3>

            <div className="flex items-center gap-3 text-sm">
              <Phone size={18} />
              <span>+91 74898 93420</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Globe size={18} />
              <a
                href="https://jsrap.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                jsrap.vercel.app
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Clock size={18} />
              <span>Mon - Sat : 9:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">
              Connect With Us
            </h3>

            <div className="flex gap-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition text-white"
              >
                <Youtube size={18} />
              </a>
            </div>

            <p className="text-xs text-gray-500 pt-3">
              Genuine spare parts & expert bike servicing in Indore.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © 2026 Jay Shri Ram Auto Parts And Service Center. All rights reserved.
          </p>

          <p className="text-gray-500">
            Designed for reliable two-wheeler service in Indore.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;