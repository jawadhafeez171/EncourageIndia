
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { ScaleIcon, BriefcaseIcon, CheckCircleIcon, DocumentTextIcon, UsersIcon } from '../../components/Icons';

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

const AibePage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="AIBE Preparation Batch" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About AIBE">
                        <div className="flex items-start">
                            <ScaleIcon className="w-12 h-12 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p className="text-lg">The All India Bar Examination (AIBE) is conducted by the Bar Council of India to assess a legal professional's capability to practice law in India. Clearing the AIBE is mandatory for law graduates to obtain the Certificate of Practice (CoP). Our crash course is designed to help advocates clear this hurdle with ease.</p>
                        </div>
                    </Section>

                    <Section title="Course Features">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-6 rounded-xl border-l-4 border-empower-blue">
                                <h3 className="font-bold mb-2">Bare Act Proficiency</h3>
                                <p className="text-sm">Since AIBE is an open-book exam (for Bare Acts), we train you to navigate complex acts quickly during the test.</p>
                            </div>
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-6 rounded-xl border-l-4 border-sunrise-orange">
                                <h3 className="font-bold mb-2">Key Subject Focus</h3>
                                <p className="text-sm">Intensive coverage of Constitutional Law, IPC, CrPC, CPC, and Evidence Act which carry the highest marks.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Syllabus & Weightage">
                         <div className="overflow-x-auto">
                            <table className="min-w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <thead className="bg-gray-100 dark:bg-slate-700">
                                    <tr>
                                        <th className="py-2 px-4 border-b text-left">Major Subjects</th>
                                        <th className="py-2 px-4 border-b text-center">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="py-2 px-4 border-b">Constitutional Law</td><td className="py-2 px-4 border-b text-center">10</td></tr>
                                    <tr><td className="py-2 px-4 border-b">IPC, CPC, CrPC</td><td className="py-2 px-4 border-b text-center">28 (Combined)</td></tr>
                                    <tr><td className="py-2 px-4 border-b">Family Law</td><td className="py-2 px-4 border-b text-center">8</td></tr>
                                    <tr><td className="py-2 px-4 border-b">Torts & Cyber Law</td><td className="py-2 px-4 border-b text-center">7</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section title="Why Choose Our AIBE Batch?">
                         <ul className="space-y-3">
                            <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />Comprehensive Bare Act materials provided.</li>
                            <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />Focus on previous year paper trends.</li>
                            <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />Weekend batches for working advocates.</li>
                        </ul>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12">Enroll in AIBE Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AibePage;
