import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banners from "../../../data/banner";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      await Promise.all(
        banners.map((banner) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = banner.image;
            img.onload = resolve;
            img.onerror = resolve; // fail-safe
          });
        })
      );

      if (!isMounted) return;

      setIsLoading(false);

      if (swiperRef.current?.autoplay) {
        swiperRef.current.params.autoplay = {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        };
        swiperRef.current.autoplay.start();
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1280px] mx-auto group overflow-hidden">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-20 bg-gray-100 animate-pulse">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          </div>

          {/* Skeleton dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      )}

      {/* Carousel */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={false} // ⛔ disabled initially
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full h-full"
        >
          {banners.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Link to="/product" className="block">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={slide.mobileImage}
                  />
                  <img
                    src={slide.image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-auto object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding={index === 0 ? "sync" : "async"}
                  />
                </picture>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev */}
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-white z-10"
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 512 512">
            <path
              d="M328 112L184 256l144 144"
              fill="none"
              stroke="currentColor"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Next */}
        <button
          ref={nextRef}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-white z-10"
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 512 512">
            <path
              d="M184 112l144 144-144 144"
              fill="none"
              stroke="currentColor"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Pagination styles */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.4);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
        .swiper-pagination {
          bottom: 18px !important;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
