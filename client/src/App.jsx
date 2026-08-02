import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchX, Home } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import InvestorPage from './pages/InvestorPage';
import CareersPage from './pages/CareersPage';
import RnDPage from './pages/RnDPage';
import AchievementsPage from './pages/AchievementsPage';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main style={{  minHeight: '100vh' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/investor" element={<InvestorPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/rnd" element={<RnDPage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
