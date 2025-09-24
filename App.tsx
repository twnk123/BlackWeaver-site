
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturePacksPage from './pages/FeaturePacksPage';
import ProcessPage from './pages/ProcessPage';
import OurStoryPage from './pages/OurStoryPage';
import StudioPage from './pages/StudioPage';
import SecurityPage from './pages/SecurityPage';
import ConfiguratorPage from './pages/ConfiguratorPage';
import RoiPage from './pages/RoiPage';
import ComingSoonPage from './pages/ComingSoonPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feature-packs" element={<FeaturePacksPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/configurator" element={<ConfiguratorPage />} />
            <Route path="/roi" element={<RoiPage />} />
            <Route path="/apps" element={<ComingSoonPage title="iOS & Android Apps" />} />
            <Route path="/webapp" element={<ComingSoonPage title="Web + App" />} />
            <Route path="/workflows" element={<ComingSoonPage title="Workflows" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
