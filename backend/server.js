const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const jobRoutes = require('./routes/jobRoutes');
const adminRoutes = require('./routes/adminRoutes');
const entertainmentRoutes = require('./routes/HotEntertainmentRoutes');
const bollywoodEntertainmentRoutes= require('./routes/HotBollywoodRoutes')
const fs = require('fs');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// const corsOptions = {
//     origin: process.env.NODE_ENV === 'production' 
//       ? process.env.FRONTEND_URL // You'll set this in Render's environment variables
//       : 'http://localhost:3000',
//     credentials: true
//   };
//   app.use(cors(corsOptions));
//   app.options('*', cors(corsOptions));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/hot-entertainment', entertainmentRoutes);
app.use('/api/hot-bollywood-entertainment/',bollywoodEntertainmentRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





