import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitMsg, setSubmitMsg] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitMsg('');
        try {
            const res = await axios.post('/api/contact', form);
            setSubmitMsg(res.data.message);
            setIsError(false);
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch {
            setSubmitMsg('Something went wrong. Please email us directly at mrltechnologies408@gmail.com');
            setIsError(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">📞 Reach Out</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Contact Us</h1>
                    <p className="page-banner-subtitle">Have a query, partnership proposal, or investment interest? We'd love to hear from you.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Contact Info + Form */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

                        {/* Info */}
                        <div>
                            <h2 style={{ fontFamily: 'Poppins', fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>
                                Get In Touch
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {[
                                    { icon: '📧', label: 'Email Address', value: 'mrltechnologies408@gmail.com', href: 'mailto:mrltechnologies408@gmail.com' },
                                    { icon: '📍', label: 'Office Location', value: 'Perattukkottai, Sivaganga, Tamil Nadu, India – 630 411' },
                                    { icon: '🕒', label: 'Working Hours', value: 'Monday – Saturday: 9:00 AM – 6:00 PM IST' },
                                    { icon: '🏭', label: 'Company', value: 'M²RL TechnologieS (MSME / Startup India Registered)' },
                                ].map(({ icon, label, value, href }) => (
                                    <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '50px', height: '50px', flexShrink: 0,
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, rgba(0,102,255,0.08), rgba(0,102,255,0.04))',
                                            border: '1px solid rgba(0,102,255,0.15)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem'
                                        }}>
                                            {icon}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{label}</div>
                                            {href ? (
                                                <a href={href} style={{ color: 'var(--accent)', fontSize: '15px', fontWeight: 500 }}>{value}</a>
                                            ) : (
                                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social */}
                            <div style={{ marginTop: '32px' }}>
                                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: '16px', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Connect Online
                                </h4>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    {[
                                        { label: '▶ YouTube', href: 'https://www.youtube.com/@M2RLTechnologieS', color: '#ff0000' },
                                        { label: 'f Facebook', href: 'https://www.facebook.com/profile.php?id=61584367014521', color: '#1877f2' },
                                        { label: '📸 Instagram', href: 'https://www.instagram.com/mrl_technologies_/', color: '#c13584' },
                                        { label: 'in LinkedIn', href: 'https://www.linkedin.com/in/m²rl-t-bbb405290', color: '#0a66c2' },
                                    ].map(({ label, href, color }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                                padding: '8px 14px', borderRadius: '8px',
                                                border: `1px solid ${color}30`,
                                                color: color,
                                                fontSize: '13px', fontWeight: 600,
                                                transition: 'all 0.2s',
                                                background: `${color}10`,
                                            }}
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
                                <h3 style={{ fontFamily: 'Poppins', fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>Send a Message</h3>
                                {submitMsg && (
                                    <div style={{
                                        padding: '16px', borderRadius: '10px', marginBottom: '20px',
                                        background: isError ? 'rgba(220,38,38,0.08)' : 'rgba(19,136,8,0.08)',
                                        border: `1px solid ${isError ? 'rgba(220,38,38,0.25)' : 'rgba(19,136,8,0.25)'}`,
                                        color: isError ? '#dc2626' : '#138808',
                                        fontSize: '14px'
                                    }}>
                                        {isError ? '❌' : '✅'} {submitMsg}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Full Name *</label>
                                        <input className="form-input" id="contact-name" type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address *</label>
                                        <input className="form-input" id="contact-email" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <input className="form-input" id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message *</label>
                                        <textarea className="form-textarea" id="contact-message" placeholder="Tell us about your requirement or query..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ minHeight: '140px' }} />
                                    </div>
                                    <button type="submit" id="contact-submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                                        {submitting ? '⏳ Sending...' : '📤 Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="section section-dark" style={{ padding: '40px 0 0' }}>
                <div className="container" style={{ marginBottom: '0' }}>
                    <div className="section-header">
                        <div className="section-label">📍 Location</div>
                        <h2 className="section-title">Find Us Here</h2>
                    </div>
                </div>
                <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                    <iframe
                        title="M²RL TechnologieS Location"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62785.74066748244!2d78.76543937294914!3d10.131596268773024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00b40a79ba92eb%3A0x5ef4714d8ab2cd92!2sSivaganga%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    />
                </div>
            </section>
        </div>
    );
}
