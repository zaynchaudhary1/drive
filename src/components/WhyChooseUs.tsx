const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🌟",
      title: "Premium Selection",
      description: "Curated collection of the world's finest luxury automobiles."
    },
    {
      icon: "🔍",
      title: "Expert Consultation",
      description: "Personalized guidance from our team of automotive specialists."
    },
    {
      icon: "🛠️",
      title: "Certified Vehicles",
      description: "Rigorous inspection and certification for every vehicle."
    },
    {
      icon: "📊",
      title: "Transparent Pricing",
      description: "Clear, competitive pricing with no hidden fees."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-luxury-white to-luxury-silver/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-black mb-2">Why Choose Drive Everywhere</h2>
          <p className="text-luxury-gray max-w-2xl mx-auto">
            We are committed to providing an exceptional experience for discerning automotive enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-luxury-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-serif text-xl text-luxury-black mb-3">{reason.title}</h3>
              <p className="text-luxury-gray">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
