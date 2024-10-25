const express = require('express');
const TraditionalArtController = require('../controllers/tradionalArtController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    }
});

const router = express.Router();

router.get('/', TraditionalArtController.getAllArts);
router.get('/:id', TraditionalArtController.getSingleArts);
router.post('/', authMiddleware, upload.single('image'), TraditionalArtController.createArts);
router.put('/:id', authMiddleware, upload.single('image'), TraditionalArtController.updateArts);
router.delete('/:id', authMiddleware, TraditionalArtController.deleteArts);

module.exports = router;
