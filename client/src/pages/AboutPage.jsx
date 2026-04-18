import { Link } from 'react-router-dom';
import {
    Building2, User, MapPin, Zap, Droplets, Factory,
    Globe, Target, HardHat, Users, IndianRupee, ChevronRight
} from 'lucide-react';

const team = [
    { name: 'Logesh', role: 'Founder', desc: "Visionary leading M²RL's sensor innovation journey.", img: '/employees/lokesh.png' },
    { name: 'Anbukumar', role: 'Website Developer', desc: 'Building the digital presence of M²RL.' },
    { name: 'Jayaseelan', role: 'CEO', desc: 'Steering business strategy and growth initiatives.' },
    { name: 'Mis. Lokesh', role: 'Managing Director', desc: 'Overseeing operations and R&D management.' },
    { name: 'Kaviya', role: 'Design Support', desc: 'Leading product and communication design.' },
    { name: 'Priyadharshini', role:'Human Resources', desc:'Managing recruitment, employee relations, and organizational development to build a strong and positive workplace culture.', img:"/employees/priyadharshini.png" },
    { name: 'Prabhakar', role: 'Supporting', desc: 'Supporting core operations and project execution, ensuring smooth coordination and contributing to overall team efficiency.' },
    { name: 'Venuvignesh', role: 'CA', desc: 'Childhood friend & early supporter of M²RL TechnologieS, contributed ideas and planning support, CA license to be applied after 3 years.' }
    
];

const infra = [
    { Icon: MapPin, label: 'Land Available', desc: 'Ready plot for manufacturing facility in Perattukkottai, Sivaganga.', color: '#f97316' },
    { Icon: Zap, label: 'Three-Phase Power', desc: 'Full three-phase electrical connection established.', color: '#eab308' },
    { Icon: Droplets, label: 'Water Facility', desc: 'Water supply infrastructure is in place and ready.', color: '#3b82f6' },
    { Icon: Factory, label: 'Manufacturing Planned', desc: 'Machinery finalized; manufacturing setup pending final funding.', color: '#8b5cf6' },
];

const missionItems = [
    'Develop cost-effective smart sensors',
    'Support the Make in India initiative',
    'Promote research-driven innovation',
    'Create employment through technology manufacturing',
];

export default function AboutPage() {
    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
    <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
            <div className="section-label"><Building2 size={13} />About Us</div>
            <h1 className="page-banner-title" style={{ marginTop: 14 }}>M²RL TechnologieS</h1>
            <p className="page-banner-subtitle">Emerging sensor manufacturing & R&D startup from Tamil Nadu, India, driving affordable innovation for agriculture, industry, and IoT.</p>
        </div>
        <div style={{ flexShrink: 0 }}>
            <h1><a target='_blank' href="https://anbukumar.com" >Developed By Anbu</a></h1>
        </div>
    </div>
</div>
            <div className="tricolor-stripe" />

            {/* Company Overview */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
                        <div>
                            <div className="section-label"><Building2 size={13} />Company Overview</div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginTop: 14, marginBottom: 20 }}>Who We Are</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 16, fontSize: '15.5px' }}>
                                M²RL TechnologieS is an emerging sensor manufacturing and Research & Development startup headquartered in Perattukkottai, Sivaganga, Tamil Nadu, India. Our company was founded with a clear purpose: to build smart, affordable, and reliable sensor solutions that power India's agriculture, industrial, and IoT sectors.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 28, fontSize: '15.5px' }}>
                                We are registered under <strong>Udyam (MSME)</strong>, <strong>Startup India</strong>, and <strong>NSWS</strong>, with an active bank account, ready land and infrastructure, three-phase power supply, and fully planned R&D operations.
                            </p>
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                                <span className="badge badge-saffron">✔ Udyam MSME</span>
                                <span className="badge badge-green">✔ Startup India</span>
                                <span className="badge badge-blue">✔ NSWS Registered</span>
                                <span className="badge badge-blue">✔ Bank Account Active</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ display: 'inline-block', padding: 6, borderRadius: 28, background: 'linear-gradient(135deg,rgba(26,111,255,0.2),rgba(249,115,22,0.15))', boxShadow: '0 20px 60px rgba(26,111,255,0.18)' }}>
                                <img src="/logo.jpeg" alt="M²RL TechnologieS" style={{ width: 200, borderRadius: 22, display: 'block', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><Target size={13} />Our Direction</div>
                        <h2 className="section-title">Vision &amp; Mission</h2>
                    </div>
                    <div className="grid-2" style={{ gap: 28 }}>
                        {/* Vision */}
                        <div className="card-glass" style={{ borderLeft: '3px solid #1a6fff', padding: '40px 36px' }}>
                            <div style={{ marginBottom: 20, width: 56, height: 56, borderRadius: 16, background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Globe size={26} color="#4d8fff" />
                            </div>
                            <h3 style={{ fontFamily: 'Poppins', fontSize: '1.3rem', color: '#fff', marginBottom: 16, fontWeight: 700 }}>Our Vision</h3>
                            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontSize: '15px' }}>
                                To become a trusted Indian sensor manufacturing company delivering innovative and reliable technology solutions globally — a brand that represents quality, affordability, and the spirit of Indian engineering.
                            </p>
                        </div>
                        {/* Mission */}
                        <div className="card-glass" style={{ borderLeft: '3px solid #f97316', padding: '40px 36px' }}>
                            <div style={{ marginBottom: 20, width: 56, height: 56, borderRadius: 16, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Target size={26} color="#f97316" />
                            </div>
                            <h3 style={{ fontFamily: 'Poppins', fontSize: '1.3rem', color: '#fff', marginBottom: 16, fontWeight: 700 }}>Our Mission</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {missionItems.map(item => (
                                    <li key={item} style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.7)', fontSize: '15px', alignItems: 'flex-start' }}>
                                        <ChevronRight size={16} color="#f97316" style={{ marginTop: 2, flexShrink: 0 }} />
                                        {item}
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
                        <div className="section-label"><Users size={13} />Leadership</div>
                        <h2 className="section-title">Our Team</h2>
                        <p className="section-subtitle">The passionate people behind M²RL TechnologieS</p>
                    </div>
                    <div className="grid-auto">
                        {team.map(({ name, role, desc, img }) => (
                            <div key={name} className="card" style={{ textAlign: 'center', padding: '36px 28px' }}>
                                <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(135deg,#1a6fff,#0052e6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: '0 8px 28px rgba(26,111,255,0.3)', border: '2px solid rgba(26,111,255,0.3)' }}>
                                    {img ? (
                                        <img src={img} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                    ) : (
                                        <User size={30} color="#fff" />
                                    )}
                                </div>
                                <h3 style={{ fontFamily: 'Poppins', fontSize: '1.05rem', fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>{name}</h3>
                                <span className="badge badge-blue" style={{ marginBottom: 14, display: 'inline-block' }}>{role}</span>
                                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><HardHat size={13} />Infrastructure</div>
                        <h2 className="section-title">Our Facilities</h2>
                        <p className="section-subtitle">Ready infrastructure to support large-scale sensor manufacturing</p>
                    </div>
                    <div className="grid-4" style={{ gap: 22 }}>
                        {infra.map(({ Icon, label, desc, color }) => (
                            <div key={label} className="card-glass" style={{ padding: '32px 24px', textAlign: 'center' }}>
                                <div style={{ width: 58, height: 58, borderRadius: 16, background: `${color}18`, border: `1px solid ${color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', transition: 'all 0.3s' }}>
                                    <Icon size={26} color={color} />
                                </div>
                                <h3 style={{ color: '#fff', fontFamily: 'Poppins', fontSize: '1rem', fontWeight: 700, marginBottom: 10 }}>{label}</h3>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: 48, textAlign: 'center' }}>
                        <Link to="/investor" className="btn btn-saffron" style={{ gap: 8 }}>
                            <IndianRupee size={16} /> View Investor Information
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
