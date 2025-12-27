
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { BriefcaseIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, BookOpenIcon } from '../../components/Icons';

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

const GroupCPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="KPSC Group C (FDA / SDA / PDO)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="Foundation for Public Service">
                        <p className="text-lg">Group C posts represent the administrative backbone of the Karnataka government. Exams for First Division Assistant (FDA), Second Division Assistant (SDA), and Panchayat Development Officer (PDO) are highly competitive, requiring a robust grasp of General Knowledge and local language proficiency.</p>
                    </Section>

                    <Section title="Major Recruitments Covered">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 border rounded-xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 shadow-sm">
                                <h3 className="font-bold text-empower-blue mb-2">FDA</h3>
                                <p className="text-xs">Degree-level recruitment for administrative assistant roles across all departments.</p>
                            </div>
                            <div className="p-6 border rounded-xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 shadow-sm">
                                <h3 className="font-bold text-empower-blue mb-2">SDA</h3>
                                <p className="text-xs">PUC/12th-level recruitment for entry-level administrative positions.</p>
                            </div>
                            <div className="p-6 border rounded-xl border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 shadow-sm">
                                <h3 className="font-bold text-empower-blue mb-2">PDO</h3>
                                <p className="text-xs">Rural development focused roles within the RDPR department.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Common Selection Pattern">
                        <div className="bg-soft-gray/30 dark:bg-slate-800 p-8 rounded-2xl">
                            <h4 className="font-bold text-xl mb-4">Written Examination (Objective)</h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-sunrise-orange text-white p-2 rounded-lg mr-4 mt-1"><BookOpenIcon className="w-5 h-5" /></div>
                                    <div>
                                        <h5 className="font-bold">Paper 1: General Kannada / General English</h5>
                                        <p className="text-sm">Grammar, vocabulary, and linguistic ability (100 marks).</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-sunrise-orange text-white p-2 rounded-lg mr-4 mt-1"><UsersIcon className="w-5 h-5" /></div>
                                    <div>
                                        <h5 className="font-bold">Paper 2: General Knowledge</h5>
                                        <p className="text-sm">Current Affairs, Indian Constitution, Mental Ability, and State GK (100 marks).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12">Enroll in Group C Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCPage;
