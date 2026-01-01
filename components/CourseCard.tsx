import React from 'react';
import CTAButton from './CTAButton';
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, ClockIcon, UserIcon, GlobeAltIcon, StarIcon } from './Icons';

interface Course {
  image?: string; 
  title: string;
  description: string;
  features: string[];
  path?: string;
  duration?: string;
  eligibility?: string;
  medium?: string;
  isFlagship?: boolean;
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  const gradients = [
    'from-indigo-600 via-blue-700 to-blue-900',
    'from-purple-600 via-fuchsia-700 to-indigo-900',
    'from-emerald-600 via-teal-700 to-cyan-900',
    'from-rose-500 via-orange-600 to-red-800',
    'from-cyan-500 via-blue-600 to-indigo-800',
    'from-pink-500 via-rose-600 to-purple-800',
    'from-slate-700 via-slate-800 to-slate-900',
    'from-teal-600 via-emerald-700 to-green-900',
  ];
  
  const gradientClass = gradients[index % gradients.length];

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 transform md:hover:-translate-y-2">
      {/* Redesigned Crisp Header - Reduced Height */}
      <div className={`relative min-h-[10rem] md:min-h-[12rem] bg-gradient-to-br ${gradientClass} p-5 md:p-6 flex flex-col justify-end overflow-hidden`}>
        
        {/* Visual Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000"></div>
        
        {/* Subtle Background Icon */}
        <div className="absolute -top-6 -right-6 text-white/5 transform rotate-[-15deg] group-hover:rotate-0 transition-all duration-700 pointer-events-none">
            <AcademicCapIcon className="w-40 h-40 md:w-48 md:h-48" />
        </div>
        
        {/* Top Flagship Badge */}
        {course.isFlagship && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                <StarIcon className="w-3 h-3 text-yellow-300 fill-current animate-pulse" />
                <span className="text-[9px] font-black text-white uppercase tracking-wider">Elite</span>
            </div>
        )}

        {/* Header Content */}
        <div className="relative z-10 space-y-3">
            <h3 className="font-montserrat text-xl md:text-2xl font-black text-white leading-tight drop-shadow-lg">
              {course.title}
            </h3>

            {/* Compact Glass Meta Chips */}
            <div className="flex flex-wrap gap-1.5">
                {course.duration && (
                    <div className="flex items-center text-[9px] font-black text-white bg-black/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        <ClockIcon className="w-3 h-3 mr-1 opacity-80" /> {course.duration}
                    </div>
                )}
                {course.eligibility && (
                    <div className="flex items-center text-[9px] font-black text-white bg-black/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        <UserIcon className="w-3 h-3 mr-1 opacity-80" /> {course.eligibility}
                    </div>
                )}
                {course.medium && (
                    <div className="flex items-center text-[9px] font-black text-white bg-black/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        <GlobeAltIcon className="w-3 h-3 mr-1 opacity-80" /> {course.medium}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Tighter Card Body */}
      <div className="flex flex-col flex-grow p-5 md:p-6 relative">
        {/* Description - Wrapping allowed, tighter line height */}
        <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6 leading-snug font-medium opacity-90 group-hover:opacity-100 transition-opacity">
          {course.description}
        </p>

        {/* Feature List - Natural wrap, reduced spacing */}
        <div className="mb-8 flex-grow">
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">Highlights</h4>
            <ul className="space-y-3">
            {course.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start text-[12px] text-gray-700 dark:text-gray-200 group/item">
                    <div className="mr-3 mt-0.5 p-1 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    </div>
                    <span className="font-bold opacity-90 group-hover/item:opacity-100 transition-opacity leading-tight">
                        {feature}
                    </span>
                </li>
            ))}
            </ul>
        </div>

        {/* Compact Actions */}
        <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col gap-3">
          {course.path && (
             <CTAButton 
                to={course.path} 
                variant="secondary-blue" 
                className="w-full flex items-center justify-center py-3 text-[10px] font-black uppercase tracking-[0.15em] !rounded-xl border-2 border-empower-blue/10 text-empower-blue hover:bg-empower-blue hover:text-white transition-all shadow-sm active:scale-95 group/btn"
             >
                Syllabus
                <ArrowRightIcon className="w-3.5 h-3.5 ml-2 transform group-hover/btn:translate-x-1.5 transition-transform" />
             </CTAButton>
          )}
          
          <CTAButton 
              requiresAuth 
              variant="primary" 
              className={`w-full !rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.15em] flex items-center justify-center shadow-lg active:scale-95 transition-all transform hover:-translate-y-1 ${course.path ? 'bg-encourage-red hover:bg-red-700' : 'bg-empower-blue hover:bg-blue-900'}`}
          >
            Enroll Now
          </CTAButton>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CourseCard;