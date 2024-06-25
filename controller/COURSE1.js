const Course = require('../model/COURSE');

// Create a new course
let CreateCourse = async function (req, res, next) {
    try {
        const { title, description, instructor, usersEnrolled } = req.body;
        const CreateCourse = await Course.create({ title, description, instructor, usersEnrolled });

        res.status(201).json({
            status: "success",
            message: 'Create Course successfully',
            Data: CreateCourse
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// Get all courses
let GetAllCourse = async function (req, res, next) {
    try {
        const courses = await Course.find().populate('usersEnrolled');
        res.status(201).json({
            status: "success",
            message: 'Read Course successfully',
            Data: courses
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// // Get a course by ID
let GetSingleCourse = async function (req, res, next) {
    try {
        const course = await Course.findById(req.params.id).populate('usersEnrolled');
        if (!course) {
            return res.status(404).send('Course not found');
        }
        res.status(201).json({
            status: "success",
            message: 'Read Course successfully',
            Data: course
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Update a course by ID
let UpdateCourse = async function (req, res, next) {
    try {

     id = req.params.id
        const UpdateCourse = await Course.findByIdAndUpdate(id,req.body,{new:true});
        if (!UpdateCourse) {
            return res.status(404).send('Course not found');
        }
        res.status(201).json({
            status: "success",
            message: 'Update Course successfully',
            Data: UpdateCourse
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}



// Delete a course by ID
let DeleteCourse = async function (req, res, next) {
    try {

     id = req.params.id
        const DeleteCourse = await Course.findByIdAndDelete(id);
        if (!DeleteCourse) {
            return res.status(404).send('Course not found');
        }
        res.status(201).json({
            status: "success",
            message: 'Delete Course successfully',
            Data: DeleteCourse
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


module.exports = {CreateCourse,GetAllCourse,GetSingleCourse,UpdateCourse,DeleteCourse}
