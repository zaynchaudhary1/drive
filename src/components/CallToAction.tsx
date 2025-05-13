
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-luxury-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550966286-6994678ffe87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
          alt="Luxury car showroom"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-luxury-black/70 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-8 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-white mb-4">
              Ready to Experience Automotive Excellence?
            </h2>
            <p className="text-luxury-silver text-lg mb-8">
              Schedule a personalized consultation with our luxury vehicle specialists or visit our showroom to explore our exquisite collection in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3">
                Schedule Consultation
              </Link>
              <Link to="/cars" className="btn-outline px-8 py-3">
                Browse Inventory
              </Link>
            </div>
          </div>
          
          <div className="bg-luxury-black/80 backdrop-blur-sm p-8 w-full max-w-md border border-luxury-gray/30">
            <h3 className="font-serif text-2xl text-luxury-gold mb-6">Visit Our Showroom</h3>
            <div className="space-y-4 text-luxury-silver">
              <p><strong className="text-luxury-white">Address:</strong><br />
              123 Luxury Lane<br />
              Beverly Hills, CA 90210</p>
              
              <p><strong className="text-luxury-white">Hours:</strong><br />
              Monday - Friday: 9AM - 7PM<br />
              Saturday: 10AM - 6PM<br />
              Sunday: By Appointment</p>
              
              <p><strong className="text-luxury-white">Contact:</strong><br />
              Phone: (800) 555-LUXE<br />
              Email: info@chromewheels.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
