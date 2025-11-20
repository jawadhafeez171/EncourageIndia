
import React, { useState, FormEvent } from 'react';
import CTAButton from '../components/CTAButton';
import { LocationPinIcon, PhoneIcon, MailIcon, WhatsAppIcon, CheckCircleIcon } from '../components/Icons';
import { submitToGoogleSheet } from '../services/googleSheetService';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
             await submitToGoogleSheet({
                FormType: 'Contact Page',
                ...formData
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            
            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Contact Us" />

            <section className="py-20">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column: Info & Map */}
                        <div>
                            <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-6">Get in Touch</h2>
                            <p className="text-charcoal-gray/80 dark:text-gray-300 mb-8">We're here to help you on your journey to success. Reach out to us with your queries, and our team will get back to you at the earliest.</p>
                            
                            <div className="space-y-6 text-charcoal-gray dark:text-gray-200">
                                <div className="flex items-start space-x-4">
                                    <LocationPinIcon className="w-8 h-8 text-sunrise-orange mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-lg">Address</h3>
                                        <p>123, Example Road, Koramangala, Bengaluru, Karnataka 560034</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <PhoneIcon className="w-7 h-7 text-sunrise-orange mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <a href="tel:+919611621195" className="hover:text-sunrise-orange">+91 96116 21195</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="w-7 h-7 text-sunrise-orange mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <a href="mailto:info@encourageindia.com" className="hover:text-sunrise-orange">info@encourageindia.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://picsum.photos/seed/map/800/400" alt="Location map" className="rounded-lg shadow-md hover:shadow-xl transition-shadow"/>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-soft-gray dark:bg-slate-800 p-8 rounded-lg transition-colors duration-300">
                            <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-6">Send us a Message</h2>
                            
                            {status === 'success' ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 dark:bg-green-900/50 dark:text-green-200 px-4 py-8 rounded relative text-center">
                                    <CheckCircleIcon className="w-12 h-12 mx-auto mb-2" />
                                    <strong className="font-bold block text-lg">Message Sent!</strong>
                                    <span className="block sm:inline">Thank you for contacting us. We will get back to you shortly.</span>
                                    <button 
                                        onClick={() => setStatus('idle')} 
                                        className="mt-4 underline font-semibold hover:text-green-800 dark:hover:text-green-100"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray dark:text-gray-300">Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray dark:text-gray-300">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal-gray dark:text-gray-300">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            name="phone" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            pattern="[0-9]{10}"
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-charcoal-gray dark:text-gray-300">Message</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={5} 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-empower-blue focus:border-empower-blue bg-white dark:bg-slate-700 text-charcoal-gray dark:text-white"
                                        ></textarea>
                                    </div>
                                    {status === 'error' && (
                                        <p className="text-red-600 dark:text-red-400 text-sm">Failed to send message. Please try again.</p>
                                    )}
                                    <div>
                                        <CTAButton 
                                            type="submit" 
                                            variant="primary" 
                                            className={`w-full ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {status === 'loading' ? 'Sending...' : 'Submit'}
                                        </CTAButton>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Icon */}
            <a href="https://wa.me/919611621195" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
                <WhatsAppIcon className="w-8 h-8"/>
            </a>
        </div>
    );
};

export default ContactPage;
