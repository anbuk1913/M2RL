import { useState } from 'react';
import axios from 'axios';
import {
    Mail, MapPin, Phone, PhoneCall,
    Send, Loader2, CheckCircle2, XCircle,
    MessageSquare, Clock, Globe
} from 'lucide-react';

const contactInfo = [
    { Icon: Mail, label: 'Email Address', value: 'mrltechnologies408@gmail.com', href: 'mailto:mrltechnologies408@gmail.com', color: '#1a6fff' },
    { Icon: MapPin, label: 'Registered Office', value: 'Perattukkottai, Sivaganga, Tamil Nadu, India — 630702', color: '#f97316' },
    { Icon: Clock, label: 'Response Time', value: 'We respond within 24–48 business hours', color: '#10b981' },
    { Icon: Globe, label: 'Business Type', value: 'Sensor Manufacturing & R&D Startup — MSME Registered', color: '#8b5cf6' },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitMsg, setSubmitMsg] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true); setSubmitMsg(''); setIsError(false);
        try {
            const res = await axios.post('/api/contact', form);
            setSubmitMsg(res.data.message || 'Message sent successfully!');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            setIsError(true);
            setSubmitMsg('Something went wrong. Please email us directly.');
        } finally { setSubmitting(false); }
    };

    return (
        <div>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><PhoneCall size={13} />Get In Touch</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>Contact Us</h1>
                    <p className="page-banner-subtitle">Whether you're an investor, partner, researcher, or customer — we'd love to hear from you.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            {/* Contact Grid */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'start' }}>

                        {/* Contact Info */}
                        <div>
                            <div className="section-label" style={{ marginBottom: 18 }}><MessageSquare size={13} />Our Details</div>
                            <h2 style={{ fontFamily: 'Poppins', fontSize: '1.8rem', fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>Reach Out</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32, fontSize: '15px' }}>
                                Our team is ready to discuss partnerships, investments, research collaborations, or product inquiries.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {contactInfo.map(({ Icon, label, value, href, color }) => (
                                    <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 20px', borderRadius: 14, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
                                        <div style={{ width: 46, height: 46, borderRadius: 12, background: `${color}12`, border: `1px solid ${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Icon size={20} color={color} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: 4 }}>{label}</div>
                                            {href
                                                ? <a href={href} style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, lineHeight: 1.5 }}>{value}</a>
                                                : <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5 }}>{value}</p>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="card" style={{ padding: '40px 36px' }}>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.25rem', marginBottom: 24, color: 'var(--text-primary)' }}>Send a Message</h3>

                            {submitMsg && (
                                <div style={{ padding: '14px 16px', borderRadius: 12, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10, fontSize: '14px', background: isError ? 'rgba(239,68,68,0.06)' : 'rgba(16,185,129,0.07)', border: `1px solid ${isError ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}`, color: isError ? '#ef4444' : '#10b981' }}>
                                    {isError ? <XCircle size={16} /> : <CheckCircle2 size={16} />} {submitMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="grid-2" style={{ gap: 16 }}>
                                    <div className="form-group">
                                        <label className="form-label">Full Name</label>
                                        <input className="form-input" type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address</label>
                                        <input className="form-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input className="form-input" type="text" placeholder="What's this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-textarea" placeholder="Tell us how we can help you..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                                    {submitting ? <><Loader2 size={15} className="spin" /> Sending...</> : <><Send size={15} /> Send Message</>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
