
const brands = [
  {
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
  },
  {
    name: "Hero",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hero_MotoCorp_Logo.svg",
  },
  {
    name: "Bajaj",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bajaj_Auto_logo.svg",
  },
  {
    name: "TVS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/TVS_Motor_Company_logo.svg",
  },
  {
    name: "Yamaha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Yamaha_Logo.svg",
  },
];

const BrandsPage = () => {
  return (
    <div>
    <div className="bg-white py-16 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-12">
        Our Brands
      </h1>

      {/* Scroll Wrapper */}
      <div className="w-full overflow-hidden py-6">
        <div className="flex w-max animate-scroll">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-10 py-6 transform transition duration-300 hover:scale-110"
            >
              {/* Logo Circle */}
              <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Brand Name */}
              <p className="mt-4 font-semibold text-gray-700">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default BrandsPage;