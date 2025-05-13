
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CarGallery from '@/components/CarGallery';
import { generateCars, generateCarDetailImages } from '@/utils/carData';

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call to fetch car details
    setTimeout(() => {
      const cars = generateCars(30);
      const foundCar = cars.find(c => c.id === id) || cars[0];
      setCar(foundCar);
      setImages(generateCarDetailImages(6));
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-luxury-gray">Loading car details...</div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-luxury-gray">Car not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb 
            items={[
              { name: 'Inventory', path: '/cars' },
              { name: `${car.make} ${car.model}`, path: `/cars/${car.id}` }
            ]} 
          />
          
          <div className="my-8">
            <h1 className="font-serif text-4xl text-luxury-black mb-2">
              {car.year} {car.make} {car.model}
            </h1>
            <p className="text-luxury-gray">Vehicle ID: {car.id}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <CarGallery images={images} />
              
              <div className="mt-12">
                <h2 className="font-serif text-2xl text-luxury-black mb-6 pb-2 border-b border-luxury-gray/30">
                  Vehicle Overview
                </h2>
                <p className="text-luxury-gray mb-6 leading-relaxed">
                  Experience unparalleled luxury and performance with this exquisite {car.year} {car.make} {car.model}. 
                  This vehicle represents the pinnacle of automotive engineering, combining cutting-edge technology 
                  with masterful craftsmanship.
                </p>
                <p className="text-luxury-gray mb-6 leading-relaxed">
                  Featuring a powerful engine, premium interior appointments, and a sophisticated design language,
                  this {car.make} delivers an exceptional driving experience that befits its prestigious heritage.
                  With meticulous maintenance and exceptional condition, this vehicle offers both luxury and reliability.
                </p>
                <p className="text-luxury-gray leading-relaxed">
                  We invite you to schedule a private viewing and test drive to fully appreciate the 
                  extraordinary qualities of this remarkable automobile.
                </p>
                
                <h2 className="font-serif text-2xl text-luxury-black mt-12 mb-6 pb-2 border-b border-luxury-gray/30">
                  Features & Options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Premium Leather Interior</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Advanced Driver Assistance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Panoramic Sunroof</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Premium Sound System</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Smart Connectivity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Sport Package</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Heated & Ventilated Seats</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Adaptive Suspension</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Carbon Fiber Accents</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-luxury-gold mr-2"></span>
                    <span className="text-luxury-gray">Ambient Lighting</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-luxury-white border border-luxury-gray/30 p-6 shadow-sm sticky top-24">
                <div className="mb-6 pb-4 border-b border-luxury-gray/30">
                  <h2 className="font-serif text-3xl text-luxury-gold mb-1">{formatPrice(car.price)}</h2>
                  <p className="text-sm text-luxury-gray">Plus taxes & licensing</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-serif text-xl text-luxury-black mb-4">Vehicle Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Make:</span>
                      <span className="font-medium">{car.make}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Model:</span>
                      <span className="font-medium">{car.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Year:</span>
                      <span className="font-medium">{car.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Mileage:</span>
                      <span className="font-medium">{car.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Exterior Color:</span>
                      <span className="font-medium">{car.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Fuel Type:</span>
                      <span className="font-medium">{car.fuelType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-gray">Transmission:</span>
                      <span className="font-medium">{car.transmission}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="btn-primary w-full py-3">
                    Schedule Test Drive
                  </button>
                  <button className="btn-outline w-full py-3">
                    Request Information
                  </button>
                  <button className="btn-secondary w-full py-3">
                    Calculate Payment
                  </button>
                  <button className="border border-luxury-gray/30 text-luxury-gray hover:text-luxury-gold hover:border-luxury-gold w-full py-3 transition-colors">
                    Add to Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarDetailPage;
