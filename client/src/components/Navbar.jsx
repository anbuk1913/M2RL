import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
];

const extraLinks = [
    { label: 'R&D Division', path: '/rnd' },
    { label: 'Investor Info', path: '/investor' },
    { label: 'Careers', path: '/careers' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                {/* Logo */}
                <Link to="/" className="navbar__brand">
                    <img src="/logo.jpeg" alt="M²RL TechnologieS Logo" className="navbar__logo" />
                    <div className="navbar__brand-text">
                        <span className="navbar__brand-name">M²RL TechnologieS</span>
                        <span className="navbar__brand-tagline">Smart Sensor Innovation</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="navbar__links">
                    {navLinks.map(({ label, path }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                end={path === '/'}
                                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    {/* More Dropdown */}
                    <li className="navbar__dropdown-wrap">
                        <button
                            className="navbar__link navbar__dropdown-btn"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                        >
                            More ▾
                        </button>
                        {dropdownOpen && (
                            <ul className="navbar__dropdown">
                                {extraLinks.map(({ label, path }) => (
                                    <li key={path}>
                                        <NavLink to={path} className="navbar__dropdown-link">{label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>

                {/* CTA */}
                <Link to="/contact" className="btn btn-primary navbar__cta">
                    Get in Touch
                </Link>

                {/* Mobile Hamburger */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="navbar__mobile">
                    <ul>
                        {[...navLinks, ...extraLinks].map(({ label, path }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    end={path === '/'}
                                    className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
                        Get in Touch
                    </Link>
                </div>
            )}
        </nav>
    );
}
