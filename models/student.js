import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    registrationNum: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'def'
    }
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;