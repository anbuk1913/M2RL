import { Link } from 'react-router-dom';

const areas = [
    { icon: '🌾', title: 'Agricultural Sensor R&D', desc: 'Research into precision agriculture — soil composition, micro-climate monitoring, crop stress detection, and smart irrigation control systems.' },
    { icon: '🏭', title: 'Industrial Automation R&D', desc: 'Development of industrial-grade sensors for temperature, vibration, gas detection, and machine health monitoring for manufacturing environments.' },
    { icon: '📡', title: 'IoT Protocol Research', desc: 'Exploring LoRaWAN, MQTT, and edge-computing protocols for deploying sensor networks in low-connectivity rural and industrial environments.' },
    { icon: '🤖', title: 'Embedded Systems Design', desc: 'Custom PCB design, firmware development, and embedded system architectures for real-time sensor data acquisition and processing.' },
    { icon: '🛰', title: 'Drone & Remote Sensing', desc: 'Integration of sensors with UAV platforms for aerial data collection in large agricultural fields and infrastructure inspection.' },
    { icon: '🔋', title: 'Energy Harvesting', desc: 'Research into solar-powered and low-power sensor systems for deployment in off-grid agricultural and remote industrial locations.' },
];

export default function RnDPage() {
    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">🔬 Research & Development</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Our R&D Division</h1>
                    <p className="page-banner-subtitle">Innovation-first research driving the next generation of affordable Indian sensor technology.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Intro */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
                        <div>
                            <div className="section-label">🧬 Our Philosophy</div>
                            <h2 style={{ fontFamily: 'Poppins', fontSize: '1.8rem', fontWeight: 800, marginTop: '12px', marginBottom: '20px' }}>Research-Driven Innovation</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                                At M²RL TechnologieS, R&D is not an afterthought — it is the foundation of everything we build. Our research division focuses on developing sensor technologies that are not only technically advanced, but also affordable and relevant to Indian conditions.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                                Our R&D planning is complete with a clear roadmap for agricultural, industrial, and IoT sensor development. We are now transitioning from research to manufacturing as funding comes into place.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <span className="badge badge-blue">✔ R&D Planning Completed</span>
                                <span className="badge badge-saffron">⚙ Pre-Manufacturing Phase</span>
                                <span className="badge badge-green">🔬 Research-Driven</span>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {[
                                { number: '5+', label: 'R&D Focus Areas' },
                                { number: '3', label: 'Product Categories' },
                                { number: '₹21L+', label: 'Investment Planned' },
                                { number: '100%', label: 'R&D Planning Done' },
                            ].map(({ number, label }) => (
                                <div key={label} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                                    <div style={{ fontFamily: 'Poppins', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '6px' }}>{number}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Areas */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">🔭 Research Areas</div>
                        <h2 className="section-title">Our Focus Areas</h2>
                        <p className="section-subtitle">Six key research domains shaping the future of M²RL TechnologieS</p>
                    </div>
                    <div className="grid-3" style={{ gap: '24px' }}>
                        {areas.map(({ icon, title, desc }) => (
                            <div key={title} className="card-glass" style={{ padding: '28px' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{icon}</div>
                                <h3 style={{ fontFamily: 'Poppins', color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>{title}</h3>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Poppins', fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>Collaborate with Our R&D Team</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 32px' }}>
                        Are you a researcher, institution, or industry partner interested in sensor technology collaboration? We'd love to connect with you.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>🤝 Start a Collaboration</Link>
                </div>
            </section>
        </div>
    );
}
