import React from 'react';
import CTAButton from '../components/CTAButton';
import { editorialSummaries } from '../constants';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const CurrentAffairsPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Current Affairs & Editorials" />

            <section className="py-20">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-8 border-l-4 border-sunrise-orange pl-4">Monthly Magazine</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8 grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-1">
                            <img src="https://picsum.photos/seed/magazine/400/500" alt="Current Affairs Magazine Cover" className="rounded-md shadow-md w-full max-w-xs mx-auto" />
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold font-montserrat text-encourage-red">Encourage Today - {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                            <p className="text-sm text-charcoal-gray/70 mt-1 mb-4">Your monthly dose of curated news, analysis, and insights.</p>
                            <p className="text-charcoal-gray/90 mb-6">Our flagship monthly magazine covers all important national and international events, government schemes, and editorial analyses, compiled in a crisp and easy-to-revise format for UPSC and other competitive exams.</p>
                            <CTAButton variant='primary'>Download PDF</CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-soft-gray">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold font-montserrat text-empower-blue mb-8 border-l-4 border-sunrise-orange pl-4">Latest Editorial Summaries</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {editorialSummaries.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-bold font-montserrat text-empower-blue">{item.title}</h3>
                                <p className="text-sm font-semibold text-sunrise-orange my-2">Source: {item.source}</p>
                                <p className="text-charcoal-gray/80">{item.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CurrentAffairsPage;
