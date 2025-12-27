
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { AcademicCapIcon, CalendarIcon, BriefcaseIcon, ClipboardListIcon, PencilAltIcon, UsersIcon, ScaleIcon, ChevronRightIcon } from '../../components/Icons';


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

const CivilJudgePage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Civil Judge Preparation" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="The Path to Judiciary">
                       <div className="flex items-start">
                           <ScaleIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                           <p>The Civil Judge recruitment is conducted for the Junior Division by the High Court of Karnataka. This role is fundamental to delivering justice at the grassroots level. A career as a Civil Judge offers the power to interpret laws and deliver justice while upholding the constitutional framework of the country.</p>
                       </div>
                    </Section>

                    <Section title="Eligibility Criteria">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <AcademicCapIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Qualification</h4>
                                    <p>Must be a holder of a degree in Law (LLB) granted by a recognized University.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray text-lg">Practicing Advocates</h4>
                                    <p>Candidates must be practicing as an Advocate in the High Court or a Subordinate Court on the last date fixed for receipt of applications.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Exam Stages">
                        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-0">
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="font-bold text-empower-blue mb-2">Prelims</h3>
                                <p className="text-xs">Objective test covering law and reasoning.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="font-bold text-empower-blue mb-2">Mains</h3>
                                <p className="text-xs">Descriptive written exam on law and judgment writing.</p>
                            </div>
                            <ChevronRightIcon className="w-8 h-8 text-sunrise-orange mx-4 self-center rotate-90 md:rotate-0" />
                            <div className="flex-1 text-center p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                                <h3 className="font-bold text-empower-blue mb-2">Viva-Voce</h3>
                                <p className="text-xs">Personal interview stage.</p>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg px-12">Enroll in Civil Judge Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CivilJudgePage;
