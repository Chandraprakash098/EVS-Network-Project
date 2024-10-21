// const express = require('express');
// const jobController = require('../controllers/jobController');
// const authMiddleware = require('../middleware/authMiddleware');
// const multer = require('multer')
// const path=require('path')

// const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// router.get('/', jobController.getAllJobs);
// router.get('/:id', jobController.getSingleJob);
// router.post('/', authMiddleware, jobController.createJob);
// router.put('/:id', authMiddleware, jobController.updateJob);
// router.delete('/:id', authMiddleware, jobController.deleteJob);




// module.exports = router;



const express = require('express');
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');


const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    }
    cb(new Error('Only .pdf, .doc, .docx formats are allowed!'));
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Existing routes
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getSingleJob);
router.post('/', authMiddleware, jobController.createJob);
router.put('/:id', authMiddleware, jobController.updateJob);
router.delete('/:id', authMiddleware, jobController.deleteJob);

// New application route
router.post('/:id/apply', upload.single('resume'), jobController.applyForJob);

module.exports = router;