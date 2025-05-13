
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-white mb-2">Browse By Category</h2>
          <p className="text-luxury-silver max-w-2xl mx-auto">
            Explore our diverse selection of luxury vehicles categorized to match your specific preferences and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="group relative overflow-hidden block h-80"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-luxury-white mb-2">{category.name}</h3>
                <p className="text-luxury-silver mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold">{category.count} vehicles</span>
                  <span className="text-luxury-gold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
