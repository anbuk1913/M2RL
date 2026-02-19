require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoute);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'M²RL TechnologieS API is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`🚀 M²RL Server running on http://localhost:${PORT}`);
});
