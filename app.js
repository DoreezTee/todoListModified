const express = require("express");
const bodyParser = require("body-parser");

const app = express();


let tasks = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));




app.get("/", function(req, res){

  let today = new Date();

 let day = today.toDateString();


 res.render('list', {dayOfWeek: day, addNewTask: tasks});

});

app.post("/", function(req, res){
    const task = req.body.newTask

    tasks.push(task);

    res.redirect("/");
});

// app.delete("/", function(req, res){
//     const deleteTask = req.body.delete;
//     if (deleteTask > -1) {
//       tasks.splice(deleteTask, 1);
//       res.redirect("/");
//     }
// });


app.listen(3000, function(){
    console.log("Server is running in port 3000");
})