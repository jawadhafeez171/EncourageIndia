
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
            <PageHeader title="PSI / ESI Examination" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the PSI/ESI Exam">
                        <p>The Police Sub-Inspector (PSI) and Excise Sub-Inspector (ESI) examinations are conducted by their respective recruitment boards in Karnataka. These exams recruit capable and dynamic individuals for leadership roles in law enforcement and regulatory enforcement. A career as a PSI or ESI offers a chance to uphold law and order and ensure state safety and compliance.</p>
                    </Section>

                    <Section title="Selection Process">
                        <p>The selection process for Sub-Inspectors is a multi-stage process designed to test both physical fitness and mental aptitude.</p>
                        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Physical Test (PST/ET)</h3>
                                <p className="text-sm">Mandatory qualification in physical standards and endurance events.</p>
                            </div>
                            
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                            
                            {/* Stage 2 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Written Exam</h3>
                                <p className="text-sm">Two papers: Paper 1 (Descriptive) and Paper 2 (Objective MCQs).</p>
                            </div>

                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />

                            {/* Stage 3 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Medical & Viva</h3>
                                <p className="text-sm">Health check-up and personality assessment.</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                            <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2"/>Paper 1: Descriptive Skills</h3>
                                    <p>Includes Essay Writing, Translation (Kannada to English and vice-versa), and Precis writing. This paper tests communication and analytical depth.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Paper 2: General Knowledge</h3>
                                    <p>Covers Current Affairs, Indian Constitution, History, Geography, and Mental Ability. This objective paper is the primary merit decider.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Start PSI/ESI Preparation</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PsiPage;
