// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const multer = require('multer');

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });


// const blogStorage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'blog-images',
//     allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
//     transformation: [{ width: 1000, height: 1000, crop: 'limit' }]
//   }
// });

// // Configuration for resumes
// const resumeStorage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'resumes',
//     allowed_formats: ['pdf', 'doc', 'docx'],
//     resource_type: 'raw'
//   }
// });

// const uploadImage = multer({ 
//   storage: blogStorage,
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
// });

// const uploadResume = multer({ 
//   storage: resumeStorage,
//   limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
// });

// module.exports = {
//   upload: uploadImage,
//   uploadResume,
//   cloudinary 
// };




const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog_images',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif','webp'],
    transformation: [{ width: 1000, height: 1000, crop: 'limit' }]
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});




module.exports = {
  upload,
  cloudinary
};
