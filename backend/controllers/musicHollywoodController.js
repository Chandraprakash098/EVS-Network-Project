const Music = require('../models/musicHollywoodModel');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

exports.getAllMusic = async (req, res) => {
    try {
        const musicsection = await Music.find().sort({ createdAt: -1 });
        res.json(musicsection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSingleMusic = async (req, res) => {
    try {
        const musicsection = await Music.findById(req.params.id);
        if (!musicsection) {
            return res.status(404).json({ error: 'music item not found' });
        }
        res.json(musicsection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.createMusic = async (req, res) => {
//     try {
//         if (!req.file) {
//             console.error('No file uploaded');
//             return res.status(400).json({ error: 'Image is required' });
//         }
//         console.log('Request Body:', req.body);
//         console.log('Uploaded File:', req.file);

//         const { title, description, category, icon, link } = req.body;
        
//         const musicsection = new Music({
//             title,
//             description,
//             category,
//             icon,
//             link,
//             image: `/uploads/${req.file.filename}`
//         });

//         await musicsection.save();
//         res.status(201).json(musicsection);
//     } catch (error) {
//         console.error('Entertainment creation error:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.updateMusic = async (req, res) => {
//     try {
//         const { title, description, category, icon, link } = req.body;
//         const updateData = {
//             title,
//             description,
//             category,
//             icon,
//             link
//         };

//         if (req.file) {
//             updateData.image = `/uploads/${req.file.filename}`;
            
//             // Delete old image if it exists
//             const oldMusic = await Music.findById(req.params.id);
//             if (oldMusic && oldMusic.image) {
//                 const oldImagePath = path.join(__dirname, '..', oldMusic.image);
//                 if (fs.existsSync(oldImagePath)) {
//                     fs.unlinkSync(oldImagePath);
//                 }
//             }
//         }

//         const musicsection = await Music.findByIdAndUpdate(
//             req.params.id,
//             updateData,
//             { new: true, runValidators: true }
//         );

//         if (!musicsection) {
//             return res.status(404).json({ error: 'Entertainment item not found' });
//         }

//         res.json(musicsection);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

exports.createMusic = async (req, res) => {
    try {
        if (!req.file) {
            console.error('No file uploaded');
            return res.status(400).json({ error: 'Image is required' });
        }
        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);

        const { title, description, category, icon, link } = req.body;
        
        // Upload image to Cloudinary
        // const result = await cloudinary.uploader.upload(req.file.path);
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'music_hollywood',
            transformation: [{ width: 1000, height: 1000, crop: 'limit' }]
        });

        const musicsection = new Music({
            title,
            description,
            category,
            icon,
            link,
            image: req.file.path // Store the Cloudinary URL
        });

        await musicsection.save();
        res.status(201).json(musicsection);
    } catch (error) {
        console.error('Entertainment creation error:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateMusic = async (req, res) => {
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
            // Upload new image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            updateData.image = result.secure_url; // Store the new Cloudinary URL
            
            // You may want to delete the old image from Cloudinary as well
            const oldMusic = await Music.findById(req.params.id);
            if (oldMusic && oldMusic.image) {
                const publicId = oldMusic.image.split('/').pop().split('.')[0]; // Extract public ID
                await cloudinary.uploader.destroy(publicId); // Remove from Cloudinary
            }
        }

        const musicsection = await Music.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!musicsection) {
            return res.status(404).json({ error: 'Entertainment item not found' });
        }

        res.json(musicsection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMusic = async (req, res) => {
    try {
        const musicsection = await Music.findById(req.params.id);
        if (!musicsection) {
            return res.status(404).json({ error: 'Music item not found' });
        }

        // Delete image file if it exists
        if (musicsection.image) {
            const imagePath = path.join(__dirname, '..', musicsection.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await musicsection.deleteOne();
        res.json({ message: 'Music item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};