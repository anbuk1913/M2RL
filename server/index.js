require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.SERVER_HOST;

const allowedOrigins = process.env.CLIENT_ORIGINS
  ? process.env.CLIENT_ORIGINS.split(',').map(origin => origin.trim())
  : [];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', contactRoute);

app.get('/', (req, res) => {
  res.send('Oops! You Found Our Backend Server');
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});
