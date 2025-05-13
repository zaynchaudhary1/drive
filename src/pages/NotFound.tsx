
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-8xl text-luxury-black mb-4">404</h1>
          <p className="text-2xl text-luxury-gray mb-8">Page Not Found</p>
          <p className="text-luxury-gray max-w-md mx-auto mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary px-8 py-3 inline-block">
            Return to Homepage
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
