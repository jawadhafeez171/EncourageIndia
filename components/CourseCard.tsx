
import React from 'react';
import CTAButton from './CTAButton';
import { CheckCircleIcon } from './Icons';

interface Course {
  image: string;
  title: string;
  description: string;
  features: string[];
  path?: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-montserrat text-xl font-bold text-empower-blue dark:text-blue-400 mb-2">{course.title}</h3>
        <p className="text-charcoal-gray/80 dark:text-gray-300 text-sm mb-4 flex-grow">{course.description}</p>
        <ul className="space-y-2 mb-6">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-start text-charcoal-gray dark:text-gray-200">
              <CheckCircleIcon className="w-5 h-5 text-sunrise-orange mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          {course.path ? (
             <CTAButton to={course.path} variant="primary" className="w-full">
                View Details
             </CTAButton>
          ) : (
            <CTAButton requiresAuth variant="primary" className="w-full">
              Enroll Now
            </CTAButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
