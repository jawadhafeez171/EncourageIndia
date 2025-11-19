import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, HashtagIcon, ClipboardListIcon, PencilAltIcon, UsersIcon, ChevronRightIcon, BookOpenIcon, DownloadIcon } from '../../components/Icons';
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

const UPSCPage: React.FC = () => {
    const upscResources = downloadCategories.find(cat => cat.category === 'UPSC CSE Resources')?.items || [];

    return (
        <div>
            <PageHeader title="UPSC Civil Services Examination (CSE)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-7xl lg:flex lg:gap-12">
                    
                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <Section title="About the UPSC CSE">
                            <p>The Civil Services Examination (CSE), conducted by the Union Public Service Commission (UPSC), is one of India's most prestigious and challenging examinations. It recruits candidates for the highest echelons of the government machinery, including the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and other central services. A career in the civil services offers a profound opportunity to shape public policy and contribute to nation-building.</p>
                        </Section>

                        <Section title="Eligibility Criteria">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                        <p>A candidate must hold a degree from any of the recognized universities.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                        <p>A candidate must have attained the age of 21 years and must not have attained the age of 32 years. Relaxations apply for reserved categories.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <HashtagIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-charcoal-gray text-lg">Number of Attempts</h4>
                                        <p>6 attempts for General category, 9 for OBC, and unlimited attempts for SC/ST candidates until they reach the age limit.</p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Exam Pattern (Three Stages)">
                            <p>The CSE is a rigorous three-stage process. Each stage is an elimination round, leading to the final merit list.</p>
                            <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Preliminary Exam</h3>
                                    <p className="text-sm">An objective screening test to select candidates for the Main exam.</p>
                                </div>
                                <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Main Exam</h3>
                                    <p className="text-sm">A descriptive exam testing in-depth knowledge, consisting of 9 papers.</p>
                                </div>
                                <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                                <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                    <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                    <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Personality Test</h3>
                                    <p className="text-sm">The final interview stage to assess a candidate's suitability for public service.</p>
                                </div>
                            </div>
                            <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                                <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Preliminary Examination (Objective)</h3>
                                        <p>This is a screening test consisting of two papers. Marks obtained in this stage are not counted for the final merit list.</p>
                                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                            <li><strong>Paper I - General Studies (200 Marks):</strong> Covers history, geography, polity, economy, environment, and current events.</li>
                                            <li><strong>Paper II - CSAT (200 Marks):</strong> Assesses comprehension, logical reasoning, and basic numeracy. It is qualifying in nature with a 33% cut-off.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Main Examination (Descriptive)</h3>
                                        <p>This stage is the core of the selection process and tests the depth of a candidate's knowledge. It consists of 9 papers.</p>
                                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                                        <li><strong>Qualifying Papers:</strong> Paper A (Indian Language) and Paper B (English).</li>
                                        <li><strong>Merit Papers (250 marks each):</strong> Essay, General Studies I, II, III, IV, and Optional Subject Paper I & II.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><UsersIcon className="w-5 h-5 mr-2"/>Personality Test (Interview - 275 Marks)</h3>
                                        <p>The final stage is the interview, where a board of competent and unbiased observers assesses the candidate's suitability for a career in public service.</p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="UPSC CSE Cutoff Analysis">
                            <p className="mb-8">Understanding the cutoff trends is a crucial part of a well-rounded preparation strategy. Below is a detailed look at the Prelims and Mains cutoff marks from recent years. This data helps aspirants gauge the level of competition and set realistic targets.</p>
                            <div className="mb-12">
                                <h3 className="text-2xl font-semibold font-montserrat text-encourage-red mb-4">UPSC Prelims Cutoff Marks (Past 7 Years)</h3>
                                <p className="text-sm mb-4 text-charcoal-gray/70">*Cutoff marks for General Studies Paper-I (out of 200). CSAT Paper-II is qualifying.</p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-soft-gray rounded-lg shadow-md">
                                        <thead className="bg-empower-blue/10">
                                            <tr>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">Year</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">General</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">EWS</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">OBC</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">SC</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">ST</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2023</td><td className="py-3 px-4 border-b border-soft-gray">75.41</td><td className="py-3 px-4 border-b border-soft-gray">68.02</td><td className="py-3 px-4 border-b border-soft-gray">74.75</td><td className="py-3 px-4 border-b border-soft-gray">59.25</td><td className="py-3 px-4 border-b border-soft-gray">47.82</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2022</td><td className="py-3 px-4 border-b border-soft-gray">88.22</td><td className="py-3 px-4 border-b border-soft-gray">82.83</td><td className="py-3 px-4 border-b border-soft-gray">87.54</td><td className="py-3 px-4 border-b border-soft-gray">74.08</td><td className="py-3 px-4 border-b border-soft-gray">69.35</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2021</td><td className="py-3 px-4 border-b border-soft-gray">87.54</td><td className="py-3 px-4 border-b border-soft-gray">80.14</td><td className="py-3 px-4 border-b border-soft-gray">84.85</td><td className="py-3 px-4 border-b border-soft-gray">75.41</td><td className="py-3 px-4 border-b border-soft-gray">70.71</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2020</td><td className="py-3 px-4 border-b border-soft-gray">92.51</td><td className="py-3 px-4 border-b border-soft-gray">77.55</td><td className="py-3 px-4 border-b border-soft-gray">89.12</td><td className="py-3 px-4 border-b border-soft-gray">74.84</td><td className="py-3 px-4 border-b border-soft-gray">68.71</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2019</td><td className="py-3 px-4 border-b border-soft-gray">98.00</td><td className="py-3 px-4 border-b border-soft-gray">90.00</td><td className="py-3 px-4 border-b border-soft-gray">95.34</td><td className="py-3 px-4 border-b border-soft-gray">82.00</td><td className="py-3 px-4 border-b border-soft-gray">77.34</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2018</td><td className="py-3 px-4 border-b border-soft-gray">98.00</td><td className="py-3 px-4 border-b border-soft-gray">—</td><td className="py-3 px-4 border-b border-soft-gray">96.66</td><td className="py-3 px-4 border-b border-soft-gray">84.00</td><td className="py-3 px-4 border-b border-soft-gray">83.34</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b-0 border-soft-gray">2017</td><td className="py-3 px-4 border-b-0 border-soft-gray">105.34</td><td className="py-3 px-4 border-b-0 border-soft-gray">—</td><td className="py-3 px-4 border-b-0 border-soft-gray">102.66</td><td className="py-3 px-4 border-b-0 border-soft-gray">88.66</td><td className="py-3 px-4 border-b-0 border-soft-gray">88.66</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs italic text-charcoal-gray/60 mt-2">"—" indicates the EWS category was not introduced prior to 2019.</p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-semibold font-montserrat text-encourage-red mb-4">UPSC Mains Cutoff Marks (2015-2024)</h3>
                                <p className="text-sm mb-4 text-charcoal-gray/70">*Cutoff marks are out of 1,750 marks for the written papers (excluding interview).</p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-soft-gray rounded-lg shadow-md">
                                        <thead className="bg-empower-blue/10">
                                            <tr>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">Year</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">General</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">EWS</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">OBC</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">SC</th>
                                                <th className="py-3 px-4 border-b border-soft-gray font-semibold text-left">ST</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2024</td><td className="py-3 px-4 border-b border-soft-gray">729</td><td className="py-3 px-4 border-b border-soft-gray">696</td><td className="py-3 px-4 border-b border-soft-gray">702</td><td className="py-3 px-4 border-b border-soft-gray">685</td><td className="py-3 px-4 border-b border-soft-gray">684</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2023</td><td className="py-3 px-4 border-b border-soft-gray">741</td><td className="py-3 px-4 border-b border-soft-gray">706</td><td className="py-3 px-4 border-b border-soft-gray">712</td><td className="py-3 px-4 border-b border-soft-gray">694</td><td className="py-3 px-4 border-b border-soft-gray">692</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2022</td><td className="py-3 px-4 border-b border-soft-gray">748</td><td className="py-3 px-4 border-b border-soft-gray">715</td><td className="py-3 px-4 border-b border-soft-gray">714</td><td className="py-3 px-4 border-b border-soft-gray">699</td><td className="py-3 px-4 border-b border-soft-gray">706</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2021</td><td className="py-3 px-4 border-b border-soft-gray">745</td><td className="py-3 px-4 border-b border-soft-gray">713</td><td className="py-3 px-4 border-b border-soft-gray">707</td><td className="py-3 px-4 border-b border-soft-gray">700</td><td className="py-3 px-4 border-b border-soft-gray">700</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2020</td><td className="py-3 px-4 border-b border-soft-gray">736</td><td className="py-3 px-4 border-b border-soft-gray">687</td><td className="py-3 px-4 border-b border-soft-gray">698</td><td className="py-3 px-4 border-b border-soft-gray">680</td><td className="py-3 px-4 border-b border-soft-gray">682</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2019</td><td className="py-3 px-4 border-b border-soft-gray">751</td><td className="py-3 px-4 border-b border-soft-gray">696</td><td className="py-3 px-4 border-b border-soft-gray">718</td><td className="py-3 px-4 border-b border-soft-gray">706</td><td className="py-3 px-4 border-b border-soft-gray">699</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2018</td><td className="py-3 px-4 border-b border-soft-gray">774</td><td className="py-3 px-4 border-b border-soft-gray">—</td><td className="py-3 px-4 border-b border-soft-gray">732</td><td className="py-3 px-4 border-b border-soft-gray">719</td><td className="py-3 px-4 border-b border-soft-gray">719</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2017</td><td className="py-3 px-4 border-b border-soft-gray">809</td><td className="py-3 px-4 border-b border-soft-gray">—</td><td className="py-3 px-4 border-b border-soft-gray">770</td><td className="py-3 px-4 border-b border-soft-gray">756</td><td className="py-3 px-4 border-b border-soft-gray">749</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b border-soft-gray">2016</td><td className="py-3 px-4 border-b border-soft-gray">787</td><td className="py-3 px-4 border-b border-soft-gray">—</td><td className="py-3 px-4 border-b border-soft-gray">745</td><td className="py-3 px-4 border-b border-soft-gray">739</td><td className="py-3 px-4 border-b border-soft-gray">730</td></tr>
                                            <tr className="hover:bg-soft-gray/50"><td className="py-3 px-4 border-b-0 border-soft-gray">2015</td><td className="py-3 px-4 border-b-0 border-soft-gray">676</td><td className="py-3 px-4 border-b-0 border-soft-gray">—</td><td className="py-3 px-4 border-b-0 border-soft-gray">630</td><td className="py-3 px-4 border-b-0 border-soft-gray">622</td><td className="py-3 px-4 border-b-0 border-soft-gray">617</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs italic text-charcoal-gray/60 mt-2">"—" indicates the EWS (Economically Weaker Sections) category was not introduced prior to 2019.</p>
                            </div>
                        </Section>

                        <div className="text-center mt-16">
                            <CTAButton requiresAuth variant="primary" className="text-lg">Enroll in UPSC CSE Program</CTAButton>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-[150px] h-fit mt-12 lg:mt-0">
                        <div className="bg-soft-gray/50 p-6 rounded-lg border border-gray-200">
                             <Section title="UPSC CSE Resources & Booklist" className="mb-0">
                                <p className="mb-6 text-sm">
                                    To aid your preparation, we have compiled a comprehensive list of essential resources, including detailed syllabus breakdowns and recommended booklists for each General Studies paper.
                                </p>
                                <div className="space-y-3">
                                    {upscResources.map((item, index) => (
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
                            </Section>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default UPSCPage;