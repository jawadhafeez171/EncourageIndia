import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, PencilAltIcon, CheckCircleIcon, BookOpenIcon } from '../../components/Icons';
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
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const KsetPage: React.FC = () => {
    const paper2Subjects = [
        "Commerce",
        "Management",
        "History",
        "Life Science",
        "Political Science",
        "Economics",
        "Mathematics",
        "Kannada",
        "English",
        "Chemical Supervisor",
        "Computer Science"
    ];

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="KSET Exam Coaching | Karnataka State Eligibility Test Prep"
                description="Top-rated coaching for K-SET Assistant Professor eligibility. Comprehensive preparation for Paper I (Aptitude) and major Paper II subjects with expert mentors."
                url="https://encourageindiaias.in/courses/kset"
            />
            <PageHeader title="KEA - Karnataka SET (K-SET)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title="About the K-SET Exam">
                        <div className="flex items-start">
                            <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Karnataka State Eligibility Test (K-SET) is conducted by the Karnataka Examination Authority (KEA) to determine the eligibility of candidates for the post of Assistant Professor in Karnataka's universities, colleges, and other higher educational institutions. Qualifying K-SET is a mandatory requirement for appointment to lectureship positions in the state.</p>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="flex items-start">
                            <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Educational Qualification:</strong> Candidates must have a Master's degree from a recognized university with a minimum of 55% marks (50% for reserved categories).</li>
                                    <li><strong>Appearing Candidates:</strong> Candidates who are in the final year of their Master's degree can also apply.</li>
                                    <li><strong>Subject:</strong> Candidates can only appear for K-SET in the subject of their post-graduation.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern">
                        <p>The K-SET consists of two objective-type papers, conducted in a single session without any break. There is no negative marking.</p>
                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Paper I: General Paper</h3>
                                <p className="font-bold text-sunrise-orange mb-3">100 Marks</p>
                                <p className="text-sm mb-4">This paper is common for all candidates and assesses teaching and research aptitude.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Reasoning Ability & Comprehension</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Divergent Thinking</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Awareness</span></li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Paper II: Specific Subject</h3>
                                <p className="font-bold text-sunrise-orange mb-3">200 Marks</p>
                                <p className="text-sm mb-4">This paper is based on the syllabus of the subject selected by the candidate.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>In-depth knowledge of the chosen post-graduation subject.</span></li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Subjects Offered for Paper II">
                        <div className="bg-soft-gray/30 dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-6">
                                <BookOpenIcon className="w-8 h-8 text-sunrise-orange mr-3" />
                                <h3 className="text-xl font-bold font-montserrat text-empower-blue dark:text-blue-400">Specialized Subject Modules</h3>
                            </div>
                            <p className="mb-8 text-sm opacity-80">We provide high-quality study material, expert-led classes, and comprehensive test series for the following Paper II subjects:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {paper2Subjects.map((subject, index) => (
                                    <div key={index} className="flex items-center p-4 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 hover:border-sunrise-orange transition-all group">
                                        <div className="bg-green-50 dark:bg-green-900/20 p-1.5 rounded-lg mr-3 group-hover:bg-sunrise-orange/10 transition-colors">
                                            <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-sunrise-orange transition-colors" />
                                        </div>
                                        <span className="font-bold text-charcoal-gray dark:text-gray-200">{subject}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-gradient-to-br from-empower-blue to-blue-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <BookOpenIcon className="w-48 h-48" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold font-montserrat mb-4 relative z-10">Ready to Qualify for Assistant Professorship?</h3>
                        <p className="mb-8 opacity-90 max-w-2xl mx-auto relative z-10">Join our specialized K-SET coaching batches for 2026-27. We provide comprehensive Paper I training and expert domain guidance for the major subjects listed above.</p>
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12 bg-white !text-empower-blue hover:bg-soft-gray border-none shadow-lg transform hover:-translate-y-1 transition-all relative z-10">
                            Enroll in K-SET Coaching
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KsetPage;