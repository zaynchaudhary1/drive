import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-gradient font-serif text-2xl font-bold mb-4 block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">DRIVE</span> 
            </Link>
            <p className="text-gray-300 mt-4 text-sm">
              Experience the pinnacle of automotive excellence. Our curated selection of prestigious vehicles 
              represents the finest craftsmanship and engineering excellence in the industry.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-teal-400 mb-4 pb-2 border-b border-gray-600">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/cars" className="text-gray-300 hover:text-teal-400 transition-colors">Inventory</Link></li>
              <li><Link to="/compare" className="text-gray-300 hover:text-teal-400 transition-colors">Compare</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-teal-400 mb-4 pb-2 border-b border-gray-600">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/financing" className="text-gray-300 hover:text-teal-400 transition-colors">Financing</Link></li>
              <li><Link to="/leasing" className="text-gray-300 hover:text-teal-400 transition-colors">Leasing Options</Link></li>
              <li><Link to="/trade-in" className="text-gray-300 hover:text-teal-400 transition-colors">Trade-In Evaluation</Link></li>
              <li><Link to="/maintenance" className="text-gray-300 hover:text-teal-400 transition-colors">Maintenance</Link></li>
              <li><Link to="/concierge" className="text-gray-300 hover:text-teal-400 transition-colors">Concierge Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-teal-400 mb-4 pb-2 border-b border-gray-600">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Automotive Avenue</p>
              <p>Beverly Hills, CA 90210</p>
              <p className="mt-4">Email: info@drive.com</p>
              <p>Phone: (800) 555-DRIVE</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2023 Drive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
