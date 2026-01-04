import React, { useState } from "react";
import { certificatesData } from "../../data/certificate.js";

const Certifications = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % certificatesData.length);
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? certificatesData.length - 1 : prev - 1
    );
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-4 sm:py-6 md:py-8 lg:py-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our commitment to quality standards and excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {certificatesData.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[3/4] overflow-hidden p-2 sm:p-3">
                {/* Shimmer Loader */}
                {!loadedImages[cert.id] && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
                )}

                <img
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(cert.id)}
                  className={`w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-in-out ${
                    loadedImages[cert.id] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Footer */}
              <div className="p-2 sm:p-4 text-center border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-500 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full max-h-screen flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl"
              >
                ✕
              </button>

              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full text-2xl"
              >
                ‹
              </button>

              <img
                src={certificatesData[selectedIndex].src}
                alt={certificatesData[selectedIndex].alt}
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
              />

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full text-2xl"
              >
                ›
              </button>

              <p className="mt-4 text-white text-lg font-medium tracking-wide">
                {certificatesData[selectedIndex].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
