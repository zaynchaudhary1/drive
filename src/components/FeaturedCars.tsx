
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CarCard, { Car } from './CarCard';

interface FeaturedCarsProps {
  title: string;
  subtitle?: string;
  cars: Car[];
}

const FeaturedCars = ({ title, subtitle, cars }: FeaturedCarsProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const carsPerPage = 3;
  
  const nextCars = () => {
    const newIndex = startIndex + carsPerPage;
    if (newIndex < cars.length) {
      setStartIndex(newIndex);
    }
  };
  
  const prevCars = () => {
    const newIndex = startIndex - carsPerPage;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };
  
  const visibleCars = cars.slice(startIndex, startIndex + carsPerPage);
  
  return (
    <section className="py-16 bg-luxury-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-luxury-black mb-2">{title}</h2>
            {subtitle && <p className="text-luxury-gray">{subtitle}</p>}
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <button 
              onClick={prevCars}
              disabled={startIndex === 0}
              className={`w-12 h-12 border flex items-center justify-center ${
                startIndex === 0 
                ? 'border-luxury-gray/30 text-luxury-gray/30 cursor-not-allowed' 
                : 'border-luxury-gray text-luxury-gray hover:border-luxury-gold hover:text-luxury-gold'
              } transition-colors`}
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextCars}
              disabled={startIndex + carsPerPage >= cars.length}
              className={`w-12 h-12 border flex items-center justify-center ${
                startIndex + carsPerPage >= cars.length 
                ? 'border-luxury-gray/30 text-luxury-gray/30 cursor-not-allowed' 
                : 'border-luxury-gray text-luxury-gray hover:border-luxury-gold hover:text-luxury-gold'
              } transition-colors`}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
