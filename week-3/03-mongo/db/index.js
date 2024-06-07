const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://syedabuubaid:F7sTvPpgu7kn1Xup@cluster0.ymvplll.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course' 
    }]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String 
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}