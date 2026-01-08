import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, ShieldCheckIcon, PencilAltIcon, CheckCircleIcon, UsersIcon, ScaleIcon, BookOpenIcon } from '../../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-gradient-to-br from-empower-blue to-indigo-900 py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight">{title}</h1>
            <p className="text-xl mt-4 text-blue-100 font-medium">Joining the Reserve Bank of India - The Apex Regulator.</p>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <div className="mb-12">
        <h2 className="text-3xl font-black font-montserrat text-empower-blue dark:text-blue-400 mb-6 border-l-4 border-sunrise-orange pl-4 uppercase tracking-tighter">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const RbiExamPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="RBI Grade B / Assistant" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="The Gold Standard of Banking">
                        <p className="text-lg leading-relaxed">
                            Reserve Bank of India (RBI) Grade B is considered the most prestigious recruitment in the Indian banking sector. It demands a sophisticated understanding of Economic and Social Issues (ESI) and Finance & Management (FM).
                        </p>
                    </Section>

                    <Section title="Grade B Phase II Syllabus">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                    <ScaleIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                    Economic & Social Issues
                                </h4>
                                <ul className="text-sm space-y-2">
                                    <li>• Growth & Development</li>
                                    <li>• Indian Economy & Reforms</li>
                                    <li>• Social Structure in India</li>
                                    <li>• Global Financial Institutions</li>
                                </ul>
                            </div>
                            <div className="bg-soft-gray/30 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                    <UsersIcon className="w-6 h-6 mr-2 text-sunrise-orange" />
                                    Finance & Management
                                </h4>
                                <ul className="text-sm space-y-2">
                                    <li>• Financial System & Markets</li>
                                    <li>• Risk Management in Banking</li>
                                    <li>• Management Theories & HRD</li>
                                    <li>• Ethics & Corporate Governance</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Course Features">
                        <div className="space-y-4">
                            {[
                                "Expert analysis of RBI Bulletin & Annual Reports",
                                "Intensive writing practice for Phase II descriptive papers",
                                "Special focus on General Awareness for Phase I",
                                "Interview guidance by former banking executives"
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center space-x-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="font-bold text-charcoal-gray dark:text-gray-200">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-gradient-to-br from-empower-blue to-blue-900 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <AcademicCapIcon className="w-48 h-48" />
                        </div>
                        <h3 className="text-3xl font-black mb-6">Master the RBI Grade B Curriculum</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
                            Join our specialized niche batch for Grade B aspirants. Comprehensive coverage of ESI, FM and the Descriptive English paper.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all">
                            Enroll in RBI Program
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RbiExamPage;