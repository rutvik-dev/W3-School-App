const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    CourseId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],

});

let User = mongoose.model('User', UserSchema);
module.exports = User