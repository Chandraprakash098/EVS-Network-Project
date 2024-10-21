// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     location: { type: String, required: true },
//     description: { type: String, required: true },
//     requirements: [String],
//     applyLink: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Job', jobSchema);





const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    coverLetter: { type: String, required: true },
    resumePath: { type: String, required: true },
    appliedAt: { type: Date, default: Date.now }
});

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [String],
    applications: [applicationSchema],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);