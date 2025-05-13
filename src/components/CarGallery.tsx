
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarGalleryProps {
  images: string[];
}

const CarGallery = ({ images }: CarGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative overflow-hidden bg-luxury-black h-96 lg:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Car view ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-black/50 hover:bg-luxury-black/80 text-luxury-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-black/50 hover:bg-luxury-black/80 text-luxury-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 border-2 transition-all ${
              index === activeIndex ? 'border-luxury-gold' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`Car thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
