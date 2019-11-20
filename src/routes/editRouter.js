var express = require('express');
var editRouter=express.Router();
  
function route(nav){


    editRouter.route("/")
    .get((req,res)=>{
        res.render("edit.ejs",{nav,title:"Delete"});
    });

    editRouter.route('/save')
     .post((req,res)=>{
        if(req.body.btn="delete"){
            studentModel.deleteone({admno:req.body.admno},(err,data)=>{
                if(err){
                    res.json({status:"error"})
                }else{
                    res.json({status:"success"})
                }
            })

        }
    })
    return editRouter;
}
module.exports=route;
