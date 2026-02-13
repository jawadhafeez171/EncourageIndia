
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { BriefcaseIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, BookOpenIcon, ClockIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
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
            <SEO
                title="Group C Government Exam Coaching | FDA, SDA, PDO & Govt Jobs"
                description="Complete preparation for Karnataka Group C exams including FDA, SDA, PDO, RI and other departmental government recruitment exams."
                keywords="Group C exam coaching, FDA coaching, SDA coaching, PDO exam coaching, Karnataka govt jobs coaching"
                omitSiteTitle={true}
                url="https://encourageindiaias.in/courses/group-c"
            />
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
                            <h4 className="font-bold text-xl mb-6 flex items-center">
                                <PencilAltIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                Written Examination (Objective)
                            </h4>
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
                                    <div className="flex items-start">
                                        <div className="bg-sunrise-orange text-white p-2 rounded-lg mr-4 mt-1"><BookOpenIcon className="w-5 h-5" /></div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-lg text-empower-blue dark:text-blue-400">Paper 1: Communication Paper</h5>
                                            <p className="text-sm font-medium text-charcoal-gray dark:text-gray-300 mt-1">Consisting of General Kannada, General English, and Computer Knowledge.</p>
                                            <div className="flex flex-wrap gap-4 mt-3">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">100 Marks</span>
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-bold">
                                                    <ClockIcon className="w-3 h-3 mr-1" /> 1.5 Hours
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
                                    <div className="flex items-start">
                                        <div className="bg-sunrise-orange text-white p-2 rounded-lg mr-4 mt-1"><UsersIcon className="w-5 h-5" /></div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-lg text-empower-blue dark:text-blue-400">Paper 2: General Studies</h5>
                                            <p className="text-sm font-medium text-charcoal-gray dark:text-gray-300 mt-1">Current Affairs, Indian Constitution, Mental Ability, and State-specific GK.</p>
                                            <div className="flex flex-wrap gap-4 mt-3">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">100 Marks</span>
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-bold">
                                                    <ClockIcon className="w-3 h-3 mr-1" /> 1.5 Hours
                                                </span>
                                            </div>
                                        </div>
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
