const HotEntertainment = require('../models/hotEntertainmentModel');
const path = require('path');
const fs = require('fs');

exports.getAllEntertainment = async (req, res) => {
    try {
        const entertainment = await HotEntertainment.find().sort({ createdAt: -1 });
        res.json(entertainment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSingleEntertainment = async (req, res) => {
    try {
        const entertainment = await HotEntertainment.findById(req.params.id);
        if (!entertainment) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }
        res.json(entertainment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEntertainment = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image is required' });
        }

        const { title, description, category, icon, link } = req.body;
        
        const entertainment = new HotEntertainment({
            title,
            description,
            category,
            icon,
            link,
            image: `/uploads/${req.file.filename}`
        });

        await entertainment.save();
        res.status(201).json(entertainment);
    } catch (error) {
        console.error('Entertainment creation error:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateEntertainment = async (req, res) => {
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
            const oldEntertainment = await HotEntertainment.findById(req.params.id);
            if (oldEntertainment && oldEntertainment.image) {
                const oldImagePath = path.join(__dirname, '..', oldEntertainment.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        }

        const entertainment = await HotEntertainment.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!entertainment) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }

        res.json(entertainment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEntertainment = async (req, res) => {
    try {
        const entertainment = await HotEntertainment.findById(req.params.id);
        if (!entertainment) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }

        // Delete image file if it exists
        if (entertainment.image) {
            const imagePath = path.join(__dirname, '..', entertainment.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await entertainment.deleteOne();
        res.json({ message: 'Entertainment item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};