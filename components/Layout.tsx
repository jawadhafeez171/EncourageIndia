
import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
import EnrollmentModal from './EnrollmentModal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <SecondaryHeader />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
      <EnrollmentModal />
    </div>
  );
};

export default Layout;
