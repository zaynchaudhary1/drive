
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSuccess(true);
      setIsLoading(false);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded" role="alert">
          <span className="block sm:inline">Your message has been sent successfully. We'll get back to you soon.</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-luxury-gray mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-luxury-gray mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-luxury-gray mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-luxury-gray mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Vehicle Information">Vehicle Information</option>
            <option value="Test Drive Request">Test Drive Request</option>
            <option value="Financing Options">Financing Options</option>
            <option value="Service Appointment">Service Appointment</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-luxury-gray mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full btn-primary py-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
