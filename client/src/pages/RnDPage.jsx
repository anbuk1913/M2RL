import {
    Wheat, Factory, Radio, Bot, PlaneTakeoff, BatteryCharging,
    FlaskConical, Microscope, Telescope, Handshake,
    CheckCircle2, Settings2, Beaker, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const focusAreas = [
    {
        Icon: Wheat, title: 'Agricultural Sensor R&D',
        desc: 'Research into precision agriculture — soil sensing, crop health monitoring, micro-weather stations, and drone-integrated sensor packs for the Indian farming sector.',
        color: '#10b981', status: 'Active Research',
    },
    {
        Icon: Factory, title: 'Industrial IoT Sensors',
        desc: 'Development of gas detection, temperature-pressure, and vibration sensors for manufacturing environments and predictive maintenance systems.',
        color: '#1a6fff', status: 'In Design Phase',
    },
    {
        Icon: Radio, title: 'Wireless Sensor Networks',
        desc: 'Low-power LoRa, Zigbee, and NB-IoT communication modules for large-scale remote sensor deployments in agriculture and infrastructure.',
        color: '#8b5cf6', status: 'Prototyping',
    },
    {
        Icon: Bot, title: 'Embedded Systems & Robotics',
        desc: 'Custom PCB design, embedded firmware, and robotic automation systems for sensor-driven machines and autonomous field vehicles.',
        color: '#f97316', status: 'Active Research',
    },
    {
        Icon: PlaneTakeoff, title: 'Drone Sensor Integration',
        desc: 'Lightweight multi-spectral and environmental sensor payloads for agricultural and industrial drone platforms.',
        color: '#06b6d4', status: 'Conceptual Stage',
    },
    {
        Icon: BatteryCharging, title: 'Energy Harvesting R&D',
        desc: 'Solar and ambient energy harvesting circuits for self-powered remote sensor nodes used in field deployments.',
        color: '#eab308', status: 'Early Research',
    },
];

const milestones = [
    { Icon: CheckCircle2, text: 'Company registered & MSME certified (Udyam)' },
    { Icon: CheckCircle2, text: 'Startup India recognition received' },
    { Icon: CheckCircle2, text: 'NSWS portal registration completed' },
    { Icon: CheckCircle2, text: 'Land and three-phase power infrastructure secured' },
    { Icon: CheckCircle2, text: 'Core R&D team formed and research initiated' },
    { Icon: Settings2, text: 'Sensor prototype development — In Progress' },
    { Icon: Settings2, text: 'PCB design & testing lab setup — Planned' },
    { Icon: Beaker, text: 'Manufacturing launch — Pending Funding' },
];

export default function RnDPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><FlaskConical size={13} />Research & Development</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>R&D Division</h1>
                    <p className="page-banner-subtitle">Our research-first philosophy drives the innovation behind every M²RL sensor product — from concept to prototype to production.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Focus Areas */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Microscope size={13} />Research Areas</div>
                        <h2 className="section-title">Our R&D Focus Areas</h2>
                        <p className="section-subtitle">Six core research verticals driving the next generation of Indian sensor technology</p>
                    </div>
                    <div className="grid-3" style={{ gap: 24 }}>
                        {focusAreas.map(({ Icon, title, desc, color, status }) => (
                            <div key={title} className="card-glass" style={{ padding: '32px 28px', borderTop: `2px solid ${color}50` }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon size={24} color={color} />
                                    </div>
                                    <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: `${color}15`, color: color, border: `1px solid ${color}30`, whiteSpace: 'nowrap' }}>
                                        {status}
                                    </span>
                                </div>
                                <h3 style={{ fontFamily: 'Poppins', fontSize: '1.02rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>{title}</h3>
                                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'center' }}>
                        <div>
                            <div className="section-label"><Telescope size={13} />Progress</div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginTop: 14, marginBottom: 18 }}>R&D Milestones</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 28, fontSize: '15.5px' }}>
                                Our R&D journey has been methodical — starting with legal establishment and infrastructure, and moving towards full-scale prototype development and manufacturing readiness.
                            </p>
                            <Link to="/investor" className="btn btn-primary">
                                <ArrowRight size={16} /> View Investment Details
                            </Link>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {milestones.map(({ Icon, text }, i) => {
                                const done = i < 5;
                                return (
                                    <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', borderRadius: 12, background: done ? 'rgba(16,185,129,0.06)' : 'rgba(26,111,255,0.04)', border: `1px solid ${done ? 'rgba(16,185,129,0.18)' : 'rgba(26,111,255,0.12)'}` }}>
                                        <Icon size={18} color={done ? '#10b981' : '#1a6fff'} style={{ flexShrink: 0, marginTop: 1 }} />
                                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration CTA */}
            <section className="section section-dark">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-label" style={{ marginBottom: 18 }}><Handshake size={13} />Collaborate</div>
                    <h2 className="section-title" style={{ marginBottom: 16 }}>Partner in Research</h2>
                    <p className="section-subtitle" style={{ marginBottom: 36 }}>
                        We welcome academic institutions, tech companies, and individual researchers to collaborate on sensor R&D projects.
                    </p>
                    <Link to="/contact" className="btn btn-saffron">
                        <ArrowRight size={16} /> Reach Out for Collaboration
                    </Link>
                </div>
            </section>
        </div>
    );
}
