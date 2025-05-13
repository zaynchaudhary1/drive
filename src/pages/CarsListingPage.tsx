
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import FilterBar from '@/components/FilterBar';
import Breadcrumb from '@/components/Breadcrumb';
import { generateCars, filterData } from '@/utils/carData';

const CarsListingPage = () => {
  const [allCars] = useState(generateCars(24));
  const [filteredCars, setFilteredCars] = useState(allCars);
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({});
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    
    let result = [...allCars];
    
    if (filters.make) {
      result = result.filter(car => car.make === filters.make);
    }
    
    if (filters.model) {
      result = result.filter(car => car.model === filters.model);
    }
    
    if (filters.year) {
      result = result.filter(car => car.year.toString() === filters.year);
    }
    
    if (filters.color) {
      result = result.filter(car => car.color === filters.color);
    }
    
    if (filters.minPrice) {
      result = result.filter(car => car.price >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
      result = result.filter(car => car.price <= filters.maxPrice);
    }
    
    setFilteredCars(result);
  };
  
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    
    let sortedCars = [...filteredCars];
    
    switch (sortValue) {
      case 'price-low':
        sortedCars.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedCars.sort((a, b) => b.price - a.price);
        break;
      case 'year-new':
        sortedCars.sort((a, b) => b.year - a.year);
        break;
      case 'year-old':
        sortedCars.sort((a, b) => a.year - b.year);
        break;
      case 'mileage-low':
        sortedCars.sort((a, b) => a.mileage - b.mileage);
        break;
      case 'mileage-high':
        sortedCars.sort((a, b) => b.mileage - a.mileage);
        break;
      default:
        // Featured sorting (default)
        sortedCars.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredCars(sortedCars);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb 
            items={[
              { name: 'Inventory', path: '/cars' }
            ]} 
          />
          
          <div className="my-8">
            <h1 className="font-serif text-4xl text-luxury-black mb-2">Our Luxury Vehicle Collection</h1>
            <p className="text-luxury-gray max-w-4xl">
              Explore our curated selection of prestigious automobiles, each representing 
              the pinnacle of engineering excellence, innovative design, and unparalleled luxury.
            </p>
          </div>
          
          <FilterBar 
            onFilterChange={handleFilterChange} 
            makes={filterData.makes}
            models={filterData.models}
            years={filterData.years}
            colors={filterData.colors}
            minPrice={filterData.minPrice}
            maxPrice={filterData.maxPrice}
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <p className="text-luxury-gray mb-4 md:mb-0">
              Showing <span className="font-medium">{filteredCars.length}</span> vehicles
            </p>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-luxury-gray">Sort by:</label>
              <select 
                id="sort" 
                value={sortBy}
                onChange={handleSort}
                className="border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="year-new">Year (Newest First)</option>
                <option value="year-old">Year (Oldest First)</option>
                <option value="mileage-low">Mileage (Low to High)</option>
                <option value="mileage-high">Mileage (High to Low)</option>
              </select>
            </div>
          </div>
          
          {filteredCars.length === 0 ? (
            <div className="py-12 text-center">
              <h3 className="text-2xl text-luxury-gray font-serif">No vehicles found</h3>
              <p className="mt-2 text-luxury-gray/70">Please try different filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
          
          {/* Pagination - to be implemented */}
          <div className="flex justify-center my-8">
            <button className="px-4 py-2 border border-luxury-gray/30 mx-1 bg-luxury-gold text-luxury-black">1</button>
            <button className="px-4 py-2 border border-luxury-gray/30 mx-1 hover:bg-luxury-gold hover:text-luxury-black">2</button>
            <button className="px-4 py-2 border border-luxury-gray/30 mx-1 hover:bg-luxury-gold hover:text-luxury-black">3</button>
            <button className="px-4 py-2 border border-luxury-gray/30 mx-1 hover:bg-luxury-gold hover:text-luxury-black">
              Next →
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarsListingPage;
