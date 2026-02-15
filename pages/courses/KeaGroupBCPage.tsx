
import React from 'react';
import CTAButton from '../../components/CTAButton';
import { UsersIcon, BriefcaseIcon, PencilAltIcon, CheckCircleIcon } from '../../components/Icons';
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

const KeaGroupBCPage: React.FC = () => {
    return (
        <div>
            <SEO
                title="KEA Group B, C & D Exam Coaching | Recruitment Preparation"
                description="Expert coaching for KEA Group B, Group C, and Group D examinations. Comprehensive preparation for Village Administrative Officer (VAO), Clerks, and more."
                url="https://encourageindiaias.in/courses/kea-group-b-c-d"
            />
            <PageHeader title="KEA - Other Group B, C & D Exams" />
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <Section title="About KEA Group B, C & D Recruitment">
                        <div className="flex items-start">
                            <UsersIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <p>Besides specific technical recruitments, the Karnataka Examination Authority (KEA) is the nodal agency for conducting examinations for a multitude of Group B, Group C, and Group D non-technical posts. These recruitments happen for various government corporations, boards, societies, and local administrative bodies. These roles are vital for the operational and administrative functioning of these state bodies.</p>
                        </div>
                    </Section>

                    <Section title="Common Posts & Eligibility">
                        <div className="flex items-start">
                            <BriefcaseIcon className="w-10 h-10 text-sunrise-orange mr-4 flex-shrink-0" />
                            <div>
                                <p>This category includes a diverse range of posts, such as:</p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li className="font-bold text-empower-blue">Village Administrative Officer (VAO)</li>
                                    <li>Junior Assistants / Clerks</li>
                                    <li>Account Assistants</li>
                                    <li>Administrative Assistants</li>
                                    <li>Supervisors in various departments.</li>
                                    <li><strong>Eligibility:</strong> Educational qualifications typically range from SSLC/PUC/12th Standard to a Bachelor's degree (like B.A, B.Com, B.Sc) depending on the specific post.</li>
                                    <li><strong>Age Limit:</strong> The standard age criteria of 18-35 years usually apply, with relaxations as per government rules.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="General Exam Pattern">
                        <p>The selection process is primarily through a competitive written examination (Objective Type), with marks from this test forming the basis of the merit list.</p>
                        <div className="mt-8 p-6 bg-white border-2 border-soft-gray rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold font-montserrat text-empower-blue mb-2">Written Examination Syllabus</h3>
                            <p className="text-sm mb-4">The exam is designed to test the general aptitude and knowledge of the candidates. The syllabus typically covers:</p>
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General Knowledge & Current Affairs</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>General English & General Kannada</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Computer Knowledge</span></div>
                                <div className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Quantitative Aptitude & Reasoning</span></div>
                            </div>
                        </div>
                        <p className="mt-6 text-center font-semibold">A Compulsory Kannada Language exam might be applicable for certain candidates.</p>
                    </Section>

                    <div className="text-center mt-16">
                        <CTAButton requiresAuth variant="primary" className="text-lg">Join General Batch</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeaGroupBCPage;
