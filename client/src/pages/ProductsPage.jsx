import {
    Sprout, Leaf, Droplets, Thermometer, FlaskConical,
    Settings2, Cloud, MapPin, Smartphone, PlaneTakeoff,
    Factory, Wrench, Rocket, Cpu, Building2, Clock, ChevronRight
} from 'lucide-react';

const agriProducts = [
    { Icon: Sprout, name: 'Soil Monitoring Sensor', desc: 'Real-time soil moisture, pH, and nutrient level monitoring for precision agriculture.' },
    { Icon: Leaf, name: 'Crop Health Sensor', desc: 'Monitors crop growth indicators, leaf health, and environmental stress factors.' },
    { Icon: Droplets, name: 'Irrigation Control System', desc: 'Smart irrigation sensors and automated valve controllers for water efficiency.' },
    { Icon: Thermometer, name: 'Weather Station Module', desc: 'On-field micro-weather stations for real-time climate monitoring.' },
    { Icon: FlaskConical, name: 'Fertilizer Dosing Sensor', desc: 'Automated nutrient dosing sensors for smart fertilizer management.' },
    { Icon: Settings2, name: 'Drone Agri-Sensor Pack', desc: 'Lightweight sensor kits for drone-based agricultural surveillance.' },
];

const iotProducts = [
    { Icon: Cloud, name: 'Industrial IoT Gateway', desc: 'Edge computing gateway for industrial sensor data aggregation.' },
    { Icon: MapPin, name: 'Asset Tracking Module', desc: 'GPS + sensor-integrated tracking for logistics and field assets.' },
    { Icon: Smartphone, name: 'Smart Factory Monitor', desc: 'Machine health and production KPI monitoring via mobile dashboard.' },
    { Icon: PlaneTakeoff, name: 'Drone Data Hub', desc: 'Central hub for aggregating multi-drone sensor telemetry.' },
    { Icon: Factory, name: 'Gas & Hazard Detector', desc: 'Industrial-grade gas leak and environmental hazard detection sensors.' },
    { Icon: Wrench, name: 'Predictive Maintenance Kit', desc: 'Vibration and thermal sensors for machinery predictive maintenance.' },
];

function ProductCard({ Icon, name, desc, color = '#1a6fff' }) {
    return (
        <div className="card" style={{ padding: '28px 24px', transition: 'all 0.3s' }}>
            <div style={{ width: 50, height: 50, borderRadius: 14, background: `${color}14`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={24} color={color} />
            </div>
            <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8, color: 'var(--text-primary)' }}>{name}</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><Cpu size={13} />Our Products</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>Sensor Product Lineup</h1>
                    <p className="page-banner-subtitle">Smart, affordable sensors engineered for Indian agriculture, industry, and IoT applications.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Development Notice */}
            <section className="section section-light" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div style={{ textAlign: 'center', padding: '40px 32px', background: 'linear-gradient(135deg,rgba(26,111,255,0.05),rgba(249,115,22,0.03))', borderRadius: 20, border: '1px solid rgba(26,111,255,0.12)', marginBottom: 56 }}>
                        <div style={{ width: 60, height: 60, borderRadius: 18, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                            <Clock size={26} color="#1a6fff" />
                        </div>
                        <h2 style={{ fontFamily: 'Poppins', fontSize: '1.7rem', fontWeight: 700, marginBottom: 12 }}>Products Under Development</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 620, margin: '0 auto 22px', fontSize: '15px' }}>
                            M²RL TechnologieS is in the R&D and pre-manufacturing phase. The products listed below represent our planned lineup and are currently being engineered. Full availability follows funding-stage completion.
                        </p>
                        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <span className="badge badge-saffron" style={{ padding: '6px 16px', fontSize: 12 }}>
                                <Rocket size={12} /> Manufacturing Pending Funding
                            </span>
                            <span className="badge badge-blue" style={{ padding: '6px 16px', fontSize: 12 }}>
                                <FlaskConical size={12} /> R&D In Progress
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agricultural Sensors */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Sprout size={13} />Category 01</div>
                        <h2 className="section-title">Agricultural Sensor Systems</h2>
                        <p className="section-subtitle">Precision sensors for smart farming, irrigation, and crop health monitoring</p>
                    </div>
                    <div className="grid-3">
                        {agriProducts.map(p => <ProductCard key={p.name} {...p} color="#10b981" />)}
                    </div>
                </div>
            </section>

            {/* Industrial & IoT */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Factory size={13} />Category 02</div>
                        <h2 className="section-title">Industrial &amp; IoT Sensors</h2>
                        <p className="section-subtitle">Reliable sensors for industrial automation, monitoring, and smart infrastructure</p>
                    </div>
                    <div className="grid-3">
                        {iotProducts.map(({ Icon, name, desc }) => (
                            <div key={name} className="card-glass" style={{ padding: '28px 24px' }}>
                                <div style={{ width: 50, height: 50, borderRadius: 14, background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                                    <Icon size={24} color="#4d8fff" />
                                </div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8, color: '#fff' }}>{name}</h3>
                                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-label" style={{ marginBottom: 18 }}><Building2 size={13} />Partner With Us</div>
                    <h2 className="section-title" style={{ marginBottom: 16 }}>Interested in Our Sensors?</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', fontSize: '15px', lineHeight: 1.7 }}>
                        We welcome early partnerships, pilot projects, and investment discussions. Reach out to explore collaboration.
                    </p>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn btn-primary"><ChevronRight size={16} />Get in Touch</a>
                        <a href="/rnd" className="btn btn-outline"><FlaskConical size={16} />View R&D Work</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
