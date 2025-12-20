import { Link } from "react-router-dom";
import { products } from "../../../data/products";

const ProductCard = ({ id }) => {
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-red-600 p-4 bg-red-100 rounded">
        ❌ Invalid product id: {id}
      </div>
    );
  }

  return (
    <div className="h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="h-[60%] sm:h-[65%] bg-white p-2 sm:p-3 md:p-4 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="h-[40%] sm:h-[35%] px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4 flex flex-col justify-between bg-gray-50">
        {/* Product Name */}
        <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 mt-2 sm:mt-2.5 md:mt-3 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* View Details Button */}
        <Link
          to={`/product/${product.id}`}
          className="w-full text-center py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 bg-white border-2 border-green-600 text-green-600 font-medium text-xs sm:text-sm hover:bg-green-600 hover:text-white transition-colors duration-200 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
