


var express = require('express');
var viewRouter = express.Router();
var {studentModel}=require('../models/studentModel');

function route(nav) {
    var books = [
        {
            image: "harry.jpga",
            title: "War and peace",
            genre: "Historical Fiction",
            auhtor: "J K Rowlink"
        },
        {
            image: "gully.jpeg",
            title: "Gulliver's Travels ",
            genre: "Fantasy",
            auhtor: "Jonathan Swift"
        },
        {
            image: "hobbit.jpg",
            title: "The Bobbit",
            genre: "Fantasy",
            auhtor: "J R R Tolkien"
        },
        {
            image: "pi.jpg",
            title: "Life of Pi",
            genre: "philosophical novel",
            auhtor: "Yann Martel"
        },
        {
            image: "lord.jpeg",
            title: "The Lord of The Rings",
            genre: "Fantasy",
            auhtor: "J R R Tolkien"
        },
    ];


    viewRouter.route('/')
        .get((req, res) => {
                studentModel.find((err,data)=>{
                    if(err){

                        throw err;
                    }
                    else{
                    
                        res.send(data);
                    }
                    }

                )

           
        });


    return viewRouter;
}

module.exports = route;