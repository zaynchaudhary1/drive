
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="absolute w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source 
          src="https://player.vimeo.com/external/535478519.sd.mp4?s=ce5b9a5dee780fb53e86069145bdc9c83a5effa7&profile_id=165&oauth2_token_id=57447761" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/90"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-luxury-white mb-4 animate-fade-in">
          <span className="block">Experience True</span>
          <span className="text-luxury-gold">Automotive Excellence</span>
        </h1>
        
        <p className="max-w-xl text-luxury-silver text-lg md:text-xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Discover our curated selection of the world's most prestigious vehicles, 
          where unparalleled craftsmanship meets cutting-edge innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link 
            to="/cars" 
            className="btn-primary px-8 py-3"
          >
            Explore Collection
          </Link>
          <Link 
            to="/contact" 
            className="btn-outline px-8 py-3"
          >
            Book a Consultation
          </Link>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="flex gap-6 px-4 py-3 bg-luxury-black/80 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-luxury-silver text-sm">Vehicles</p>
              <p className="text-luxury-gold font-serif text-xl">150+</p>
            </div>
            <div className="text-center">
              <p className="text-luxury-silver text-sm">Brands</p>
              <p className="text-luxury-gold font-serif text-xl">25</p>
            </div>
            <div className="text-center">
              <p className="text-luxury-silver text-sm">Years Experience</p>
              <p className="text-luxury-gold font-serif text-xl">30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
