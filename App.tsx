
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CoursesPage from './pages/CoursesPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import DownloadsPage from './pages/DownloadsPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import PhysicalTrainingPage from './pages/PhysicalTrainingPage';
import NotFoundPage from './pages/NotFoundPage';
import { EnrollmentProvider } from './contexts/EnrollmentContext';
import { ThemeProvider } from './contexts/ThemeContext';

// New Exam Pages
import KasPage from './pages/courses/KasPage';
import AcSaadPage from './pages/courses/AcSaadPage';
import PsiPage from './pages/courses/PsiPage';
import PcPage from './pages/courses/PcPage';
import PsiPcPage from './pages/courses/PsiPcPage';
import UPSCPage from './pages/courses/UPSCPage';
import JudiciaryPage from './pages/courses/JudiciaryPage';
import AcfPage from './pages/courses/AcfPage';
import GroupBPage from './pages/courses/GroupBPage';
import KpscTechPage from './pages/courses/KpscTechPage';
import FdaSdaPage from './pages/courses/FdaSdaPage';
import KpclPage from './pages/courses/KpclPage';
import KsetPage from './pages/courses/KsetPage';
import KeaTechPage from './pages/courses/KeaTechPage';
import KeaGroupBCPage from './pages/courses/KeaGroupBCPage';
import ShimulPage from './pages/courses/ShimulPage';
import AgricultureOfficerPage from './pages/courses/AgricultureOfficerPage';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <EnrollmentProvider>
        <HashRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/physical-training" element={<PhysicalTrainingPage />} />
              <Route path="/current-affairs" element={<CurrentAffairsPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Dedicated Exam Page Routes */}
              <Route path="/courses/upsc-cse" element={<UPSCPage />} />
              <Route path="/courses/karnataka-judiciary" element={<JudiciaryPage />} />
              <Route path="/courses/kas" element={<KasPage />} />
              <Route path="/courses/ac-saad" element={<AcSaadPage />} />
              <Route path="/courses/acf" element={<AcfPage />} />
              <Route path="/courses/kpsc-ao-aao" element={<AgricultureOfficerPage />} />
              <Route path="/courses/group-b" element={<GroupBPage />} />
              <Route path="/courses/kpsc-tech" element={<KpscTechPage />} />
              <Route path="/courses/fda-sda" element={<FdaSdaPage />} />
              <Route path="/courses/psi" element={<PsiPage />} />
              <Route path="/courses/pc" element={<PcPage />} />
              <Route path="/courses/psi-pc" element={<PsiPcPage />} />
              <Route path="/courses/kpcl" element={<KpclPage />} />
              <Route path="/courses/k-set" element={<KsetPage />} />
              <Route path="/courses/kea-tech" element={<KeaTechPage />} />
              <Route path="/courses/kea-group-b-c" element={<KeaGroupBCPage />} />
              <Route path="/courses/kmf-shimul" element={<ShimulPage />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </HashRouter>
      </EnrollmentProvider>
    </ThemeProvider>
  );
};

export default App;
