import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Registration successful
      console.log('Registration successful', data);
      
      // Store user data in localStorage or state management system
      localStorage.setItem('userInfo', JSON.stringify(data));
      
      // Redirect to dashboard or home page
      navigate('/dashboard');
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Registration failed');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-luxury-gray mb-1">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-luxury-gray mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          />
        </div>
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
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-luxury-gray mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
        />
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-luxury-gray mb-1">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
        />
      </div>

      <div className="flex items-center">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          required
          className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-luxury-gray">
          I agree to the <a href="#" className="text-luxury-gold hover:underline">Terms of Service</a> and <a href="#" className="text-luxury-gold hover:underline">Privacy Policy</a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full btn-primary py-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>
      </div>
      
      <div className="text-center text-sm">
        <span className="text-luxury-gray">Already have an account?</span>{' '}
        <Link to="/login" className="text-luxury-gold hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
