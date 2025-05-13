
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  image: string;
  featured?: boolean;
  category?: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="group bg-luxury-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-luxury-white bg-opacity-80 p-2 rounded-full"
        >
          <Heart 
            size={20} 
            className={`transition-colors ${isFavorite ? 'fill-luxury-gold text-luxury-gold' : 'text-luxury-gray'}`} 
          />
        </button>
        
        {car.featured && (
          <div className="absolute top-4 left-4 bg-luxury-gold px-3 py-1 text-luxury-black text-xs font-bold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-serif text-xl font-medium">
            {car.make} {car.model}
          </h3>
          <span className="text-sm text-luxury-gray">{car.year}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-luxury-gold font-serif text-xl font-semibold">
            {formatPrice(car.price)}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-luxury-gray">
          <div className="flex items-center">
            <span className="w-20">Mileage:</span>
            <span className="font-medium">{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center">
            <span className="w-20">Fuel:</span>
            <span className="font-medium">{car.fuelType}</span>
          </div>
          <div className="flex items-center">
            <span className="w-20">Color:</span>
            <span className="font-medium">{car.color}</span>
          </div>
          <div className="flex items-center">
            <span className="w-20">Trans:</span>
            <span className="font-medium">{car.transmission}</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Link 
            to={`/cars/${car.id}`}
            className="flex-1 btn-primary text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
