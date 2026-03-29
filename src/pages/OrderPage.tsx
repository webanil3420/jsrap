import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { MapPin, Trash2 } from "lucide-react";
import { removeFromCart } from "../app/features/products/productSlice";

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.Product.cart);

  const [name, setName] = useState("");
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
    if (!name || !address || !location) {
      alert("Please enter name, address and location");
      return;
    }

    // Use unicode escape sequences so emojis don't get corrupted by file encoding on Windows
    const EMOJI_CART = "\u{1F6D2}";
    const EMOJI_PERSON = "\u{1F64D}";
    const EMOJI_PIN = "\u{1F4CD}";
    const EMOJI_ROUND_PIN = "\u{1F4CC}";

    let message = `${EMOJI_CART} *New Order Details*\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `Price: ₹${item.price}\n\n`;
    });

    message += `Total: ₹${totalPrice}\n\n`;
    message += `${EMOJI_PERSON} Name: ${name}\n`;
    message += `${EMOJI_PIN} Address: ${address}\n`;
    message += `${EMOJI_ROUND_PIN} Location: ${location}\n`;

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

                  <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-3 rounded-xl border border-red-100 text-red-600 hover:bg-red-50 hover:border-red-200 transition"
                    aria-label="Remove item"
                    title="Remove"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Address Section */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow space-y-5">

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Address</label>
                <textarea
                  placeholder="Enter your full address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border p-3 rounded-lg min-h-[90px] resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Location with Icon */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label className="text-sm font-bold text-slate-700">Location</label>
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-green-700 hover:text-green-800"
                  >
                    <MapPin size={18} />
                    Use current location
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Click “Use current location” to set automatically"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <p className="text-xs text-slate-500">
                  Tip: “Use current location” pe click karoge to location automatically set ho jayegi.
                </p>
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