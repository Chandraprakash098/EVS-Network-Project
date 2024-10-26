const TradionalArtHollywood = require('../models/TraditionalArtHollywood');
const path = require('path');
const fs = require('fs');


exports.getAllArts = async (req, res) => {
    try {
        const art = await TradionalArtHollywood.find().sort({ createdAt: -1 });
        res.json(art);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSingleArts = async (req, res) => {
    try {
        const art = await TradionalArtHollywood.findById(req.params.id);
        if (!art) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }
        res.json(art);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createArts = async (req, res) => {
    try {
        if (!req.file) {
            console.error('No file uploaded');
            return res.status(400).json({ error: 'Image is required' });
        }
        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);

        const { title, description, category, icon, link } = req.body;
        
        const art = new TradionalArtHollywood({
            title,
            description,
            category,
            icon,
            link,
            image: `/uploads/${req.file.filename}`
        });

        await art.save();
        res.status(201).json(art);
    } catch (error) {
        console.error('Arts creation error:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateArts = async (req, res) => {
    try {
        const { title, description, category, icon, link } = req.body;
        const updateData = {
            title,
            description,
            category,
            icon,
            link
        };

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
            
            // Delete old image if it exists
            const oldArts = await TradionalArtHollywood.findById(req.params.id);
            if (oldArts && oldArts.image) {
                const oldImagePath = path.join(__dirname, '..', oldArts.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        }

        const art = await TradionalArtHollywood.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!art) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }

        res.json(art);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteArts = async (req, res) => {
    try {
        const art = await TradionalArtHollywood.findById(req.params.id);
        if (!art) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }

        // Delete image file if it exists
        if (art.image) {
            const imagePath = path.join(__dirname, '..', art.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await art.deleteOne();
        res.json({ message: 'Entertainment item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};