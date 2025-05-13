import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-indigo-900 to-purple-800 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-serif text-2xl font-bold relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">DRIVE</span> 
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-teal-400 transition-colors">Home</Link>
            <Link to="/cars" className="text-white hover:text-teal-400 transition-colors">Inventory</Link>
            <Link to="/compare" className="text-white hover:text-teal-400 transition-colors">Compare</Link>
            <Link to="/gallery" className="text-white hover:text-teal-400 transition-colors">Gallery</Link>
            <Link to="/blog" className="text-white hover:text-teal-400 transition-colors">Blog</Link>
            <Link to="/contact" className="text-white hover:text-teal-400 transition-colors">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-teal-400">
              <Search size={20} />
            </button>
            <Link to="/login">
              <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-indigo-900">
                <User size={18} className="mr-2" />
                Account
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-teal-400"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-indigo-900 bg-opacity-95 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-white py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/cars" className="text-white py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>Inventory</Link>
            <Link to="/compare" className="text-white py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>Compare</Link>
            <Link to="/gallery" className="text-white py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/blog" className="text-white py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-white py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="text-teal-400 py-2" onClick={() => setMobileMenuOpen(false)}>Login / Register</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
