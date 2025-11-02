'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BeforeAfterImage {
  before: string;
  after: string;
  caption?: string;
}

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[];
}

const BeforeAfterSlider = ({ images }: BeforeAfterSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="bg-beige-100 rounded-2xl p-12 text-center">
        <p className="text-gray-600">No before/after images available</p>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div className="space-y-6">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-2xl luxury-shadow">
        <div
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] cursor-ew-resize select-none"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Base Layer) */}
          <div className="absolute inset-0">
            <Image
              src={currentImage.after}
              alt="After treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute top-4 right-4 bg-rosegold-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              After
            </div>
          </div>

          {/* Before Image (Clipped Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={currentImage.before}
              alt="Before treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute top-4 left-4 bg-sage-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Before
            </div>
          </div>

          {/* Slider Line and Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full text-sm backdrop-blur-sm">
            {currentImage.caption}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation (if multiple images) */}
      {images.length > 1 && (
        <div className="flex gap-4 justify-center overflow-x-auto scrollbar-hide pb-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-rosegold-500 shadow-lg'
                  : 'border-gray-300 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[index].after}
                  alt={`Result ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Instructions */}
      <p className="text-center text-sm text-gray-500">
        {isDragging ? 'Drag to compare' : 'Click and drag to compare before and after'}
      </p>
    </div>
  );
};

export default BeforeAfterSlider;
