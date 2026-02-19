import { Link } from 'react-router-dom';

const socialLinks = [
    { icon: '▶', label: 'YouTube', href: 'https://www.youtube.com/@M2RLTechnologieS', color: '#ff0000' },
    { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584367014521', color: '#1877f2' },
    { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/mrl_technologies_/', color: '#e1306c' },
    { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/m²rl-t-bbb405290', color: '#0a66c2' },
];

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
    { label: 'R&D Division', path: '/rnd' },
    { label: 'Investor Info', path: '/investor' },
    { label: 'Careers', path: '/careers' },
];

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #060d1a 0%, #040a15 100%)',
            color: '#fff',
            paddingTop: '64px',
            paddingBottom: '0',
        }}>
            {/* Tricolor Top Stripe */}
            <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #ff9933 33.33%, #fff 33.33%, #fff 66.66%, #138808 66.66%)',
                marginBottom: '48px'
            }} />

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', paddingBottom: '48px' }}>

                    {/* Brand Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <img
                                src="/logo.jpeg"
                                alt="M²RL Logo"
                                style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover', border: '2px solid rgba(0,102,255,0.4)' }}
                            />
                            <div>
                                <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '16px', lineHeight: 1.2 }}>M²RL TechnologieS</div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5px' }}>Smart Sensor Innovation</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>
                            Emerging sensor manufacturing & R&D startup based in Tamil Nadu, India. Smart & Affordable Sensor Innovation – Made in India 🇮🇳
                        </p>

                        {/* MSME Badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                            <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'rgba(255,153,51,0.15)', color: '#ff9933', border: '1px solid rgba(255,153,51,0.3)' }}>
                                🏭 MSME Registered
                            </span>
                            <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'rgba(19,136,8,0.15)', color: '#4caf50', border: '1px solid rgba(19,136,8,0.3)' }}>
                                🚀 Startup India
                            </span>
                        </div>

                        {/* Social */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {socialLinks.map(({ icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={label}
                                    className="social-link"
                                    style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {quickLinks.map(({ label, path }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.target.style.color = '#0066ff'}
                                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                                    >
                                        → {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Areas */}
                    <div>
                        <h4 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>
                            Core Solutions
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {['🌾 Agricultural Sensors', '🏭 Industrial Automation', '🤖 Robotics & Embedded', '📡 IoT Monitoring', '🛰 Drone Data Integration'].map(item => (
                                <li key={item} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>
                            Contact Info
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '16px' }}>📧</span>
                                <div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>Email</div>
                                    <a href="mailto:mrltechnologies408@gmail.com" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                                        mrltechnologies408@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '16px' }}>📍</span>
                                <div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>Location</div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                                        Perattukkottai, Sivaganga,<br />Tamil Nadu, India
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '16px' }}>🕒</span>
                                <div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>Working Hours</div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Mon–Sat: 9:00 AM – 6:00 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                padding: '20px 0',
                background: 'rgba(0,0,0,0.3)'
            }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                        © 2025 M²RL TechnologieS. All rights reserved. Made in India 🇮🇳
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {[{ label: 'Privacy Policy', path: '/privacy' }, { label: 'Terms & Conditions', path: '/terms' }].map(({ label, path }) => (
                            <Link key={path} to={path} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}
                                onMouseEnter={e => e.target.style.color = '#0066ff'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
