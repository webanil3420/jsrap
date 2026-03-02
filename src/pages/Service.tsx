import { useState } from "react";

import ShopMap from "./ShopMap";
import { MapPin } from "lucide-react";

interface ServiceCardProps {
  title: string;
}

const ServicePage = () => {

const handleGetLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

      setFormData((prev) => ({
        ...prev,
        location: googleMapsLink,
      }));
    },
    (_error) => {
      alert("Unable to retrieve your location");
    },
    {
      enableHighAccuracy: true, 
      timeout: 10000,
      maximumAge: 0,
    }
  );
};

  const [formData, setFormData] = useState({
    location: "",
    bikeNumber: "",
    contact: "",
    address: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (
      !formData.location ||
      !formData.bikeNumber ||
      !formData.contact ||
      !formData.address
    ) {
      alert("Please fill all fields");
      return;
    }

    const message =
      "New Bike Service Request\n\n" +
      "Location: " +
      formData.location +
      "\nBike Number: " +
      formData.bikeNumber +
      "\nContact: " +
      formData.contact +
      "\nAddress: " +
      formData.address +
      "\n\nFree Pickup & Drop within 2KM.";

    const whatsappURL =
      "https://wa.me/917489893420?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <div> 
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bike Service & Repair
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Professional 2-Wheeler servicing with genuine parts and expert mechanics.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard title="General Service" />
          <ServiceCard title="Engine Repair" />
          <ServiceCard title="Oil Change" />
          <ServiceCard title="Brake & Electrical Work" />
        </div>
      </div>

      {/* Free Pickup Section */}
      <div className="bg-green-100 py-10 text-center px-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-2">
          Free Pickup & Drop Service
        </h3>
        <p className="text-gray-700">
          If your location is within 2KM from our shop, pickup & drop is completely FREE.
        </p>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto py-16 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Book Your Service
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

           <div className="relative">
  <input
    type="text"
    name="location"
    placeholder="Your Location"
    value={formData.location}
    onChange={handleChange}
    className="w-full border p-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  {/* Map Icon */}
  <button
    type="button"
    onClick={handleGetLocation}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
  >
    <MapPin size={20} />
  </button>
</div>

            <input
              type="text"
              name="bikeNumber"
              placeholder="Bike Number"
              value={formData.bikeNumber}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />



            <textarea
              name="address"
              placeholder="Full Address"
              rows={4}  
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                type="submit"
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send on WhatsApp
              </button>

              <a
                href="tel:7489893420"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition"
              >
                Call Now
              </a>

            </div>

          </form>
        </div>
      </div>

<ShopMap />
    </div>
    </div>
  );
};

const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
  );
};

export default ServicePage;