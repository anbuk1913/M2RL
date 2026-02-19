export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: '1. Information We Collect',
            content: 'We collect information you voluntarily provide through our contact form, including your name, email address, phone number, and message content. We do not collect any personal information automatically unless you submit a form.'
        },
        {
            title: '2. How We Use Your Information',
            content: 'The information we collect is used solely to respond to your queries, provide information about our products and services, and improve our customer communication. We do not use your data for automated decision-making or profiling.'
        },
        {
            title: '3. Data Storage & Security',
            content: 'Contact form submissions are processed through our secure backend server. We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, or disclosure.'
        },
        {
            title: '4. Data Sharing',
            content: 'M²RL TechnologieS does not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (e.g., email services) only as necessary to respond to your inquiry.'
        },
        {
            title: '5. Cookies',
            content: 'Our website is a static informational website and does not use tracking cookies. We may use essential session cookies for basic website functionality only.'
        },
        {
            title: '6. Your Rights',
            content: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, please contact us at mrltechnologies408@gmail.com.'
        },
        {
            title: '7. Changes to This Policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last Updated" date on this page.'
        },
        {
            title: '8. Contact',
            content: 'If you have questions about this Privacy Policy, please contact us at: mrltechnologies408@gmail.com — M²RL TechnologieS, Perattukkottai, Sivaganga, Tamil Nadu, India.'
        },
    ];

    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">🔐 Legal</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Privacy Policy</h1>
                    <p className="page-banner-subtitle">Last Updated: February 2025</p>
                </div>
            </div>
            <div className="tricolor-stripe" />
            <section className="section section-light">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card" style={{ marginBottom: '24px', background: 'rgba(0,102,255,0.04)', border: '1px solid rgba(0,102,255,0.15)' }}>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                M²RL TechnologieS ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This policy explains how we handle information collected through our website.
                            </p>
                        </div>
                        {sections.map(({ title, content }) => (
                            <div key={title} style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', coulour: 'var(--text-primary)', marginBottom: '10px' }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
