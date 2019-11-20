var express = require('express');
var eddeRouter=express.Router();
  
function route(nav){


    eddeRouter.route("/")
    .get((req,res)=>{
        res.render("edde.ejs",{nav,title:"Edit/Delete"});
    });

    eddeRouter.route('/save')
    .post((req,res)=>{
        console.log(req.body);
    })
    return eddeRouter;
}
module.exports=route;
