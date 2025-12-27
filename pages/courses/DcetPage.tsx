
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, BookOpenIcon, LightningBoltIcon, CheckCircleIcon, CogIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const DcetPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="KEA - D CET (Diploma CET)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About D CET">
                        <div className="flex items-start">
                            <LightningBoltIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p className="text-lg">The Diploma Common Entrance Test (D CET) is conducted by the Karnataka Examination Authority (KEA) for admission to 2nd-year B.E. / B.Tech courses under the Lateral Entry scheme. This exam is a gateway for Diploma holders to transition into prestigious engineering colleges across Karnataka.</p>
                        </div>
                    </Section>

                    <Section title="Course Highlights">
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="p-6 bg-soft-gray/30 dark:bg-slate-800 rounded-xl border-l-4 border-empower-blue">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-2 flex items-center">
                                    <BookOpenIcon className="w-5 h-5 mr-2" />
                                    Foundation Modules
                                </h4>
                                <p className="text-sm">In-depth coverage of Applied Mathematics and Science tailored for lateral entry requirements.</p>
                            </div>
                            <div className="p-6 bg-soft-gray/30 dark:bg-slate-800 rounded-xl border-l-4 border-sunrise-orange">
                                <h4 className="font-bold text-sunrise-orange mb-2 flex items-center">
                                    <CogIcon className="w-5 h-5 mr-2" />
                                    Technical Expertise
                                </h4>
                                <p className="text-sm">Core engineering subjects for various branches including Civil, Mechanical, and Electrical.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Strategy & Pattern">
                        <p>The D CET exam focuses on testing the fundamentals of engineering and mathematics learned during the diploma. Our coaching emphasizes:</p>
                        <ul className="space-y-4 mt-6">
                            <li className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <div>
                                    <h5 className="font-bold">Shortcut Techniques</h5>
                                    <p className="text-sm">Solving complex mathematical problems quickly with time-saving tricks.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <div>
                                    <h5 className="font-bold">Mock Test Series</h5>
                                    <p className="text-sm">Realistic exam simulations to build speed and accuracy.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <div>
                                    <h5 className="font-bold">Previous Year Analysis</h5>
                                    <p className="text-sm">Thorough discussion of past papers to understand recurring question patterns.</p>
                                </div>
                            </li>
                        </ul>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12">Enroll in D CET Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DcetPage;
