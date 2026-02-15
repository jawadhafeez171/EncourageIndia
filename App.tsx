import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { EnrollmentProvider } from './contexts/EnrollmentContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import AnalyticsTracker from './components/AnalyticsTracker';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ErrorBoundary from './components/ErrorBoundary';

// Define Router Wrapper to contain hooks that need router context
const RouterHooks = () => {
  return (
    <>
      <AnalyticsTracker />
      <ScrollToTop />
    </>
  );
};

// Lazy load Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const CurrentAffairsPage = lazy(() => import('./pages/CurrentAffairsPage'));
const DownloadsPage = lazy(() => import('./pages/DownloadsPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PhysicalTrainingPage = lazy(() => import('./pages/PhysicalTrainingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy load Course Pages
const KasPage = lazy(() => import('./pages/courses/KasPage'));
const AcSaadPage = lazy(() => import('./pages/courses/AcSaadPage'));
const PsiPage = lazy(() => import('./pages/courses/PsiPage'));
const PcPage = lazy(() => import('./pages/courses/PcPage'));
const PsiPcPage = lazy(() => import('./pages/courses/PsiPcPage'));
const UPSCPage = lazy(() => import('./pages/courses/UPSCPage'));
const AcfPage = lazy(() => import('./pages/courses/AcfPage'));
const GroupBPage = lazy(() => import('./pages/courses/GroupBPage'));
const GroupCPage = lazy(() => import('./pages/courses/GroupCPage'));
const KpscTechPage = lazy(() => import('./pages/courses/KpscTechPage'));
const KpclPage = lazy(() => import('./pages/courses/KpclPage'));
const KsetPage = lazy(() => import('./pages/courses/KsetPage'));
const DcetPage = lazy(() => import('./pages/courses/DcetPage'));
const KeaTechPage = lazy(() => import('./pages/courses/KeaTechPage'));
const KeaGroupBCPage = lazy(() => import('./pages/courses/KeaGroupBCPage'));
const KmfUnitPage = lazy(() => import('./pages/courses/KmfUnitPage'));
const AgricultureOfficerPage = lazy(() => import('./pages/courses/AgricultureOfficerPage'));
const AeJeTechnicalPage = lazy(() => import('./pages/courses/AeJeTechnicalPage'));

// Lazy load Banking Pages
const SbiExamPage = lazy(() => import('./pages/courses/SbiExamPage'));
const IbpsExamPage = lazy(() => import('./pages/courses/IbpsExamPage'));
const RbiExamPage = lazy(() => import('./pages/courses/RbiExamPage'));
const NabardExamPage = lazy(() => import('./pages/courses/NabardExamPage'));

// Lazy load Judiciary Pages
const CivilJudgePage = lazy(() => import('./pages/courses/CivilJudgePage'));
const DistrictJudgePage = lazy(() => import('./pages/courses/DistrictJudgePage'));
const ClatPage = lazy(() => import('./pages/courses/ClatPage'));
const AibePage = lazy(() => import('./pages/courses/AibePage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-empower-blue"></div>
  </div>
);

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
      <ErrorBoundary>
        <AuthProvider>
          <EnrollmentProvider>
            <HashRouter>
              <Analytics />
              <SpeedInsights />
              <RouterHooks />
              <Layout>
                <Suspense fallback={<LoadingFallback />}>
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
                    <Route path="/courses/kas" element={<KasPage />} />
                    <Route path="/courses/ac-saad" element={<AcSaadPage />} />
                    <Route path="/courses/acf" element={<AcfPage />} />
                    <Route path="/courses/kpsc-ao-aao" element={<AgricultureOfficerPage />} />
                    <Route path="/courses/group-b" element={<GroupBPage />} />
                    <Route path="/courses/group-c" element={<GroupCPage />} />
                    <Route path="/courses/kpsc-tech" element={<KpscTechPage />} />
                    <Route path="/courses/psi" element={<PsiPage />} />
                    <Route path="/courses/pc" element={<PcPage />} />
                    <Route path="/courses/psi-pc" element={<PsiPcPage />} />
                    <Route path="/courses/kpcl" element={<KpclPage />} />
                    <Route path="/courses/k-set" element={<KsetPage />} />
                    <Route path="/courses/d-cet" element={<DcetPage />} />
                    <Route path="/courses/kea-tech" element={<KeaTechPage />} />
                    <Route path="/courses/kea-group-b-c-d" element={<KeaGroupBCPage />} />

                    {/* Banking Routes */}
                    <Route path="/courses/banking/sbi" element={<SbiExamPage />} />
                    <Route path="/courses/banking/ibps" element={<IbpsExamPage />} />
                    <Route path="/courses/banking/rbi" element={<RbiExamPage />} />
                    <Route path="/courses/banking/nabard" element={<NabardExamPage />} />

                    {/* Dynamic KMF Routes */}
                    <Route path="/courses/kmf/:unitId" element={<KmfUnitPage />} />
                    {/* Legacy fallback */}
                    <Route path="/courses/kmf-shimul" element={<KmfUnitPage />} />

                    <Route path="/courses/ae-je-technical" element={<AeJeTechnicalPage />} />

                    {/* Judiciary Related */}
                    <Route path="/courses/civil-judge" element={<CivilJudgePage />} />
                    <Route path="/courses/district-judge" element={<DistrictJudgePage />} />
                    <Route path="/courses/clat" element={<ClatPage />} />
                    <Route path="/courses/aibe" element={<AibePage />} />

                    {/* 404 Route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </Layout>
            </HashRouter>
          </EnrollmentProvider>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;