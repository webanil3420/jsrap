import productsData from "./ProductSection.json";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import Card from "../components/ui/Card";
import { useAppSelector ,useAppDispatch } from "../app/hooks";
import { addToCart } from "../app/features/products/productSlice";
import { useSearchParams } from "react-router-dom";

export const Products = () => {

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.Product.cart);
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const selectedCategory = useAppSelector(

    (state) => state.Product.selectedCategory

  );

  const categoryFiltered =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const filteredProducts =
    q.length === 0
      ? categoryFiltered
      : categoryFiltered.filter((p) => {
          const title = (p.title ?? "").toLowerCase();
          const category = (p.category ?? "").toLowerCase();
          return title.includes(q) || category.includes(q);
        });
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
              className="!border-none !shadow-sm hover:shadow-2xl transition-all duration-300 !rounded-3xl overflow-hidden bg-white ring-1 ring-slate-100 hover:ring-orange-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square md:h-[320px] bg-gradient-to-b from-slate-50 to-white">
                <Card.Media
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-[1.12]"
                />

                {item.sale && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-md tracking-wider">
                    SALE
                  </div>
                )}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />

                {/* Desktop Hover Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                <button
  disabled={cartItems.some(p => p.id === item.id)}
  onClick={() =>
    dispatch(addToCart({ ...item, name: item.title, quantity: 1 }))
  }
  className="w-full bg-white/95 backdrop-blur text-slate-900 py-3 rounded-2xl font-extrabold flex items-center justify-center gap-2 shadow-xl hover:bg-white active:scale-[0.99] disabled:bg-white/70 disabled:text-slate-400"
>
  <ShoppingCart size={18} />
  {cartItems.some(p => p.id === item.id)
    ? "Added"
    : "Add to Cart"}
</button>
                </div>
              </div>

              {/* Body */}
              <Card.Body className="!p-5">
                <span className="inline-flex items-center gap-2 text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.18em]">
                  {item.category}
                </span>

                <Card.Title className="!text-[17px] md:!text-lg !font-extrabold text-slate-900 mt-2 mb-2 leading-snug line-clamp-2 min-h-[44px]">
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
                  <span className="text-slate-400 text-xs ml-1 font-semibold">
                    ({item.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-red-600 tracking-tight">
                      ₹{item.price}
                    </span>

                    {item.oldPrice && (
                      <span className="text-sm text-slate-400 line-through font-semibold">
                        ₹{item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Button */}
                <div className="mt-5 md:hidden">
                   <button
    disabled={cartItems.some(p => p.id === item.id)}
    onClick={() =>
      dispatch(addToCart({ ...item, name: item.title, quantity: 1 }))
    }
    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3.5 rounded-2xl font-extrabold flex items-center justify-center gap-2 text-sm shadow-lg active:scale-[0.99] disabled:from-slate-300 disabled:to-slate-300"
  >
    <ShoppingCart size={16} />
    {cartItems.some(p => p.id === item.id)
      ? "Added"
      : "Add to Cart"}
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
          {q.length > 0
            ? `No products found for "${q}"`
            : "No products found in this category"}
        </div>
      )}
    </div>
  );
};