const mongoose= require('mongoose');
const studentSchema = require('./student.schema.server')
const studentModel=require('./student.model.server')
findAllStudents = () =>
    studentModel.find();
deleteAllStudents = () =>
    studentModel.remove({}, function(err) {
        console.log('collection removed')
    });
module.exports={findAllStudents,deleteAllStudents}
