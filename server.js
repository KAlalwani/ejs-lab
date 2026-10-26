// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const resturaunts = require('./data')
const dotenv = require('dotenv').config()

app.use(express.static('public')); //all static files are in the public folder


console.log(process.env.ZAID_MESSAGE)

// Routes go here
app.get('/', (req, res)=>{
    res.render('homepage.ejs',resturaunts)
})

 app.get('/resturants', (req, res)=>{
    res.render('all-resturants.ejs',{resturaunts : resturaunts})
})


  app.get('/resturants/:resturantID', (req, res)=>{
    console.log(req.params.resturantID)
    const foundResturant = resturaunts.find((foundStudent)=>{return foundStudent.id === Number(req.params.resturantID)})
    res.render('resturant-details.ejs',{resturant: foundResturant})
})




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
