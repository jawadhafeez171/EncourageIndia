import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, PencilAltIcon, CheckCircleIcon } from '../../components/Icons';

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

const AgricultureOfficerPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KPSC - Agriculture Officer (AO/AAO)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the AO/AAO Exam">
                        <p>The Karnataka Public Service Commission (KPSC) recruits Agriculture Officers (AO) and Assistant Agriculture Officers (AAO) for the State Department of Agriculture. These roles are pivotal in implementing government agricultural policies, guiding farmers on modern farming techniques, and contributing to the overall agricultural development of Karnataka. It's an ideal career for agriculture graduates passionate about public service and rural development.</p>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Candidates must possess a Bachelor's degree in Agriculture (B.Sc. Agriculture) from a recognized university.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>The typical age limit is between 18 to 35 years, with standard age relaxations for reserved categories as per KPSC norms.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern & Selection Process">
                        <p>The selection process for AO/AAO is based on a competitive written examination. There is typically no interview for these posts, with selection being based on the marks obtained in the written test.</p>
                         <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper I: General Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">100 Marks</p>
                                <p className="text-sm">An objective (MCQ) paper covering general knowledge, current affairs, general science, geography, social sciences, Indian history, and mental ability.</p>
                            </div>
                             <div className="p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Paper II: Specific Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <p className="text-sm">An objective (MCQ) paper focusing on the core subjects of Agriculture, based on the B.Sc. (Agri) syllabus.</p>
                            </div>
                        </div>
                        <p className="mt-6 text-center font-semibold">A Compulsory Kannada Language exam is also a part of the selection process.</p>
                    </Section>

                    <Section title="Syllabus Overview for Specific Paper">
                        <p>The specific paper on Agriculture covers a wide range of topics from the degree-level syllabus. Key areas of focus include:</p>
                        <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                            <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Agronomy and Soil Science</span></div>
                            <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Horticulture and Sericulture</span></div>
                            <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Plant Pathology and Entomology</span></div>
                            <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Agricultural Economics and Marketing</span></div>
                            <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Genetics and Plant Breeding</span></div>
                             <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Agricultural Extension and Rural Development</span></div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Enroll in AO/AAO Program</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgricultureOfficerPage;