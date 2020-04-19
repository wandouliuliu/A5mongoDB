const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server')
const studentSchema = require('./student.schema.server')
const answerModel = mongoose.model('AnswerModel', answerSchema)
const studentModel = mongoose.model('StudentModel', studentSchema)
module.exports=answerModel;