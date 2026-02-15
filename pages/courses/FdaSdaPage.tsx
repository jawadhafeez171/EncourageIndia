import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, DesktopComputerIcon, PencilAltIcon, CheckCircleIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const FdaSdaPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="KPSC FDA & SDA Exam Coaching | Karnataka Administrative Preparation"
                description="Expert coaching for KPSC First Division Assistant (FDA) and Second Division Assistant (SDA) recruitment. Comprehensive guide to Paper I (Kannada) and Paper II/III."
                url="https://encourageindiaias.in/courses/fda-sda"
            />
            <PageHeader title="KPSC - FDA/SDA Examination" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="About FDA/SDA Exams">
                        <p>The recruitment for First Division Assistant (FDA) and Second Division Assistant (SDA) posts is one of the most widely anticipated examinations conducted by KPSC. These clerical cadre posts are the backbone of the state government's administrative machinery, playing a crucial role in the day-to-day functioning of various departments.</p>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <ul className="list-disc list-inside">
                                        <li><strong>For FDA (First Division Assistant):</strong> Must hold a Bachelor's degree from a recognized university.</li>
                                        <li><strong>For SDA (Second Division Assistant):</strong> Must have passed the Pre-University Course (PUC) / 12th Standard or an equivalent qualification.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>Generally 18 to 35 years, with age relaxations for reserved categories.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <DesktopComputerIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Computer Literacy</h4>
                                    <p>A basic computer literacy certificate is often required.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern">
                        <p>The selection process consists of a competitive written examination with three papers. The final merit is based on marks from Paper II and Paper III.</p>
                        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper I: Compulsory Kannada</h3>
                                <p className="font-bold text-sunrise-orange mb-3">150 Marks (Qualifying)</p>
                                <p className="text-sm">A descriptive paper designed to test the candidate's proficiency in the Kannada language.</p>
                            </div>
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper II: General English/Kannada</h3>
                                <p className="font-bold text-sunrise-orange mb-3">100 Marks (Merit)</p>
                                <p className="text-sm">An objective paper (choice-based) testing grammar, vocabulary, and comprehension skills.</p>
                            </div>
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper III: General Knowledge</h3>
                                <p className="font-bold text-sunrise-orange mb-3">100 Marks (Merit)</p>
                                <p className="text-sm">An objective paper covering current affairs, constitution, history, geography, and science.</p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Join FDA/SDA Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FdaSdaPage;