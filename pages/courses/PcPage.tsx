
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ShieldCheckIcon, PencilAltIcon, ChevronRightIcon } from '../../components/Icons';

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

const PcPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Police Constable (PC) Exam" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the PC Exam">
                        <p>The Police Constable (PC) exam, conducted by the Karnataka State Police (KSP), is the foundational recruitment for the state police force. Constables form the backbone of policing, responsible for maintaining law and order at the grassroots level. This career provides stability, respect, and an opportunity to serve society directly.</p>
                    </Section>

                    <Section title="Selection Process">
                        <p>The selection for the post of Police Constable is a focused process testing physical fitness and basic academic knowledge.</p>
                        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Physical Test (PST/ET)</h3>
                                <p className="text-sm">Candidates must meet physical standards and pass endurance events.</p>
                            </div>
                            
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                            
                            {/* Stage 2 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Written Exam</h3>
                                <p className="text-sm">An objective MCQ test to assess general knowledge and mental ability.</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                            <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2"/>Physical Standard & Endurance Test (PST/ET)</h3>
                                    <p>This is the first stage. Candidates must meet the prescribed physical standards (height, chest) and qualify in endurance events like running, long jump, and shot put. This is a crucial qualifying hurdle.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Written Examination</h3>
                                    <p>Candidates who pass the physical tests will be called for the written examination. It is an objective type (MCQ) test designed to assess general knowledge and mental ability. The exam typically covers:</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                    <li>General Knowledge and Current Affairs</li>
                                    <li>Indian History and Geography</li>
                                    <li>General Science</li>
                                    <li>Arithmetic and Mental Ability</li>
                                    </ul>
                                    <p className="mt-2">The final selection is based on the marks obtained in this written test.</p>
                                </div>
                            </div>
                        </div>
                    </Section>
                    
                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Enroll in PC Foundation Course</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PcPage;
