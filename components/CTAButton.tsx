
import React from 'react';
import { Link } from 'react-router-dom';
import { useEnrollment } from '../contexts/EnrollmentContext';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'secondary-blue';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  requiresAuth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick, variant = 'primary', className = '', type = 'button', to, requiresAuth = false }) => {
  const { openModal } = useEnrollment();
  
  const baseClasses = "font-montserrat font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out inline-block text-center";

  const variantClasses = {
    primary: 'bg-encourage-red text-white hover:bg-red-700',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-charcoal-gray',
    'secondary-blue': 'bg-transparent text-empower-blue border-2 border-empower-blue hover:bg-empower-blue hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // If requiresAuth is true, this button triggers the Enrollment Modal
  if (requiresAuth) {
    return (
      <button
        type="button"
        onClick={(e) => {
          if (onClick) onClick(e);
          openModal();
        }}
        className={combinedClasses}
      >
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default CTAButton;
