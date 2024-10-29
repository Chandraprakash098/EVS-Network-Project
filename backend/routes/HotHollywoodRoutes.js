// const express = require('express')
// const HotHollywoodController = require('../controllers/hotHollywoodController');
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

// router.get('/', HotHollywoodController.getAllEntertainment);
// router.get('/:id', HotHollywoodController.getSingleEntertainment);
// // router.post('/', authMiddleware, upload.single('image'), HotHollywoodController.createEntertainment);
// router.post('/', (req, res, next) => {
//     console.log('POST request received at /api/hot-hollywood-entertainment');
//     next();
// }, authMiddleware, upload.single('image'), HotHollywoodController.createEntertainment);
// router.put('/:id', authMiddleware, upload.single('image'), HotHollywoodController.updateEntertainment);
// router.delete('/:id', authMiddleware, HotHollywoodController.deleteEntertainment);

// module.exports = router;



const express = require('express');
const HotHollywoodController = require('../controllers/hotHollywoodController');
const authMiddleware = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary'); // Importing Cloudinary upload configuration

const router = express.Router();

router.get('/', HotHollywoodController.getAllEntertainment);
router.get('/:id', HotHollywoodController.getSingleEntertainment);

router.post(
  '/',
  (req, res, next) => {
    console.log('POST request received at /api/hot-hollywood-entertainment');
    next();
  },
  authMiddleware,
  upload.single('image'), // Using Cloudinary upload middleware
  HotHollywoodController.createEntertainment
);

router.put(
  '/:id',
  authMiddleware,
  upload.single('image'), // Using Cloudinary upload middleware
  HotHollywoodController.updateEntertainment
);

router.delete('/:id', authMiddleware, HotHollywoodController.deleteEntertainment);

module.exports = router;

