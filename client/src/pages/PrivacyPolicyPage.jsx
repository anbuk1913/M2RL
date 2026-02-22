import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: '1. Information We Collect',
            content: 'We collect information you voluntarily provide through our contact forms, including your name, email address, and message content. We do not collect sensitive personal information or payment data.',
        },
        {
            title: '2. How We Use Your Information',
            content: 'The information you provide is used solely to respond to your inquiries, facilitate business communications, and improve our services. We do not use your data for automated decision-making or profiling.',
        },
        {
            title: '3. Data Sharing & Disclosure',
            content: 'M²RL TechnologieS does not sell, trade, or rent your personal information to third parties. We may share data with service providers who assist us in our operations, subject to confidentiality agreements.',
        },
        {
            title: '4. Data Security',
            content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        },
        {
            title: '5. Cookies & Tracking',
            content: 'Our website may use basic cookies for functionality purposes. We do not use third-party tracking cookies or behavioral advertising systems. You can disable cookies in your browser settings.',
        },
        {
            title: '6. Your Rights',
            content: 'You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at mrltechnologies408@gmail.com.',
        },
        {
            title: '7. Data Retention',
            content: 'We retain your contact information only for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law.',
        },
        {
            title: '8. Changes to This Policy',
            content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes your acceptance.',
        },
        {
            title: '9. Contact Us',
            content: 'If you have questions or concerns about this Privacy Policy, please contact us at: mrltechnologies408@gmail.com — M²RL TechnologieS, Perattukkottai, Sivaganga, Tamil Nadu, India.',
        },
    ];

    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><ShieldCheck size={13} />Legal</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>Privacy Policy</h1>
                    <p className="page-banner-subtitle">How M²RL TechnologieS collects, uses, and protects your personal information.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ padding: '12px 20px', borderRadius: 12, background: 'rgba(26,111,255,0.05)', border: '1px solid rgba(26,111,255,0.14)', marginBottom: 48, display: 'flex', gap: 10, alignItems: 'center' }}>
                        <ShieldCheck size={18} color="#1a6fff" style={{ flexShrink: 0 }} />
                        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                            <strong>Effective Date:</strong> February 2025 &nbsp;|&nbsp; <strong>M²RL TechnologieS</strong> is committed to protecting your privacy.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                        {sections.map(({ title, content }) => (
                            <div key={title} style={{ padding: '28px 32px', borderRadius: 16, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
                                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                    <ChevronRight size={16} color="#1a6fff" style={{ marginTop: 4, flexShrink: 0 }} />
                                    <h3 style={{ fontFamily: 'Poppins', fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h3>
                                </div>
                                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 28 }}>{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
