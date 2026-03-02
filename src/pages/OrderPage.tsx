import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { MapPin } from "lucide-react";

const OrderPage = () => {
  const cartItems = useAppSelector((state) => state.Product.cart);

  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // ✅ Get Current Location
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setLocation(googleMapsLink);
      },
      () => {
        alert("Unable to retrieve your location");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleWhatsAppOrder = () => {
    if (!address || !location) {
      alert("Please enter address and location");
      return;
    }

    let message = "🛒 *New Order Details* \n\n";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `Price: ₹${item.price}\n\n`;
    });

    message += `Total: ₹${totalPrice}\n\n`;
    message += `📍 Address: ${address}\n`;
    message += `📌 Location: ${location}\n`;

    const phoneNumber = "917489893420";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          My Cart ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-400">
              Item Not Found
            </h2>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm"
                >
                  <img
                    src={item.image}
                    alt="product"
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-red-600 text-lg font-bold mt-2">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Address Section */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow space-y-5">

              {/* Address */}
              <input
                type="text"
                placeholder="Enter Full Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />

              {/* Location with Icon */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border p-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
                >
                  <MapPin size={20} />
                </button>
              </div>

              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
                >
                  Order on WhatsApp
                </button>

                <a
                  href="tel:7489893420"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-center font-bold hover:bg-blue-700 transition"
                >
                  Call Now
                </a>

              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;