import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, BriefcaseIcon, ClipboardListIcon, PencilAltIcon, UsersIcon, ScaleIcon, ChevronRightIcon } from '../../components/Icons';
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

const JudiciaryPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <SEO
                title="Karnataka Judiciary Exam Coaching | Civil Judge Recruitment Preparation"
                description="Join the best judiciary coaching in Karnataka. Specialized training for Civil Judge recruitment covering LLB subjects, English/Kannada translation, and Viva-Voce."
                url="https://encourageindiaias.in/courses/judiciary"
            />
            <PageHeader title="Karnataka Judiciary Examination" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About the Judiciary Exam">
                        <div className="flex items-start">
                            <ScaleIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Karnataka Judiciary Examination recruits candidates for the post of Civil Judge. This prestigious examination is conducted by the High Court of Karnataka to select competent individuals for the state's subordinate judiciary. A career as a Civil Judge is one of great responsibility, offering the power to interpret laws, deliver justice, and uphold the constitutional framework of the country.</p>
                        </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Must be a holder of a degree in Law (LLB) granted by a recognized University.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>Must not have completed 35 years of age (40 years for SC/ST). Age relaxations may apply as per rules.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Practice</h4>
                                    <p>Candidates must be practicing as an Advocate in the High Court or a Subordinate Court on the last date fixed for receipt of applications.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern (Three Stages)">
                        <p>The selection process is a comprehensive three-stage examination to rigorously test legal acumen and personal suitability.</p>
                        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Preliminary Exam</h3>
                                <p className="text-sm">An objective screening test covering law subjects and general knowledge.</p>
                            </div>

                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />

                            {/* Stage 2 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Main Exam</h3>
                                <p className="text-sm">A descriptive exam with papers on translation, law, and judgment writing.</p>
                            </div>

                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />

                            {/* Stage 3 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Viva-Voce</h3>
                                <p className="text-sm">The final interview to assess the candidate's character and legal knowledge.</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                            <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2" />Preliminary Examination (Objective - 100 Marks)</h3>
                                    <p>This is a screening test to shortlist candidates for the Main Examination. It covers various law subjects and general knowledge.</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                        <li>Part A: Code of Civil Procedure, Negotiable Instruments Act, etc.</li>
                                        <li>Part B: Code of Criminal Procedure, Indian Penal Code, Indian Evidence Act.</li>
                                        <li>Part C: General Knowledge, reasoning and mental ability.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2" />Main Examination (Descriptive)</h3>
                                    <p>This stage consists of written papers to test the candidate's in-depth legal knowledge and writing skills.</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                        <li><strong>Translation Paper:</strong> Translation of legal passages from English to Kannada and vice versa.</li>
                                        <li><strong>Law Paper I & II:</strong> Covering civil and criminal laws in detail.</li>
                                        <li><strong>Law Paper III:</strong> Focused on specific legal issues and judgment writing.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><UsersIcon className="w-5 h-5 mr-2" />Viva-Voce (Interview)</h3>
                                    <p>The final stage is the interview, where candidates are assessed on their legal knowledge, communication skills, character, and overall suitability for the judicial post.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Join Judiciary Foundation Course</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JudiciaryPage;