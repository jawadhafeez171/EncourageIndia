import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, PencilAltIcon, CheckCircleIcon } from '../../components/Icons';

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

const KsetPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KEA - Karnataka SET (K-SET)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the K-SET Exam">
                        <div className="flex items-start">
                            <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Karnataka State Eligibility Test (K-SET) is conducted by the Karnataka Examination Authority (KEA) to determine the eligibility of candidates for the post of Assistant Professor in Karnataka's universities, colleges, and other higher educational institutions. Qualifying K-SET is a mandatory requirement for appointment to lectureship positions in the state.</p>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="flex items-start">
                            <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Educational Qualification:</strong> Candidates must have a Master's degree from a recognized university with a minimum of 55% marks (50% for reserved categories).</li>
                                    <li><strong>Appearing Candidates:</strong> Candidates who are in the final year of their Master's degree can also apply.</li>
                                    <li><strong>Subject:</strong> Candidates can only appear for K-SET in the subject of their post-graduation.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern">
                        <p>The K-SET consists of two objective-type papers, conducted in a single session without any break. There is no negative marking.</p>
                         <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper I: General Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">100 Marks</p>
                                <p className="text-sm mb-4">This paper is common for all candidates and assesses teaching and research aptitude.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Reasoning Ability & Comprehension</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Divergent Thinking</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Awareness</span></li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper II: Specific Subject</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <p className="text-sm mb-4">This paper is based on the syllabus of the subject selected by the candidate.</p>
                                 <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>In-depth knowledge of the chosen post-graduation subject.</span></li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Join K-SET Coaching</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KsetPage;