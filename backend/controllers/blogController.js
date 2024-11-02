// const Blog = require('../models/blogModel');
// const path = require('path');
// const fs = require('fs');

// // Get all blogs
// exports.getAllBlogs = async (req, res) => {
//     try {
//         const blogs = await Blog.find().sort({ createdAt: -1 });
//         res.json(blogs);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get single blog
// exports.getSingleBlog = async (req, res) => {
//     try {
//         const blog = await Blog.findById(req.params.id);
//         if (!blog) {
//             return res.status(404).json({ error: 'Blog not found' });
//         }
//         res.json(blog);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Create blog
// exports.createBlog = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: 'Image is required' });
//         }

//         const { title, content, author, category, tags } = req.body;
        
//         const blog = new Blog({
//             title,
//             content,
//             author,
//             category,
//             tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
//             image: `/uploads/${req.file.filename}`
//         });

//         await blog.save();
//         res.status(201).json(blog);
//     } catch (error) {
//         console.error('Blog creation error:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

// // Update blog
// exports.updateBlog = async (req, res) => {
//     try {
//         const { title, content, author, category, tags } = req.body;
//         const updateData = {
//             title,
//             content,
//             author,
//             category,
//             tags: tags ? tags.split(',').map(tag => tag.trim()) : []
//         };

//         if (req.file) {
//             updateData.image = `/uploads/${req.file.filename}`;
//         }

//         const blog = await Blog.findByIdAndUpdate(
//             req.params.id,
//             updateData,
//             { new: true, runValidators: true }
//         );

//         if (!blog) {
//             return res.status(404).json({ error: 'Blog not found' });
//         }

//         res.json(blog);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Delete blog
// exports.deleteBlog = async (req, res) => {
//     try {
//         const blog = await Blog.findByIdAndDelete(req.params.id);
//         if (!blog) {
//             return res.status(404).json({ error: 'Blog not found' });
//         }
//         // Delete associated image file
//         if (blog.image) {
//             const imagePath = path.join(__dirname, blog.image);
//             if (fs.existsSync(imagePath)) {
//                 fs.unlinkSync(imagePath);
//             }
//         }
//         res.json({ message: 'Blog deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


const Blog = require('../models/blogModel');
// const cloudinary = require('../config/cloudinary');
const { cloudinary } = require('../config/cloudinary');
const { Readable } = require('stream');


// Helper function to upload to Cloudinary
const uploadToCloudinary = async (buffer) => {
    return new Promise((resolve, reject) => {
        const writeStream = cloudinary.uploader.upload_stream(
            {
                folder: 'blog_images',
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        
        const readStream = new Readable({
            read() {
                this.push(buffer);
                this.push(null);
            }
        });
        
        readStream.pipe(writeStream);
    });
};

// Get all blogs remains the same...
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get single blog remains the same...
exports.getSingleBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create blog with Cloudinary upload
// exports.createBlog = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: 'Image is required' });
//         }

//         // Add logging to verify upload
//         console.log('Cloudinary Upload Response:', {
//             path: req.file.path,
//             filename: req.file.filename,
//             size: req.file.size,
//             mimetype: req.file.mimetype
//         });

//         const { title, content, author, category, tags } = req.body;
        
//         const blog = new Blog({
//             title,
//             content,
//             author,
//             category,
//             tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
//             image: req.file.path
//         });

//         await blog.save();
        
//         // Log successful save
//         console.log('Blog saved with image:', blog.image);
        
//         res.status(201).json(blog);
//     } catch (error) {
//         console.error('Blog creation error:', error);
//         res.status(500).json({ error: error.message });
//     }
// };


exports.createBlog = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image is required' });
        }

        // Log file properties to ensure upload succeeded
        console.log('Uploaded file details:', {
            path: req.file.path,
            filename: req.file.filename,
            size: req.file.size,
            mimetype: req.file.mimetype
        });

        const { title, content, author, category, tags } = req.body;

        const blog = new Blog({
            title,
            content,
            author,
            category,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            image: req.file.path  // Cloudinary URL after multer upload
        });

        await blog.save();

        // Log successful save
        console.log('Blog saved with image:', blog.image);

        res.status(201).json(blog);
    } catch (error) {
        console.error('Blog creation error:', error);
        res.status(500).json({ error: error.message });
    }
};


// Update blog with Cloudinary upload
exports.updateBlog = async (req, res) => {
    try {
        const { title, content, author, category, tags } = req.body;
        const updateData = {
            title,
            content,
            author,
            category,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : []
        };

        if (req.file) {
            updateData.image = req.file.path;
        }

        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// exports.deleteBlog = async (req, res) => {
//     try {
//         const blog = await Blog.findById(req.params.id);
//         if (!blog) {
//             return res.status(404).json({ error: 'Blog not found' });
//         }

//         // Delete image from Cloudinary if exists
//         if (blog.image) {
//             const publicId = blog.image.split('/').pop().split('.')[0];
//             await cloudinary.uploader.destroy(publicId);
//         }

//         await Blog.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Blog deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };



exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        // Delete image from Cloudinary if exists
        if (blog.image) {
            try {
                // Extract public_id from Cloudinary URL
                const urlParts = blog.image.split('/');
                const filenameWithExtension = urlParts[urlParts.length - 1];
                const filename = filenameWithExtension.split('.')[0];
                const folderName = 'blog_images'; // Use the folder name directly since we know it
                const publicId = `${folderName}/${filename}`;

                console.log('Attempting to delete image with public_id:', publicId);
                
                // Use cloudinary.v2.uploader.destroy
                const result = await cloudinary.uploader.destroy(publicId);
                console.log('Cloudinary deletion result:', result);
            } catch (cloudinaryError) {
                console.error('Cloudinary deletion error:', cloudinaryError);
                // Continue with blog deletion even if image deletion fails
            }
        }

        // Delete the blog post
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Blog deletion error:', error);
        res.status(500).json({ error: error.message });
    }
};