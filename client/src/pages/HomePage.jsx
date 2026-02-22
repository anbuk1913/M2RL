import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Wheat, Factory, Bot, Radio, PlaneTakeoff,
    FlaskConical, IndianRupee, Rocket,
    Youtube, Facebook, Instagram, Linkedin,
    Mail, MapPin, Building2, Cpu, ShieldCheck,
    Send, Loader2, CheckCircle2, TrendingUp, Megaphone,
    PhoneCall, ArrowRight
} from 'lucide-react';
import './HomePage.css';

/* ── Animated Progress Bar ── */
function ProgressBar({ label, percent, status }) {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setTimeout(() => setWidth(percent || 0), 200);
        }, { threshold: 0.2 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [percent]);
    return (
        <div className="progress-container" ref={ref}>
            <div className="progress-header">
                <span>{label}</span>
                <span style={{ color: status ? '#f97316' : '#4d8fff' }}>{status || `${percent}%`}</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${width}%` }} />
            </div>
        </div>
    );
}

const solutions = [
    { Icon: Wheat, title: 'Agricultural Sensors', desc: 'Smart soil, crop health & irrigation sensors for precision farming.', variant: 'agri' },
    { Icon: Factory, title: 'Industrial Automation', desc: 'Temperature, gas detection & machine health monitoring sensors.', variant: '' },
    { Icon: Bot, title: 'Robotics & Embedded', desc: 'Custom embedded system designs for robotics and automation.', variant: '' },
    { Icon: Radio, title: 'IoT Monitoring', desc: 'Cloud-connected real-time monitoring for smart infrastructure.', variant: 'iot' },
    { Icon: PlaneTakeoff, title: 'Drone Data Integration', desc: 'Sensor systems integrated with drone platforms for aerial data.', variant: 'drone' },
];

const reasons = [
    { Icon: ShieldCheck, title: 'Made in India', desc: 'Supporting the Make in India initiative with homegrown innovation.' },
    { Icon: FlaskConical, title: 'Research Driven', desc: 'R&D-first approach ensuring cutting-edge and reliable products.' },
    { Icon: IndianRupee, title: 'Affordable Tech', desc: 'High-quality sensors at cost-effective prices for all sectors.' },
    { Icon: Rocket, title: 'Future Ready', desc: "Smart systems built for tomorrow's industrial and agricultural needs." },
];

const socialLinks = [
    { Icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@M2RLTechnologieS', bg: '#ff0000' },
    { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584367014521', bg: '#1877f2' },
    { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mrl_technologies_/', bg: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/m²rl-t-bbb405290', bg: '#0a66c2' },
];

const stats = [
    { num: '2024', label: 'Founded' },
    { num: '5+', label: 'Sensor Systems' },
    { num: 'TN', label: 'Tamil Nadu Based' },
    { num: '₹25L', label: 'Investment Ready' },
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
        } finally { setSubmitting(false); }
    };

    return (
        <div className="homepage">

            {/* ═══ HERO ═══ */}
            <section className="hero">
                <div className="hero__bg-orb hero__bg-orb--1" />
                <div className="hero__bg-orb hero__bg-orb--2" />
                <div className="hero__bg-orb hero__bg-orb--3" />
                <div className="hero__scan-line" />

                <div className="hero__content">
                    <div className="hero__badges">
                        <span className="badge badge-saffron"><Building2 size={11} />MSME Registered</span>
                        <span className="badge badge-green"><Rocket size={11} />Startup India</span>
                        <span className="badge badge-dark"><ShieldCheck size={11} />Made in India</span>
                    </div>

                    <div className="hero__logo-wrap">
                        <img src="/logo.jpeg" alt="M²RL Logo" className="hero__logo animate-float" />
                    </div>

                    <h1 className="hero__title">
                        M²RL <span className="hero__title-accent">TechnologieS</span>
                    </h1>
                    <p className="hero__tagline">Smart &amp; Affordable Sensor Innovation — Made in India</p>
                    <p className="hero__desc">
                        An emerging sensor manufacturing &amp; R&amp;D startup from Tamil Nadu, building high-quality,
                        affordable sensors for agriculture, industrial automation, and smart IoT applications.
                    </p>

                    <div className="hero__actions">
                        <Link to="/products" className="btn btn-primary"><Cpu size={16} />Explore Products</Link>
                        <Link to="/contact" className="btn btn-secondary"><PhoneCall size={16} />Contact Us</Link>
                    </div>

                    <div className="hero__scroll-hint">
                        <div className="hero__scroll-arrow" />
                        <span>Scroll to explore</span>
                    </div>
                </div>

                <div className="tricolor-stripe" style={{ marginTop: 0, position: 'absolute', bottom: 0, left: 0, right: 0 }} />
            </section>

            {/* ═══ STATS STRIP ═══ */}
            <div className="stats-strip">
                <div className="container">
                    <div className="stats-strip__inner">
                        {stats.map(({ num, label }, i) => (
                            <div key={label} className="stats-strip__item" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="stats-strip__num">{num}</div>
                                <div className="stats-strip__label">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══ ABOUT SNAPSHOT ═══ */}
            <section className="section section-light" id="about">
                <div className="container">
                    <div className="about-snap">
                        <div>
                            <div className="section-label"><Building2 size={13} />Who We Are</div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginTop: 14 }}>
                                Building India's Smart<br />Sensor Future
                            </h2>
                            <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '18px' }}>
                                M²RL TechnologieS is an emerging sensor manufacturing and R&D startup based in Tamil Nadu, India.
                                We focus on developing smart, affordable sensors for agricultural, industrial, and IoT applications.
                            </p>
                            <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '28px' }}>
                                Registered under <strong>Udyam (MSME)</strong> and <strong>Startup India</strong>, we are committed to driving innovation
                                through research and delivering reliable, cost-effective solutions that support the Make in India initiative.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: 28 }}>
                                <span className="badge badge-saffron">✔ Udyam MSME</span>
                                <span className="badge badge-green">✔ Startup India</span>
                                <span className="badge badge-blue">✔ NSWS Registered</span>
                            </div>
                            <Link to="/about" className="btn btn-outline">
                                Read More <ArrowRight size={15} />
                            </Link>
                        </div>

                        <div>
                            <div className="card-glass" style={{ background: 'linear-gradient(160deg,rgba(26,111,255,0.06),rgba(249,115,22,0.04))', border: '1px solid rgba(26,111,255,0.15)' }}>
                                <div style={{ textAlign: 'center', padding: '16px 8px 8px' }}>
                                    <img src="/logo.jpeg" alt="M²RL" style={{ width: '110px', borderRadius: '18px', marginBottom: '20px', boxShadow: '0 10px 36px rgba(26,111,255,0.25)', border: '2px solid rgba(26,111,255,0.2)' }} />
                                    <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>M²RL TechnologieS</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginBottom: '24px' }}>Perattukkottai, Sivaganga, Tamil Nadu</p>
                                    {[
                                        { label: 'Founded', value: '2024' },
                                        { label: 'Sector', value: 'Sensor Manufacturing & R&D' },
                                        { label: 'Status', value: 'Pre-Revenue / Funding Stage' },
                                        { label: 'Investment', value: '₹21–25 Lakhs' },
                                    ].map(({ label, value }) => (
                                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '13.5px' }}>
                                            <span style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
                                            <span style={{ fontWeight: 600, color: '#fff' }}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CORE SOLUTIONS ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Cpu size={13} />What We Build</div>
                        <h2 className="section-title">Our Core Solutions</h2>
                        <p className="section-subtitle">Precision sensor technology for the industries that power India's growth</p>
                    </div>
                    <div className="grid-auto">
                        {solutions.map(({ Icon, title, desc, variant }) => (
                            <div key={title} className={`card-glass solutions-card${variant ? ` solutions-card--${variant}` : ''}`}>
                                <div className="solutions-card__icon-wrap">
                                    <Icon size={26} />
                                </div>
                                <h3 className="solutions-card__title">{title}</h3>
                                <p className="solutions-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ WHY CHOOSE US ═══ */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><ShieldCheck size={13} />Why M²RL</div>
                        <h2 className="section-title">Why Choose Us?</h2>
                        <p className="section-subtitle">We bring research-driven quality at prices that make sense for India</p>
                    </div>
                    <div className="grid-4">
                        {reasons.map(({ Icon, title, desc }) => (
                            <div key={title} className="card why-card">
                                <div className="why-card__icon-wrap"><Icon size={24} /></div>
                                <h3 className="why-card__title">{title}</h3>
                                <p className="why-card__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROGRESS ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '56px', alignItems: 'center' }}>
                        <div>
                            <div className="section-label"><TrendingUp size={13} />Company Status</div>
                            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 16 }}>Our Progress</h2>
                            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 28, fontSize: '15px' }}>
                                We are steadily building our foundation — from legal registrations to infrastructure setup —
                                working towards our manufacturing launch.
                            </p>
                            <Link to="/investor" className="btn btn-saffron">
                                <IndianRupee size={16} />Investor Info
                            </Link>
                        </div>
                        <div>
                            <ProgressBar label="Registration & Compliance" percent={100} />
                            <ProgressBar label="Infrastructure Setup" percent={70} />
                            <ProgressBar label="Machinery Planning" percent={90} />
                            <ProgressBar label="Manufacturing Setup" status="Funding Stage" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SOCIAL MEDIA ═══ */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Megaphone size={13} />Follow Us</div>
                        <h2 className="section-title">Connect With Us</h2>
                        <p className="section-subtitle">Stay updated on our journey, products, and milestones</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                        {socialLinks.map(({ Icon, label, href, bg }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-card">
                                <div className="social-card__icon" style={{ background: bg }}><Icon size={24} /></div>
                                <span className="social-card__label">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ QUICK CONTACT ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '56px' }}>
                        <div>
                            <div className="section-label"><PhoneCall size={13} />Reach Out</div>
                            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 28 }}>Quick Contact</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                                {[
                                    { Icon: Mail, label: 'Email', value: 'mrltechnologies408@gmail.com', href: 'mailto:mrltechnologies408@gmail.com' },
                                    { Icon: MapPin, label: 'Address', value: 'Perattukkottai, Sivaganga, Tamil Nadu, India' },
                                ].map(({ Icon, label, value, href }) => (
                                    <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Icon size={20} color="#4d8fff" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{label}</div>
                                            {href
                                                ? <a href={href} style={{ color: '#fff', fontSize: '14.5px', fontWeight: 500 }}>{value}</a>
                                                : <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14.5px' }}>{value}</p>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="quick-form">
                            <h3 style={{ fontFamily: 'Poppins', marginBottom: '22px', color: '#fff', fontSize: '1.15rem', fontWeight: 700 }}>Send a Message</h3>
                            {submitMsg && (
                                <div style={{ padding: '14px 16px', borderRadius: '10px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: 8, fontSize: '14px' }}>
                                    <CheckCircle2 size={16} /> {submitMsg}
                                </div>
                            )}
                            <div className="form-group">
                                <input className="form-input" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }} type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <input className="form-input" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }} type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-textarea" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', minHeight: '100px' }} placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                                {submitting ? <><Loader2 size={15} className="spin" /> Sending...</> : <><Send size={15} /> Send Message</>}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
