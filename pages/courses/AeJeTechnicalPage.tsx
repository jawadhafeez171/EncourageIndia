
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { CogIcon, BriefcaseIcon, PencilAltIcon, CheckCircleIcon, BookOpenIcon, LightningBoltIcon, ShieldCheckIcon, UsersIcon, ClipboardListIcon } from '../../components/Icons';
import SEO from '../../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
    <div className={`mb-12 ${className}`}>
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const AeJeTechnicalPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="Technical & Engineering Government Exam Coaching | AE, JE & Technical Posts"
                description="Coaching for AE, JE, Technical Assistant, and Engineering Government Exams in Karnataka including departmental and technical recruitment exams."
                keywords="AE exam coaching, JE exam coaching, engineering government exams Karnataka, technical assistant coaching, diploma engineer govt jobs coaching"
                omitSiteTitle={true}
                url="https://encourageindiaias.in/courses/ae-je-technical"
            />
            <PageHeader title="AEE/AE/JE (Technical) Exam Hub" />

            <div className="py-20">
                <div className="container mx-auto px-8 max-w-7xl">

                    {/* Introduction */}
                    <Section title="Technical Excellence in Public Service">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1">
                                <p className="text-lg leading-relaxed mb-6">
                                    Engineering graduates and diploma holders play a vital role in building the backbone of Karnataka's infrastructure. Whether it's power generation, irrigation, or urban planning, the state offers prestigious opportunities for technical minds through exams like <strong>KPSC AEE/AE</strong>, <strong>KEA Technical</strong>, and <strong>KPCL AE/JE</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    At Encourage India, our dedicated Technical Batch provides an integrated approach to master both the <strong>Domain Subjects (Civil, Mech, Elec, etc.)</strong> and the <strong>General Studies</strong> paper, ensuring you don't just qualify, but secure a top rank.
                                </p>
                            </div>
                            <div className="flex-1">
                                <img src="https://picsum.photos/seed/engineering/600/400" alt="Engineering Excellence" className="rounded-xl shadow-2xl border-4 border-soft-gray" />
                            </div>
                        </div>
                    </Section>

                    {/* Major Technical Exams */}
                    <Section title="Major Technical Recruitments in Karnataka">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-empower-blue transition-all group">
                                <div className="bg-empower-blue/10 dark:bg-blue-900/30 p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
                                    <CogIcon className="w-8 h-8 text-empower-blue dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold font-montserrat text-charcoal-gray dark:text-white mb-4">KPSC AEE/AE</h3>
                                <p className="text-sm mb-6">Recruitment for PWD, Water Resources (WRD), and RDPR departments. Highly prestigious Group-B roles.</p>
                                <CTAButton to="/courses/kpsc-tech" variant="secondary-blue" className="w-full text-sm">Exam Details</CTAButton>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-sunrise-orange transition-all group">
                                <div className="bg-sunrise-orange/10 p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
                                    <LightningBoltIcon className="w-8 h-8 text-sunrise-orange" />
                                </div>
                                <h3 className="text-xl font-bold font-montserrat text-charcoal-gray dark:text-white mb-4">KPCL AE/JE</h3>
                                <p className="text-sm mb-6">Karnataka Power Corporation Ltd recruitment for power generation projects. Excellent for Electrical & Mech engineers.</p>
                                <CTAButton to="/courses/kpcl" variant="secondary-blue" className="w-full text-sm border-sunrise-orange text-sunrise-orange hover:bg-sunrise-orange">Exam Details</CTAButton>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-encourage-red transition-all group">
                                <div className="bg-encourage-red/10 p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
                                    <BriefcaseIcon className="w-8 h-8 text-encourage-red" />
                                </div>
                                <h3 className="text-xl font-bold font-montserrat text-charcoal-gray dark:text-white mb-4">KEA Technical</h3>
                                <p className="text-sm mb-6">Recruitments for various Boards, Corporations, and Municipal bodies conducted by KEA.</p>
                                <CTAButton to="/courses/kea-tech" variant="secondary-blue" className="w-full text-sm border-encourage-red text-encourage-red hover:bg-encourage-red">Exam Details</CTAButton>
                            </div>
                        </div>
                    </Section>

                    {/* Integrated Coaching Features */}
                    <Section title="Why Join Our Technical Foundation Batch?">
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
                            <div className="flex items-start">
                                <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-charcoal-gray dark:text-white mb-1">Dual-Paper Preparation</h4>
                                    <p className="text-sm">We provide equal emphasis on Technical Subjects (Paper 2) and General Studies (Paper 1).</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <UsersIcon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-charcoal-gray dark:text-white mb-1">Expert Engineering Faculty</h4>
                                    <p className="text-sm">Learn from faculty members who are alumni of top technical institutions with years of teaching experience.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <ClipboardListIcon className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-charcoal-gray dark:text-white mb-1">Mock Test Series</h4>
                                    <p className="text-sm">Rigorous subject-wise and full-length mock tests to simulate the real exam environment.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-purple-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <BookOpenIcon className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-charcoal-gray dark:text-white mb-1">Updated Material</h4>
                                    <p className="text-sm">Consolidated notes covering core engineering concepts and the latest current affairs for GS.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Final CTA */}
                    <div className="mt-20 bg-gradient-to-br from-slate-900 to-empower-blue p-10 md:p-16 rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <CogIcon className="w-48 h-48 animate-spin-slow" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat mb-6 relative z-10">
                            Ready to Engineer <br /> Your Career?
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
                            Join the most trusted coaching academy in Karnataka for technical aspirants. Batch starts soon!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <CTAButton requiresAuth variant="primary" className="text-lg px-10">Join Technical Batch</CTAButton>
                            <CTAButton to="/contact" variant="secondary" className="text-lg px-10">Speak with an Expert</CTAButton>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default AeJeTechnicalPage;
