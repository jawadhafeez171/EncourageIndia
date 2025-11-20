
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../constants';

const PageHeader = ({ title }: { title: string }) => (
    <div className="bg-empower-blue py-16 text-center text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{title}</h1>
        </div>
    </div>
);

const CoursesPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 150; // Adjust this value based on your sticky header's height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    }, [location]);

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <PageHeader title="Our Programs" />
            <div className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-8 space-y-16">
                    {coursesData.map(category => (
                        <section key={category.id} id={category.id}>
                            <h2 className="text-3xl font-bold font-montserrat text-empower-blue dark:text-blue-400 mb-8 border-l-4 border-sunrise-orange pl-4">{category.title}</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {category.courses.map((course, index) => (
                                    <CourseCard key={index} course={course} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
