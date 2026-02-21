import productsData from "./ProductSection.json";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import Card from "../components/ui/Card";
import { useAppSelector } from "../app/hooks";

export const Products = () => {
  const selectedCategory = useAppSelector(
    
    (state) => state.Product.selectedCategory
    
  );

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
        (p) =>
          p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
  console.log("Selected:", selectedCategory);
  console.log(productsData);
  return (
    <div className="bg-gray-50 p-4 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          {selectedCategory === "All" ? "Featured Products" : selectedCategory}
        </h2>

        <button className="text-red-600 font-bold flex items-center hover:gap-2 transition-all">
          View All <ChevronRight size={20} />
        </button>
      </div>

      {/* Products */}
      <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 max-w-[1400px] mx-auto">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="group relative flex-shrink-0 w-[85%] md:w-full snap-center"
          >
            <Card
              size="full"
              className="!border-none !shadow-sm hover:shadow-xl transition-all duration-300 !rounded-2xl overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square md:h-[320px]">
                <Card.Media
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {item.sale && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
                    SALE
                  </div>
                )}

                {/* Desktop Hover Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-red-700 active:scale-95">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Body */}
              <Card.Body className="!p-5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.category}
                </span>

                <Card.Title className="!text-lg !font-bold text-gray-900 mt-1 mb-2">
                  {item.title}
                </Card.Title>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                  <span className="text-gray-400 text-xs ml-1 font-medium">
                    ({item.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-red-600">
                      ₹{item.price}
                    </span>

                    {item.oldPrice && (
                      <span className="text-sm text-gray-400 line-through font-medium">
                        ₹{item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Button */}
                <div className="mt-5 md:hidden">
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md active:bg-red-700">
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-gray-400 font-semibold">
          No products found in this category
        </div>
      )}
    </div>
  );
};