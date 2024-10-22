const express = require('express');
const HotBollywoodController = require('../controllers/hotBollwoodController');
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

router.get('/', HotBollywoodController.getAllEntertainment);
router.get('/:id', HotBollywoodController.getSingleEntertainment);
router.post('/', authMiddleware, upload.single('image'), HotBollywoodController.createEntertainment);
router.put('/:id', authMiddleware, upload.single('image'), HotBollywoodController.updateEntertainment);
router.delete('/:id', authMiddleware, HotBollywoodController.deleteEntertainment);

module.exports = router;
