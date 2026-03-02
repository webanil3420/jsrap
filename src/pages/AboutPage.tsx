

const AboutPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          About JSRAP
        </h1>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <div>
            <img
              src="/shop.jpg"
              alt="JSRAP Shop"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Jay Shree Ram Auto Parts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              JSRAP is a trusted name in the field of two-wheeler auto parts.
              We provide high-quality genuine spare parts for all major bike
              brands including Honda, Hero, Bajaj, TVS, Yamaha and more.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to deliver reliable products at affordable prices
              with complete customer satisfaction.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We aim to provide durable and original auto parts to our customers,
            ensuring safety, performance, and long-lasting trust. Our goal is
            to become the most reliable auto parts supplier in the region.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold text-lg mb-3">Quality Products</h3>
            <p className="text-gray-600">
              We provide only genuine and high-quality auto parts.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold text-lg mb-3">Affordable Prices</h3>
            <p className="text-gray-600">
              Best market prices with customer satisfaction.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold text-lg mb-3">Trusted Service</h3>
            <p className="text-gray-600">
              Friendly support and fast service for all customers.
            </p>
          </div>

        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Visit Our Shop</h2>
          <p className="text-gray-600">
            We welcome you to visit our store and explore our wide range of
            bike spare parts and accessories.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;