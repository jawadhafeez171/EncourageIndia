import React, { useState } from 'react';
import { EyeIcon, TargetIcon, HeartIcon, UsersIcon, BookOpenIcon, ChevronDownIcon } from '../components/Icons';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const faqs = [
    {
        question: "What is the duration of the foundation courses?",
        answer: "Our UPSC and KPSC foundation courses are typically designed for a duration of 10-12 months, covering the entire syllabus for Prelims, Mains, and the Interview stage. For undergraduates, we offer a comprehensive 2-year integrated program."
    },
    {
        question: "Are the study materials included in the course fee?",
        answer: "Yes, all our courses include comprehensive, well-researched, and updated study materials. This includes printed booklets, monthly current affairs magazines, and access to our online resource portal."
    },
    {
        question: "Do you offer online classes or is it only offline?",
        answer: "We offer both offline classroom programs at our Bengaluru center and live online classes for students across the country. Our online programs provide the same quality of education with interactive sessions, doubt clearing, and access to recorded lectures."
    },
    {
        question: "What is the faculty's background?",
        answer: "Our faculty comprises experienced educators, subject matter experts, retired civil servants, and academicians who have a deep understanding of the exam patterns and a proven track record of guiding successful aspirants."
    },
    {
        question: "How are doubts resolved for students?",
        answer: "We have multiple channels for doubt resolution. Students can ask questions during live classes, attend dedicated doubt-clearing sessions, and interact with mentors on a one-on-one basis through our mentorship program."
    },
    {
        question: "Are there any installment options for fee payment?",
        answer: "Yes, we provide flexible fee payment options, including easy installment plans, to ensure that financial constraints do not hinder a deserving student's preparation journey. Please contact our admissions office for more details."
    }
];

const AboutUsPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleFaqToggle = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div>
            <PageHeader title="About Encourage India IAS Academy" />
            
            <section className="py-20">
                <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-4">Our Vision & Mission</h2>
                        <h3 className="text-xl font-semibold font-montserrat text-sunrise-orange mb-2 flex items-center"><EyeIcon className="w-6 h-6 mr-2" /> Vision</h3>
                        <p className="text-charcoal-gray/80 mb-6">To be India's most trusted and result-oriented institution for Civil Services and Judiciary coaching, empowering aspirants from all backgrounds to achieve their dreams.</p>
                        
                        <h3 className="text-xl font-semibold font-montserrat text-sunrise-orange mb-2 flex items-center"><TargetIcon className="w-6 h-6 mr-2" /> Mission</h3>
                        <p className="text-charcoal-gray/80">To provide high-quality, accessible, and personalized education through innovative teaching methodologies, expert mentorship, and a commitment to student success.</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/vision/600/400" alt="Vision & Mission" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-soft-gray">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <BookOpenIcon className="w-16 h-16 text-sunrise-orange mx-auto mb-4" />
                            <h3 className="text-2xl font-bold font-montserrat text-empower-blue">Integrity</h3>
                            <p className="mt-2 text-charcoal-gray/80">Upholding the highest ethical standards in all our actions and teachings.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <UsersIcon className="w-16 h-16 text-sunrise-orange mx-auto mb-4" />
                            <h3 className="text-2xl font-bold font-montserrat text-empower-blue">Empowerment</h3>
                            <p className="mt-2 text-charcoal-gray/80">Equipping students with the knowledge, skills, and confidence to succeed.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <HeartIcon className="w-16 h-16 text-sunrise-orange mx-auto mb-4" />
                            <h3 className="text-2xl font-bold font-montserrat text-empower-blue">Mentorship</h3>
                            <p className="mt-2 text-charcoal-gray/80">Providing personalized guidance and support throughout the preparation journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <img src="https://picsum.photos/seed/founder/300/300" alt="Founder" className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-empower-blue" />
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-4">A Note from Our Founder</h2>
                        <p className="text-lg font-semibold text-charcoal-gray mb-4">"Success in competitive exams is not just about hard work; it's about smart work, guided by those who have walked the path. At Encourage India, we have built a community of dedicated mentors and aspiring leaders. Our single-minded focus is to provide you with the best possible platform to realize your potential. We believe in your dreams, and we are here to help you turn them into reality."</p>
                        <p className="font-montserrat font-bold text-xl mt-6">- John Doe</p>
                        <p className="text-sunrise-orange">Founder & Chief Mentor</p>
                    </div>
                </div>
            </section>

             <section className="py-20 bg-soft-gray">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    onClick={() => handleFaqToggle(index)}
                                    className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
                                >
                                    <span className="text-lg font-montserrat font-semibold text-charcoal-gray">{faq.question}</span>
                                    <ChevronDownIcon className={`w-6 h-6 text-empower-blue transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="pb-5 px-2 text-charcoal-gray/80">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
