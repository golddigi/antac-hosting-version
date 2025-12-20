import React, { useState, useEffect } from "react";
import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
  IoAddOutline,
  IoRemoveOutline,
  IoPlayCircle,
} from "react-icons/io5";

// --- ASSET IMPORTS ---

// 1. Office Images
const officeImages = Object.values(
  import.meta.glob("/src/assets/office-pics/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

// 2. Installation Images
const installationImages = Object.values(
  import.meta.glob("/src/assets/product-installation/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

// 3. Videos
import videoList from "/src/data/videos.json";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [loaded, setLoaded] = useState({});

  // Determine active media array
  let activeMedia = [];
  if (activeTab === "photos") activeMedia = officeImages;
  if (activeTab === "installation") activeMedia = installationImages;
  if (activeTab === "videos") activeMedia = videoList;

  // --- CONTROLS ---
  const open = (i) => {
    setActiveIndex(i);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setActiveIndex(null);
    document.body.style.overflow = "unset";
  };

  const next = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i + 1) % activeMedia.length);
    setZoom(1);
  };

  const prev = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i - 1 + activeMedia.length) % activeMedia.length);
    setZoom(1);
  };

  const zoomIn = (e) => {
    e?.stopPropagation();
    if (activeTab !== "videos") setZoom((z) => Math.min(z + 0.3, 3));
  };

  const zoomOut = (e) => {
    e?.stopPropagation();
    if (activeTab !== "videos") setZoom((z) => Math.max(z - 0.3, 1));
  };

  // --- YOUTUBE HELPERS (PRODUCTION SAFE) ---
  const isYouTube = (url) =>
    typeof url === "string" &&
    (url.includes("youtube.com") || url.includes("youtu.be"));

  const getYouTubeId = (url) => {
    try {
      const u = new URL(url);

      // youtu.be/VIDEO_ID
      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1);
      }

      // youtube.com/shorts/VIDEO_ID
      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.replace("/shorts/", "");
      }

      // youtube.com/watch?v=VIDEO_ID
      return u.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const convertToEmbed = (url) => {
    if (!isYouTube(url)) return null;

    const id = getYouTubeId(url);
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`
      : null;
  };
  const getThumbnail = (url) => {
    if (!isYouTube(url)) return null;
    const id = getYouTubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  };

  // Keyboard Navigation
  useEffect(() => {
    const key = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();

      if (activeTab !== "videos") {
        if (e.key === "+") zoomIn();
        if (e.key === "-") zoomOut();
      }
    };

    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [activeIndex, activeTab]);

  useEffect(() => {
    setActiveIndex(null);
    setZoom(1);
  }, [activeTab]);

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 border-l-4 border-green-600 pl-4">
            Gallery
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
            {[
              {
                key: "photos",
                label: `Office Photos (${officeImages.length})`,
              },
              {
                key: "installation",
                label: `Installation (${installationImages.length})`,
              },
              { key: "videos", label: `Videos (${videoList.length})` },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 px-6 font-semibold whitespace-nowrap transition
                  ${
                    activeTab === tab.key
                      ? "text-green-600 border-b-4 border-green-600 -mb-[2px]"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {officeImages.map((src, i) => (
              <div
                key={i}
                onClick={() => open(i)}
                className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md cursor-pointer group"
              >
                <img
                  src={src}
                  onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                  className={`object-cover w-full h-full transition duration-500 group-hover:scale-110 ${
                    loaded[i] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Installation Grid */}
        {activeTab === "installation" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {installationImages.map((src, i) => (
              <div
                key={i}
                onClick={() => open(i)}
                className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md cursor-pointer group"
              >
                <img
                  src={src}
                  onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                  className={`object-cover w-full h-full transition duration-500 group-hover:scale-110 ${
                    loaded[i] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoList.map((video, i) => (
              <div
                key={i}
                onClick={() => open(i)}
                className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="relative w-full h-0 pb-[56.25%] bg-gray-100">
                  {isYouTube(video.url) ? (
                    <img
                      src={getThumbnail(video.url)}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <video
                      src={video.url}
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    ></video>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 p-2 rounded-full shadow-md text-red-600 group-hover:bg-red-600 group-hover:text-white">
                      <IoPlayCircle className="w-12 h-12" />
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIGHTBOX */}
        {activeIndex !== null && (
          <div
            onClick={close}
            className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-[9999] p-4 lg p-16"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex justify-center items-center w-full max-w-6xl h-full"
            >
              {/* Close */}
              <button
                onClick={close}
                className="absolute -top-10 right-0 sm:top-[-2rem] sm:right-[-2rem] text-white hover:text-gray-300 z-50"
              >
                <IoClose size={40} />
              </button>

              {/* Prev/Next */}
              {activeMedia.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-[-1rem] sm:left-[-4rem] top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50"
                  >
                    <IoChevronBack size={48} />
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-[-1rem] sm:right-[-4rem] top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50"
                  >
                    <IoChevronForward size={48} />
                  </button>
                </>
              )}

              {/* Image Lightbox */}
              {activeTab !== "videos" && (
                <div className="relative">
                  <img
                    src={activeMedia[activeIndex]}
                    style={{ transform: `scale(${zoom})` }}
                    className="max-h-[80vh] max-w-full object-contain transition-transform"
                  />

                  {/* Zoom Controls */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                    <button
                      onClick={zoomOut}
                      disabled={zoom <= 1}
                      className="text-white px-3 hover:text-green-400 disabled:opacity-50"
                    >
                      <IoRemoveOutline size={24} />
                    </button>

                    <span className="text-white font-mono min-w-[3rem] text-center">
                      {Math.round(zoom * 100)}%
                    </span>

                    <button
                      onClick={zoomIn}
                      disabled={zoom >= 3}
                      className="text-white px-3 hover:text-green-400 disabled:opacity-50"
                    >
                      <IoAddOutline size={24} />
                    </button>
                  </div>
                </div>
              )}

              {/* Video Lightbox */}
              {activeTab === "videos" && (
                <div
                  className="lg:m-8 w-full aspect-video bg-black shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {isYouTube(activeMedia[activeIndex].url) ? (
                    <iframe
                      src={convertToEmbed(activeMedia[activeIndex].url)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={activeMedia[activeIndex].url}
                      controls
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    ></video>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
