const mongoose=require('mongoose');

var studentModel= mongoose.model('Students',{
    firstname:String,
    admno:Number,
    rollno:Number,
    college:String
});

module.exports={studentModel}
