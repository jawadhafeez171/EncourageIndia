import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, ShieldCheckIcon, CalendarIcon, GlobeAltIcon, ClipboardListIcon, PencilAltIcon, UsersIcon, ChevronRightIcon, CheckCircleIcon, ClockIcon, BookOpenIcon, StarIcon } from '../../components/Icons';

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
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const AcfPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="KPSC - ACF / RFO / DRFO Exams" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-6xl">
                    <Section title="About the Forest Service Exams">
                       <div className="flex items-start">
                            <GlobeAltIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <p className="mb-4">The Assistant Conservator of Forests (ACF), Range Forest Officer (RFO), and Deputy Range Forest Officer (DRFO) exams are conducted by the Karnataka Public Service Commission (KPSC) to recruit officers for the Karnataka Forest Department.</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-soft-gray/20 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-empower-blue">
                                        <h4 className="font-bold text-empower-blue">Vacancy Overview (ACF)</h4>
                                        <p className="text-sm">Total Posts: 24</p>
                                        <ul className="text-xs list-disc list-inside mt-1 opacity-80">
                                            <li>B.Sc Forestry Graduates: 11 + 02 (Backlog)</li>
                                            <li>Other Science/Engg Graduates: 11</li>
                                        </ul>
                                    </div>
                                    <div className="bg-soft-gray/20 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-sunrise-orange">
                                        <h4 className="font-bold text-sunrise-orange">Remuneration</h4>
                                        <p className="text-sm font-bold">Scale of Pay: ₹ 28,100 – 50,100</p>
                                        <p className="text-xs mt-1">Shortlisted candidates undergo a 3-year period including 2 years of Diploma training and 1 year of field work.</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <CalendarIcon className="w-8 h-8 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray dark:text-white">Age Limit (as per Notification)</h4>
                                        <ul className="text-sm space-y-1">
                                            <li>Minimum: 18 Years</li>
                                            <li>General Merit: 30 Years</li>
                                            <li>OBC (2A/2B/3A/3B): 33 Years</li>
                                            <li>SC / ST / Category-1: 35 Years</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h4 className="font-bold mb-3 flex items-center text-empower-blue dark:text-blue-400">
                                    <CheckCircleIcon className="w-5 h-5 mr-2" /> Educational Qualification
                                </h4>
                                <p className="text-sm mb-2">Minimum <span className="font-bold">50% marks</span> in aggregate required in any of the following:</p>
                                <ul className="text-xs space-y-2 list-disc list-inside opacity-90">
                                    <li>B.Sc. in Forestry from a recognized university.</li>
                                    <li>Bachelor's degree in Agriculture, Horticulture, or Veterinary Science.</li>
                                    <li>B.Sc. with 2+ subjects: Maths, Physics, Chemistry, Zoology, Botany, Bio-Chem, Micro-Bio, Bio-Tech.</li>
                                    <li>Bachelor of Engineering (B.E./B.Tech) in any recognized University.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Mandatory Physical Standards">
                        <div className="overflow-x-auto shadow-md rounded-xl mb-6">
                            <table className="min-w-full bg-white dark:bg-slate-800 text-sm">
                                <thead className="bg-empower-blue text-white">
                                    <tr>
                                        <th className="py-4 px-6 text-left">Physical Standard</th>
                                        <th className="py-4 px-6 text-center">Men</th>
                                        <th className="py-4 px-6 text-center">Women</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 font-medium">
                                    <tr>
                                        <td className="py-4 px-6">Height</td>
                                        <td className="py-4 px-6 text-center">163 cm</td>
                                        <td className="py-4 px-6 text-center">150 cm</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6">Chest Girth (Normal)</td>
                                        <td className="py-4 px-6 text-center">79 cm</td>
                                        <td className="py-4 px-6 text-center">74 cm</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6">Chest Expansion (Min.)</td>
                                        <td className="py-4 px-6 text-center">5 cm</td>
                                        <td className="py-4 px-6 text-center">5 cm</td>
                                    </tr>
                                    <tr className="bg-orange-50 dark:bg-orange-900/10">
                                        <td className="py-4 px-6 font-bold">Walking Test (Endurance)</td>
                                        <td className="py-4 px-6 text-center font-bold">25 km in 4 Hours</td>
                                        <td className="py-4 px-6 text-center font-bold">16 km in 4 Hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-sm mb-2 flex items-center">Vision Standards</h4>
                                <ul className="text-xs space-y-1 opacity-80">
                                    <li>Distant Vision: 6/6 mtrs & 6/9 mtrs (with/without glasses)</li>
                                    <li>Near Vision: 0/6 mtrs & 0/8 mtrs</li>
                                    <li>Must have full field vision; no colour blindness or squint.</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-700">
                                <h4 className="font-bold text-sm mb-2 flex items-center">Medical Eligibility</h4>
                                <p className="text-xs opacity-80">Candidates must not have Knock knees, Bow legs, Flat feet, or Varicose veins. Hearing must be normal (Rinners & Webbers test).</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Examination Pattern">
                        <div className="space-y-12">
                            {/* Preliminary Section */}
                            <div>
                                <h4 className="font-bold text-xl mb-4 flex items-center text-empower-blue">
                                    <ClipboardListIcon className="w-7 h-7 mr-2" /> 
                                    1. Preliminary Exam (Objective Type)
                                </h4>
                                <p className="text-sm mb-4 opacity-80 italic">Note: The Prelims is a screening test. Marks are not counted for the final merit.</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-5 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-slate-700 rounded-xl">
                                        <p className="font-bold text-base mb-1">Paper 1: General Knowledge</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs font-bold text-sunrise-orange bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded">100 Marks</span>
                                            <span className="text-xs opacity-60 flex items-center"><ClockIcon className="w-3 h-3 mr-1" /> 2 Hours</span>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-white dark:bg-slate-800 border-2 border-soft-gray dark:border-slate-700 rounded-xl">
                                        <p className="font-bold text-base mb-1">Paper 2: Aptitude Test</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs font-bold text-sunrise-orange bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded">100 Marks</span>
                                            <span className="text-xs opacity-60 flex items-center"><ClockIcon className="w-3 h-3 mr-1" /> 2 Hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Main Exam Section */}
                            <div>
                                <h4 className="font-bold text-xl mb-4 flex items-center text-empower-blue">
                                    <PencilAltIcon className="w-7 h-7 mr-2" /> 
                                    2. Main Exam (Descriptive)
                                </h4>
                                <p className="text-sm mb-6">Candidates qualifying the Preliminary exam in a 1:20 ratio are invited for the Main exam. This stage decides the final merit ranking.</p>
                                
                                <div className="space-y-6">
                                    {/* Compulsory Papers */}
                                    <div className="bg-soft-gray/30 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                                        <h5 className="font-bold text-charcoal-gray dark:text-white mb-4 flex items-center">
                                            <ShieldCheckIcon className="w-5 h-5 mr-2 text-encourage-red" />
                                            Compulsory Qualifying Papers
                                        </h5>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                                                <h6 className="font-bold text-sm">Paper I: Kannada</h6>
                                                <p className="text-xs mt-1">150 Marks | Descriptive</p>
                                            </div>
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                                                <h6 className="font-bold text-sm">Paper II: English</h6>
                                                <p className="text-xs mt-1">150 Marks | Descriptive</p>
                                            </div>
                                        </div>
                                        <p className="text-[11px] mt-4 text-encourage-red font-bold uppercase tracking-wider">Minimum 35% marks required in each paper to qualify.</p>
                                    </div>

                                    {/* Merit Papers */}
                                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-empower-blue/10 shadow-sm">
                                        <h5 className="font-bold text-empower-blue dark:text-blue-400 mb-4 flex items-center">
                                            <StarIcon className="w-5 h-5 mr-2" />
                                            Papers for Final Merit (600 Total Marks)
                                        </h5>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full text-sm">
                                                <thead className="bg-gray-50 dark:bg-slate-700">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-bold">Paper No.</th>
                                                        <th className="py-3 px-4 text-left font-bold">Subject</th>
                                                        <th className="py-3 px-4 text-center font-bold">Marks</th>
                                                        <th className="py-3 px-4 text-center font-bold">Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                                    <tr>
                                                        <td className="py-3 px-4">Paper III</td>
                                                        <td className="py-3 px-4">General Knowledge</td>
                                                        <td className="py-3 px-4 text-center font-bold">200</td>
                                                        <td className="py-3 px-4 text-center">3 Hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4">Paper IV</td>
                                                        <td className="py-3 px-4">Optional Subject 1 (Paper I)</td>
                                                        <td className="py-3 px-4 text-center font-bold">100</td>
                                                        <td className="py-3 px-4 text-center">3 Hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4">Paper V</td>
                                                        <td className="py-3 px-4">Optional Subject 1 (Paper II)</td>
                                                        <td className="py-3 px-4 text-center font-bold">100</td>
                                                        <td className="py-3 px-4 text-center">3 Hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4">Paper VI</td>
                                                        <td className="py-3 px-4">Optional Subject 2 (Paper I)</td>
                                                        <td className="py-3 px-4 text-center font-bold">100</td>
                                                        <td className="py-3 px-4 text-center">3 Hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4">Paper VII</td>
                                                        <td className="py-3 px-4">Optional Subject 2 (Paper II)</td>
                                                        <td className="py-3 px-4 text-center font-bold">100</td>
                                                        <td className="py-3 px-4 text-center">3 Hours</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Optional Subjects List */}
                                    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                                        <h5 className="font-bold mb-4 flex items-center">
                                            <BookOpenIcon className="w-5 h-5 mr-2 text-sunrise-orange" />
                                            Available Optional Subjects
                                        </h5>
                                        <p className="text-xs mb-4 opacity-75">Candidates must select any <strong>TWO</strong> subjects from the list below. Certain combinations (like Agriculture and Forestry) may be restricted.</p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-xs font-medium">
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Agriculture</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Botany</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Chemistry</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Civil Engineering</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Geology</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Mathematics</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Physics</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Statistics</div>
                                            <div className="flex items-center"><ChevronRightIcon className="w-3 h-3 mr-1 text-empower-blue" /> Zoology</div>
                                            <div className="flex items-center font-bold text-empower-blue"><ChevronRightIcon className="w-3 h-3 mr-1" /> Forestry</div>
                                        </div>
                                        <p className="text-[10px] mt-4 italic text-charcoal-gray/60 dark:text-gray-400">
                                            *CRITICAL: Candidates with a B.Sc (Forestry) degree <strong>MUST</strong> select Forestry as one of their optional subjects. They are restricted from choosing other combinations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Interview Section */}
                            <div>
                                <h4 className="font-bold text-xl mb-4 flex items-center text-empower-blue">
                                    <UsersIcon className="w-7 h-7 mr-2" /> 
                                    3. Personality Test (Interview)
                                </h4>
                                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-sunrise-orange/20">
                                    <p className="text-sm font-bold text-sunrise-orange mb-2">Final Hurdle: 50 Marks</p>
                                    <p className="text-sm opacity-90">
                                        Candidates are called for interview in a 1:3 ratio based on their Main exam scores. The board evaluates the candidate's personality, alertness, leadership qualities, and physical suitability for a demanding career in the forest services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16 bg-gradient-to-r from-empower-blue to-blue-800 p-10 rounded-2xl text-white shadow-xl">
                        <h3 className="text-3xl font-bold mb-4">ACF Specialized Batch 2026-27</h3>
                        <p className="mb-8 opacity-90 max-w-2xl mx-auto">Join the most comprehensive coaching for Karnataka Forest Services. We provide expert mentorship for both Optional Science subjects and GS papers, along with guidance for physical standards.</p>
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12 bg-white !text-empower-blue hover:bg-soft-gray border-none shadow-lg transform hover:scale-105 transition-all">
                            Enroll in ACF Program
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcfPage;