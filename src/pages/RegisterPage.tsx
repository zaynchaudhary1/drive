
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import Breadcrumb from '@/components/Breadcrumb';

const RegisterPage = () => {
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
              { name: 'Register', path: '/register' }
            ]} 
          />
          
          <div className="max-w-2xl mx-auto my-12">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl text-luxury-black">Create an Account</h1>
              <p className="text-luxury-gray mt-2">
                Join Chrome Wheels to access exclusive features and personalized service
              </p>
            </div>
            
            <div className="bg-white p-8 border border-luxury-gray/30 shadow-sm">
              <RegisterForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterPage;
