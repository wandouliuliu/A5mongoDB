const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: Number,
    username:String,
    password:String,
    firstname:String,
    lastname:String,
    gradYear: Number,
    scholarship: Number
},{collection:'students'});
module.exports= studentSchema;
