import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, ShieldCheckIcon, CalendarIcon, GlobeAltIcon, ClipboardListIcon, PencilAltIcon, UsersIcon, ChevronRightIcon } from '../../components/Icons';


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
        <div className="space-y-4 text-charcoal-gray/80">
            {children}
        </div>
    </div>
);

const AcfPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="KPSC - Assistant Conservator of Forests (ACF)" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-6xl">
                    <Section title="About the ACF Exam">
                       <div className="flex items-start">
                            <GlobeAltIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Assistant Conservator of Forests (ACF) exam, conducted by KPSC, is for recruitment into the Karnataka Forest Service. It is a prestigious Group-A service for individuals passionate about environmental conservation, wildlife management, and sustainable forestry. The role involves significant field responsibilities and administrative duties related to managing the state's forest resources.</p>
                       </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Must possess a Bachelor's degree in a science or engineering discipline, typically including subjects like Agriculture, Forestry, Botany, Zoology, or Environmental Science.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <ShieldCheckIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Physical Standards</h4>
                                    <p>Candidates must meet specific physical fitness standards for height, chest, and physical endurance as prescribed by the forest department.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>Typically between 18 to 30 years, with relaxations for reserved categories.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern">
                        <p>The ACF selection process is a comprehensive, multi-stage examination:</p>
                        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Preliminary Exam</h3>
                                <p className="text-sm">Objective-type screening test with GS and optional papers.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 lg:rotate-0" />
                            {/* Stage 2 */}
                             <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Main Exam</h3>
                                <p className="text-sm">Descriptive written exam with language and optional subject papers.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 lg:rotate-0" />
                            {/* Stage 3 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Physical & Walking Test</h3>
                                <p className="text-sm">Rigorous fitness tests to ensure candidates are fit for forest duty.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 lg:rotate-0" />
                            {/* Stage 4 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Interview</h3>
                                <p className="text-sm">Final personality test to assess suitability for the Forest Service.</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                            <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Detailed Breakdown:</h4>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ClipboardListIcon className="w-5 h-5 mr-2"/>Preliminary Examination</h3>
                                    <p>An objective-type screening test similar to the KAS prelims, consisting of a General Studies paper and an optional subject paper.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><PencilAltIcon className="w-5 h-5 mr-2"/>Main Examination</h3>
                                    <p>A descriptive written exam including papers on General English, General Kannada, and two optional subjects chosen from a list of science and forestry-related disciplines.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><ShieldCheckIcon className="w-5 h-5 mr-2"/>Physical Fitness Test & Walking Test</h3>
                                    <p>Candidates who clear the Mains must undergo rigorous physical tests, including a walking test covering a distance of 25 km for male candidates and 16 km for female candidates within four hours.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold font-montserrat text-encourage-red mb-2 flex items-center"><UsersIcon className="w-5 h-5 mr-2"/>Interview/Personality Test</h3>
                                    <p>The final stage assesses the candidate's personality, leadership qualities, and knowledge of forestry and environmental issues.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Enroll for ACF Coaching</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcfPage;