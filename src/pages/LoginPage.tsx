
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import Breadcrumb from '@/components/Breadcrumb';

const LoginPage = () => {
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
              { name: 'Login', path: '/login' }
            ]} 
          />
          
          <div className="max-w-md mx-auto my-12">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl text-luxury-black">Sign In</h1>
              <p className="text-luxury-gray mt-2">
                Access your Chrome Wheels account
              </p>
            </div>
            
            <div className="bg-white p-8 border border-luxury-gray/30 shadow-sm">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
