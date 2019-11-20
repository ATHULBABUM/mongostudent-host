var express = require('express');
var addRouter = express.Router();
var {studentModel}=require('../models/studentModel');


function route(nav) {

    addRouter.route('/')
    .post((req,res)=>{
        var student=new studentModel(req.body)
        student.save();
        res.send(req.body);
    })


    return addRouter;
}
module.exports = route;