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

  // --- YOUTUBE HELPERS ---
  const isYouTube = (url) =>
    typeof url === "string" &&
    (url.includes("youtube.com") || url.includes("youtu.be"));

  const getYouTubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname === "youtu.be") return u.pathname.slice(1);
      if (u.pathname.startsWith("/shorts/"))
        return u.pathname.replace("/shorts/", "");
      return u.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const isShort = (url) => typeof url === "string" && url.includes("/shorts/");

  const convertToEmbed = (url) => {
    if (!isYouTube(url)) return null;
    const id = getYouTubeId(url);
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`
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
                className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer group"
              >
                <div className="relative w-full aspect-video bg-gray-100">
                  {isYouTube(video.url) ? (
                    <img
                      src={getThumbnail(video.url)}
                      className="absolute inset-0 w-full h-full object-contain sm:object-cover bg-black"
                    />
                  ) : (
                    <video
                      src={video.url}
                      className="absolute inset-0 w-full h-full object-contain sm:object-cover bg-black"
                    ></video>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 p-2 rounded-full shadow-md text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
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
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <IoClose size={36} />
            </button>

            {/* IMAGE LIGHTBOX with Side Navigation */}
            {activeTab !== "videos" && (
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Prev/Next for Images */}
                {activeMedia.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 sm:left-4 lg:left-8 text-white hover:text-green-400 p-2 z-50 bg-black/50 rounded-full transition"
                    >
                      <IoChevronBack size={32} className="sm:w-10 sm:h-10" />
                    </button>

                    <button
                      onClick={next}
                      className="absolute right-2 sm:right-4 lg:right-8 text-white hover:text-green-400 p-2 z-50 bg-black/50 rounded-full transition"
                    >
                      <IoChevronForward size={32} className="sm:w-10 sm:h-10" />
                    </button>
                  </>
                )}

                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={activeMedia[activeIndex]}
                    style={{ transform: `scale(${zoom})` }}
                    className="max-h-[80vh] max-w-full object-contain transition-transform"
                  />

                  {/* Zoom Controls */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20">
                    <button
                      onClick={zoomOut}
                      disabled={zoom <= 1}
                      className="text-white px-3 hover:text-green-400 disabled:opacity-50 transition"
                    >
                      <IoRemoveOutline size={24} />
                    </button>

                    <span className="text-white font-mono min-w-[3rem] text-center">
                      {Math.round(zoom * 100)}%
                    </span>

                    <button
                      onClick={zoomIn}
                      disabled={zoom >= 3}
                      className="text-white px-3 hover:text-green-400 disabled:opacity-50 transition"
                    >
                      <IoAddOutline size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIDEO LIGHTBOX with Bottom Navigation */}
            {activeTab === "videos" && (
              <div
                className="w-full flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`bg-black rounded-lg overflow-hidden shadow-2xl ${
                    isShort(activeMedia[activeIndex].url)
                      ? "aspect-[9/16] max-h-[70vh]"
                      : "aspect-video w-full max-w-5xl"
                  }`}
                >
                  {isYouTube(activeMedia[activeIndex].url) ? (
                    <iframe
                      src={convertToEmbed(activeMedia[activeIndex].url)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={activeMedia[activeIndex].url}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain bg-black"
                    />
                  )}
                </div>

                {/* BOTTOM NAVIGATION for Videos */}
                {activeMedia.length > 1 && (
                  <div className="flex items-center justify-between gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                    <button
                      onClick={prev}
                      className="flex items-center gap-2 text-white hover:text-green-400 transition"
                    >
                      <IoChevronBack size={22} />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    <span className="text-white text-sm font-mono">
                      {activeIndex + 1} / {activeMedia.length}
                    </span>

                    <button
                      onClick={next}
                      className="flex items-center gap-2 text-white hover:text-green-400 transition"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <IoChevronForward size={22} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
