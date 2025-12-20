import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import banners from "../../../data/banner";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Update navigation after mount
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative w-full max-w-[1280px] mx-auto group h-auto overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={setSwiperInstance}
        className="w-full h-full"
      >
        {banners.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to="/product" className="block cursor-pointer">
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
      <button
        ref={prevRef}
        className="
          absolute left-3 sm:left-5 top-1/2 -translate-y-1/2
          text-white
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100

          transition-opacity duration-300
          z-10
        "
      >
        <IoChevronBack className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>

      {/* Right Arrow */}
      <button
        ref={nextRef}
        className="
          absolute right-3 sm:right-5 top-1/2 -translate-y-1/2
          text-white
          opacity-100  lg:group-hover:opacity-100

          transition-opacity duration-300
          z-10
        "
      >
        <IoChevronForward className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>

      {/* Custom Dot Styling */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.4);
          opacity: 1;
          transition: background .3s;
        }
        .swiper-pagination-bullet-active {
          background: white;
        }
        .swiper-pagination {
          bottom: 18px !important;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
