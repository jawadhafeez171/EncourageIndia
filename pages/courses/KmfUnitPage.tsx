import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CTAButton from '../../components/CTAButton';
import { BriefcaseIcon, PencilAltIcon, UsersIcon, CheckCircleIcon, AcademicCapIcon, CalendarIcon, ChevronRightIcon, StarIcon } from '../../components/Icons';

interface KmfUnitData {
    name: string;
    fullName: string;
    districts: string;
    description: string;
}

const unitMap: Record<string, KmfUnitData> = {
    'central': {
        name: 'CENTRAL KMF',
        fullName: 'Karnataka Milk Federation (KMF) Central Unit',
        districts: 'Statewide Headquarters',
        description: 'The apex body of the cooperative dairy movement in Karnataka. Recruitment for the central unit involves strategic management, technical oversight, and statewide operations roles.'
    },
    'shimul': {
        name: 'SHIMUL',
        fullName: 'Shivamogga, Davanagere & Chitradurga Milk Union',
        districts: 'Shivamogga, Davanagere, and Chitradurga districts.',
        description: 'A key regional unit serving central Karnataka. This recruitment drive covers a wide range of technical and administrative roles essential for regional dairy development.'
    },
    'bamul': {
        name: 'BAMUL',
        fullName: 'Bengaluru Milk Union Limited',
        districts: 'Bengaluru Urban, Bengaluru Rural, and Ramanagara districts.',
        description: 'The largest milk union in the federation, managing the vast demand of the metropolitan area. Roles here are dynamic and focus on large-scale processing and distribution.'
    },
    'komul': {
        name: 'KOMUL',
        fullName: 'Kolar-Chikkaballapura District Milk Union',
        districts: 'Kolar and Chikkaballapura districts.',
        description: 'Managing operations in the prominent dairy belt of eastern Karnataka. This union is known for its high productivity and advanced collection systems.'
    },
    'tumul': {
        name: 'TUMUL',
        fullName: 'Tumkur District Milk Union',
        districts: 'Tumakuru district.',
        description: 'Focused on the dairy needs and production of the Tumkur region. Recruitment aims to strengthen local procurement and marketing networks.'
    },
    'mymul': {
        name: 'MYMUL',
        fullName: 'Mysore District Milk Union',
        districts: 'Mysuru district.',
        description: 'Serving the heritage city and its surrounding rural areas. This unit focuses on heritage dairy products and local distribution excellence.'
    },
    'manmul': {
        name: 'MANMUL',
        fullName: 'Mandya District Milk Union',
        districts: 'Mandya district.',
        description: 'Operations in the heart of the Sugarcane and Dairy belt of Karnataka. Recruitment focuses on managing intense regional production.'
    },
    'hamul': {
        name: 'HAMUL',
        fullName: 'Hassan District Milk Union',
        districts: 'Hassan district.',
        description: 'A pioneer union in the state with integrated processing facilities. Candidates here work in highly specialized technical environments.'
    },
    'chamul': {
        name: 'CHAMUL',
        fullName: 'Chamarajanagar District Milk Union',
        districts: 'Chamarajanagar district.',
        description: 'A growing union focusing on forest-fringe dairy development and local tribal empowerment through cooperatives.'
    },
    'dkmul': {
        name: 'DKMUL',
        fullName: 'Dakshina Kannada & Udupi District Milk Union',
        districts: 'Dakshina Kannada and Udupi districts.',
        description: 'Managing the dairy landscape of coastal Karnataka. Known for specialized products catering to the coastal belt.'
    },
    'damul': {
        name: 'DAMUL',
        fullName: 'Dharwad Milk Union',
        districts: 'Dharwad, Gadag, and Haveri districts.',
        description: 'The hub of north Karnataka dairy operations. This union covers a vast geographical area with diverse procurement needs.'
    },
    'bemul': {
        name: 'BEMUL',
        fullName: 'Belgaum District Milk Union',
        districts: 'Belagavi district.',
        description: 'One of the largest regional unions by area, managing operations across the border-district with high milk production.'
    },
    'vimul': {
        name: 'VIMUL',
        fullName: 'Vijayapura & Bagalkot District Milk Union',
        districts: 'Vijayapura and Bagalkot districts.',
        description: 'Driving dairy progress in the dryland regions of northern Karnataka through innovative irrigation and fodder management.'
    },
    'chimul': {
        name: 'CHIMUL',
        fullName: 'Kalaburagi-Bidar-Yadgir Milk Union',
        districts: 'Kalaburagi, Bidar, and Yadgir districts.',
        description: 'Leading the dairy movement in the Kalyana-Karnataka region. Recruitment focuses on expansive regional outreach and infrastructure growth.'
    }
};

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-gradient-to-br from-empower-blue via-blue-900 to-indigo-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
            <span className="inline-block bg-sunrise-orange text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-lg">Recruitment 2026-27</span>
            <h1 className="text-4xl md:text-6xl font-black font-montserrat mb-4 tracking-tight drop-shadow-md uppercase">{title}</h1>
            <p className="text-xl md:text-2xl font-medium text-blue-100/90 italic">{subtitle}</p>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({title, children}) => (
    <div className="mb-12">
        <h2 className="text-3xl font-black font-montserrat text-empower-blue dark:text-blue-400 mb-6 border-l-8 border-sunrise-orange pl-5">{title}</h2>
        <div className="space-y-4 text-charcoal-gray/80 dark:text-gray-300 leading-relaxed text-lg">
            {children}
        </div>
    </div>
);

const KmfUnitPage: React.FC = () => {
    const { unitId } = useParams<{ unitId: string }>();
    
    // Support legacy route kmf-shimul if unitId is missing
    const activeUnitId = unitId || 'shimul';
    const unit = unitMap[activeUnitId.toLowerCase()];

    if (!unit) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title={unit.fullName} subtitle={`"Towards Progress through Cooperatives"`} />
            
            <div className="py-20">
                <div className="container mx-auto px-8 max-w-5xl">
                    <Section title={`About ${unit.name}`}>
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm mb-10">
                            <p className="mb-6">{unit.description}</p>
                            <div className="flex items-start bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-dashed border-empower-blue/20">
                                <StarIcon className="w-8 h-8 text-sunrise-orange mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-empower-blue dark:text-blue-400">Districts Covered</h4>
                                    <p className="text-sm font-medium">{unit.districts}</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Overview of Potential Posts">
                        <div className="flex items-start mb-8">
                            <BriefcaseIcon className="w-12 h-12 text-sunrise-orange mr-6 flex-shrink-0" />
                            <div>
                                <p className="mb-4">KMF units typically recruit for a diverse spectrum of professional and entry-level roles. Based on historical patterns, the upcoming recruitment drive expects vacancies in:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Assistant Manager (A.H / A.I)",
                                        "Technical Officer (Dairy Technology)",
                                        "Marketing / Public Relations Officer",
                                        "Extension Officer (Class-III)",
                                        "Administrative Assistant",
                                        "Account Assistant / Junior Technician",
                                        "System Operator / Clerk-Cum-Computer Operator"
                                    ].map((post, i) => (
                                        <div key={i} className="flex items-center space-x-2 text-sm font-bold bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sunrise-orange"></div>
                                            <span>{post}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>
                    
                    <Section title="General Eligibility Criteria">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                                <AcademicCapIcon className="w-10 h-10 text-empower-blue mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white text-lg">Qualification</h4>
                                    <p className="text-sm">Ranges from SSLC/PUC to specialized B.Sc/M.Sc (Agriculture/Dairy), B.Com, MBA, and B.E degrees depending on the specific post requirements.</p>
                                </div>
                            </div>
                            <div className="flex items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                                <CalendarIcon className="w-10 h-10 text-empower-blue mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-charcoal-gray dark:text-white text-lg">Age Criteria</h4>
                                    <p className="text-sm">Generally 18 to 35 years. Age relaxations for OBC (3 years) and SC/ST/Cat-I (5 years) are applicable as per govt norms.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="Standard Selection Pattern">
                        <div className="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] border-2 border-empower-blue/10 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                                <PencilAltIcon className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-black font-montserrat text-empower-blue dark:text-blue-400 mb-6 flex items-center">
                                <CheckCircleIcon className="w-8 h-8 mr-3 text-green-500" />
                                Written Examination (Objective)
                            </h3>
                            <p className="text-sm font-medium mb-8 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl border-l-4 border-empower-blue">
                                The exam assesses both general competence and unit-specific awareness. A minimum qualifying score is required for merit consideration.
                            </p>
                             <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                                <div className="flex items-start group">
                                    <div className="bg-sunrise-orange/10 p-2 rounded-lg mr-4 group-hover:bg-sunrise-orange group-hover:text-white transition-all">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm">General Knowledge</h5>
                                        <p className="text-xs opacity-70">State history, current affairs & economy.</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="bg-sunrise-orange/10 p-2 rounded-lg mr-4 group-hover:bg-sunrise-orange group-hover:text-white transition-all">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm">Bilingual Proficiency</h5>
                                        <p className="text-xs opacity-70">English and Kannada language skills.</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="bg-sunrise-orange/10 p-2 rounded-lg mr-4 group-hover:bg-sunrise-orange group-hover:text-white transition-all">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm">Co-operative Sector</h5>
                                        <p className="text-xs opacity-70">Laws and operational knowledge of KMF.</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="bg-sunrise-orange/10 p-2 rounded-lg mr-4 group-hover:bg-sunrise-orange group-hover:text-white transition-all">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm">Technical Domain</h5>
                                        <p className="text-xs opacity-70">Subject matter expertise for AO/TO posts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="text-center mt-20 bg-gradient-to-r from-empower-blue to-blue-800 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                        <h3 className="text-3xl font-black mb-6 relative z-10">Ace the {unit.name} Recruitment</h3>
                        <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto relative z-10">
                            Our specialized KMF preparation modules are designed by former department experts. Join the most trusted academy in Bengaluru to secure your career in the cooperative sector.
                        </p>
                        <CTAButton requiresAuth variant="primary" className="text-xl px-16 py-4 bg-white !text-empower-blue border-none shadow-xl transform hover:-translate-y-1 transition-all relative z-10">
                            Enroll in KMF Batch 2026-27
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KmfUnitPage;