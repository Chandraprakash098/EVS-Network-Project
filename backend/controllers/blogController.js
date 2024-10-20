const Blog = require('../models/blogModel');
const path = require('path');
const fs = require('fs');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get single blog
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

// Create blog
exports.createBlog = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image is required' });
        }

        const { title, content, author, category, tags } = req.body;
        
        const blog = new Blog({
            title,
            content,
            author,
            category,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            image: `/uploads/${req.file.filename}`
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        console.error('Blog creation error:', error);
        res.status(500).json({ error: error.message });
    }
};

// Update blog
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
            updateData.image = `/uploads/${req.file.filename}`;
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

// Delete blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        // Delete associated image file
        if (blog.image) {
            const imagePath = path.join(__dirname, blog.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
