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

function NotFoundPage() {
    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
            <div style={{ marginBottom: '24px' }}><SearchX size={96} color="#0066ff" strokeWidth={1.2} /></div>
            <h1 style={{ fontFamily: 'Poppins', fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Page Not Found</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>The page you're looking for doesn't exist.</p>
            <a href="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Home size={16} /> Go Home</a>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main style={{ paddingTop: '72px', minHeight: '100vh' }}>
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
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
