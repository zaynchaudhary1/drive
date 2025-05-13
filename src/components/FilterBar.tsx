
import { useState } from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
  makes: string[];
  models: string[];
  years: number[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
}

const FilterBar = ({ 
  onFilterChange,
  makes,
  models,
  years,
  colors,
  minPrice,
  maxPrice
}: FilterBarProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: '',
    minPrice: minPrice,
    maxPrice: maxPrice,
    color: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
    if (window.innerWidth < 768) {
      setIsFiltersOpen(false);
    }
  };

  const clearFilters = () => {
    const resetFilters = {
      make: '',
      model: '',
      year: '',
      minPrice: minPrice,
      maxPrice: maxPrice,
      color: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-luxury-white shadow-md mb-8">
      <div className="container mx-auto px-4">
        <div className="md:hidden py-4">
          <button 
            className="flex items-center justify-between w-full text-left text-luxury-black"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <span className="font-medium">Filter Vehicles</span>
            <Filter size={20} className={`transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className={`${isFiltersOpen || window.innerWidth >= 768 ? 'block' : 'hidden'} md:block py-4 md:py-6`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label htmlFor="make" className="block text-sm text-luxury-gray mb-1">Make</label>
              <select 
                id="make" 
                name="make"
                value={filters.make}
                onChange={handleInputChange}
                className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
              >
                <option value="">All Makes</option>
                {makes.map((make, index) => (
                  <option key={index} value={make}>{make}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm text-luxury-gray mb-1">Model</label>
              <select 
                id="model" 
                name="model"
                value={filters.model}
                onChange={handleInputChange}
                className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
              >
                <option value="">All Models</option>
                {models.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="year" className="block text-sm text-luxury-gray mb-1">Year</label>
              <select 
                id="year" 
                name="year"
                value={filters.year}
                onChange={handleInputChange}
                className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
              >
                <option value="">All Years</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="color" className="block text-sm text-luxury-gray mb-1">Color</label>
              <select 
                id="color" 
                name="color"
                value={filters.color}
                onChange={handleInputChange}
                className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
              >
                <option value="">All Colors</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="priceRange" className="block text-sm text-luxury-gray mb-1">Price Range</label>
              <div className="flex items-center">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice || ''}
                  onChange={handleInputChange}
                  className="w-full border border-luxury-gray/30 rounded-l px-3 py-2 focus:outline-none focus:border-luxury-gold"
                />
                <span className="px-2">-</span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice || ''}
                  onChange={handleInputChange}
                  className="w-full border border-luxury-gray/30 rounded-r px-3 py-2 focus:outline-none focus:border-luxury-gold"
                />
              </div>
            </div>
            
            <div className="flex items-end space-x-2">
              <button 
                type="submit" 
                className="bg-luxury-gold text-luxury-black px-4 py-2 rounded hover:bg-opacity-90 transition-colors flex-1"
              >
                Apply Filters
              </button>
              <button 
                type="button" 
                onClick={clearFilters}
                className="bg-luxury-gray text-luxury-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterBar;
