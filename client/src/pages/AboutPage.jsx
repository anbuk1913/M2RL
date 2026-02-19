import { Link } from 'react-router-dom';

const team = [
    { name: 'Logesh S', role: 'Founder', icon: '👤', desc: 'Visionary leading M²RL\'s sensor innovation journey.' },
    { name: 'Jayaseelan K', role: 'CEO', icon: '👤', desc: 'Steering business strategy and growth initiatives.' },
    { name: 'Sripriya JJ', role: 'Managing Director', icon: '👤', desc: 'Overseeing operations and R&D management.' },
    { name: 'Kaviya V.C', role: 'Design Support', icon: '👤', desc: 'Leading product and communication design.' },
    { name: 'Anbu Kumar', role: 'Website Designer', icon: '👤', desc: 'Building the digital presence of M²RL.' },
];

const infra = [
    { icon: '🏗', label: 'Land Available', desc: 'Ready plot for manufacturing facility in Perattukkottai, Sivaganga.' },
    { icon: '⚡', label: 'Three-Phase Power', desc: 'Full three-phase electrical connection established.' },
    { icon: '💧', label: 'Water Facility', desc: 'Water supply infrastructure is in place and ready.' },
    { icon: '🏭', label: 'Manufacturing Planned', desc: 'Machinery finalized; manufacturing setup pending final funding.' },
];

export default function AboutPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">🏢 About Us</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>M²RL TechnologieS</h1>
                    <p className="page-banner-subtitle">Emerging sensor manufacturing & R&D startup from Tamil Nadu, India, driving affordable innovation for agriculture, industry, and IoT.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Company Overview */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div className="section-label">🏢 Company Overview</div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '12px', marginBottom: '20px' }}>Who We Are</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                                M²RL TechnologieS is an emerging sensor manufacturing and Research & Development startup headquartered in Perattukkottai, Sivaganga, Tamil Nadu, India. Our company was founded with a clear purpose: to build smart, affordable, and reliable sensor solutions that power India's agriculture, industrial, and IoT sectors.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                                We are registered under <strong>Udyam (MSME)</strong>, <strong>Startup India</strong>, and <strong>NSWS</strong>, with an active bank account, ready land and infrastructure, three-phase power supply, and fully planned R&D operations.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                                Our manufacturing setup is currently in the funding stage, with estimated investment of ₹21–25 Lakhs and machinery already finalized. We are committed to Make in India and creating employment through technology manufacturing.
                            </p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <span className="badge badge-saffron">✔ Udyam MSME</span>
                                <span className="badge badge-green">✔ Startup India</span>
                                <span className="badge badge-blue">✔ NSWS Registered</span>
                                <span className="badge badge-green">✔ Bank Account Active</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src="/logo.jpeg" alt="M²RL TechnologieS" style={{ width: '200px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,102,255,0.2)', border: '3px solid rgba(0,102,255,0.2)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">🎯 Our Direction</div>
                        <h2 className="section-title">Vision & Mission</h2>
                    </div>
                    <div className="grid-2" style={{ gap: '32px' }}>
                        {/* Vision */}
                        <div className="card-glass" style={{ borderLeft: '4px solid #0066ff', padding: '36px' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌍</div>
                            <h3 style={{ fontFamily: 'Poppins', fontSize: '1.4rem', color: '#fff', marginBottom: '16px' }}>Our Vision</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                                To become a trusted Indian sensor manufacturing company delivering innovative and reliable technology solutions globally — a brand that represents quality, affordability, and the spirit of Indian engineering.
                            </p>
                        </div>
                        {/* Mission */}
                        <div className="card-glass" style={{ borderLeft: '4px solid #ff9933', padding: '36px' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎯</div>
                            <h3 style={{ fontFamily: 'Poppins', fontSize: '1.4rem', color: '#fff', marginBottom: '16px' }}>Our Mission</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    'Develop cost-effective smart sensors',
                                    'Support the Make in India initiative',
                                    'Promote research-driven innovation',
                                    'Create employment through technology manufacturing',
                                ].map(item => (
                                    <li key={item} style={{ display: 'flex', gap: '10px', color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
                                        <span style={{ color: '#ff9933' }}>✦</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">👨‍💼 Leadership</div>
                        <h2 className="section-title">Our Team</h2>
                        <p className="section-subtitle">The passionate people behind M²RL TechnologieS</p>
                    </div>
                    <div className="grid-auto">
                        {team.map(({ name, role, icon, desc }) => (
                            <div key={name} className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px', height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0066ff 0%, #0044cc 100%)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '2rem', margin: '0 auto 16px',
                                    boxShadow: '0 8px 24px rgba(0,102,255,0.25)'
                                }}>
                                    {icon}
                                </div>
                                <h3 style={{ fontFamily: 'Poppins', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>{name}</h3>
                                <span className="badge badge-blue" style={{ marginBottom: '12px', display: 'inline-block' }}>{role}</span>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">🏗 Infrastructure</div>
                        <h2 className="section-title">Our Facilities</h2>
                        <p className="section-subtitle">Ready infrastructure to support large-scale sensor manufacturing</p>
                    </div>
                    <div className="grid-4" style={{ gap: '24px' }}>
                        {infra.map(({ icon, label, desc }) => (
                            <div key={label} className="card-glass" style={{ padding: '28px 20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{icon}</div>
                                <h3 style={{ color: '#fff', fontFamily: 'Poppins', fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{label}</h3>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '40px', textAlign: 'center' }}>
                        <Link to="/investor" className="btn btn-saffron">💰 View Investor Information</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
