
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import CategorySection from '@/components/CategorySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import { generateCars, carCategories } from '@/utils/carData';
import { useEffect } from 'react';

const Index = () => {
  // Generate random car data for featured sections
  const featuredCars = generateCars(9);
  const newArrivals = featuredCars.slice(0, 3);
  const bestDeals = featuredCars.slice(3, 6);
  const luxuryCars = featuredCars.slice(6, 9);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturedCars 
          title="Featured Vehicles"
          subtitle="Explore our handpicked selection of exceptional automobiles"
          cars={newArrivals}
        />
        
        <CategorySection categories={carCategories} />
        
        <FeaturedCars 
          title="New Arrivals"
          subtitle="Be the first to experience these recent additions to our collection"
          cars={bestDeals}
        />
        
        <WhyChooseUs />
        
        <FeaturedCars 
          title="Best Deals"
          subtitle="Special offerings on select luxury vehicles"
          cars={luxuryCars}
        />
        
        <TestimonialSection />
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
