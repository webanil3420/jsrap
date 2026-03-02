
const brands = [
  {
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
  },
  {
    name: "Hero",
    logo: "https://i.pinimg.com/736x/ef/6f/a5/ef6fa5b0566fa046b89b407ad63a314e.jpg",
  },
  {
    name: "Bajaj",
    logo: "https://www.logodee.com/wp-content/uploads/2021/10/8.jpg",
  },
  {
    name: "TVS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7r-GxMoVm9Ml4Y27BIPWW4S5hfuiKj8nnA&s",
  },
  {
    name: "Yamaha",
    logo: "https://www.nicepng.com/png/full/173-1733298_bikes-bike-company-logo-png.png",
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