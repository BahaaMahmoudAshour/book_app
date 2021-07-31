const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')

const storeRoute = require('./route/storeRoute');

var app = express();
app.use(cors())

app.use(bodyParser.json())

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

});


app.use("/api/v1",storeRoute);
app.use(bodyParser.json()); 

app.listen(3000 , ()=>{
console.log("server started");
});