import React, { useState } from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, ClipboardListIcon, ChevronRightIcon, BookOpenIcon, DownloadIcon, ChevronDownIcon, CheckCircleIcon } from '../../components/Icons';
import { downloadCategories } from '../../constants';

const PageHeader = ({ title }: { title: string }) => (
    <div className="relative bg-gradient-to-br from-empower-blue via-blue-900 to-indigo-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat text-white">{title}</h1>
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
        title: "Paper VI – Management, Org. Behaviour, Marketing, Inventory & Project Management",
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
            },
            {
                title: "J) Marketing Management",
                topics: ["Marketing Environment", "Market Segmentation, Targeting and Positioning", "Marketing Mix (4Ps)", "Consumer Behavior", "Marketing Research and Information Systems"]
            },
            {
                title: "K) Inventory Management & Analysis",
                topics: ["Introduction to Inventory Control", "Inventory Valuation Methods", "Economic Order Quantity (EOQ)", "ABC, VED, and FSN Analysis", "Just-in-Time (JIT) and Material Requirements Planning (MRP)"]
            },
            {
                title: "L) Entrepreneurship Development & Project Management",
                topics: ["Entrepreneurial Development Cycles", "Small and Medium Enterprises (SMEs)", "Project Identification and Formulation", "Network Analysis - PERT and CPM", "Project Appraisal and Financial Analysis"]
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
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
            <PageHeader title="KPSC - AC (K-SAAD) Exam" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-7xl lg:flex lg:gap-12">
                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <Section title="About the AC-SAAD Exam">
                            <p>The recruitment for Assistant Controller (AC) (Group A) and Audit Officer (AO) (Group B) in the State Accounts Department (K-SAAD) is a prestigious examination conducted by the KPSC. This role is vital for the financial administration of the state, involving auditing, accounting, and managing the finances of various government departments.</p>
                        </Section>

                        <Section title="Eligibility Criteria">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray dark:text-white text-xl mb-4">Educational Qualification</h4>
                                        <p className="mb-4 font-medium text-charcoal-gray dark:text-gray-300">As per the official notification, candidates must fulfill one of the following qualifications:</p>
                                        
                                        <div className="grid gap-4">
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-empower-blue shadow-sm">
                                                <h5 className="font-bold text-empower-blue dark:text-blue-400 mb-1">Commerce & Management Masters</h5>
                                                <p className="text-sm dark:text-gray-300">Must be a holder of Master's degree in Commerce (M.Com.) or must be holder of M.B.A (Finance) / M.B.A (Financial Management) / M.B.A. or M.Com (Financial Analysis).</p>
                                            </div>

                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-sunrise-orange shadow-sm">
                                                <h5 className="font-bold text-sunrise-orange mb-1">UGC Recognized Finance Degree</h5>
                                                <p className="text-sm dark:text-gray-300">Any other Master's degree notified by University Grants Commission (UGC) with 'Finance' as one of the subjects from a University established by Law in India.</p>
                                            </div>

                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-encourage-red shadow-sm">
                                                <h5 className="font-bold text-encourage-red mb-1">Professional Memberships</h5>
                                                <p className="text-sm dark:text-gray-300">A member of the Institute of Chartered Accountants of India (ICAI) or an Associate member of the Institute of Cost Accountants of India.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Exam Pattern (Two Stages)">
                            <p>The selection process comprises two stages: a Preliminary Examination for screening and a Main Examination for final selection. There is no personality test/interview for this post.</p>
                            <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                                <div className="flex-1 text-center p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Preliminary Exam</h3>
                                    <p className="text-sm dark:text-gray-400">Objective-type (MCQ) screening test with two papers.</p>
                                </div>
                                <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                                <div className="flex-1 text-center p-6 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-gray-700 rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue dark:text-blue-400 mb-2">Main Exam</h3>
                                    <p className="text-sm dark:text-gray-400">Descriptive written examination for final merit ranking.</p>
                                </div>
                            </div>
                            
                            <div className="mt-8 p-6 bg-soft-gray/50 dark:bg-slate-800/50 rounded-lg">
                                <h4 className="font-bold text-xl font-montserrat text-charcoal-gray dark:text-white mb-4 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Prelims Overview</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white dark:bg-slate-800 border border-soft-gray dark:border-gray-700 rounded-lg shadow-md">
                                        <thead className="bg-empower-blue/10">
                                            <tr>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-left">Paper</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-left">Subject</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-center">Questions</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-center">Max Marks</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="dark:text-gray-300">
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-3 px-4 border-b dark:border-gray-700">Paper I</td><td className="py-3 px-4 border-b dark:border-gray-700">General Studies</td><td className="py-3 px-4 border-b dark:border-gray-700 text-center">100</td><td className="py-3 px-4 border-b dark:border-gray-700 text-center">150</td><td className="py-3 px-4 border-b dark:border-gray-700 text-center">2 hours</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-3 px-4">Paper II</td><td className="py-3 px-4">Commerce & Management</td><td className="py-3 px-4 text-center">100</td><td className="py-3 px-4 text-center">300</td><td className="py-3 px-4 text-center">2 hours</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                             <div className="mt-8 p-6 bg-soft-gray/50 dark:bg-slate-800/50 rounded-lg">
                                <h4 className="font-bold text-xl font-montserrat text-charcoal-gray dark:text-white mb-4 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Mains Overview</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white dark:bg-slate-800 border border-soft-gray dark:border-gray-700 rounded-lg shadow-md">
                                        <thead className="bg-empower-blue/10">
                                            <tr>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-left">Paper</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-left">Subject</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-center">Marks</th>
                                                <th className="py-3 px-4 border-b dark:border-gray-700 font-semibold text-center">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="dark:text-gray-300">
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper I</td><td className="py-2 px-4 border-b dark:border-gray-700">Kannada (Qualifying)</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">150</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper II</td><td className="py-2 px-4 border-b dark:border-gray-700">English (Qualifying)</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">150</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 font-bold bg-gray-50 dark:bg-slate-700"><td className="py-2 px-4 border-b dark:border-gray-600 text-center" colSpan={4}>Merit Papers</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper III</td><td className="py-2 px-4 border-b dark:border-gray-700">General Studies</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">300</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper IV</td><td className="py-2 px-4 border-b dark:border-gray-700">General Studies</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">300</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper V</td><td className="py-2 px-4 border-b dark:border-gray-700">Financial Accounting, Management & Analysis</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">300</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper VI</td><td className="py-2 px-4 border-b dark:border-gray-700">Principles of Management, Organization Behaviour, etc.</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">300</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper VII</td><td className="py-2 px-4 border-b dark:border-gray-700">Corporate Finance, Business Economics & Taxation</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">300</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50"><td className="py-2 px-4 border-b dark:border-gray-700">Paper VIII</td><td className="py-2 px-4 border-b dark:border-gray-700">Auditing, Computer Concepts & e-Commerce, MIS</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">300</td><td className="py-2 px-4 border-b dark:border-gray-700 text-center">3 hrs</td></tr>
                                            <tr className="bg-gray-100 dark:bg-slate-700 font-bold"><td className="py-3 px-4 text-right border-t dark:border-gray-600" colSpan={2}>Total Merit Marks</td><td className="py-3 px-4 text-center border-t dark:border-gray-600">1800</td><td className="py-3 px-4 border-t dark:border-gray-600"></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Section>

                        <Section title="Prelims Syllabus Overview">
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xl font-black font-montserrat text-encourage-red mb-4 uppercase tracking-tight">Paper 1: General Studies</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white dark:bg-slate-800 border border-soft-gray dark:border-gray-700 rounded-lg">
                                            <thead className="bg-empower-blue/10 text-empower-blue dark:text-blue-400">
                                                <tr>
                                                    <th className="py-3 px-4 border-b dark:border-gray-700 text-left w-16 uppercase text-xs font-black">Sl.No.</th>
                                                    <th className="py-3 px-4 border-b dark:border-gray-700 text-left uppercase text-xs font-black">Subjects</th>
                                                </tr>
                                            </thead>
                                            <tbody className="dark:text-gray-300">
                                                {[
                                                    "General Science",
                                                    "Current events of State, National and International importance",
                                                    "History of India",
                                                    "World Geography",
                                                    "Indian Polity and Economics",
                                                    "Indian National Movement and General Mental ability"
                                                ].map((subject, i) => (
                                                    <tr key={i} className="hover:bg-soft-gray/50 dark:hover:bg-slate-700/50">
                                                        <td className="py-2.5 px-4 border-b dark:border-gray-700">{i + 1})</td>
                                                        <td className="py-2.5 px-4 border-b dark:border-gray-700 font-medium">{subject}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-black font-montserrat text-encourage-red mb-4 uppercase tracking-tight">Paper 2: Commerce & Management</h3>
                                    
                                    <div className="mb-8">
                                        <div className="inline-flex items-center px-4 py-1 rounded-full bg-empower-blue/10 text-empower-blue dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                            I. Commerce
                                        </div>
                                        <div className="overflow-x-auto shadow-sm rounded-lg border border-soft-gray dark:border-gray-700">
                                            <table className="min-w-full bg-white dark:bg-slate-800 text-sm">
                                                <thead className="bg-gray-50 dark:bg-slate-700/50">
                                                    <tr>
                                                        <th className="py-3.5 px-4 text-left font-black text-xs text-gray-500 uppercase tracking-wider">Part</th>
                                                        <th className="py-3.5 px-4 text-left font-black text-xs text-gray-500 uppercase tracking-wider">Paper 1 (Accounting & Finance)</th>
                                                        <th className="py-3.5 px-4 text-left font-black text-xs text-gray-500 uppercase tracking-wider">Paper 2 (Org. Theory & Industrial Relations)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700 dark:text-gray-300">
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                                                        <td className="py-4 px-4 font-black text-empower-blue">Part 1</td>
                                                        <td className="py-4 px-4">Accounting, Auditing & Taxation</td>
                                                        <td className="py-4 px-4">Organizational Theory</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                                                        <td className="py-4 px-4 font-black text-empower-blue">Part 2</td>
                                                        <td className="py-4 px-4">Business, Finance & Financial Institutions</td>
                                                        <td className="py-4 px-4">Industrial Relations</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="inline-flex items-center px-4 py-1 rounded-full bg-empower-blue/10 text-empower-blue dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                            II. Management
                                        </div>
                                        <div className="overflow-x-auto shadow-sm rounded-lg border border-soft-gray dark:border-gray-700">
                                            <table className="min-w-full bg-white dark:bg-slate-800 text-sm">
                                                <thead className="bg-gray-50 dark:bg-slate-700/50">
                                                    <tr>
                                                        <th className="py-3.5 px-4 text-left font-black text-xs text-gray-500 uppercase tracking-wider">Section</th>
                                                        <th className="py-3.5 px-4 text-left font-black text-xs text-gray-500 uppercase tracking-wider">Paper 3</th>
                                                        <th className="py-3.5 px-4 text-left font-black text-xs text-gray-500 uppercase tracking-wider">Paper 4</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700 dark:text-gray-300">
                                                    {[
                                                        { s: "Sec-1", p3: "Organisational Behaviour & Management Concepts", p4: "Marketing Management" },
                                                        { s: "Sec-2", p3: "Organisational Design", p4: "Production & Material Management" },
                                                        { s: "Sec-3", p3: "Economic Environment", p4: "Financial Management" },
                                                        { s: "Sec-4", p3: "Quantitative Methods", p4: "Human Resource Management" },
                                                    ].map((item, i) => (
                                                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                                                            <td className="py-4 px-4 font-black text-empower-blue">{item.s}</td>
                                                            <td className="py-4 px-4">{item.p3}</td>
                                                            <td className="py-4 px-4">{item.p4}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Mains Syllabus Overview">
                             <div className="space-y-2">
                                {Object.entries(mainsSyllabus).map(([key, paper]) => (
                                    <div key={key} className="border-b border-gray-300 dark:border-gray-700">
                                        <button
                                            onClick={() => handleSyllabusToggle(key)}
                                            className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none group"
                                        >
                                            <span className="text-xl font-montserrat font-bold text-encourage-red group-hover:opacity-80 transition-opacity">{paper.title}</span>
                                            <ChevronDownIcon className={`w-6 h-6 text-empower-blue dark:text-blue-400 transform transition-transform duration-300 ${openSyllabus === key ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSyllabus === key ? 'max-h-full p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl mb-4' : 'max-h-0'}`}>
                                            {paper.sections.map((section, index) => (
                                                <div key={index} className="mb-6 last:mb-0">
                                                    <h4 className="font-bold text-charcoal-gray dark:text-white text-lg mb-3 flex items-center">
                                                        <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                                                        {section.title}
                                                    </h4>
                                                    <ul className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4 ml-7 text-sm dark:text-gray-300">
                                                        {section.topics.map((topic, topicIndex) => (
                                                            <li key={topicIndex} className="flex items-start">
                                                                <span className="mr-2 text-sunrise-orange">•</span>
                                                                {topic}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </Section>

                        <div className="text-center mt-16 bg-gradient-to-br from-empower-blue to-indigo-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-8 opacity-10">
                                <AcademicCapIcon className="w-48 h-48" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black font-montserrat mb-4 relative z-10">Master AC-SAAD for 2026-27</h3>
                            <p className="mb-8 text-blue-100 max-w-xl mx-auto relative z-10">Join our specialized batch for Commerce & Management graduates. Expert-led training for both Prelims and Mains.</p>
                            <CTAButton requiresAuth variant="primary" className="text-lg px-12 !bg-white !text-empower-blue hover:!bg-blue-50 border-none shadow-xl transform hover:-translate-y-1 transition-all">
                                Join AC-SAAD Course
                            </CTAButton>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-[150px] h-fit mt-12 lg:mt-0">
                        <div className="bg-soft-gray/50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                            <Section title="Study Material" className="mb-0">
                                <p className="mb-6 text-sm dark:text-gray-400 font-medium">Download the official patterns and curated resources to kickstart your preparation.</p>
                                <div className="mb-10">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-empower-blue dark:text-blue-400 mb-4 border-b dark:border-gray-700 pb-2">Prelims Resources</h3>
                                    <div className="space-y-4">
                                        {acSaadPrelimsResources.map((item, index) => (
                                            <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-soft-gray dark:border-gray-700 flex items-center justify-between hover:border-sunrise-orange transition-all duration-300 group">
                                                <div className="flex items-center mr-4 flex-1 min-w-0">
                                                    <BookOpenIcon className="w-6 h-6 text-sunrise-orange mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <h4 className="font-bold font-montserrat text-charcoal-gray dark:text-gray-200 text-xs leading-tight truncate">{item.title}</h4>
                                                </div>
                                                <a 
                                                    href={item.fileUrl} 
                                                    download
                                                    aria-label={`Download ${item.title}`}
                                                    className="flex-shrink-0 p-2.5 rounded-xl bg-empower-blue text-white hover:bg-sunrise-orange transition-colors duration-300 shadow-md active:scale-95"
                                                >
                                                    <DownloadIcon className="w-5 h-5" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-empower-blue dark:text-blue-400 mb-4 border-b dark:border-gray-700 pb-2">Mains Resources</h3>
                                    <div className="space-y-4">
                                        {acSaadMainsResources.map((item, index) => (
                                            <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-soft-gray dark:border-gray-700 flex items-center justify-between hover:border-sunrise-orange transition-all duration-300 group">
                                                <div className="flex items-center mr-4 flex-1 min-w-0">
                                                    <BookOpenIcon className="w-6 h-6 text-sunrise-orange mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <h4 className="font-bold font-montserrat text-charcoal-gray dark:text-gray-200 text-xs leading-tight truncate">{item.title}</h4>
                                                </div>
                                                <a 
                                                    href={item.fileUrl} 
                                                    download
                                                    aria-label={`Download ${item.title}`}
                                                    className="flex-shrink-0 p-2.5 rounded-xl bg-empower-blue text-white hover:bg-sunrise-orange transition-colors duration-300 shadow-md active:scale-95"
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