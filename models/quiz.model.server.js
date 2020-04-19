const mongoose = require('mongoose')
const quizSchema = require('./quiz.quiz.server')
const quizModel = mongoose.model('QuizModel', quizSchema)
module.exports=quizModel;
