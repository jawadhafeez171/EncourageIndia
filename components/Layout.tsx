
import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
import EnrollmentModal from './EnrollmentModal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white dark:bg-slate-900 transition-colors duration-300 pb-24 md:pb-0">
      <TopBar />
      <Header />
      <SecondaryHeader />
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Branding Banner */}
      <div className="bg-soft-gray dark:bg-slate-800 py-16 w-full overflow-hidden select-none flex justify-center items-center px-4 transition-colors duration-300">
         <span className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-6xl uppercase text-empower-blue/20 dark:text-white/10 tracking-widest text-center cursor-default break-words">
            Encourage India IAS
         </span>
      </div>

      <Footer />
      <FloatingCallButton />
      <EnrollmentModal />
    </div>
  );
};

export default Layout;
