import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ShieldCheckIcon, PencilAltIcon, UsersIcon, ChevronRightIcon } from '../../components/Icons';

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

const PsiPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Police Sub-Inspector (PSI) Exam" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the PSI Exam">
                        <p>The Police Sub-Inspector (PSI) examination is conducted by the Karnataka State Police (KSP) recruitment board. It is a highly competitive exam for recruiting capable and dynamic individuals into the police force. A career as a PSI is challenging yet rewarding, offering a chance to uphold law and order and ensure the safety of citizens.</p>
                    </Section>

                    <Section title="Selection Process">
                        <p>The selection process for PSI is a multi-stage process designed to test both physical fitness and mental aptitude.</p>
                        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Physical Test (PST/ET)</h3>
                                <p className="text-sm">Candidates must qualify in physical standards and endurance events.</p>
                            </div>
                            
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                            
                            {/* Stage 2 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Written Exam</h3>
                                <p className="text-sm">A descriptive and an objective paper to test language and general knowledge.</p>
                            </div>

                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />

                            {/* Stage 3 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Medical & Viva-Voce</h3>
                                <p className="text-sm">Final check-up and a personality interview to assess overall suitability.</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                            <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2"/>Physical Standard & Endurance Test (PST/ET)</h3>
                                    <p>Candidates must first qualify in the physical tests, which include height, weight, and chest measurements, followed by endurance events like running and long/high jump.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Written Examination</h3>
                                    <p>Candidates who clear the physical tests are eligible for the written exam, which consists of two papers:</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                        <li><strong>Paper I (Descriptive):</strong> This paper tests language skills and includes an Essay, Translation (English to Kannada & vice-versa), and Precis Writing. It is qualifying in nature.</li>
                                        <li><strong>Paper II (Objective - MCQs):</strong> This paper covers General Studies, Current Affairs, and General Mental Ability. The marks from this paper are considered for the final merit list.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><UsersIcon className="w-5 h-5 mr-2"/>Medical Examination & Viva-Voce</h3>
                                    <p>The final stages include a thorough medical check-up and an interview (viva-voce) to assess the candidate's overall personality and suitability for a career in the police force.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Syllabus Focus">
                        <p>The syllabus requires a strong focus on current events, Indian history and geography, the Indian Constitution, mental ability and logical reasoning, and proficiency in both English and Kannada for the descriptive paper. Our coaching program is designed to cover all these aspects comprehensively.</p>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Start PSI Preparation</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PsiPage;