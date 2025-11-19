import React from 'react';
import CTAButton from '../../components/CTAButton';
import { BriefcaseIcon, PencilAltIcon, LightningBoltIcon, CheckCircleIcon } from '../../components/Icons';


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

const KpclPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KEA - KPCL Recruitment" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About KPCL Recruitment">
                        <div className="flex items-start">
                            <LightningBoltIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Karnataka Examination Authority (KEA) conducts recruitment exams for various posts in the Karnataka Power Corporation Limited (KPCL). KPCL is a major state-owned enterprise responsible for power generation in Karnataka. A career in KPCL offers excellent opportunities in the energy sector, for both engineering and administrative professionals.</p>
                        </div>
                    </Section>

                    <Section title="Posts & Eligibility">
                        <div className="flex items-start">
                            <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <p>KPCL recruits for a wide range of positions. Eligibility varies based on the specific role:</p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li><strong>Technical Posts:</strong> Includes Assistant Engineers (AE) and Junior Engineers (JE) in disciplines like Mechanical, Electrical, Civil, and Instrumentation. Requires a relevant Diploma or B.E./B.Tech degree.</li>
                                    <li><strong>Non-Technical Posts:</strong> Includes administrative, finance, and support staff. Requires qualifications ranging from a Bachelor's degree to specialized degrees like MBA or CA.</li>
                                    <li><strong>Age Limit:</strong> Varies by post, but generally falls within the 18 to 35 years bracket, with relaxations for reserved categories.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="General Exam Pattern">
                        <p>While the specific pattern may vary by notification, the selection process for most KPCL posts via KEA involves a competitive objective (MCQ) written test.</p>
                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-soft-gray/50 rounded-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">For Technical Posts</h3>
                                <p className="text-sm mb-4">The test focuses primarily on the specific engineering discipline.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Core Engineering Subjects</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Awareness & Aptitude</span></li>
                                </ul>
                            </div>
                             <div className="p-6 bg-soft-gray/50 rounded-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">For Non-Technical Posts</h3>
                                <p className="text-sm mb-4">The test covers a broad range of general subjects.</p>
                                 <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General English & Kannada</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Knowledge</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Quantitative Aptitude & Reasoning</span></li>
                                </ul>
                            </div>
                        </div>
                         <p className="mt-6 text-center font-semibold">A mandatory Kannada Language Test may be required for some candidates.</p>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Prepare for KPCL Exams</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KpclPage;