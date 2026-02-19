import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

// Animated Progress Bar
function ProgressBar({ label, percent, status }) {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setWidth(percent || 0), 200);
            }
        }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [percent]);

    return (
        <div className="progress-container" ref={ref}>
            <div className="progress-header">
                <span>{label}</span>
                <span style={{ color: status ? '#ff9933' : '#0066ff' }}>{status || `${percent}%`}</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${width}%` }} />
            </div>
        </div>
    );
}

const solutions = [
    { icon: '🌾', title: 'Agricultural Sensors', desc: 'Smart soil, crop health, and irrigation sensors for precision farming.' },
    { icon: '🏭', title: 'Industrial Automation', desc: 'Temperature, gas detection, and machine health monitoring sensors.' },
    { icon: '🤖', title: 'Robotics & Embedded', desc: 'Custom embedded system designs for robotics and automation.' },
    { icon: '📡', title: 'IoT Monitoring', desc: 'Cloud-connected, real-time data monitoring for smart infrastructure.' },
    { icon: '🛰', title: 'Drone Data Integration', desc: 'Sensor systems integrated with drone platforms for aerial monitoring.' },
];

const reasons = [
    { icon: '🇮🇳', title: 'Made in India', desc: 'Supporting the Make in India initiative with homegrown innovation.' },
    { icon: '🔬', title: 'Research Driven', desc: 'R&D-first approach ensuring cutting-edge and reliable products.' },
    { icon: '💰', title: 'Affordable Tech', desc: 'High-quality sensors at cost-effective prices for all sectors.' },
    { icon: '🚀', title: 'Future Ready', desc: 'Smart systems built for tomorrow\'s industrial and agricultural needs.' },
];

const socialLinks = [
    { icon: '▶', label: 'YouTube', href: 'https://www.youtube.com/@M2RLTechnologieS', bg: '#ff0000' },
    { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584367014521', bg: '#1877f2' },
    { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/mrl_technologies_/', bg: '#c13584' },
    { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/m²rl-t-bbb405290', bg: '#0a66c2' },
];

export default function HomePage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitMsg, setSubmitMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await axios.post('/api/contact', form);
            setSubmitMsg(res.data.message);
            setForm({ name: '', email: '', message: '' });
        } catch {
            setSubmitMsg('Something went wrong. Please email us directly.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="homepage">

            {/* ===== HERO SECTION ===== */}
            <section className="hero">
                <div className="hero__bg-orb hero__bg-orb--1" />
                <div className="hero__bg-orb hero__bg-orb--2" />
                <div className="hero__bg-orb hero__bg-orb--3" />
                <div className="container hero__content">
                    <div className="hero__badges">
                        <span className="badge badge-saffron">🏭 MSME Registered</span>
                        <span className="badge badge-green">🚀 Startup India</span>
                        <span className="badge badge-blue">🇮🇳 Made in India</span>
                    </div>
                    <div className="hero__logo-wrap">
                        <img src="/logo.jpeg" alt="M²RL Logo" className="hero__logo animate-float" />
                    </div>
                    <h1 className="hero__title">
                        M²RL <span className="hero__title-accent">TechnologieS</span>
                    </h1>
                    <p className="hero__tagline">Smart & Affordable Sensor Innovation – Made in India 🇮🇳</p>
                    <p className="hero__desc">
                        An emerging sensor manufacturing & R&D startup from Tamil Nadu, building high-quality,
                        affordable sensors for automation, agriculture, and smart industries.
                    </p>
                    <div className="hero__actions">
                        <Link to="/products" className="btn btn-primary">🔵 Explore Products</Link>
                        <Link to="/contact" className="btn btn-secondary">🟢 Contact Us</Link>
                    </div>
                    <div className="hero__scroll-hint">
                        <span>↓ Scroll to explore</span>
                    </div>
                </div>
                <div className="tricolor-stripe" style={{ marginTop: 0 }} />
            </section>

            {/* ===== ABOUT SNAPSHOT ===== */}
            <section className="section section-light" id="about">
                <div className="container">
                    <div className="about-snap">
                        <div className="about-snap__content">
                            <div className="section-label">🏢 Who We Are</div>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Building India's Smart Sensor Future</h2>
                            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                                M²RL TechnologieS is an emerging sensor manufacturing and R&D startup based in Tamil Nadu, India. We focus on developing smart, affordable sensors for agricultural, industrial, and IoT applications.
                            </p>
                            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                                Registered under <strong>Udyam (MSME)</strong> and <strong>Startup India</strong>, we are committed to driving innovation through research and delivering reliable, cost-effective sensor solutions that support the Make in India initiative.
                            </p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <span className="badge badge-saffron">✔ Udyam MSME Registered</span>
                                <span className="badge badge-green">✔ Startup India Registered</span>
                                <span className="badge badge-blue">✔ NSWS Registered</span>
                            </div>
                            <br />
                            <Link to="/about" className="btn btn-outline" style={{ marginTop: '16px' }}>Read More →</Link>
                        </div>
                        <div className="about-snap__image">
                            <div className="about-snap__card card-glass" style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.05), rgba(255,153,51,0.05))', border: '1px solid rgba(0,102,255,0.15)' }}>
                                <div style={{ textAlign: 'center', padding: '20px' }}>
                                    <img src="/logo.jpeg" alt="M²RL" style={{ width: '120px', borderRadius: '16px', marginBottom: '24px', boxShadow: '0 8px 30px rgba(0,102,255,0.2)' }} />
                                    <h3 style={{ fontFamily: 'Poppins', marginBottom: '8px' }}>M²RL TechnologieS</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>Perattukkottai, Sivaganga, Tamil Nadu</p>
                                    {[
                                        { label: 'Founded', value: '2024' },
                                        { label: 'Sector', value: 'Sensor Manufacturing & R&D' },
                                        { label: 'Status', value: 'Pre-Revenue / Funding Stage' },
                                        { label: 'Investment', value: '₹21–25 Lakhs' },
                                    ].map(({ label, value }) => (
                                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '14px' }}>
                                            <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                                            <span style={{ fontWeight: 600 }}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CORE SOLUTIONS ===== */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">🔬 What We Build</div>
                        <h2 className="section-title">Our Core Solutions</h2>
                        <p className="section-subtitle">Precision sensor technology for the industries that power India's growth</p>
                    </div>
                    <div className="grid-auto" style={{ gap: '24px' }}>
                        {solutions.map(({ icon, title, desc }) => (
                            <div key={title} className="card-glass solutions-card">
                                <div className="solutions-card__icon">{icon}</div>
                                <h3 className="solutions-card__title">{title}</h3>
                                <p className="solutions-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">🔐 Why M²RL</div>
                        <h2 className="section-title">Why Choose Us?</h2>
                    </div>
                    <div className="grid-4" style={{ gap: '24px' }}>
                        {reasons.map(({ icon, title, desc }) => (
                            <div key={title} className="card why-card">
                                <div className="why-card__icon">{icon}</div>
                                <h3 className="why-card__title">{title}</h3>
                                <p className="why-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROGRESS SECTION ===== */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
                        <div>
                            <div className="section-label">🏗 Company Status</div>
                            <h2 className="section-title" style={{ marginBottom: '16px' }}>Our Progress</h2>
                            <p style={{ color: 'var(--text-light)', opacity: 0.7, lineHeight: 1.7, marginBottom: '24px' }}>
                                We are steadily building our foundation — from legal registrations to infrastructure setup — working towards our manufacturing launch.
                            </p>
                            <Link to="/investor" className="btn btn-saffron">💰 Investor Info</Link>
                        </div>
                        <div>
                            <ProgressBar label="Registration & Compliance" percent={100} />
                            <ProgressBar label="Infrastructure Setup" percent={70} />
                            <ProgressBar label="Machinery Planning" percent={90} />
                            <ProgressBar label="Manufacturing Setup" status="🔄 Funding Stage" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL MEDIA ===== */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">📢 Follow Us</div>
                        <h2 className="section-title">Connect With Us</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                        {socialLinks.map(({ icon, label, href, bg }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-card">
                                <div className="social-card__icon" style={{ background: bg }}>{icon}</div>
                                <span className="social-card__label">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== QUICK CONTACT ===== */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
                        <div>
                            <div className="section-label">📞 Reach Out</div>
                            <h2 className="section-title" style={{ marginBottom: '24px' }}>Quick Contact</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { icon: '📧', label: 'Email', value: 'mrltechnologies408@gmail.com', href: 'mailto:mrltechnologies408@gmail.com' },
                                    { icon: '📍', label: 'Address', value: 'Perattukkottai, Sivaganga, Tamil Nadu, India' },
                                ].map(({ icon, label, value, href }) => (
                                    <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                        <div style={{ fontSize: '24px' }}>{icon}</div>
                                        <div>
                                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginBottom: '4px' }}>{label}</div>
                                            {href ? (
                                                <a href={href} style={{ color: '#fff', fontSize: '15px' }}>{value}</a>
                                            ) : (
                                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="quick-form">
                            <h3 style={{ fontFamily: 'Poppins', marginBottom: '20px', color: '#fff' }}>Send a Message</h3>
                            {submitMsg ? (
                                <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(19,136,8,0.2)', border: '1px solid rgba(19,136,8,0.3)', color: '#4caf50', marginBottom: '12px' }}>
                                    ✅ {submitMsg}
                                </div>
                            ) : null}
                            <div className="form-group">
                                <input className="form-input" style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }} type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <input className="form-input" style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }} type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-textarea" style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', minHeight: '100px' }} placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                                {submitting ? '⏳ Sending...' : '📤 Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
