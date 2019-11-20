var express = require('express');
var searchRouter=express.Router();

var {studentModel}=require('../models/studentModel');

function route(nav){


    searchRouter.route("/")
    .get((req,res)=>{

        res.render('search.ejs',{nav,title:'Search'});
    });


    searchRouter.route('/add')
    .post((req,res)=>{

        studentModel.find(req.body,(err,data)=>{

                if(err)
                {
                    throw err
                }
                else{
                    res.json(data);
                }

        });
        console.log(req.body); 
    }
    )

    return searchRouter;
}

module.exports=route;
