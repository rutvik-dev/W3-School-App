const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    usersEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

let Course = mongoose.model('Course', courseSchema);
module.exports = Course