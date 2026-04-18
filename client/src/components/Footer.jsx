import { Link } from 'react-router-dom';
import {
    Building2, Mail, MapPin, Phone,
    Youtube, Facebook, Instagram, Linkedin,
    ShieldCheck, Rocket, ExternalLink, Twitter,
    Icon
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";



const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'R&D Division', path: '/rnd' },
    { label: 'Investor Info', path: '/investor' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
];

const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
];

const socials = [
    { Icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@M2RLTechnologieS', color: '#ff0000', bg: 'rgba(255,0,0,0.1)' },
    { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584367014521', color: '#1877f2', bg: 'rgba(24,119,242,0.1)' },
    { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mrl_technologies_/', color: '#e1306c', bg: 'rgba(225,48,108,0.1)' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/m²rl-t-bbb405290', color: '#0a66c2', bg: 'rgba(10,102,194,0.1)' },
    { Icon: Twitter, label: 'X', href: 'https://x.com/MRLTechnologieS', color: '#000000', bg: 'rgba(221, 221, 221, 0.1)  '},
    { Icon: FaWhatsapp, label: "Whatsapp", href: 'https://wa.me/918148918514', color: 'green', bg: 'rgba(0,255,0,0.1)' }
];

export default function Footer() {
    return (
        <footer style={{ background: 'linear-gradient(180deg,#040e20 0%,#020b18 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            {/* Top glow line */}
            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(26,111,255,0.4),rgba(249,115,22,0.3),transparent)' }} />

            {/* Background mesh */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 20% 0%, rgba(26,111,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(249,115,22,0.05) 0%, transparent 50%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 64, paddingBottom: 32 }}>

                {/* Main Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '48px 40px', marginBottom: 56 }}>

                    {/* Brand */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                            <img src="/logo.jpeg" alt="M²RL" style={{ width: 44, height: 44, borderRadius: 10, border: '1.5px solid rgba(26,111,255,0.4)', boxShadow: '0 0 16px rgba(26,111,255,0.25)' }} />
                            <div>
                                <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>M²RL TechnologieS</div>
                                <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.3px' }}>Smart Sensor Innovation</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, marginBottom: 20 }}>
                            An emerging sensor manufacturing & R&D startup from Tamil Nadu, building affordable and reliable sensor solutions for India's future.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <span className="badge badge-saffron" style={{ alignSelf: 'flex-start', fontSize: '11px' }}>
                                <Building2 size={11} /> MSME Registered
                            </span>
                            <span className="badge badge-green" style={{ alignSelf: 'flex-start', fontSize: '11px' }}>
                                <Rocket size={11} /> Startup India
                            </span>
                            <span className="badge badge-blue" style={{ alignSelf: 'flex-start', fontSize: '11px' }}>
                                <ShieldCheck size={11} /> Made in India
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {navLinks.map(({ label, path }) => (
                                <li key={path}>
                                    <Link to={path} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s', paddingBottom: 1 }}
                                        onMouseEnter={e => e.target.style.color = '#fff'}
                                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.62)'}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {[
                                { Icon: Mail, label: 'Email', value: 'mrltechnologies408@gmail.com', href: 'mailto:mrltechnologies408@gmail.com', color: '#1a6fff' },
                                { Icon: MapPin, label: 'Office', value: 'Perattukkottai, Sivaganga, Tamil Nadu – 630702', color: '#f97316' },
                            ].map(({ Icon, label, value, href, color }) => (
                                <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                                    <div style={{ width: 34, height: 34, borderRadius: 9, background: `${color}14`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={15} color={color} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.33)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: 2 }}>{label}</div>
                                        {href
                                            ? <a href={href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.45 }}>{value}</a>
                                            : <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>{value}</p>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>Follow Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {socials.map(({ Icon, label, href, color, bg }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 10, background: bg, border: `1px solid ${color}25`, transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.borderColor = `${color}60`; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = `${color}25`; }}
                                >
                                    <Icon size={16} color={color} />
                                    <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{label}</span>
                                    <ExternalLink size={11} color="rgba(255,255,255,0.25)" style={{ marginLeft: 'auto' }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

                {/* Bottom Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.28)' }}>
                        © {new Date().getFullYear()} M²RL TechnologieS. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: 20 }}>
                        {legalLinks.map(({ label, path }) => (
                            <Link key={path} to={path} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
                            >{label}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
