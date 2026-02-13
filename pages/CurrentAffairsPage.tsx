import React, { useState } from 'react';
import CTAButton from '../components/CTAButton';
import { editorialSummaries } from '../constants';
import { submitToGoogleSheet } from '../services/googleSheetService';
import {
    BookOpenIcon,
    DownloadIcon,
    NewspaperIcon,
    CalendarIcon,
    ClockIcon,
    ChevronRightIcon,
    StarIcon,
    TelegramIcon,
    SearchIcon,
    LightBulbIcon,
    CheckCircleIcon
} from '../components/Icons';
import SEO from '../components/SEO';

const PageHeader = ({ title }: { title: string }) => (
    <div className="relative bg-gradient-to-br from-empower-blue via-blue-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sunrise-orange text-xs font-black uppercase tracking-widest mb-6">
                <StarIcon className="w-4 h-4 animate-pulse" />
                <span>Stay Updated 2026-27</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white tracking-tight">{title}</h1>
            <p className="text-blue-100/80 mt-4 max-w-2xl mx-auto font-medium">Daily insights and monthly analytical depth to keep you ahead in the race.</p>
        </div>
    </div>
);

const CurrentAffairsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'daily' | 'monthly' | 'editorials'>('daily');
    const [subscriberEmail, setSubscriberEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const dailyHighlights = [
        { date: "24 May 2026", title: "New Green Energy Corridor Phase III Approved", category: "Economy" },
        { date: "24 May 2026", title: "Supreme Court Landmark Ruling on Data Privacy", category: "Polity" },
        { date: "23 May 2026", title: "Indo-Pacific Strategic Dialogue: Key Takeaways", category: "IR" },
        { date: "23 May 2026", title: "Rare Orchid Species Discovered in Western Ghats", category: "Environment" },
    ];

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');
        try {
            await submitToGoogleSheet({
                FormType: 'Newsletter Subscription',
                email: subscriberEmail
            });
            setSubscribeStatus('success');
            setSubscriberEmail('');
            setTimeout(() => setSubscribeStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setSubscribeStatus('error');
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
            <SEO
                title="Current Affairs"
                description="Stay updated with daily current affairs, monthly magazines, and expert editorials for UPSC and KPSC preparation."
                url="https://encourageindia.com/current-affairs"
            />
            <PageHeader title="Current Affairs" />

            {/* Tab Navigation */}
            <div className="sticky top-[132px] z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center space-x-1 md:space-x-8">
                        {[
                            { id: 'daily', label: 'Daily Snippets', icon: <NewspaperIcon className="w-4 h-4" /> },
                            { id: 'monthly', label: 'Monthly Magazine', icon: <BookOpenIcon className="w-4 h-4" /> },
                            { id: 'editorials', label: 'Expert Editorials', icon: <LightBulbIcon className="w-4 h-4" /> }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center space-x-2 py-4 px-4 text-xs md:text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab.id
                                        ? 'text-empower-blue dark:text-blue-400'
                                        : 'text-gray-400 hover:text-charcoal-gray dark:hover:text-white'
                                    }`}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-sunrise-orange rounded-t-full shadow-[0_-2px_10px_rgba(247,127,0,0.5)]"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">

                {/* Daily Snippets Tab */}
                {activeTab === 'daily' && (
                    <div className="animate-fade-in space-y-12">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl font-black font-montserrat flex items-center text-charcoal-gray dark:text-white">
                                    <CalendarIcon className="w-6 h-6 mr-3 text-sunrise-orange" />
                                    Latest News Highlights
                                </h2>
                                <div className="space-y-4">
                                    {dailyHighlights.map((news, idx) => (
                                        <div key={idx} className="group bg-gray-50 dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-empower-blue/50 hover:shadow-lg transition-all cursor-pointer">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-sunrise-orange bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">
                                                    {news.category}
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-bold">{news.date}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-charcoal-gray dark:text-gray-200 group-hover:text-empower-blue dark:group-hover:text-blue-400 transition-colors">
                                                {news.title}
                                            </h3>
                                            <div className="mt-3 flex items-center text-xs text-empower-blue dark:text-blue-300 font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                                                Read Analysis <ChevronRightIcon className="w-3 h-3 ml-1" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center pt-4">
                                    <CTAButton variant="secondary-blue" className="text-xs">View News Archive</CTAButton>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-empower-blue rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute -top-10 -right-10 opacity-10">
                                        <TelegramIcon className="w-40 h-40" />
                                    </div>
                                    <h3 className="text-2xl font-black font-montserrat mb-4 relative z-10">Real-time Updates</h3>
                                    <p className="text-blue-100 mb-6 text-sm relative z-10">Join our exclusive Telegram channel for instant current affairs alerts, daily quizzes, and mind maps.</p>
                                    <a
                                        href="https://t.me/encourage_INDIAIAS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full py-4 bg-white text-empower-blue rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-colors"
                                    >
                                        <TelegramIcon className="w-5 h-5 mr-2" />
                                        Join Telegram
                                    </a>
                                </div>

                                <div className="bg-soft-gray dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <h4 className="font-bold text-charcoal-gray dark:text-white mb-4">Trending Topics</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['#G20Summit', '#Budget2026', '#SpaceX', '#UPSC_2027', '#KAS_Prelims', '#AgriTech'].map(tag => (
                                            <span key={tag} className="text-xs font-semibold bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 hover:border-sunrise-orange cursor-pointer transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Monthly Magazine Tab */}
                {activeTab === 'monthly' && (
                    <div className="animate-fade-in">
                        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="grid md:grid-cols-12 items-center">
                                <div className="md:col-span-5 p-12 bg-gray-50 dark:bg-slate-900/50 flex justify-center">
                                    <div className="relative group perspective-1000">
                                        <div className="w-64 h-80 bg-gradient-to-br from-encourage-red to-red-900 rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 overflow-hidden relative">
                                            <img
                                                src="https://picsum.photos/seed/magcover/400/500"
                                                alt="Magazine Cover"
                                                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                                            />
                                            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                                                <div className="border-t-4 border-white w-12 pt-2">
                                                    <p className="text-[10px] font-black uppercase">Encourage India</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-3xl font-black font-montserrat leading-tight">THE HERALD</h4>
                                                    <p className="text-xs font-bold opacity-75 mt-1">{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -inset-4 bg-sunrise-orange/20 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>
                                <div className="md:col-span-7 p-12 space-y-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sunrise-orange">Our Flagship Resource</span>
                                    <h2 className="text-3xl md:text-4xl font-black font-montserrat text-charcoal-gray dark:text-white leading-tight">
                                        Encourage Today: <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-empower-blue to-blue-600 dark:from-blue-400">Monthly Compilation</span>
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                        A meticulously curated digest of national and international news, government schemes, and deep-dive editorial analyses. Designed for quick revision and maximum retention for UPSC, KAS, and other competitive exams.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                <DownloadIcon className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase">Size</p>
                                                <p className="text-sm font-bold dark:text-white">12.4 MB</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                <ClockIcon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase">Released</p>
                                                <p className="text-sm font-bold dark:text-white">Yesterday</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8">
                                        <CTAButton className="w-full md:w-auto px-12 py-4 rounded-2xl shadow-xl flex items-center justify-center">
                                            <DownloadIcon className="w-5 h-5 mr-2" />
                                            Download Free PDF
                                        </CTAButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Editorials Tab */}
                {activeTab === 'editorials' && (
                    <div className="animate-fade-in space-y-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h2 className="text-3xl font-black font-montserrat text-charcoal-gray dark:text-white uppercase tracking-tight">
                                Analytical Editorials
                            </h2>
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Filter by topic..."
                                    className="py-2.5 pl-10 pr-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-empower-blue/30 w-full md:w-64 transition-all"
                                />
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-sunrise-orange transition-colors" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {editorialSummaries.map((item, index) => (
                                <div key={index} className="flex flex-col bg-white dark:bg-slate-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-[10px] font-black text-empower-blue dark:text-blue-300 uppercase tracking-widest">
                                                {item.source}
                                            </div>
                                            <div className="flex items-center text-gray-400 text-[10px] font-bold">
                                                <ClockIcon className="w-3 h-3 mr-1" /> 5 min read
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-black font-montserrat text-charcoal-gray dark:text-white leading-tight mb-4 group-hover:text-empower-blue dark:group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                            {item.summary}
                                        </p>
                                        <div className="pt-6 border-t border-gray-50 dark:border-gray-700">
                                            <button className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-sunrise-orange group-hover:translate-x-2 transition-transform">
                                                Read Summary <ChevronRightIcon className="w-3 h-3 ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Newsletter CTA */}
            <section className="bg-gray-50 dark:bg-slate-800 py-20 transition-colors duration-300">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-3xl border border-gray-100 dark:border-gray-700">
                        {subscribeStatus === 'success' ? (
                            <div className="py-8 animate-fade-in">
                                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                <h2 className="text-3xl font-black font-montserrat text-charcoal-gray dark:text-white mb-4">Subscription Confirmed!</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">You're now on the list for our curated weekly insights.</p>
                                <button onClick={() => setSubscribeStatus('idle')} className="mt-8 text-empower-blue font-bold hover:underline">Subscribe another email</button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-3xl md:text-5xl font-black font-montserrat text-charcoal-gray dark:text-white mb-6 tracking-tight">
                                    Never miss a <span className="text-sunrise-orange">critical update.</span>
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">Join 10,000+ students receiving our weekly current affairs curated newsletter.</p>
                                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={handleSubscribe}>
                                    <input
                                        type="email"
                                        required
                                        value={subscriberEmail}
                                        onChange={(e) => setSubscriberEmail(e.target.value)}
                                        placeholder="Your email address"
                                        disabled={subscribeStatus === 'loading'}
                                        className="flex-grow px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-4 focus:ring-sunrise-orange/20 transition-all font-semibold disabled:opacity-50"
                                    />
                                    <CTAButton
                                        type="submit"
                                        variant="primary"
                                        disabled={subscribeStatus === 'loading'}
                                        className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest whitespace-nowrap ${subscribeStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                                    </CTAButton>
                                </form>
                                {subscribeStatus === 'error' && <p className="text-red-500 mt-4 font-bold text-sm">Something went wrong. Please try again later.</p>}
                            </>
                        )}
                    </div>
                </div>
            </section>

            <style>{`
                .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .perspective-1000 { perspective: 1000px; }
                .rotate-y-12 { transform: rotateY(12deg); }
            `}</style>
        </div>
    );
};

export default CurrentAffairsPage;