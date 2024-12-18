const Job = require('../models/jobModel');
const nodemailer = require('nodemailer');
const path = require('path');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });


// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get single job
exports.getSingleJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create job
exports.createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update job
exports.updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete job
exports.deleteJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.applyForJob = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      const { firstName, lastName, email, coverLetter } = req.body;
      const resumePath = req.file ? req.file.path : '';
  
      // Save application to database
      job.applications.push({
        firstName,
        lastName,
        email,
        coverLetter,
        resumePath
      });
      await job.save();
  
      // Send email notification to recruiter
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECRUITER_EMAIL,
        subject: `New Application for ${job.title}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Position:</strong> ${job.title}</p>
          <p><strong>Applicant:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Cover Letter:</h3>
          <p>${coverLetter}</p>
        `,
        attachments: resumePath ? [
          {
            filename: path.basename(resumePath),
            path: resumePath
          }
        ] : []
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
      console.error('Application error:', error);
      res.status(500).json({ error: 'Error submitting application' });
    }
  };
