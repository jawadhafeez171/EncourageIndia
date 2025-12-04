
import React from 'react';
import CTAButton from './CTAButton';
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon } from './Icons';

interface Course {
  image?: string; 
  title: string;
  description: string;
  features: string[];
  path?: string;
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  // Deterministic gradient selection based on index to ensure variety without randomness
  const gradients = [
    'from-blue-600 to-blue-800',
    'from-purple-600 to-purple-800',
    'from-emerald-600 to-teal-800',
    'from-orange-500 to-red-700',
    'from-cyan-600 to-blue-700',
    'from-pink-600 to-rose-800',
    'from-indigo-600 to-indigo-900',
    'from-teal-600 to-green-700',
  ];
  
  const gradientClass = gradients[index % gradients.length];

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Decorative Header */}
      <div className={`relative h-28 bg-gradient-to-r ${gradientClass} p-6 flex flex-col justify-between overflow-hidden transition-all duration-500`}>
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        
        {/* Large Background Icon */}
        <div className="absolute -bottom-6 -right-6 text-white/10 transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
            <AcademicCapIcon className="w-32 h-32" />
        </div>
        
        <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 shadow-sm">
                Premium Course
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 pt-6 relative">
        {/* Title */}
        <h3 className="font-montserrat text-xl font-bold text-charcoal-gray dark:text-white mb-3 group-hover:text-empower-blue dark:group-hover:text-blue-400 transition-colors leading-tight min-h-[3.5rem]">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {course.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-5"></div>

        {/* Features Preview */}
        <div className="mb-6">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Key Highlights</h4>
            <ul className="space-y-2">
            {course.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1 font-medium">{feature}</span>
                </li>
            ))}
            </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-auto">
          {course.path ? (
             <CTAButton 
                to={course.path} 
                variant="secondary-blue" 
                className="w-full flex items-center justify-center py-2.5 text-sm group/btn border-empower-blue text-empower-blue hover:bg-empower-blue hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white transition-all shadow-sm"
             >
                View Details
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
             </CTAButton>
          ) : (
            <CTAButton 
                requiresAuth 
                variant="primary" 
                className="w-full shadow-lg shadow-red-500/20 py-2.5 text-sm flex items-center justify-center"
            >
              Enroll Now
            </CTAButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
