import { FileText, ChevronRight } from 'lucide-react';

export default function TermsPage() {
    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: 'By accessing or using the M²RL TechnologieS website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website.',
        },
        {
            title: '2. Use of Website',
            content: 'This website is provided for informational purposes about M²RL TechnologieS and its products, services, and investment opportunities. Unauthorized use, reproduction, or redistribution of any content is strictly prohibited.',
        },
        {
            title: '3. Intellectual Property',
            content: 'All content on this website — including text, images, logos, and designs — is the intellectual property of M²RL TechnologieS and is protected by applicable Indian and international copyright laws.',
        },
        {
            title: '4. Investment Disclaimer',
            content: 'Information provided on this website regarding investment opportunities is for general informational purposes only and does not constitute a formal offer or solicitation. All investment decisions should be made after independent due diligence.',
        },
        {
            title: '5. Product Information',
            content: 'Product descriptions and specifications listed on this website represent planned and in-development products. M²RL TechnologieS reserves the right to modify product specifications, availability, and pricing without prior notice.',
        },
        {
            title: '6. Limitation of Liability',
            content: 'M²RL TechnologieS shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this website or the information it contains.',
        },
        {
            title: '7. External Links',
            content: 'Our website may contain links to third-party websites. M²RL TechnologieS has no control over and assumes no responsibility for the content or practices of any third-party websites.',
        },
        {
            title: '8. Modifications',
            content: 'M²RL TechnologieS reserves the right to modify these Terms and Conditions at any time. Your continued use of the website following changes constitutes your acceptance of the revised terms.',
        },
        {
            title: '9. Governing Law',
            content: 'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.',
        },
        {
            title: '10. Contact',
            content: 'For any questions regarding these Terms and Conditions, please reach out at: mrltechnologies408@gmail.com — M²RL TechnologieS, Perattukkottai, Sivaganga, Tamil Nadu, India.',
        },
    ];

    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label"><FileText size={13} />Legal</div>
                    <h1 className="page-banner-title" style={{ marginTop: 14 }}>Terms &amp; Conditions</h1>
                    <p className="page-banner-subtitle">Please read these terms carefully before using the M²RL TechnologieS website or services.</p>
                </div>
            </div>
            <div className="tricolor-stripe" />

            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ padding: '12px 20px', borderRadius: 12, background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.16)', marginBottom: 48, display: 'flex', gap: 10, alignItems: 'center' }}>
                        <FileText size={18} color="#f97316" style={{ flexShrink: 0 }} />
                        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                            <strong>Last Updated:</strong> February 2025 &nbsp;|&nbsp; By using this website you agree to the following terms.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                        {sections.map(({ title, content }) => (
                            <div key={title} style={{ padding: '28px 32px', borderRadius: 16, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
                                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                    <ChevronRight size={16} color="#f97316" style={{ marginTop: 4, flexShrink: 0 }} />
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
