import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import banners from "../../../data/banner";

const AUTOPLAY_DELAY = 4000;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = banners.length;

  // 🔥 Autoplay (Swiper-like)
  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timerRef.current);
  }, [paused, total]);

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div
      className="relative w-full max-w-[1280px] mx-auto overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((slide, i) => (
          <div key={slide.id} className="min-w-full">
            <Link to="/product">
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.image}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-auto object-contain"
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchpriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                />
              </picture>
            </Link>
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={goPrev}
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
        onClick={goNext}
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

      {/* Pagination dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
