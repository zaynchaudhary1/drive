
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import { MapPin } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb 
            items={[
              { name: 'Contact', path: '/contact' }
            ]} 
          />
          
          <div className="my-8">
            <h1 className="font-serif text-4xl text-luxury-black mb-2">Contact Us</h1>
            <p className="text-luxury-gray max-w-4xl">
              We're here to assist you with any inquiries about our luxury vehicles or services. 
              Reach out to our team of automotive specialists for personalized assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 border border-luxury-gray/30 shadow-sm">
                <h2 className="font-serif text-2xl text-luxury-black mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 border border-luxury-gray/30 shadow-sm mb-8">
                <h2 className="font-serif text-2xl text-luxury-black mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-luxury-black">Address</h3>
                    <address className="not-italic text-luxury-gray mt-1">
                      123 Luxury Lane<br />
                      Beverly Hills, CA 90210
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-luxury-black">Phone</h3>
                    <p className="text-luxury-gray mt-1">(800) 555-LUXE</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-luxury-black">Email</h3>
                    <p className="text-luxury-gray mt-1">info@chromewheels.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-luxury-black">Business Hours</h3>
                    <div className="text-luxury-gray mt-1 space-y-1">
                      <p>Monday - Friday: 9AM - 7PM</p>
                      <p>Saturday: 10AM - 6PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 border border-luxury-gray/30 shadow-sm">
                <h2 className="font-serif text-2xl text-luxury-black mb-6">Showroom Location</h2>
                <div className="aspect-square bg-gray-200 mb-4 flex items-center justify-center">
                  <MapPin size={40} className="text-luxury-gold" />
                </div>
                <p className="text-luxury-gray">
                  Our luxurious showroom is centrally located in Beverly Hills, easily accessible from 
                  major highways and landmarks throughout the Los Angeles area.
                </p>
                <button className="mt-4 btn-outline w-full">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
