
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, PencilAltIcon, CheckCircleIcon, BookOpenIcon, ClockIcon } from '../../components/Icons';

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
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const ClatPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="CLAT Entrance Coaching" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About CLAT (UG & PG)">
                        <p className="text-lg">The Common Law Admission Test (CLAT) is a centralized national-level entrance test for admissions to 22 National Law Universities (NLUs) in India. Most private and self-financed law schools in India also use these scores for law admissions. At Encourage India, we offer comprehensive training for both CLAT-UG (for 5-year LLB) and CLAT-PG (for LLM).</p>
                    </Section>

                    <Section title="Exam Highlights">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-6 rounded-xl">
                                <h3 className="font-bold text-empower-blue dark:text-blue-400 mb-3 flex items-center"><ClockIcon className="w-5 h-5 mr-2" />Duration & Mode</h3>
                                <p className="text-sm">2-hour offline (pen-and-paper) examination consisting of objective MCQs.</p>
                            </div>
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-6 rounded-xl">
                                <h3 className="font-bold text-empower-blue dark:text-blue-400 mb-3 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2" />Marking Scheme</h3>
                                <p className="text-sm">1 mark for every correct answer; -0.25 negative marking for every incorrect response.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Syllabus Coverage (UG)">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "English Language (Reading Comprehension)",
                                "Current Affairs including General Knowledge",
                                "Legal Reasoning",
                                "Logical Reasoning",
                                "Quantitative Techniques (Elementary Math)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Our Training Methodology">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <BookOpenIcon className="w-8 h-8 text-sunrise-orange mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-xl">Legal Reasoning Focus</h4>
                                    <p>Developing the ability to apply legal principles to factual situations, even without prior legal knowledge.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-8 h-8 text-sunrise-orange mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-xl">Expert Mock Analysis</h4>
                                    <p>Timed mock tests followed by in-depth analysis to improve speed and accuracy.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12">Enroll in CLAT Program</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClatPage;
