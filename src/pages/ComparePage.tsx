
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CompareTable from '@/components/CompareTable';
import CarCard, { Car } from '@/components/CarCard';
import { generateCars } from '@/utils/carData';

const ComparePage = () => {
  const [allCars] = useState<Car[]>(generateCars(12));
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const maxCompare = 3;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleAddCar = (car: Car) => {
    if (selectedCars.length < maxCompare && !selectedCars.some(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
      setSearchTerm('');
    }
  };
  
  const handleRemoveCar = (id: string) => {
    setSelectedCars(selectedCars.filter(car => car.id !== id));
  };
  
  const filteredCars = allCars.filter(car => {
    const searchString = `${car.make} ${car.model} ${car.year}`.toLowerCase();
    return searchTerm && 
           searchString.includes(searchTerm.toLowerCase()) && 
           !selectedCars.some(c => c.id === car.id);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb 
            items={[
              { name: 'Compare', path: '/compare' }
            ]} 
          />
          
          <div className="my-8">
            <h1 className="font-serif text-4xl text-luxury-black mb-2">Compare Vehicles</h1>
            <p className="text-luxury-gray max-w-4xl">
              Select up to {maxCompare} vehicles to compare their specifications side by side. 
              This allows you to make an informed decision based on the features that matter most to you.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="mb-4">
              <label htmlFor="search" className="block text-sm font-medium text-luxury-gray mb-1">
                Search for vehicles to compare:
              </label>
              <input
                id="search"
                type="text"
                placeholder="Enter make, model or year..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
                disabled={selectedCars.length >= maxCompare}
              />
              {selectedCars.length >= maxCompare && (
                <p className="text-sm text-luxury-gray mt-1">
                  Maximum number of vehicles selected ({maxCompare}). Remove a vehicle to add another.
                </p>
              )}
            </div>
            
            {searchTerm && filteredCars.length > 0 && (
              <div className="bg-white border border-luxury-gray/30 rounded shadow-md mt-2 max-h-80 overflow-y-auto">
                {filteredCars.map((car) => (
                  <div 
                    key={car.id}
                    className="flex items-center justify-between p-3 hover:bg-luxury-silver/10 cursor-pointer border-b border-luxury-gray/20 last:border-0"
                    onClick={() => handleAddCar(car)}
                  >
                    <div className="flex items-center">
                      <img 
                        src={car.image} 
                        alt={`${car.make} ${car.model}`}
                        className="w-12 h-12 object-cover mr-3"
                      />
                      <div>
                        <h3 className="font-medium">{car.make} {car.model}</h3>
                        <p className="text-sm text-luxury-gray">{car.year} • {car.mileage.toLocaleString()} mi</p>
                      </div>
                    </div>
                    <span className="text-luxury-gold">${car.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
            
            {searchTerm && filteredCars.length === 0 && (
              <div className="bg-white border border-luxury-gray/30 rounded p-4 mt-2 text-center text-luxury-gray">
                No vehicles found matching your search criteria.
              </div>
            )}
          </div>
          
          <div className="bg-luxury-white p-6 border border-luxury-gray/30 mb-8">
            <h2 className="font-serif text-2xl text-luxury-black mb-6">Selected Vehicles</h2>
            
            {selectedCars.length === 0 ? (
              <div className="text-center py-8 text-luxury-gray">
                <p>No vehicles selected for comparison.</p>
                <p className="text-sm mt-2">Search for vehicles above to add them for comparison.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {selectedCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
                {Array.from({ length: maxCompare - selectedCars.length }).map((_, index) => (
                  <div 
                    key={`empty-${index}`} 
                    className="border-2 border-dashed border-luxury-gray/30 rounded-sm flex items-center justify-center h-64"
                  >
                    <div className="text-center text-luxury-gray">
                      <p className="text-lg font-medium">Add a Vehicle</p>
                      <p className="text-sm">Search above to add another vehicle for comparison</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {selectedCars.length > 0 && (
              <div className="text-right">
                <button 
                  onClick={() => setSelectedCars([])}
                  className="text-luxury-gray hover:text-red-500 transition-colors text-sm"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
          
          <div className="mb-12">
            <h2 className="font-serif text-2xl text-luxury-black mb-6">Comparison Details</h2>
            <CompareTable cars={selectedCars} onRemove={handleRemoveCar} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
