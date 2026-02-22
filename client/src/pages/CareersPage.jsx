import { Link } from 'react-router-dom';
import {
    Bot, Cpu, FlaskConical, Palette, Globe, Rocket,
    Target, Send, CheckCircle2, ArrowRight
} from 'lucide-react';

const roles = [
    { Icon: Bot, title: 'Embedded Systems Engineer', type: 'Full-time', skills: ['C/C++', 'Arduino', 'Raspberry Pi', 'RTOS'], color: '#1a6fff' },
    { Icon: FlaskConical, title: 'R&D Sensor Specialist', type: 'Full-time', skills: ['Analog Sensors', 'Signal Processing', 'PCB Design'], color: '#10b981' },
    { Icon: Cpu, title: 'IoT Systems Developer', type: 'Full-time', skills: ['MQTT', 'LoRa', 'Node.js', 'Cloud APIs'], color: '#8b5cf6' },
    { Icon: Palette, title: 'UI/UX Product Designer', type: 'Part-time', skills: ['Figma', 'Prototyping', 'Design Systems'], color: '#f97316' },
    { Icon: Globe, title: 'Web Developer', type: 'Freelance', skills: ['React', 'Vite', 'Node.js', 'CSS'], color: '#06b6d4' },
];

const perks = [
    'Work on cutting-edge Indian sensor technology',
    'Direct involvement in product R&D from day one',
    'Flexible and growth-oriented work environment',
    'Be part of a Make in India manufacturing startup',
    'Shape the culture and engineering practices early on',
];

export default function CareersPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><Rocket size={13} />Join Our Team</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>Build the Future With Us</h1>
                    <p className="page-banner-subtitle">M²RL TechnologieS is growing its core team. We are looking for talented engineers, designers, and innovators passionate about sensor technology and the Make in India movement.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Open Roles */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Target size={13} />Opportunities</div>
                        <h2 className="section-title">Open Roles</h2>
                        <p className="section-subtitle">We are in the hiring planning stage — positions open upon funding milestone completion</p>
                    </div>
                    <div className="grid-auto">
                        {roles.map(({ Icon, title, type, skills, color }) => (
                            <div key={title} className="card" style={{ padding: '32px 26px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
                                    <div style={{ width: 50, height: 50, borderRadius: 14, background: `${color}14`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={24} color={color} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.97rem', color: 'var(--text-primary)', marginBottom: 6 }}>{title}</h3>
                                        <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: `${color}12`, color: color, border: `1px solid ${color}28`, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{type}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {skills.map(s => (
                                        <span key={s} style={{ fontSize: '11.5px', padding: '3px 10px', borderRadius: 100, background: 'var(--light-bg)', border: '1px solid var(--border)', color: 'var(--text-secondary)', fontWeight: 500 }}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'center' }}>
                        <div>
                            <div className="section-label" style={{ marginBottom: 14 }}><CheckCircle2 size={13} />Why M²RL</div>
                            <h2 className="section-title" style={{ marginTop: 0, marginBottom: 18 }}>Why Join Us?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 28, fontSize: '15px' }}>
                                Joining M²RL means being a founding-stage team member in a mission-driven startup with a clear product roadmap and real manufacturing infrastructure already in place.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                <Send size={16} /> Express Your Interest
                            </Link>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {perks.map((perk, i) => (
                                <div key={perk} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 18px', borderRadius: 12, background: 'rgba(26,111,255,0.07)', border: '1px solid rgba(26,111,255,0.14)', animationDelay: `${i * 0.08}s` }}>
                                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: 1.5 }}>{perk}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(26,111,255,0.1),rgba(249,115,22,0.08))', border: '1px solid rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                        <Target size={36} color="#1a6fff" />
                    </div>
                    <h2 className="section-title" style={{ marginBottom: 16 }}>Don't See Your Role?</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.75, fontSize: '15px' }}>
                        We welcome initiative. If you're passionate about sensor technology and believe you can contribute, reach out with your profile.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ fontSize: '15.5px', padding: '14px 36px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        <ArrowRight size={16} /> Express Your Interest
                    </Link>
                </div>
            </section>
        </div>
    );
}
