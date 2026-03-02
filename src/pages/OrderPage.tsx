import { useState } from "react";
import { useAppSelector } from "../app/hooks";

const OrderPage = () => {
  const cartItems = useAppSelector((state) => state.Product.cart);

  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleWhatsAppOrder = () => {
    if (!address || !location) {
      alert("Please enter address and location");
      return;
    }

    let message = "🛒 *New Order Details* \n\n";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `Price: ₹${item.price}\n`;
      message += `Image: ${item.image}\n\n`;
    });

    message += `Total: ₹${totalPrice}\n\n`;
    message += `📍 Address: ${address}\n`;
    message += `📌 Location: ${location}\n`;

    const phoneNumber = "917489893420"; // 👈 apna number
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
                    alt={"no image found"}
                    className="w-32 h-32 object-cover rounded-lg"
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
            <div className="mt-10 bg-white p-6 rounded-xl shadow space-y-4">
              <input
                type="text"
                placeholder="Enter Full Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Paste Google Map Location Link"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />

              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700"
              >
                Order on WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;