
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ScaleIcon, BriefcaseIcon, PencilAltIcon, UsersIcon, CheckCircleIcon } from '../../components/Icons';

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

const DistrictJudgePage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="District Judge (HJS) Coaching" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="Higher Judicial Services (HJS)">
                        <div className="flex items-start">
                            <ScaleIcon className="w-12 h-12 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p className="text-lg">The recruitment for the post of District Judge is conducted for direct recruitment from the Bar. It is a highly prestigious role that requires not just legal knowledge, but mature judicial temperament and extensive practice experience.</p>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-full mr-4"><CheckCircleIcon className="w-5 h-5 text-blue-600" /></div>
                                <div>
                                    <h4 className="font-bold">Practice Requirement</h4>
                                    <p className="text-sm">Must be a practicing Advocate for a continuous period of not less than seven years.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-full mr-4"><CheckCircleIcon className="w-5 h-5 text-blue-600" /></div>
                                <div>
                                    <h4 className="font-bold">Age Limit</h4>
                                    <p className="text-sm">Minimum 35 years and Maximum 45 years (relaxable by 3 years for SC/ST/OBC).</p>
                                </div>
                            </li>
                        </ul>
                    </Section>

                    <Section title="Selection Framework">
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                                <div className="bg-empower-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                                <h4 className="font-bold mb-2">Prelims</h4>
                                <p className="text-xs">Objective test on Law subjects and Aptitude.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                                <div className="bg-empower-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                                <h4 className="font-bold mb-2">Mains</h4>
                                <p className="text-xs">Descriptive papers on Civil and Criminal law.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                                <div className="bg-empower-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                                <h4 className="font-bold mb-2">Viva</h4>
                                <p className="text-xs">Personal interview for suitability assessment.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Specialized Batch Highlights">
                        <p>Our District Judge batch is tailored for busy advocates:</p>
                        <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                            <li>Focus on Landmark Judgments and Constitutional Developments.</li>
                            <li>Advanced Judgment Writing and Framing of Issues/Charges.</li>
                            <li>Evening and Weekend batches to accommodate court practice.</li>
                            <li>Personalized feedback on descriptive answers.</li>
                        </ul>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12">Apply for HJS Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DistrictJudgePage;
