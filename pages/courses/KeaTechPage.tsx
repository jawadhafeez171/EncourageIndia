import React from 'react';
import CTAButton from '../../components/CTAButton';
import { CogIcon, BriefcaseIcon, PencilAltIcon, CheckCircleIcon } from '../../components/Icons';


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

const KeaTechPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KEA - Technical Examinations" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About KEA Technical Exams">
                        <div className="flex items-start">
                            <CogIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Karnataka Examination Authority (KEA) is entrusted with conducting recruitment examinations for various technical posts in different government departments, public sector undertakings, and autonomous bodies. These exams provide opportunities for candidates with technical qualifications like Diplomas and Engineering degrees to secure stable government jobs.</p>
                        </div>
                    </Section>

                    <Section title="Common Posts & Eligibility">
                        <div className="flex items-start">
                            <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <p>KEA conducts recruitment for a wide array of technical roles, including but not limited to:</p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li>Junior Engineer (JE) in various departments.</li>
                                    <li>Assistant Engineer (AE) in corporations like KPTCL, ESCOMs, etc.</li>
                                    <li>Technical Assistants, Draughtsman, and other specialized roles.</li>
                                    <li><strong>Eligibility:</strong> Requires a Diploma or a B.E./B.Tech degree in the relevant engineering stream (Civil, Electrical, Mechanical, Computer Science, etc.) from a recognized institution.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="General Exam Pattern">
                        <p>The exam pattern for KEA technical exams is typically an objective (MCQ) based written test. Selection is often based purely on the marks from this test.</p>
                        <div className="mt-8 p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Written Examination</h3>
                                <p className="text-sm mb-4">The test usually comprises two main components, either as separate papers or sections within a single paper.</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg mb-2">Technical Syllabus</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>The major portion covers core subjects of the specific technical discipline.</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg mb-2">General Ability</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Knowledge & Current Affairs</span></li>
                                            <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General English</span></li>
                                             <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Aptitude & Reasoning</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         <p className="mt-6 text-center font-semibold">A compulsory Kannada Language test may also be part of the process for some candidates.</p>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Explore Technical Courses</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeaTechPage;