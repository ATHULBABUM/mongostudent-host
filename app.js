const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
var app = new express();
var mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var nav = [{ link: "/", title: 'AddData' },
{ link: "/view", title: 'ViewAll' },
{ link: "/search", title: 'Search' },
{ link: "/edit", title: 'Edit/Delete' }
];

const viewRouter = require('./src/routes/viewRouter')(nav);//passing nav to booksRouter
const addRouter = require('./src/routes/addRouter')(nav);
const eddeRouter = require('./src/routes/editRouter')(nav);
const searchRouter = require('./src/routes/searchRouter')(nav);

/* without view engine*/
app.use(express.static(path.join(__dirname, "/public")));
app.use('/add', addRouter);
app.use('/view', viewRouter);
app.use('/search', searchRouter);
app.use('/edit', editRouter);

mongoose.connect("mongodb+srv://ATHULBABUM:amalbabu@cluster0-7ktkb.mongodb.net/test?retryWrites=true&w=majority");
//mongoose.connect("mongodb://localhost:27017/MyCollegeDb");

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('add.ejs',
    {
      nav,
      title: "Mongo DB"
    }
  )
});
// app.listen(3000,()=>{
//     console.log("listening to port "+chalk.green('3000') );
// })
app.listen(process.env.PORT || 3000, () => {
  console.log("listening to port " + chalk.green('3000'));
})