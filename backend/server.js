const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const jobRoutes = require('./routes/jobRoutes');
const adminRoutes = require('./routes/adminRoutes');
const entertainmentRoutes = require('./routes/HotEntertainmentRoutes');
const bollywoodEntertainmentRoutes= require('./routes/HotBollywoodRoutes')
const hollywoodEntertainmentRoutes= require('./routes/HotHollywoodRoutes')
const musicRoutes= require('./routes/musicRoutes')
const musicBollywoodRoutes= require('./routes/musicBollywoodRoutes')
const musicHollywoodRoutes= require('./routes/musicHollywoodRoutes')
const traditionalArtRoutes= require('./routes/TraditionalArtRoutes')
const traditionalArtBollywoodRoutes= require('./routes/TraditionalArtBollywoodRoutes')
const fs = require('fs');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


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
app.use('/api/hot-hollywood-entertainment',hollywoodEntertainmentRoutes)
app.use('/api/music',musicRoutes)
app.use('/api/music-bollywood',musicBollywoodRoutes)
app.use('/api/music-hollywood',musicHollywoodRoutes)
app.use('/api/traditional-art',traditionalArtRoutes)
app.use('/api/traditional-art-bollywood',traditionalArtBollywoodRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





