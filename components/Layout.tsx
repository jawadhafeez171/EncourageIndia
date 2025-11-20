
import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
import EnrollmentModal from './EnrollmentModal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <TopBar />
      <Header />
      <SecondaryHeader />
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Branding Banner */}
      <div className="bg-soft-gray py-16 w-full overflow-hidden select-none flex justify-center items-center px-4">
         <span className="font-montserrat font-extrabold text-2xl sm:text-4xl md:text-6xl uppercase text-empower-blue/20 tracking-widest text-center cursor-default break-words">
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