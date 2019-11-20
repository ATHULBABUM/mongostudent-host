const express= require('express');
const chalk=require('chalk');
const bodyParser=require('body-parser');
const cors=require('cors');
var path= require('path');
var app=new express();
var mongoose=require('mongoose');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));


var nav=[{link:"/",title:'Add'},
            {link:"/view",title:'ViewAll'},
            {link:"/search",title:'Search'},
            {link:"/edde",title:'Edit/Delete'}
           ];




const viewRouter=require('./src/routes/viewRouter')(nav);//passing nav to booksRouter
const addRouter=require('./src/routes/addRouter')(nav);
const eddeRouter=require('./src/routes/eddeRouter')(nav);
const searchRouter=require('./src/routes/searchRouter')(nav);

/* without view engine*/
// app.use(express.static(path.join(__dirname,"/public")));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"/src/views/index.html"));
// });




// app.listen(3000,()=>{
//          console.log("listening to port "+chalk.green('3000') );
//      });




// app.get("/",(req,res)=>{
// res.send("First express app");
// });
// app.listen(3000,()=>{
//     console.log("listening to port "+chalk.green('3000') );
// });



app.use(express.static(path.join(__dirname,"/public")));
app.use('/add',addRouter);
app.use('/view',viewRouter);
app.use('/search',searchRouter);
app.use('/edde',eddeRouter);

mongoose.connect("mongodb://localhost:27017/MyCollegeDb");

app.set('views','./src/views');
app.set('view engine','ejs');
// app.get('/',function(req,res){
//     res.render('index.ejs',{list:['book1','book2','book3'],title:"Library"});




    
   


app.get('/',function(req,res){ 
res.render('add.ejs',
{
nav,
title:"Library"
}
)});
// app.listen(3000,()=>{
//     console.log("listening to port "+chalk.green('3000') );
// })
app.listen(process.env.PORT||3000,()=>{
    console.log("listening to port "+chalk.green('3000') );
})