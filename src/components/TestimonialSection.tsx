
const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Chrome Wheels provided a seamless experience from browsing to purchase. Their attention to detail and commitment to customer satisfaction exceeded my expectations.",
      author: "David M.",
      position: "CEO, Nexus Technologies",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "The team's expertise and personalized service made finding my dream car an absolute pleasure. Their passion for luxury vehicles is evident in everything they do.",
      author: "Sarah J.",
      position: "Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "As a collector, I appreciate Chrome Wheels' dedication to sourcing rare and exceptional vehicles. Their knowledge of the luxury market is unparalleled.",
      author: "Michael R.",
      position: "Vintage Car Collector",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="py-16 bg-luxury-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-white mb-2">Client Testimonials</h2>
          <p className="text-luxury-silver max-w-2xl mx-auto">
            Hear what our distinguished clients have to say about their experience with Chrome Wheels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-luxury-gray/20 backdrop-blur-sm p-8 relative"
            >
              <div className="quote-mark text-luxury-gold/30 text-6xl font-serif absolute top-4 left-4">
                "
              </div>
              <div className="relative z-10">
                <p className="text-luxury-silver mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-luxury-white font-medium">{testimonial.author}</h4>
                    <p className="text-luxury-silver text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
