import React, { useState } from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, ClipboardListIcon, ChevronRightIcon, BookOpenIcon, DownloadIcon, ChevronDownIcon } from '../../components/Icons';
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

const mainsSyllabus = {
    paper5: {
        title: "Paper V – Financial Accounting, Management and Analysis",
        sections: [
            {
                title: "A) Accounting Theory and Practice",
                topics: ["Definition of Accounting", "Structure of Accounting Theory", "Human Resources Accounting", "Accounting for Price Level Changes", "Contemporary Issues in Accounting"]
            },
            {
                title: "B) Financial Management and Analysis",
                topics: ["Capital Cost", "Capital Structure Hypothesis", "Working Capital Management", "Financial Management of MNCs", "Mergers and Acquisitions"]
            },
            {
                title: "C) Personal Financial Planning",
                topics: ["Financial Planning Process", "Savings Plans", "Investment Plans", "Retirement Plans", "Protecting Against Life Financial Risks"]
            },
            {
                title: "D) Advanced Management Accounting",
                topics: ["Operations Research", "Duality and Dual Simplex Method", "Integer Programming", "Non-Linear Programming", "Transportation Models", "Marginal Costing and Decision Making", "Contribution Concepts", "Direct Costing", "Value Analysis and Value Engineering", "Reporting to Management"]
            },
            {
                title: "E) Financial Strategies",
                topics: ["Introduction to Financial Strategies", "Financial Policies and Strategies", "Firm Environment, Government, Strategy, Operations, and Financial Structure", "Private Equity and Venture Capital", "Initial Public Offerings (IPO)"]
            }
        ]
    },
    paper6: {
        title: "Paper VI – Principles of Management, Organization Behaviour, Training & Development",
        sections: [
            {
                title: "F) Management Concepts and Theories",
                topics: ["Management", "Managerial Planning", "Organizational Theories and Design", "Motivation and Leadership", "Managerial Control", "Types of Management by Approaches"]
            },
            {
                title: "G) Human Resources Management",
                topics: ["Human Resources Management", "HR Planning, Recruitment, and Selection", "Performance Management", "Compensation Planning", "Industrial Relations"]
            },
            {
                title: "H) Training & Development",
                topics: ["Training", "Assessing Training Needs", "Training Delivery", "Training Evaluation", "Training Interventions"]
            },
            {
                title: "I) Organization and Behavior",
                topics: ["Fundamentals of Organization", "Individual Differences", "Learning", "Groups and Group Dynamics", "Stress Management"]
            }
        ]
    },
    paper7: {
        title: "Paper VII – Corporate Finance, Business Economics & Taxation",
        sections: [
            { title: "M) Corporate Finance", topics: ["Goal of the Firm", "Basics of Capital Budgeting", "Cost of Capital", "Capital Structure Theories", "Working Capital Management and Finance"] },
            { title: "N) Business Management", topics: ["Business as a Social System", "Economic Structure of India", "Monetary and Fiscal Systems of India", "Indian Society, Culture, and Politics", "International Business Environment"] },
            { title: "O) Business Law and Practice", topics: ["Laws Pertaining to Regulation of Industries", "Company Law", "Patents and Trademarks Act", "Security Market Laws", "Environmental Protection Act"] },
            { title: "P) Business Economics", topics: ["Macro Economics", "Consumption Function", "Investment Function", "Concepts of Multiplier", "Money and Monetary System", "Economic Growth", "Public Finance", "Balance of Payments", "Foreign Exchange"] },
            { title: "Q) Advanced Business Taxation", topics: ["Indian Tax System", "Taxation in India", "Direct Tax", "Indirect Tax", "State Government Tax", "Corporate Tax Law and Planning", "Computation of Taxable Income", "Computing Tax Liability", "Tax Planning", "Procedure for Assessment"] }
        ]
    },
    paper8: {
        title: "Paper VIII – Auditing, Computer Concepts, E-Commerce & MIS",
        sections: [
            { title: "R) Principles and Practice of Auditing", topics: ["Introduction to Auditing", "Internal Check", "Verification and Valuation", "Audit of Different Organizations", "Audit under Computerized Environment"] },
            { title: "S) Computer Fundamental Concepts", topics: ["Introduction", "Operations Research Problems", "Managerial Accounting Applications", "Project Management Tools", "Stock Analysis"] },
            { title: "T) E-Commerce", topics: ["Introduction to E-Commerce", "Web Server Hardware and Software", "Customer-Centric E-Commerce Applications", "Security in E-Commerce"] },
            { title: "U) Management Information Systems", topics: ["Basic Concepts", "Processing Technology", "Systems Development", "Application Technologies", "Web Publishing"] }
        ]
    }
};

const AcSaadPage: React.FC = () => {
    const [openSyllabus, setOpenSyllabus] = useState<string | null>(null);

    const handleSyllabusToggle = (paper: string) => {
        setOpenSyllabus(openSyllabus === paper ? null : paper);
    };

    const acSaadPrelimsResources = downloadCategories.find(cat => cat.category === 'KPSC AC-SAAD Prelims Resources')?.items || [];
    const acSaadMainsResources = downloadCategories.find(cat => cat.category === 'KPSC AC-SAAD Mains Resources')?.items || [];

    return (
        <div>
            <PageHeader title="KPSC - AC (K-SAAD) Exam" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-7xl lg:flex lg:gap-12">
                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <Section title="About the AC-SAAD Exam">
                            <p>The recruitment for Assistant Controller (AC) in the State Accounts Department (K-SAAD) is a prestigious examination conducted by the KPSC for Group-A posts. This role is vital for the financial administration of the state, involving auditing, accounting, and managing the finances of various government departments.</p>
                        </Section>

                        <Section title="Eligibility Criteria">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                        <p>Candidates must possess a Master's Degree in Commerce (M.Com) OR be a holder of an MBA with a specialization in Finance.</p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Exam Pattern (Two Stages)">
                            <p>The selection process comprises two stages: a Preliminary Examination for screening and a Main Examination for final selection. There is no personality test/interview for this post.</p>
                            <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Preliminary Exam</h3>
                                    <p className="text-sm">Objective-type (MCQ) screening test with two papers.</p>
                                </div>
                                <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Main Exam</h3>
                                    <p className="text-sm">Descriptive written examination for final merit ranking.</p>
                                </div>
                            </div>
                            <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                                <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Prelims Overview</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-soft-gray rounded-lg shadow-md">
                                        <thead className="bg-empower-blue/10">
                                            <tr>
                                                <th className="py-3 px-4 border-b font-semibold text-left">Paper</th>
                                                <th className="py-3 px-4 border-b font-semibold text-left">Subject</th>
                                                <th className="py-3 px-4 border-b font-semibold text-center">Questions</th>
                                                <th className="py-3 px-4 border-b font-semibold text-center">Max Marks</th>
                                                <th className="py-3 px-4 border-b font-semibold text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b">Paper I</td><td className="py-3 px-4 border-b">General Studies</td><td className="py-3 px-4 border-b text-center">100</td><td className="py-3 px-4 border-b text-center">150</td><td className="py-3 px-4 border-b text-center">2 hours</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4">Paper II</td><td className="py-3 px-4">Commerce & Management</td><td className="py-3 px-4 text-center">100</td><td className="py-3 px-4 text-center">300</td><td className="py-3 px-4 text-center">2 hours</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                             <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                                <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Mains Overview</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-soft-gray rounded-lg shadow-md">
                                        <thead className="bg-empower-blue/10">
                                            <tr>
                                                <th className="py-3 px-4 border-b font-semibold text-left">Paper</th>
                                                <th className="py-3 px-4 border-b font-semibold text-left">Subject</th>
                                                <th className="py-3 px-4 border-b font-semibold text-center">Marks</th>
                                                <th className="py-3 px-4 border-b font-semibold text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4 border-b">Paper I</td><td className="py-2 px-4 border-b">Kannada (Qualifying)</td><td className="py-2 px-4 border-b text-center">150</td><td className="py-2 px-4 border-b text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4 border-b">Paper II</td><td className="py-2 px-4 border-b">English (Qualifying)</td><td className="py-2 px-4 border-b text-center">150</td><td className="py-2 px-4 border-b text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 font-bold"><td className="py-2 px-4 border-b text-center" colSpan={4}>Merit Papers</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4 border-b">Paper III & IV</td><td className="py-2 px-4 border-b">General Studies</td><td className="py-2 px-4 border-b text-center">300 each</td><td className="py-2 px-4 border-b text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4 border-b">Paper V</td><td className="py-2 px-4 border-b">Financial Accounting, Management & Analysis</td><td className="py-2 px-4 border-b text-center">300</td><td className="py-2 px-4 border-b text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4 border-b">Paper VI</td><td className="py-2 px-4 border-b">Principles of Management, Organization Behaviour, etc.</td><td className="py-2 px-4 border-b text-center">300</td><td className="py-2 px-4 border-b text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4 border-b">Paper VII</td><td className="py-2 px-4 border-b">Corporate Finance, Business Economics & Taxation</td><td className="py-2 px-4 border-b text-center">300</td><td className="py-2 px-4 border-b text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-2 px-4">Paper VIII</td><td className="py-2 px-4">Auditing, Computer Concepts & e-Commerce, MIS</td><td className="py-2 px-4 text-center">300</td><td className="py-2 px-4 text-center">3 hrs</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Section>

                        <Section title="Syllabus Overview">
                             <div className="space-y-2">
                                {Object.entries(mainsSyllabus).map(([key, paper]) => (
                                    <div key={key} className="border-b border-gray-300">
                                        <button
                                            onClick={() => handleSyllabusToggle(key)}
                                            className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
                                        >
                                            <span className="text-xl font-montserrat font-semibold text-encourage-red">{paper.title}</span>
                                            <ChevronDownIcon className={`w-6 h-6 text-empower-blue transform transition-transform duration-300 ${openSyllabus === key ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSyllabus === key ? 'max-h-full p-4 bg-white' : 'max-h-0'}`}>
                                            {paper.sections.map((section, index) => (
                                                <div key={index} className="mb-4">
                                                    <h4 className="font-bold text-charcoal-gray text-lg mb-2">{section.title}</h4>
                                                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                                                        {section.topics.map((topic, topicIndex) => (
                                                            <li key={topicIndex}>{topic}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </Section>

                        <div className="text-center mt-16">
                            <CTAButton requiresAuth variant="primary" className="text-lg">Join AC-SAAD Course</CTAButton>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-[150px] h-fit mt-12 lg:mt-0">
                        <div className="bg-soft-gray/50 p-6 rounded-lg border border-gray-200">
                            <Section title="AC-SAAD Resources" className="mb-0">
                                <p className="mb-6 text-sm">Download the official pattern and syllabus to kickstart your preparation.</p>
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold font-montserrat text-empower-blue mb-3">Prelims Resources</h3>
                                    <div className="space-y-3">
                                        {acSaadPrelimsResources.map((item, index) => (
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
                                        {acSaadMainsResources.map((item, index) => (
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

export default AcSaadPage;