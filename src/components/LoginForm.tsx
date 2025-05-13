
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate login with delay
    setTimeout(() => {
      // For demo, we'll just console log the values
      console.log('Login attempt with:', { email, password, rememberMe });
      
      // Mock authentication success (this would be an API call in a real app)
      if (email === 'admin@example.com' && password === 'password') {
        console.log('Authentication successful');
        // Redirect would happen here in a real app
      } else {
        setError('Invalid email or password');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-luxury-gray mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="password" className="block text-sm font-medium text-luxury-gray">
            Password
          </label>
          <Link to="/forgot-password" className="text-sm text-luxury-gold hover:underline">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-luxury-gray/30 rounded px-3 py-2 focus:outline-none focus:border-luxury-gold"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded"
          />
          <label htmlFor="remember_me" className="ml-2 block text-sm text-luxury-gray">
            Remember me
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full btn-primary py-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
      
      <div className="text-center text-sm">
        <span className="text-luxury-gray">Don't have an account?</span>{' '}
        <Link to="/register" className="text-luxury-gold hover:underline font-medium">
          Register now
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
