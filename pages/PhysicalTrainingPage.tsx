
import React from 'react';
import CTAButton from '../components/CTAButton';
import { ShieldCheckIcon, UsersIcon, CheckCircleIcon, LightningBoltIcon } from '../components/Icons';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
            <p className="text-xl mt-2 text-soft-gray/90">{subtitle}</p>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </section>
);

const PhysicalTrainingPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Physical Training Program" subtitle="Building Strength and Stamina for Uniformed Services" />
            
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="Why Physical Fitness is Crucial">
                        <p>For aspirants of defence and police services, physical fitness is not just a requirement—it's a fundamental part of the job. Examinations for services like CDS, CAPF, AFCAT, ACF, and state police forces (PSI, PC) have rigorous physical and medical standards. Failing these tests can disqualify even the most brilliant academic candidates. At Encourage India, we provide a dedicated physical training program to ensure our students are not just mentally prepared, but also physically robust enough to clear all stages of the selection process.</p>
                    </Section>

                    <Section title="Our Comprehensive Approach">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <UsersIcon className="w-12 h-12 text-sunrise-orange mb-4" />
                                <h3 className="font-montserrat text-xl font-bold text-empower-blue dark:text-blue-400 mb-2">Expert Trainers</h3>
                                <p>Our training is conducted by experienced coaches and ex-servicemen who understand the specific requirements of each exam's physical tests.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <LightningBoltIcon className="w-12 h-12 text-sunrise-orange mb-4" />
                                <h3 className="font-montserrat text-xl font-bold text-empower-blue dark:text-blue-400 mb-2">Personalized Plans</h3>
                                <p>We assess each student's current fitness level and create a customized training schedule to progressively build strength, stamina, and technique.</p>
                            </div>
                             <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <ShieldCheckIcon className="w-12 h-12 text-sunrise-orange mb-4" />
                                <h3 className="font-montserrat text-xl font-bold text-empower-blue dark:text-blue-400 mb-2">Holistic Development</h3>
                                <p>Our program includes endurance running, strength training, event-specific practice (like jumps and throws), nutritional guidance, and mental conditioning.</p>
                            </div>
                             <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <CheckCircleIcon className="w-12 h-12 text-sunrise-orange mb-4" />
                                <h3 className="font-montserrat text-xl font-bold text-empower-blue dark:text-blue-400 mb-2">Mock Tests & Evaluation</h3>
                                <p>We conduct regular mock physical tests that simulate the actual exam environment to track progress and build confidence.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exams We Cover">
                        <p>Our physical training curriculum is designed to meet the standards of a wide range of uniformed services examinations:</p>
                        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-soft-gray/50 dark:bg-slate-800 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                                <h3 className="font-montserrat font-bold text-empower-blue dark:text-blue-400 text-lg">Defence Services</h3>
                                <p className="text-sm mt-1 text-charcoal-gray/80 dark:text-gray-300">CDS, CAPF, AFCAT</p>
                            </div>
                            <div className="bg-soft-gray/50 dark:bg-slate-800 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                                <h3 className="font-montserrat font-bold text-empower-blue dark:text-blue-400 text-lg">Karnataka Police</h3>
                                <p className="text-sm mt-1 text-charcoal-gray/80 dark:text-gray-300">PSI / ESI, PC</p>
                            </div>
                            <div className="bg-soft-gray/50 dark:bg-slate-800 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                                <h3 className="font-montserrat font-bold text-empower-blue dark:text-blue-400 text-lg">Forest Services</h3>
                                <p className="text-sm mt-1 text-charcoal-gray/80 dark:text-gray-300">ACF, RFO</p>
                            </div>
                        </div>
                    </Section>
                    
                    <section className="py-12 text-center bg-empower-blue text-white rounded-lg mt-20">
                         <div className="container mx-auto px-8">
                            <h2 className="text-3xl font-bold font-montserrat">Ready to Build Your Physical Edge?</h2>
                            <p className="mt-4 max-w-2xl mx-auto">Don't let the physical test be a hurdle in your path to success. Join our program and build the fitness and confidence to ace every stage of your exam.</p>
                            <CTAButton requiresAuth variant="secondary" className="mt-8 text-lg">Enroll in Physical Training</CTAButton>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PhysicalTrainingPage;
