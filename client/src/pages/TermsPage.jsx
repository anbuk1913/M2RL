export default function TermsPage() {
    const sections = [
        { title: '1. Acceptance of Terms', content: 'By accessing or using the M²RL TechnologieS website, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, you may not use our website.' },
        { title: '2. Use of Website', content: 'This website is provided for informational purposes about M²RL TechnologieS, its products, services, and company information. You may use this website for personal, non-commercial use only. You agree not to copy, reproduce, or distribute any content without authorization.' },
        { title: '3. Intellectual Property', content: 'All content on this website — including text, graphics, logos, images, and software — is the property of M²RL TechnologieS and is protected by Indian and international intellectual property laws.' },
        { title: '4. Product Information', content: 'Products listed on this website are in the development/planning phase. Specifications, availability, and pricing are subject to change. We make no warranty that the information is complete or current.' },
        { title: '5. Contact Form', content: 'Information submitted through our contact form is used solely for communication purposes. We do not share your information with third parties for marketing.' },
        { title: '6. Limitation of Liability', content: 'M²RL TechnologieS shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website or its content.' },
        { title: '7. Governing Law', content: 'These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of courts in Tamil Nadu, India.' },
        { title: '8. Changes to Terms', content: 'We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after changes constitutes your acceptance of the revised terms.' },
    ];

    return (
        <div>
            <div className="page-banner">
                <div className="container">
                    <div className="section-label">📄 Legal</div>
                    <h1 className="page-banner-title" style={{ marginTop: '12px' }}>Terms & Conditions</h1>
                    <p className="page-banner-subtitle">Last Updated: February 2025</p>
                </div>
            </div>
            <div className="tricolor-stripe" />
            <section className="section section-light">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card" style={{ marginBottom: '24px', background: 'rgba(255,153,51,0.04)', border: '1px solid rgba(255,153,51,0.15)' }}>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Please read these Terms and Conditions carefully before using the M²RL TechnologieS website. These terms apply to all visitors, users, and others who access the website.
                            </p>
                        </div>
                        {sections.map(({ title, content }) => (
                            <div key={title} style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', marginBottom: '10px' }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
