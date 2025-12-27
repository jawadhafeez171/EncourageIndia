
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
            <PageHeader title="KPSC - ACF / RFO / DRFO Exams" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-6xl">
                    <Section title="About the Forest Service Exams">
                       <div className="flex items-start">
                            <GlobeAltIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>The Assistant Conservator of Forests (ACF), Range Forest Officer (RFO), and Deputy Range Forest Officer (DRFO) exams, conducted by KPSC, are for recruitment into the prestigious Karnataka Forest Service. These roles are for individuals passionate about environmental conservation, wildlife management, and sustainable forestry. These positions involve significant field responsibilities and administrative duties related to managing the state's natural resources.</p>
                       </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Educational Qualification</h4>
                                    <p>Varies by post: ACF typically requires a Master's or Bachelor's degree in science/engineering disciplines. RFO and DRFO generally require a Bachelor's degree in science or related fields (Agriculture, Forestry, Botany, Zoology, etc.).</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <ShieldCheckIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Physical Standards</h4>
                                    <p>Candidates must meet mandatory physical fitness standards for height, chest, and physical endurance (walking tests) as prescribed by the Forest Department.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CalendarIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Age Limit</h4>
                                    <p>Typically between 18 to 30 years (extendable for certain posts), with relaxations for reserved categories.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Pattern Overview">
                        <p>The Forest Service selection process is comprehensive and includes several elimination rounds:</p>
                        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-0">
                            {/* Stage 1 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Preliminary Exam</h3>
                                <p className="text-sm">Objective-type screening test with GS and Science papers.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 lg:rotate-0" />
                            {/* Stage 2 */}
                             <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Main Exam</h3>
                                <p className="text-sm">Descriptive written exam with optional subjects and language papers.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 lg:rotate-0" />
                            {/* Stage 3 */}
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg w-full">
                                <div className="bg-empower-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Physical Test</h3>
                                <p className="text-sm">Walking tests (25km for men, 16km for women) and fitness checks.</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-soft-gray/50 rounded-lg">
                            <h4 className="font-bold text-xl font-montserrat text-charcoal-gray mb-4">Post-wise Focus:</h4>
                            <div className="space-y-4">
                                <p><strong>ACF:</strong> Heavy emphasis on specialized forestry and environment subjects in Mains.</p>
                                <p><strong>RFO:</strong> Focused on General Science, Aptitude, and basic forestry concepts.</p>
                                <p><strong>DRFO:</strong> Objective pattern with a strong focus on secondary and higher secondary science level.</p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Enroll for Forest Service Coaching</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcfPage;
