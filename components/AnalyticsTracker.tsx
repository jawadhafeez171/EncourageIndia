import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag on window to avoid TypeScript errors
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// REPLACE THIS WITH YOUR ACTUAL ID
const MEASUREMENT_ID = 'G-MEASUREMENT_ID';

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if gtag is loaded (avoids errors if blocked by adblockers)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;