import ContactBanner from "../../components/shared/ContactBanner";
import { products } from "../../data/products";
import ProductCard from "./components/ProductCard";

function Product() {
  const categories = {
    "solar-light": {
      title: "Solar Lights",
      description:
        "High-efficiency solar lighting solutions for streets and outdoor spaces",
    },
    "led-light": {
      title: "LED Lights",
      description:
        "Energy-efficient LED lighting for industrial and commercial applications",
    },
    poles: {
      title: "Poles ",
      description:
        "Reliable, long-lasting poles for lighting, solar, and infrastructure needs.",
    },
    "solar-power-plant": {
      title: "Solar Power Plants",
      description:
        "Complete solar energy solutions from residential to commercial scale",
    },
    structures: {
      title: "Structures",
      description:
        "Design, fabrication, and installation of durable structural solutions for industrial, commercial, and solar applications.",
    },

    services: {
      title: "Our Services",
      description:
        "Professional installation and maintenance services for your projects",
      isService: true,
    },
  };

  const getProductsByCategory = (category) =>
    products.filter((product) => product.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto px- sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-14 md:mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our Products
          </h1>

          <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality solar street lights, poles, and
            accessories designed for durability and performance.
          </p>
        </div>

        {/* Loop through categories */}
        {Object.entries(categories).map(([categoryKey, categoryInfo]) => {
          const categoryProducts = getProductsByCategory(categoryKey);
          if (categoryProducts.length === 0) return null;

          return (
            <section key={categoryKey} className="mb-20 md:mb-24">
              {/* Category Header */}
              <div className="mb-10">
                {categoryInfo.isService ? (
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Discover our Services
                  </h2>
                ) : (
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 border-l-4 border-green-600 pl-4">
                    {categoryInfo.title}
                  </h2>
                )}

                <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                  {categoryInfo.description}
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} id={product.id} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Contact CTA */}
        <div className="mt-20">
          <ContactBanner />
        </div>
      </div>
    </div>
  );
}

export default Product;
