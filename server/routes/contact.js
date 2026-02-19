const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Name, email and message are required.' });
    }

    // Log the submission
    console.log('📩 New Contact Form Submission:');
    console.log({ name, email, phone, message });

    // If email credentials are configured, send email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_app_password_here') {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            await transporter.sendMail({
                from: `"M²RL Website" <${process.env.EMAIL_USER}>`,
                to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
                subject: `New Contact Form Message from ${name}`,
                html: `
          <h2>New Contact Form Submission – M²RL TechnologieS</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
        `
            });
        } catch (emailError) {
            console.error('Email error (form data still logged):', emailError.message);
        }
    }

    res.json({ success: true, message: 'Thank you for reaching out! We will get back to you soon.' });
});

module.exports = router;
