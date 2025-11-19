import React, { useState, FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { XIcon, MailIcon } from './Icons';

const AuthModal: React.FC = () => {
  const { isModalOpen, closeModal, login } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isModalOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (activeTab === 'signup' && !name) {
      setError('Please enter your name.');
      return;
    }
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Mock login/signup
    login({ name: name || 'Aspirant', email });
  };

  const handleTabChange = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
    setError('');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
      onClick={closeModal}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close authentication modal"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex border-b border-soft-gray mb-6">
            <button 
              onClick={() => handleTabChange('login')}
              className={`flex-1 py-3 font-montserrat font-semibold text-lg focus:outline-none ${activeTab === 'login' ? 'text-empower-blue border-b-2 border-empower-blue' : 'text-gray-500'}`}
            >
              Login
            </button>
            <button 
              onClick={() => handleTabChange('signup')}
              className={`flex-1 py-3 font-montserrat font-semibold text-lg focus:outline-none ${activeTab === 'signup' ? 'text-empower-blue border-b-2 border-empower-blue' : 'text-gray-500'}`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-2xl font-bold font-montserrat text-charcoal-gray text-center mb-1">
            {activeTab === 'login' ? 'Welcome Back!' : 'Create Your Account'}
          </h2>
          <p className="text-center text-charcoal-gray/70 mb-6">
            {activeTab === 'login' ? 'Log in to access your courses.' : 'Join us to start your journey to success.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue" 
                  required 
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password"className="block text-sm font-medium text-charcoal-gray">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue" 
                required 
              />
            </div>
            {error && <p className="text-encourage-red text-sm">{error}</p>}
            <div>
              <button 
                type="submit" 
                className="w-full font-montserrat font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out bg-encourage-red text-white hover:bg-red-700"
              >
                {activeTab === 'login' ? 'Login' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
