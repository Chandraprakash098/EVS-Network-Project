const mongoose = require('mongoose');

const traditionalArtHollywoodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Trending', 'Featured', 'New Release', 'Fashion', 'Awards', 'Streaming']
    },
    icon: {
        type: String,
        required: true,
        enum: ['Star', 'Film', 'Play', 'Sparkles', 'TrendingUp', 'Tv']
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('traditionalArtHollywood', traditionalArtHollywoodSchema);