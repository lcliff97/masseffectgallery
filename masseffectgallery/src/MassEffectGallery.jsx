import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximise2 } from "lucide-react";

const MassEffectGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
};

const galleryItems = [
  {
    id: 1,
    title: "Commander Shephard",
    description: "Legendary hero of the galaxy",
    thumbnail: "",
    full: "",
    category: "Characters",
  },

  {
    id: 2,
    title: "Normandy SR-2",
    description: "The most advanced ship in the Alliance fleet",
    thumbnail: "",
    full: "",
    category: "Ships",
  },

  {
    id: 3,
    title: "Citadel",
    description: "The heart of the galactic civilisation",
    thumbnail: "",
    full: "",
    category: "Locations",
  },

  {
    id: 4,
    title: "Garrus Vakarian",
    description: "Turian vigilante and loyal companion",
    thumbnail: "",
    full: "",
    category: "Characters",
  },

  {
    id: 5,
    title: "Omega",
    description: "The lawless space station",
    thumbnail: "",
    full: "",
    category: "Locations",
  },

  {
    id: 6,
    title: "Liara T'Soni",
    description: "Asari scientist and information broker",
    thumbnail: "",
    full: "",
    category: "Characters",
  },

  {
    id: 7,
    title: "Reaper Invasion",
    description: "The ancient machines return",
    thumbnail: "",
    full: "",
    category: "Events",
  },

  {
    id: 8,
    title: "Tali 'Zorah",
    description: "Quarian engineer and admiral",
    thumbnail: "",
    full: "",
    category: "Characters",
  },
];

const openLightbox = (index) => {
  setCurrentIndex(index);
  setSelectedImage(galleryItems(index));
};

const closeLightbox = () => {
  setSelectedImage(null);
};

const goToNext = () => {
  const nextIndex = (currentIndex + 1) % galleryItems.length;
  setCurrentIndex(nextIndex);
  setSelectedImage(galleryItems[nextIndex]);
};

const gotToPrevious = () => {
  const prevIndex =
    (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  setCurrentIndex(prevIndex);
  setSelectedImage(galleryItems[prevIndex]);
};

const handleKeyDown = (e) => {
  if (!selectedImage) return;
  if (e.key === `ArrowRight`) goToNext();
  if (e.key === `ArrowLeft`) gotToPrevious();
  if (e.key === `Escape`) closeLightbox();
};

React.useEffect(() => {
  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage, currentIndex]);

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    {/* Animated background effect */}
    <div className="fixed inset-0 opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse"></div>
    </div>

    {/* Header */}
    <header className="relative z-10 border-b border-blue-500/30 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400 mb-2">
          MASS EFFECT
        </h1>
        <p className="text-blue-200/80 text-sm md:text-base font-light tracking-wide">
          LEGENDARY GALLERY // SYSTEMS ALLIANCE DATABASE
        </p>
      </div>
    </header>

    {/* Main Gallery Grid */}
    <main className="relative z-10 max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Hover effect - scan line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded border border-blue-300/50">
                {item.category}
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-5 h-5 text-cyan-300" />
              </div>
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                {item.title}
              </h3>
              <p className="text-cyan-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                {item.description}
              </p>
            </div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </main>

    {/* Lightbox Modal */}
    {selectedImage && (
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
        {/* Close button */}
        <button
          onClick={closeLightbox}
          className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors p-2 rounded-full bg-slate-900/50 hover:bg-slate-900 border border-red-400/30 hover:border-red-400 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 text-white hover:text-cyan-400 transition-colors p-3 rounded-full bg-slate-900/50 hover:bg-slate-900 border border-cyan-400/30 hover:border-cyan-400 z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 text-white hover:text-cyan-400 transition-colors p-3 rounded-full bg-slate-900/50 hover:bg-slate-900 border border-cyan-400/30 hover:border-cyan-400 z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Image container */}
        <div className="max-w-5xl w-full">
          <img
            src={selectedImage.full}
            alt={selectedImage.title}
            className="w-full h-auto rounded-lg shadow-2xl shadow-cyan-500/20 border-2 border-cyan-400/30"
          />

          {/* Image info */}
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              {selectedImage.title}
            </h2>
            <p className="text-cyan-200 text-lg mb-2">
              {selectedImage.description}
            </p>
            <p className="text-blue-400 text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Footer */}
    <footer className="relative z-10 border-t border-blue-500/30 bg-slate-900/50 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-blue-300/60 text-sm font-light tracking-wider">
          SYSTEMS ALLIANCE // CODEX ENTRY DATABASE // CLASSIFICATION: PUBLIC
        </p>
      </div>
    </footer>

    <style jsx>{`
      @keyframes scan {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
      .animate-scan {
        animation: scan 2s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default MassEffectGallery;
