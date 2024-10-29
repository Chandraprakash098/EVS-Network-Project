// const express = require('express')
// const MusicHollywoodController = require('../controllers/musicHollywoodController');
// const authMiddleware = require('../middleware/authMiddleware');
// const multer = require('multer');
// const path = require('path');

// // Multer configuration for file upload
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });
// const upload = multer({
//     storage,
//     limits: { fileSize: 5 * 1024 * 1024 },
//     fileFilter: (req, file, cb) => {
//         if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//             return cb(new Error('Only image files are allowed!'), false);
//         }
//         cb(null, true);
//     }
// });

// const router = express.Router();

// router.get('/', MusicHollywoodController.getAllMusic);
// router.get('/:id', MusicHollywoodController.getSingleMusic);
// // router.post('/', authMiddleware, upload.single('image'), HotHollywoodController.createEntertainment);
// router.post('/', (req, res, next) => {
//     console.log('POST request received at /api/music-bollywood');
//     next();
// }, authMiddleware, upload.single('image'), MusicHollywoodController.createMusic);
// router.put('/:id', authMiddleware, upload.single('image'), MusicHollywoodController.updateMusic);
// router.delete('/:id', authMiddleware, MusicHollywoodController.deleteMusic);

// module.exports = router;



const express = require('express');
const MusicHollywoodController = require('../controllers/musicHollywoodController');
const authMiddleware = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary'); // Import Cloudinary upload config

const router = express.Router();

router.get('/', MusicHollywoodController.getAllMusic);
router.get('/:id', MusicHollywoodController.getSingleMusic);
router.post('/', authMiddleware, upload.single('image'), MusicHollywoodController.createMusic);
router.put('/:id', authMiddleware, upload.single('image'), MusicHollywoodController.updateMusic);
router.delete('/:id', authMiddleware, MusicHollywoodController.deleteMusic);

module.exports = router;

