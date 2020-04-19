// const studentModel = require('../models/student.schema.server')
// function createStudent(student){
//     return studentModel.create
//     create(student)
// }

// function findAllStudents(){
//     return studentModel.find()
// }



const mongoose= require('mongoose');
const studentSchema = require('../models/student.schema.server')
const studentModel=require('../models/student.model.server')
const questionSchema = require('../models/question.schema.server')
const questionModel=require('../models/question.model.server')
const answerSchema = require('../models/answer.schema.server')
const answerModel=require('../models/answer.model.server')

function truncateDatabase(){
    answerModel.collection.drop();
    questionModel.collection.drop();
    studentModel.collection.drop();
    questionModel.collection.drop();
    answerModel.collection.drop();

    }
    createStudent = student => studentModel.create(student)
    createQuestion = question => questionModel.create(question)
    createAnswer = answer => answerModel.create(answer)
    findAllStudents = () => studentModel.find();
    findAllQuestions = () => questionModel.find()
    findAllAnswers = () => answerModel.find()
    deleteStudent = student => studentModel.deleteOne({_id:student})
    deleteQuestion =_id=> questionModel.deleteOne({_id:_id})
    deleteAnswer = _id => answerModel.deleteOne({student:_id})
    findStudentById = studentId => studentModel.findById(studentId)
    findQuestionById = questionId => studentModel.findById(questionId)
    findAnswerById = student => studentModel.findById(student)
    findAnswerByStudent = studentId => answerModel.findStudentById(studentId)
    findAnswerByQuestion = questionId => questionModel.findQuestionById(questionId)



    function answerQuestion(studentId,questionId,answer){
        answerModel.create(answer);

    }



    function populateDatabase(){
        createStudent({
            _id:123,
            username:'alice',
            password:'alice',
            firstname: 'liu',
            lastname: 'wonderland',
            gradYear: '2020',
            scholarship: '15000'
        })
            .then(newStudent =>console.log(newStudent));

        createStudent({
            _id:234,
            username:'bob',
            password:'bob',
            firstname: 'Bob',
            lastname: 'Hope',
            gradYear: '2021',
            scholarship: '12000'
        })
            .then(newStudent =>console.log(newStudent));



        createQuestion({
            _id:321,
            question:'Is the following schema valid?',
            points:10,
            questionType: 'TRUE_FALSE',
            isTrue: false
        })
            .then(newQuestion =>console.log(newQuestion));

        createQuestion({
            _id:432,
            question:'DAO stands for Dynamic Access Object.',
            points:10,
            questionType: 'TRUE_FALSE',
            isTrue: false
        })
            .then(newQuestion =>console.log(newQuestion));

        createQuestion({
            _id:543,
            question:'What does JPA stand for?',
            points:10,
            questionType: 'MULTIPLE_CHOICE',
            choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
            correct: 1

        })
            .then(newQuestion =>console.log(newQuestion));

        createQuestion({
            _id:654,
            question:'What does ORM stand for?',
            points:10,
            questionType: 'MULTIPLE_CHOICE',
            choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping"',
            correct: 4
        })
            .then(newQuestion =>console.log(newQuestion));

        createAnswer({
            _id:123,
            student:123,
            question:321,
            trueFalseAnswer:true
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:234,
            student:123,
            question:432,
            trueFalseAnswer:false
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:345,
            student:123,
            question:543,
            multipleChoiceAnswer:1
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:456,
            student:123,
            question:653,
            multipleChoiceAnswer:2
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:567,
            student:234,
            question:321,
            trueFalseAnswer:false
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:678,
            student:234,
            question:432,
            trueFalseAnswer:false
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:789,
            student:234,
            question:543,
            multipleChoiceAnswer:3
        })
            .then(newAnswer =>console.log(newAnswer));

        createAnswer({
            _id:890,
            student:234,
            question:653,
            multipleChoiceAnswer:4
        })
            .then(newAnswer =>console.log(newAnswer));


    }

module.exports = {
    truncateDatabase:truncateDatabase,
    populateDatabase:populateDatabase,
    createStudent: createStudent,
    createQuestion: createQuestion,
    createAnswer: createAnswer,
    deleteStudent,
    deleteQuestion:deleteQuestion,
    deleteAnswer:deleteAnswer,
    findAllStudents: findAllStudents,
    findAllAnswers:findAllAnswers,
    findAllQuestions:findAllQuestions,
    findStudentById: findStudentById,
    findQuestionById:findQuestionById,
    findAnswerById: findAnswerById,
    findAnswerByStudent: findAnswerByStudent,
    findAnswerByQuestion:findAnswerByQuestion,
}