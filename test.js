 // module.exports =function () {
 //    const mongoose = require('mongoose');
 //
 //    mongoose.connect('mongodb://localhost:27017/whiteboard-cs5200-sp20');
 // }
 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/whiteboard-cs5200-sp20');

//console.log("hello world!");
 const universityDao = require('./daos/university.dao.server')
 const studentSchema = require('./models/student.schema.server')
 const studentModel=require('./models/student.model.server')
 const answerModel=require('./models/answer.model.server')
 universityDao.truncateDatabase()
 universityDao.populateDatabase()
 testStudentsInitialCount()
 testQuestionsInitialCount()
 testAnswersInitialCount()
 testDeleteAnswer()
 testDeleteQuestion()
 testDeleteStudent()


 function testStudentsInitialCount(){

  universityDao.findAllStudents().countDocuments()
      .then(students =>
          console.log(students))
 }

 function testQuestionsInitialCount(){
  universityDao.findAllQuestions().countDocuments()
      .then(questions =>
          console.log(questions))
 }


 function testAnswersInitialCount(){
  universityDao.findAllAnswers().countDocuments()
      .then(answers =>
          console.log(answers))
 }

 function testDeleteAnswer() {
  universityDao.deleteAnswer(234)
      .then(questions =>
          console.log(questions))
  universityDao.findAllAnswers().countDocuments()
      .then(answer =>
          console.log(answer))

 }

 function testDeleteQuestion() {
  universityDao.deleteQuestion(321)
      .then(questions =>
          console.log(questions))
  universityDao.findAllQuestions().countDocuments()
      .then(questions =>
          console.log(questions))
 }

 function testDeleteStudent() {
  universityDao.deleteStudent(234)
      .then(questions =>
          console.log(questions))
  universityDao.findAllStudents().countDocuments()
      .then(questions =>
          console.log(questions))
 }

