import React from 'react';
import CTAButton from './CTAButton';
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, ClockIcon, UserIcon, GlobeAltIcon } from './Icons';

interface Course {
  image?: string; 
  title: string;
  description: string;
  features: string[];
  path?: string;
  duration?: string;
  eligibility?: string;
  medium?: string;
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
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
    <div className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-500 transform md:hover:-translate-y-2">
      {/* Decorative Header */}
      <div className={`relative h-24 md:h-28 bg-gradient-to-r ${gradientClass} p-5 md:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        
        <div className="absolute -bottom-4 -right-4 text-white/10 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
            <AcademicCapIcon className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        
        <div className="relative z-10">
            {/* Generic label removed to prevent clashing with status tags */}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5 md:p-6 relative">
        {/* Quick Meta Chips - Larger for Mobile */}
        <div className="flex flex-wrap gap-2 mb-4">
            {course.duration && (
                <div className="flex items-center text-[10px] md:text-[11px] font-bold text-empower-blue bg-blue-50 dark:bg-blue-900/30 dark:text-blue-200 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800">
                    <ClockIcon className="w-3.5 h-3.5 mr-1" /> {course.duration}
                </div>
            )}
            {course.eligibility && (
                <div className="flex items-center text-[10px] md:text-[11px] font-bold text-sunrise-orange bg-orange-50 dark:bg-orange-900/30 dark:text-orange-200 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-800">
                    <UserIcon className="w-3.5 h-3.5 mr-1" /> {course.eligibility}
                </div>
            )}
            {course.medium && (
                <div className="flex items-center text-[10px] md:text-[11px] font-bold text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-200 px-3 py-1.5 rounded-full border border-green-100 dark:border-green-800">
                    <GlobeAltIcon className="w-3.5 h-3.5 mr-1" /> {course.medium}
                </div>
            )}
        </div>

        {/* Title */}
        <h3 className="font-montserrat text-lg md:text-xl font-bold text-charcoal-gray dark:text-white mb-3 group-hover:text-empower-blue dark:group-hover:text-blue-400 transition-colors leading-tight min-h-[3rem] md:min-h-[3.5rem]">
          {course.title}
        </h3>

        {/* Description - Hidden on very small screens or clamped tightly */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
          {course.description}
        </p>

        {/* Feature Highlights */}
        <div className="mb-6 flex-grow">
            <ul className="space-y-2.5">
            {course.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start text-[13px] text-gray-700 dark:text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1 font-medium">{feature}</span>
                </li>
            ))}
            </ul>
        </div>

        {/* CTA Section - Touch Optimized */}
        <div className="pt-5 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-3">
          {course.path && (
             <CTAButton 
                to={course.path} 
                variant="secondary-blue" 
                className="w-full flex items-center justify-center py-3.5 md:py-2.5 text-xs font-black uppercase tracking-widest group/btn border-empower-blue/30 text-empower-blue hover:bg-empower-blue hover:text-white dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white transition-all"
             >
                Detailed Syllabus
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
             </CTAButton>
          )}
          
          <CTAButton 
              requiresAuth 
              variant="primary" 
              className={`w-full shadow-lg py-3.5 md:py-2.5 text-xs font-black uppercase tracking-widest flex items-center justify-center ${course.path ? 'bg-encourage-red hover:bg-red-700' : 'bg-empower-blue hover:bg-blue-900 shadow-blue-500/20'}`}
          >
            Enroll Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;