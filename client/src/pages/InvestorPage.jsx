import { Link } from 'react-router-dom';

export default function InvestorPage() {
    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">💰 Investment</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Investor & Partnership</h1>
                    <p className="page-banner-subtitle">Join us in building India's next-generation sensor manufacturing company.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
                        <div>
                            <div className="section-label" style={{ marginBottom: '16px' }}>📊 Investment Overview</div>
                            <h2 style={{ fontFamily: 'Poppins', fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px' }}>Project Investment Stage</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                                M²RL TechnologieS is seeking investment to complete our manufacturing setup and launch our first product line. With all registrations, infrastructure, and R&D planning in place, we are ready to scale immediately upon funding.
                            </p>
                            {[
                                { label: 'Estimated Setup Cost', value: '₹21 – 25 Lakhs', color: '#0066ff' },
                                { label: 'Funding Stage', value: 'Pending Claim', color: '#ff9933' },
                                { label: 'Machinery Status', value: 'Finalized', color: '#138808' },
                                { label: 'Land & Power', value: 'Ready', color: '#138808' },
                            ].map(({ label, value, color }) => (
                                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{label}</span>
                                    <strong style={{ color, fontSize: '15px' }}>{value}</strong>
                                </div>
                            ))}
                            <div style={{ marginTop: '32px' }}>
                                <Link to="/contact" className="btn btn-primary">💬 Contact for Investment Details</Link>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: '4px' }}>Why Invest in M²RL?</h3>
                            {[
                                { icon: '🏭', title: 'MSME & Startup India Registered', desc: 'Legally compliant, eligible for government schemes and subsidies.' },
                                { icon: '📊', title: 'Growing Sensor Market', desc: 'India\'s sensor market is projected to grow 15%+ annually through 2030.' },
                                { icon: '🌾', title: 'AgriTech Demand', desc: 'Massive government push for precision agriculture creates sustained demand.' },
                                { icon: '🇮🇳', title: 'Make in India', desc: 'Aligned with national manufacturing policy; eligible for PLI incentives.' },
                                { icon: '🔬', title: 'R&D Ready', desc: 'Planning complete; quick time-to-market once manufacturing begins.' },
                            ].map(({ icon, title, desc }) => (
                                <div key={title} className="card" style={{ padding: '20px', display: 'flex', gap: '14px' }}>
                                    <div style={{ fontSize: '1.8rem' }}>{icon}</div>
                                    <div>
                                        <h4 style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{title}</h4>
                                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
