import { Link } from 'react-router-dom';

const roles = [
    { title: 'Embedded Systems Engineer', type: 'Full-time', skills: ['C/C++', 'Arduino', 'Raspberry Pi', 'RTOS'], icon: '🤖' },
    { title: 'Agricultural IoT Specialist', type: 'Full-time', skills: ['Sensor Integration', 'AgriTech', 'Data Analysis', 'Field Testing'], icon: '🌾' },
    { title: 'PCB Design Engineer', type: 'Full-time', skills: ['PCB Layout', 'KiCad', 'Altium', 'Circuit Design'], icon: '⚙' },
    { title: 'Full Stack Developer', type: 'Full-time', skills: ['React', 'Node.js', 'IoT APIs', 'Cloud (AWS/GCP)'], icon: '💻' },
    { title: 'R&D Intern', type: 'Internship', skills: ['Electronics', 'Research', 'Documentation', 'Willingness to Learn'], icon: '🔬' },
    { title: 'Sales & Business Development', type: 'Full-time', skills: ['B2B Sales', 'Agriculture Sector', 'Client Relations', 'Tamil Nadu region preferred'], icon: '📊' },
];

export default function CareersPage() {
    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">🚀 Join Us</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Careers at M²RL</h1>
                    <p className="page-banner-subtitle">Be part of India's smart sensor revolution. We're building a team of passionate innovators.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Hiring Notice */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, rgba(0,102,255,0.05), rgba(255,153,51,0.03))', borderRadius: '20px', border: '1px solid rgba(0,102,255,0.1)', marginBottom: '48px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
                        <h2 style={{ fontFamily: 'Poppins', fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px' }}>We're Hiring Soon!</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 24px' }}>
                            M²RL TechnologieS is in the pre-launch phase. We are looking for passionate engineers, researchers, and innovators to join our founding team. Share your interest now and we'll reach out when positions open.
                        </p>
                        <span className="badge badge-saffron" style={{ fontSize: '14px', padding: '8px 20px' }}>📢 Positions Opening Soon</span>
                    </div>

                    {/* Roles */}
                    <div className="section-header">
                        <div className="section-label">💼 Open Roles</div>
                        <h2 className="section-title">Planned Positions</h2>
                    </div>
                    <div className="grid-3" style={{ gap: '24px', marginBottom: '48px' }}>
                        {roles.map(({ title, type, skills, icon }) => (
                            <div key={title} className="card" style={{ padding: '28px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div style={{ fontSize: '2rem' }}>{icon}</div>
                                    <span className={`badge ${type === 'Internship' ? 'badge-saffron' : 'badge-blue'}`}>{type}</span>
                                </div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1rem', marginBottom: '14px' }}>{title}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {skills.map(s => (
                                        <span key={s} style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600, background: 'var(--off-white)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Interested? Drop us your details and we'll be in touch.</p>
                        <Link to="/contact" className="btn btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>📨 Express Your Interest</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
