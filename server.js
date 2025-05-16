const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB()
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// Middlewares
app.use(cors());
app.use(express.json());

// Basic Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Auth Routes
app.use('/api/auth', authRoutes);

// Catch-all Route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on http://localhost:${PORT}`));
