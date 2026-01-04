import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { products } from "../../../data/products";
import ProductCard from "../../3.products/components/ProductCard";

const categories = {
  "solar-light": "Solar Lights",
  "led-light": "LED Lights",
  poles: "Poles",
  "solar-power-plant": "Solar Power Plants",
  structures: "Structures",
  services: "Our Services",
};

/* ===========================
   Category Slider
   =========================== */
const CategorySlider = ({ title, items }) => {
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="mb-20 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-green-600 pl-4">
          {title}
        </h3>
      </div>

      {/* Prev Button */}
      <button
        ref={prevBtn}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
        w-12 h-12 flex items-center justify-center
        ${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <span className="text-4xl font-bold text-gray-700">&lsaquo;</span>
      </button>

      {/* Next Button */}
      <button
        ref={nextBtn}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20
        w-12 h-12 flex items-center justify-center
        ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <span className="text-4xl font-bold text-gray-700">&rsaquo;</span>
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevBtn.current,
          nextEl: nextBtn.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevBtn.current;
          swiper.params.navigation.nextEl = nextBtn.current;
        }}
        onInit={handleSlideChange}
        onSlideChange={handleSlideChange}
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2.4 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard id={product.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* ===========================
   Main Component
   =========================== */
const HomeProductsSlider = () => {
  const getProductsByCategory = (category) =>
    products.filter((p) => p.category === category);

  return (
    <section className="mt-32 mb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Our Products
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of solar, LED, and lighting solutions.
        </p>
      </div>

      {Object.entries(categories).map(([key, title]) => {
        const items = getProductsByCategory(key);
        if (!items.length) return null;
        return <CategorySlider key={key} title={title} items={items} />;
      })}
    </section>
  );
};

export default HomeProductsSlider;
