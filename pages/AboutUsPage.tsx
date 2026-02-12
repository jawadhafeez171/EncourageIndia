import React, { useState } from 'react';
import CTAButton from '../components/CTAButton';
import { EyeIcon, TargetIcon, HeartIcon, UsersIcon, BookOpenIcon, ChevronDownIcon, CheckCircleIcon, StarIcon, LightBulbIcon, LightningBoltIcon, ShieldCheckIcon, ArrowRightIcon } from '../components/Icons';

const PageHeader = ({ title, tagline }: { title: string, tagline?: string }) => (
    <div className="bg-empower-blue py-20 text-center text-white relative overflow-hidden">
        {/* Decorative Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent"></div>

        <div className="container mx-auto relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-black font-montserrat mb-4 tracking-tight uppercase drop-shadow-md">{title}</h1>
            {tagline && (
                <div className="mt-4 animate-fade-in">
                    <div className="h-1 w-24 bg-encourage-red mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl md:text-2xl font-montserrat font-extrabold text-encourage-red tracking-[0.2em] uppercase italic drop-shadow-sm">
                        {tagline}
                    </p>
                </div>
            )}
        </div>
        <style>{`
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
            .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
            .animate-shimmer { animation: shimmer 2s infinite; }
        `}</style>
    </div>
);

const faqs = [
    {
        question: "What is the duration of the foundation courses?",
        answer: "Our UPSC and KPSC foundation courses are typically designed for a duration of 10-12 months, covering the entire syllabus for Prelims, Mains, and the Interview stage. For undergraduates, we offer a comprehensive 1-year integrated program."
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

    const whyChooseUs = [
        { title: "Result-Oriented Approach", desc: "We focus on conceptual clarity, revision strategy, and performance tracking." },
        { title: "Updated Curriculum", desc: "Aligned with the latest exam patterns and syllabus." },
        { title: "Interactive Classes", desc: "Doubt-clearing sessions, test series, mock interviews, and motivational talks." },
        { title: "Affordable Quality Education", desc: "We believe success should be accessible to all." },
        { title: "Individual Mentorship", desc: "One-on-one guidance to shape personalized learning paths." },
        { title: "Physical Training", desc: "Yoga classes, Meditation, Breathing exercises, etc. for improving concentration." }
    ];

    const visions = [
        { l: "V", t: "Value-Driven Education", d: "We believe in nurturing not just exam success, but strong ethical values and integrity in every aspirant." },
        { l: "I", t: "Inclusive Learning", d: "We aim to make quality education accessible to students from all regions, backgrounds, and financial conditions." },
        { l: "S", t: "Student-Centric Approach", d: "Every student is unique. Our personalized mentorship and attention ensure no one is left behind." },
        { l: "I", t: "Innovation in Teaching", d: "We use dynamic, updated, and technology-driven methods to keep learning relevant and engaging." },
        { l: "O", t: "Outcome-Oriented Training", d: "Our focus is on real results — clearing exams, building careers, and achieving dreams." },
        { l: "N", t: "Nation Building", d: "Our ultimate goal is to prepare responsible, capable officers who contribute meaningfully to the country's progress." },
        { l: "S", t: "Sustainable Growth", d: "We strive for continuous improvement, expanding our reach, refining our systems, and empowering more aspirants every year." }
    ];

    const motto = [
        { l: "P", t: "Passion for Learning", d: "We ignite a deep passion in every student to pursue knowledge with purpose and commitment." },
        { l: "R", t: "Resilience in Preparation", d: "We train students to stay strong and consistent, even in the face of tough competition and setbacks." },
        { l: "O", t: "Opportunity for All", d: "Our mission is to provide equal learning opportunities for rural, urban, and underprivileged students alike." },
        { l: "G", t: "Goal-Oriented Training", d: "We help students set clear goals and work strategically toward achieving success in every stage of their journey." },
        { l: "R", t: "Result-Driven Approach", d: "With focused study plans, regular tests, and mentorship, we ensure tangible outcomes in performance." },
        { l: "E", t: "Excellence in Teaching", d: "Our faculty and resources are curated to deliver the highest standard of coaching and support." },
        { l: "S", t: "Self-Discipline and Confidence", d: "We instil personal discipline and belief, the two most important pillars of any successful aspirant." },
        { l: "S", t: "Service to Nation", d: "Beyond just jobs, we prepare future public servants who serve society with commitment and integrity." }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Encourage India IAS Academy" tagline="From Inspiration 2 Progress" />

            {/* Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-8 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-empower-blue to-blue-600 dark:from-blue-400 dark:to-blue-200 mb-6">
                        "Empowering Aspirants, Building Futures"
                    </h2>
                    <p className="text-lg text-charcoal-gray/80 dark:text-gray-300 leading-relaxed mb-6">
                        Welcome to <span className="font-bold text-empower-blue dark:text-blue-400">encourageINDIAIAS</span>, your trusted partner in competitive exam preparation. Established with a vision to nurture talent and transform ambition into achievement, we are dedicated to providing top-quality coaching for students aspiring to succeed in UPSC, KPSC, KEA, SSC, Banking, Railways, PSI, PC, PDO, FDA/SDA, and various other government and public sector examinations.
                    </p>
                    <p className="text-lg text-charcoal-gray/80 dark:text-gray-300 leading-relaxed">
                        At the heart of our coaching centre lies a team of experienced educators, passionate mentors, and subject-matter experts who bring years of real-time knowledge, strategic insights, and student-friendly teaching methods to the classroom.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-12 text-center">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-sunrise-orange">
                                <div className="flex items-start">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold font-montserrat text-lg text-charcoal-gray dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-charcoal-gray/70 dark:text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20">
                <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-6 flex items-center">
                            <TargetIcon className="w-8 h-8 mr-3 text-sunrise-orange" />
                            Our Mission
                        </h2>
                        <p className="text-charcoal-gray/80 dark:text-gray-300 mb-4 leading-relaxed">
                            Our mission is to empower every aspiring candidate with the knowledge, skills, and confidence needed to excel in competitive examinations, especially those that lead to careers in public service, administration, and governance.
                        </p>
                        <p className="text-charcoal-gray/80 dark:text-gray-300 mb-4 leading-relaxed">
                            We strive to create a student-centric learning ecosystem that fosters discipline, critical thinking, and ethical values. Through innovative teaching methods, personal mentorship, rigorous practice, and continuous evaluation, we aim to bridge the gap between ambition and achievement for students from all backgrounds — urban or rural, privileged or underprivileged.
                        </p>
                        <p className="text-charcoal-gray/80 dark:text-gray-300 font-semibold italic border-l-4 border-sunrise-orange pl-4">
                            "At the core of our mission is a deep commitment to nation-building by nurturing responsible, capable, and visionary public servants who can lead India toward a more inclusive and progressive future."
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-empower-blue/10 rounded-lg transform translate-x-4 translate-y-4"></div>
                        <img src="/images/about/about_hero.png" alt="Our Mission" className="rounded-lg shadow-xl relative z-10 w-full" />
                    </div>
                </div>
            </section>

            {/* Our Vision (VISIONS) */}
            <section className="py-20 bg-empower-blue text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <EyeIcon className="w-full h-full text-white" />
                </div>
                <div className="container mx-auto px-8 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">Our Vision</h2>
                    <p className="text-center text-blue-200 mb-12 text-xl font-bold tracking-[0.5em]">V-I-S-I-O-N-S</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {visions.map((v, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 relative group overflow-hidden">
                                <span className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
                                    {v.l}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold font-montserrat text-sunrise-orange mb-2 flex items-center">
                                        <span className="bg-white text-empower-blue w-8 h-8 rounded-full flex items-center justify-center mr-3 text-lg font-extrabold shadow-sm">{v.l}</span>
                                        {v.t}
                                    </h3>
                                    <p className="text-sm text-gray-200 leading-relaxed">{v.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-soft-gray dark:bg-slate-800 transition-colors duration-300">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-12">Our Core Values</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "Excellence in teaching and content delivery",
                            "Growth-oriented mindset",
                            "Commitment to student success",
                            "Ethical guidance and mentorship",
                            "Transparency and accountability"
                        ].map((val, i) => (
                            <div key={i} className="bg-white dark:bg-slate-700 px-6 py-4 rounded-full shadow-md flex items-center text-charcoal-gray dark:text-white font-medium hover:scale-105 transition-transform">
                                <StarIcon className="w-5 h-5 text-sunrise-orange mr-2" />
                                {val}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Motto (PROGRESS) */}
            <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400">Our Motto</h2>
                        <p className="text-xl font-semibold text-charcoal-gray dark:text-gray-300 mt-2">From Inspiration to <span className="text-sunrise-orange">"PROGRESS"</span></p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {motto.map((m, i) => (
                            <div key={i} className="flex flex-col md:flex-row bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm border-l-8 border-empower-blue hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 flex items-center mb-4 md:mb-0 md:mr-6">
                                    <div className="w-16 h-16 rounded-full bg-empower-blue text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                                        {m.l}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-montserrat text-charcoal-gray dark:text-white mb-2">{m.t}</h3>
                                    <p className="text-charcoal-gray/80 dark:text-gray-300 text-sm leading-relaxed">{m.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Wait? - Beautified CTA Section */}
            <section className="py-24 relative overflow-hidden bg-slate-900 text-white text-center">
                {/* Background Gradient & Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-empower-blue to-blue-900 opacity-90"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sunrise-orange/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat mb-8 leading-tight tracking-tight">
                            Why Wait? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-sunrise-orange filter drop-shadow-lg">
                                Your Journey Begins Here.
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                            Don't let hesitation hold you back. Seize the opportunity to be mentored by experts and achieve your dreams.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {["Expert Mentorship", "Updated Study Material", "Real-time Mocks", "Unwavering Support"].map((item, index) => (
                                <span key={index} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg hover:bg-white/20 transition-colors cursor-default">
                                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-10 inline-block shadow-2xl">
                            <p className="text-2xl md:text-3xl font-serif italic text-white/90">
                                "<span className="text-sunrise-orange font-bold not-italic">ಪ್ರೇರಣೆಯಿಂದ ಪ್ರಗತಿಯ ಕಡೆಗೆ</span>"
                            </p>
                        </div>

                        <div className="mt-4">
                            <CTAButton
                                requiresAuth
                                variant="primary"
                                className="group relative text-lg md:text-xl font-black px-10 py-5 !bg-encourage-red !text-white hover:!bg-red-700 shadow-[0_15px_35px_-12px_rgba(230,57,70,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(230,57,70,0.7)] transform hover:-translate-y-1.5 transition-all duration-500 !rounded-2xl flex items-center justify-center gap-3 overflow-hidden mx-auto"
                            >
                                <span className="relative z-10 uppercase tracking-tight">
                                    Start your preparation now <span className="opacity-80 text-sm md:text-lg font-bold">By clicking here</span>
                                </span>
                                <ArrowRightIcon className="w-6 h-6 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none"></div>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs - Kept as they are relevant */}
            <section className="py-20 bg-soft-gray dark:bg-slate-800 transition-colors duration-300">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-12 text-center">Frequently Asked Questions?</h2>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300 dark:border-gray-600">
                                <button
                                    onClick={() => handleFaqToggle(index)}
                                    className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none group"
                                >
                                    <span className="text-lg font-montserrat font-semibold text-charcoal-gray dark:text-gray-200 group-hover:text-empower-blue dark:group-hover:text-blue-400 transition-colors">{faq.question}</span>
                                    <ChevronDownIcon className={`w-6 h-6 text-empower-blue dark:text-blue-400 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="pb-5 px-2 text-charcoal-gray/80 dark:text-gray-300">
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
