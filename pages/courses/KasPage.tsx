import React from 'react';
import CTAButton from '../../components/CTAButton';
import { BookOpenIcon, DownloadIcon, AcademicCapIcon, CalendarIcon, ChatAlt2Icon, ChevronRightIcon, ClipboardListIcon, PencilAltIcon, UsersIcon } from '../../components/Icons';
import { downloadCategories } from '../../constants';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode; className?: string}> = ({title, children, className=""}) => (
    <div className={`mb-12 ${className}`}>
        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-6 border-l-4 border-sunrise-orange pl-4">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const KasPage: React.FC = () => {
    const kasPrelimsResources = downloadCategories.find(cat => cat.category === 'KPSC KAS Prelims Resources')?.items || [];
    const kasMainsResources = downloadCategories.find(cat => cat.category === 'KPSC KAS Mains Resources')?.items || [];


    return (
        <div>
            <PageHeader title="KPSC - KAS Examination" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-7xl lg:flex lg:gap-12">
                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <Section title="About the KAS Exam">
                            <p>The Karnataka Administrative Service (KAS) exam, conducted by the Karnataka Public Service Commission (KPSC), is a prestigious civil services examination for recruitment to various Group 'A' and Group 'B' posts in the state administration. A career in KAS offers a unique opportunity to contribute to the development of Karnataka and serve its citizens directly.</p>
                        </Section>

                        <Section title="Eligibility Criteria">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                        <p>A candidate must hold a Bachelor's degree or an equivalent qualification from a recognized university.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                        <p>A candidate must have attained the age of 21 years and must not have attained the age of 35 years. Relaxations apply for reserved categories.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <ChatAlt2Icon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Language Proficiency</h4>
                                        <p>Knowledge of Kannada is essential for many posts.</p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Exam Pattern (Three Stages)">
                            <p>The KAS exam is a three-stage process designed to select the most capable candidates for administrative roles.</p>
                            <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Preliminary Exam</h3>
                                    <p className="text-sm">Objective screening test to select candidates for the Main exam.</p>
                                </div>
                                <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Main Exam</h3>
                                    <p className="text-sm">Descriptive exam testing in-depth knowledge and writing skills.</p>
                                </div>
                                <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Personality Test</h3>
                                    <p className="text-sm">The final interview stage to assess suitability for public service.</p>
                                </div>
                            </div>
                            <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                                <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Stage 1: Preliminary Examination (Objective)</h3>
                                        <p>This is a screening test consisting of two objective-type papers. The marks are not counted for the final ranking.</p>
                                        <div className="grid md:grid-cols-2 gap-8 mt-4">
                                            <div className="overflow-x-auto">
                                                <h4 className="font-bold text-center mb-2">Paper 1 (200 Marks)</h4>
                                                <table className="min-w-full bg-white border border-soft-gray rounded-lg"><thead className="bg-empower-blue/10"><tr><th className="py-2 px-3 border-b">Subject</th><th className="py-2 px-3 border-b">Qs</th></tr></thead><tbody><tr><td className="py-2 px-3 border-b">General Studies (National/International)</td><td className="py-2 px-3 border-b text-center">40</td></tr><tr><td className="py-2 px-3">Humanities</td><td className="py-2 px-3 text-center">60</td></tr></tbody></table>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <h4 className="font-bold text-center mb-2">Paper 2 (200 Marks)</h4>
                                                <table className="min-w-full bg-white border border-soft-gray rounded-lg"><thead className="bg-empower-blue/10"><tr><th className="py-2 px-3 border-b">Subject</th><th className="py-2 px-3 border-b">Qs</th></tr></thead><tbody><tr><td className="py-2 px-3 border-b">General Studies (State)</td><td className="py-2 px-3 border-b text-center">40</td></tr><tr><td className="py-2 px-3 border-b">Science & Tech, Environment</td><td className="py-2 px-3 border-b text-center">30</td></tr><tr><td className="py-2 px-3">General Mental Ability</td><td className="py-2 px-3 text-center">30</td></tr></tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Stage 2: Main Examination (Descriptive)</h3>
                                        <p>This is the merit-deciding stage, consisting of descriptive papers that test the depth of knowledge. The final rank is determined by the marks from these papers and the interview.</p>
                                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                            <li><strong>Qualifying Papers:</strong> Kannada and English language papers (descriptive).</li>
                                            <li><strong>Merit Papers:</strong> Essay, and four General Studies papers (GS I, II, III & IV).</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><UsersIcon className="w-5 h-5 mr-2"/>Stage 3: Personality Test (Interview)</h3>
                                        <p>The final stage where a board assesses the candidate's personality, communication skills, and overall suitability for a career in the state administration.</p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Syllabus Overview">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold font-montserrat text-encourage-red mb-4">Prelims Syllabus</h3>
                                    <div className="overflow-x-auto"><table className="min-w-full bg-white border border-soft-gray rounded-lg"><tbody><tr><td className="p-3 border font-bold align-top">Paper 1</td><td className="p-3 border">Covers Current Events (National & International), Humanities (History of India & Karnataka), Geography (World & India with focus on Karnataka), and Indian Polity & Economy.</td></tr><tr><td className="p-3 border font-bold align-top">Paper 2</td><td className="p-3 border">Covers Current Events (State specific), General Science & Technology, Environment & Ecology, and General Mental Ability (Comprehension, Logical Reasoning, Problem Solving).</td></tr></tbody></table></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold font-montserrat text-encourage-red mb-4">Mains Syllabus Structure</h3>
                                    <p>The mains exam covers a wide range of subjects to test a candidate's intellectual depth and understanding.</p>
                                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li><strong>Essay Paper:</strong> Tests the candidate's ability to compose a well-argued piece on a given topic.</li>
                                        <li><strong>General Studies I:</strong> Heritage, Culture, History, and Geography of the World and Society with a focus on Karnataka.</li>
                                        <li><strong>General Studies II:</strong> Governance, Constitution, Polity, Social Justice, and International Relations.</li>
                                        <li><strong>General Studies III:</strong> Technology, Economic Development, Biodiversity, Environment, Security, and Disaster Management.</li>
                                        <li><strong>General Studies IV:</strong> Ethics, Integrity, and Aptitude.</li>
                                    </ul>
                                </div>
                            </div>
                        </Section>
                        
                        <Section title="KPSC KAS Prelims Cutoff Comparison">
                            <p className="mb-4">Analyzing previous year cutoff marks is essential to understand the level of competition and set a target score. Here's a comparison of the KAS Prelims cutoff for recent years.</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-soft-gray rounded-lg shadow-md">
                                    <thead className="bg-empower-blue/10">
                                        <tr>
                                            <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">Category</th>
                                            <th className="py-3 px-4 border-b border-soft-gray font-semibold text-center">2022-23</th>
                                            <th className="py-3 px-4 border-b border-soft-gray font-semibold text-center">2024-25</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">General</td><td className="py-3 px-4 border-b border-soft-gray text-center">183</td><td className="py-3 px-4 border-b border-soft-gray text-center">185</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">SC</td><td className="py-3 px-4 border-b border-soft-gray text-center">153</td><td className="py-3 px-4 border-b border-soft-gray text-center">150</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">ST</td><td className="py-3 px-4 border-b border-soft-gray text-center">161</td><td className="py-3 px-4 border-b border-soft-gray text-center">162</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">C1</td><td className="py-3 px-4 border-b border-soft-gray text-center">166</td><td className="py-3 px-4 border-b border-soft-gray text-center">167</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2A</td><td className="py-3 px-4 border-b border-soft-gray text-center">149</td><td className="py-3 px-4 border-b border-soft-gray text-center">150</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">3A</td><td className="py-3 px-4 border-b border-soft-gray text-center">173</td><td className="py-3 px-4 border-b border-soft-gray text-center">174</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">3B</td><td className="py-3 px-4 border-b border-soft-gray text-center">170</td><td className="py-3 px-4 border-b border-soft-gray text-center">171</td></tr>
                                        <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b-0">2B</td><td className="py-3 px-4 border-b-0 text-center">137</td><td className="py-3 px-4 border-b-0 text-center">135</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>

                        <Section title="KAS Prelims Preparation Strategy">
                            <ul className="list-disc list-inside space-y-3">
                                <li><strong>Understand the Pattern:</strong> Start by thoroughly analyzing the exam pattern, syllabus, and previous years' papers to identify high-yield topics.</li>
                                <li><strong>Resource Selection:</strong> Build a strong foundation with NCERT textbooks (Class 6-12) and supplement with standard books like Laxmikanth for Polity and Spectrum for Modern History. Focus on Kannada resources for state-specific topics.</li>
                                <li><strong>Create a Schedule:</strong> Allocate 6-8 hours daily, dividing time logically between Paper I and Paper II based on your strengths and weaknesses. Set achievable weekly targets.</li>
                                <li><strong>Subject-wise Focus:</strong> For Paper I, emphasize Karnataka's history and geography. For Paper II, focus on practical applications of science, environmental basics, and consistent practice of mental ability questions.</li>
                                <li><strong>Practice & Revision:</strong> Regularly solve mock tests and previous year papers. Analyze mistakes and revise important topics weekly. Create concise notes for quick revision.</li>
                                <li><strong>Current Affairs:</strong> Dedicate at least 45 minutes daily to newspapers like The Hindu and Prajavani. Make notes on Karnataka-specific schemes and developments.</li>
                            </ul>
                        </Section>
                        
                        <div className="text-center mt-16">
                            <CTAButton requiresAuth variant="primary" className="text-lg">Enroll in KAS Program</CTAButton>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-[150px] h-fit mt-12 lg:mt-0">
                        <div className="bg-soft-gray/50 p-6 rounded-lg border border-gray-200">
                             <Section title="KPSC KAS Resources" className="mb-0">
                                <p className="mb-6 text-sm">
                                    To aid your preparation, we have compiled a comprehensive list of essential resources, categorized by exam stage.
                                </p>
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold font-montserrat text-empower-blue mb-3">Prelims Resources</h3>
                                    <div className="space-y-3">
                                        {kasPrelimsResources.map((item, index) => (
                                            <div key={index} className="bg-white p-3 rounded-md shadow-sm border border-soft-gray flex items-center justify-between hover:border-empower-blue transition-colors duration-300">
                                                <div className="flex items-center mr-4 flex-1 min-w-0">
                                                    <BookOpenIcon className="w-6 h-6 text-sunrise-orange mr-3 flex-shrink-0" />
                                                    <h4 className="font-bold font-montserrat text-charcoal-gray text-sm leading-tight truncate">{item.title}</h4>
                                                </div>
                                                <a 
                                                    href={item.fileUrl} 
                                                    download
                                                    aria-label={`Download ${item.title}`}
                                                    className="flex-shrink-0 p-2 rounded-md bg-empower-blue text-white hover:bg-empower-blue/90 transition-colors duration-300"
                                                >
                                                    <DownloadIcon className="w-5 h-5" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-empower-blue mb-3">Mains Resources</h3>
                                    <div className="space-y-3">
                                        {kasMainsResources.map((item, index) => (
                                            <div key={index} className="bg-white p-3 rounded-md shadow-sm border border-soft-gray flex items-center justify-between hover:border-empower-blue transition-colors duration-300">
                                                <div className="flex items-center mr-4 flex-1 min-w-0">
                                                    <BookOpenIcon className="w-6 h-6 text-sunrise-orange mr-3 flex-shrink-0" />
                                                    <h4 className="font-bold font-montserrat text-charcoal-gray text-sm leading-tight truncate">{item.title}</h4>
                                                </div>
                                                <a 
                                                    href={item.fileUrl} 
                                                    download
                                                    aria-label={`Download ${item.title}`}
                                                    className="flex-shrink-0 p-2 rounded-md bg-empower-blue text-white hover:bg-empower-blue/90 transition-colors duration-300"
                                                >
                                                    <DownloadIcon className="w-5 h-5" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Section>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default KasPage;