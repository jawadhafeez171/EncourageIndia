
import React, { useState, FormEvent } from 'react';
import { useEnrollment } from '../contexts/EnrollmentContext';
import { XIcon, CheckCircleIcon } from './Icons';
import { submitToGoogleSheet } from '../services/googleSheetService';

const EnrollmentModal: React.FC = () => {
  const { isModalOpen, closeModal } = useEnrollment();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send data to Google Sheet
      await submitToGoogleSheet({
        FormType: 'Enrollment Popup',
        ...formData
      });
      
      setIsSubmitted(true);
      
      // Reset and close after delay
      setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', email: '' });
          setIsLoading(false);
          closeModal();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form", error);
      setIsLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
          closeModal();
      }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-md relative animate-fade-in-up overflow-hidden transition-colors duration-300"
      >
        {!isSubmitted && (
            <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-gray-400 hover:text-empower-blue dark:hover:text-white transition-colors bg-gray-100 dark:bg-slate-700 rounded-full p-1"
            aria-label="Close modal"
            >
            <XIcon className="w-5 h-5" />
            </button>
        )}

        <div className="p-8">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                        <CheckCircleIcon className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Thank You!</h2>
                    <p className="text-charcoal-gray/80 dark:text-gray-300">We have received your details. Our counselor will contact you shortly.</p>
                </div>
            ) : (
                <>
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold font-montserrat text-empower-blue dark:text-blue-400">Enroll Now</h2>
                        <p className="text-sm text-charcoal-gray/70 dark:text-gray-400 mt-1">Take the first step towards your success.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-charcoal-gray dark:text-gray-300 mb-1">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-empower-blue dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white transition-all" 
                            placeholder="Enter your name"
                            required 
                            disabled={isLoading}
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-gray dark:text-gray-300 mb-1">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-empower-blue dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white transition-all" 
                            placeholder="Enter 10-digit number"
                            pattern="[0-9]{10}"
                            required 
                            disabled={isLoading}
                        />
                        </div>

                        <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-charcoal-gray dark:text-gray-300 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-empower-blue dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white transition-all" 
                            placeholder="Enter your email"
                            required 
                            disabled={isLoading}
                        />
                        </div>

                        <button 
                        type="submit" 
                        disabled={isLoading}
                        className={`w-full font-montserrat font-bold py-3 px-8 rounded-lg shadow-md text-white transition-all duration-300 transform hover:-translate-y-0.5 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-sunrise-orange hover:bg-orange-600'}`}
                        >
                        {isLoading ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </form>
                    <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">By submitting, you agree to be contacted by Encourage India IAS Academy.</p>
                </>
            )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EnrollmentModal;
