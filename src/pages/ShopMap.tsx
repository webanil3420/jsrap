const ShopMap = () => {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Shop Location
      </h2>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58884.87112271445!2d75.84060022167967!3d22.716922899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e38cfe9f9aa1%3A0x9927a9ea7e966c37!2sJai%20Shri%20Ram%20Auto%20Parts%20and%20service%20center!5e0!3m2!1sen!2sin!4v1772479854207!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ShopMap;