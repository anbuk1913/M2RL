const agriProducts = [
    { icon: '🌱', name: 'Soil Monitoring Sensor', desc: 'Real-time soil moisture, pH, and nutrient level monitoring for precision agriculture.' },
    { icon: '🌿', name: 'Crop Health Sensor', desc: 'Detect crop stress, disease, and health conditions using embedded environment sensors.' },
    { icon: '💧', name: 'Smart Irrigation Controller', desc: 'Automated irrigation system with sensor-driven water management and remote control.' },
];

const industrialProducts = [
    { icon: '🌡', name: 'Temperature Monitoring Sensor', desc: 'Industrial-grade temperature sensors for manufacturing processes and equipment health.' },
    { icon: '🔬', name: 'Gas Detection System', desc: 'Detect hazardous gases in industrial environments with real-time alerts and logging.' },
    { icon: '⚙', name: 'Machine Health Monitor', desc: 'Vibration and anomaly detection sensors to predict machine failures before they occur.' },
];

const iotProducts = [
    { icon: '☁', name: 'Cloud Data Monitoring', desc: 'Stream sensor data to cloud platforms with dashboards and historical analytics.' },
    { icon: '📍', name: 'Real-time Tracking', desc: 'GPS and telemetry-based real-time asset and environment tracking.' },
    { icon: '📱', name: 'Mobile App Integration', desc: 'View sensor data, receive alerts, and control systems from mobile applications.' },
];

const futureProducts = [
    { icon: '🛰', name: 'Drone Sensor Integration', desc: 'Specialized sensors designed for drone platforms for aerial agricultural and infrastructure inspection.' },
    { icon: '🏭', name: 'Smart Factory Automation Kit', desc: 'End-to-end sensor kits for smart manufacturing environments and digital twin integration.' },
    { icon: '🔧', name: 'Custom Sensor Development', desc: 'Bespoke sensor design and development tailored to specific industrial or research requirements.' },
];

function ProductCard({ icon, name, desc }) {
    return (
        <div className="card" style={{ display: 'flex', gap: '16px', padding: '24px' }}>
            <div style={{
                width: '52px', height: '52px', flexShrink: 0,
                borderRadius: '14px', background: 'linear-gradient(135deg, rgba(0,102,255,0.1), rgba(255,153,51,0.05))',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                border: '1px solid rgba(0,102,255,0.15)'
            }}>
                {icon}
            </div>
            <div>
                <h4 style={{ fontFamily: 'Poppins', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{name}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
            </div>
        </div>
    );
}

function CategorySection({ label, icon, title, products, dark }) {
    return (
        <section className={`section ${dark ? 'section-dark' : 'section-light'}`}>
            <div className="container">
                <div className="section-header">
                    <div className="section-label">{icon} {label}</div>
                    <h2 className="section-title">{title}</h2>
                </div>
                <div className="grid-3" style={{ gap: '24px' }}>
                    {products.map((p) => (
                        dark ? (
                            <div key={p.name} className="card-glass" style={{ display: 'flex', gap: '16px', padding: '24px' }}>
                                <div style={{
                                    width: '52px', height: '52px', flexShrink: 0,
                                    borderRadius: '14px', background: 'rgba(0,102,255,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                                }}>
                                    {p.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'Poppins', color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{p.name}</h4>
                                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.desc}</p>
                                </div>
                            </div>
                        ) : (
                            <ProductCard key={p.name} {...p} />
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ProductsPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">🔬 Products</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Our Sensor Products</h1>
                    <p className="page-banner-subtitle">Precision sensors for agriculture, industry, and IoT — crafted with research-driven innovation.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Development Notice */}
            <section className="section section-light">
                <div className="container">
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255,153,51,0.08), rgba(0,102,255,0.05))',
                        border: '1px solid rgba(255,153,51,0.25)',
                        borderRadius: '20px',
                        padding: '40px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔬</div>
                        <h2 style={{ fontFamily: 'Poppins', fontSize: '1.6rem', fontWeight: 700, marginBottom: '12px' }}>Currently in Development Phase</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 24px' }}>
                            We are currently in our R&D and pre-manufacturing phase. Product launch is coming soon! The products listed below represent our planned lineup, designed for real-world agricultural, industrial, and IoT applications.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <span className="badge badge-saffron">⚙ R&D Planning Completed</span>
                            <span className="badge badge-blue">🏭 Manufacturing Setup – Funding Stage</span>
                            <span className="badge badge-green">🚀 Launch Coming Soon</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Sections */}
            <CategorySection label="Agricultural" icon="🌾" title="Agricultural Sensors" products={agriProducts} dark={false} />
            <CategorySection label="Industrial" icon="🏭" title="Industrial Sensors" products={industrialProducts} dark={true} />
            <CategorySection label="IoT Systems" icon="📡" title="IoT Monitoring Systems" products={iotProducts} dark={false} />

            {/* Future Products */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">🚀 Future</div>
                        <h2 className="section-title">Future Products</h2>
                        <p className="section-subtitle">Our roadmap beyond the initial product launch</p>
                    </div>
                    <div className="grid-3" style={{ gap: '24px' }}>
                        {futureProducts.map(({ icon, name, desc }) => (
                            <div key={name} className="card-glass" style={{ textAlign: 'center', padding: '36px 24px' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{icon}</div>
                                <h3 style={{ color: '#fff', fontFamily: 'Poppins', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>{name}</h3>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
