
import React from 'react';
import { QuoteIcon } from '../components/Icons';
import { achievers, mentors } from '../constants';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
            <p className="text-xl mt-2 text-soft-gray/90">{subtitle}</p>
        </div>
    </div>
);

const ResultsPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Our Achievers" subtitle="Celebrating the Success of Our Students" />
            
            <section className="py-20">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-10 text-center">Success Stories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievers.map(achiever => (
                            <div key={achiever.name} className="bg-white rounded-lg shadow-lg overflow-hidden text-center group">
                                <div className="relative">
                                    <img src={achiever.photo} alt={achiever.name} className="w-full h-72 object-cover object-top" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <h3 className="text-xl font-bold font-montserrat">{achiever.name}</h3>
                                        <p className="text-sunrise-orange font-semibold">{achiever.rank}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-charcoal-gray/80 italic">"{achiever.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-soft-gray">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-10 text-center">Messages from Our Mentors</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {mentors.map(mentor => (
                            <div key={mentor.name} className="bg-white p-8 rounded-lg shadow-xl text-left relative">
                                <QuoteIcon className="w-16 h-16 text-empower-blue/10 absolute top-4 right-4" />
                                <p className="text-charcoal-gray/90 italic mb-6">"{mentor.message}"</p>
                                <div className="flex items-center">
                                    <img src={mentor.photo} alt={mentor.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-empower-blue p-1"/>
                                    <div>
                                        <h4 className="font-bold font-montserrat text-lg text-empower-blue">{mentor.name}</h4>
                                        <p className="text-sm text-sunrise-orange">{mentor.role}</p>
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

export default ResultsPage;
