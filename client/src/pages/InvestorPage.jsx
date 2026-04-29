import { Link } from 'react-router-dom';
import {
    IndianRupee, TrendingUp, Building2, Target,
    CheckCircle2, Rocket, ShieldCheck, FlaskConical,
    MapPin, Zap, Droplets, Factory, Send, ChevronRight
} from 'lucide-react';

const metrics = [
];

const useOfFunds = [
    { label: 'Machinery & Equipment', pct: 50, color: '#1a6fff' },
    { label: 'Infrastructure Completion', pct: 20, color: '#10b981' },
    { label: 'R&D & Prototyping', pct: 18, color: '#f97316' },
    { label: 'Working Capital', pct: 12, color: '#8b5cf6' },
];

const reasons = [
    { Icon: Rocket, text: 'Early-stage entry into India\'s growing sensor manufacturing market' },
    { Icon: ShieldCheck, text: 'Fully registered: MSME Udyam, Startup India, NSWS' },
    { Icon: FlaskConical, text: 'Research-driven with active R&D across 6 technology verticals' },
    { Icon: MapPin, text: 'Ready land, three-phase power & water supply in Sivaganga, Tamil Nadu' },
    { Icon: Zap, text: 'Machinery fully planned; manufacturing starts immediately post-funding' },
    { Icon: TrendingUp, text: 'High-growth market — Indian IoT & sensor industry expanding rapidly' },
];

export default function InvestorPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><IndianRupee size={13} />Investor Relations</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>Investment Opportunity</h1>
                    <p className="page-banner-subtitle">Be part of India's next sensor manufacturing success story. M²RL TechnologieS is seeking strategic investment to launch full-scale production.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Metric Cards */}
            <section className="section section-dark" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="grid-4" style={{ gap: 20, paddingBottom: 56 }}>
                        {metrics.map(({ num, label, color, bg }) => (
                            <div key={label} className="card-glass" style={{ textAlign: 'center', padding: '36px 20px', borderTop: `2px solid ${color}55` }}>
                                <div style={{ fontFamily: 'Poppins', fontSize: '2.2rem', fontWeight: 800, color, marginBottom: 8, lineHeight: 1 }}>{num}</div>
                                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the Opportunity */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'start' }}>
                        <div>
                            <div className="section-label"><Target size={13} />The Opportunity</div>
                            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 18 }}>Investment Overview</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {[
                                    { label: 'Company', value: 'M²RL TechnologieS' },
                                    { label: 'Type', value: 'Sensor Manufacturing & R&D Startup' },
                                    { label: 'Location', value: 'Perattukkottai, Sivaganga, Tamil Nadu' },
                                    { label: 'Stage', value: 'Pre-Revenue / Seed Funding' },
                                    { label: 'Ask', value: '₹28 Lakhs (INR)' },
                                    { label: 'Use', value: 'Machinery, Infrastructure & R&D' },
                                ].map(({ label, value }) => (
                                    <div key={label} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                        <span style={{ minWidth: 110, fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</span>
                                        <span style={{ fontSize: '14.5px', color: '#fff', fontWeight: 500 }}>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="section-label" style={{ marginBottom: 14 }}><TrendingUp size={13} />Use of Funds</div>
                            <h3 style={{ fontFamily: 'Poppins', color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, marginTop: 8 }}>Fund Allocation</h3>
                            {useOfFunds.map(({ label, pct, color }) => (
                                <div key={label} style={{ marginBottom: 20 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '13.5px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                                        <span>{label}</span>
                                        <span style={{ color }}>{pct}%</span>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 100, height: 8, overflow: 'hidden' }}>
                                        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 100, transition: 'width 1s ease', boxShadow: `0 0 8px ${color}80` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><CheckCircle2 size={13} />Value Proposition</div>
                        <h2 className="section-title">Why Invest in M²RL?</h2>
                        <p className="section-subtitle">Strong fundamentals, ready infrastructure, and a clear path to manufacturing</p>
                    </div>
                    <div className="grid-2" style={{ gap: 16 }}>
                        {reasons.map(({ Icon, text }) => (
                            <div key={text} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 20px', borderRadius: 14, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)', transition: 'all 0.25s' }}>
                                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(26,111,255,0.08)', border: '1px solid rgba(26,111,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={18} color="#1a6fff" />
                                </div>
                                <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.6, paddingTop: 2 }}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: 600, margin: '0 auto' }}>
                        <Building2 size={48} color="#f97316" style={{ marginBottom: 20, opacity: 0.9 }} />
                        <h2 className="section-title" style={{ marginBottom: 18 }}>Ready to Partner With Us?</h2>
                        <p className="section-subtitle" style={{ marginBottom: 36 }}>
                            We invite investors, mentors, and strategic partners to connect with us and explore this opportunity together.
                        </p>
                        <Link to="/contact" className="btn btn-saffron" style={{ fontSize: '15.5px', padding: '16px 36px' }}>
                            <Send size={16} /> Express Your Interest
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
