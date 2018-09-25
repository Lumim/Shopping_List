const express = require("express");
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const items = require('./routes/api/items');


const app= express();

//body-parser middleware
app.use(bodyParser.json());

//DB consfig

const db = require('./config/key').mongoURI;

//use routes
app.use('/api/items',items);


//connect to Mongo 


mongoose.connect(db,{useNewUrlParser:true}).then(()=> 
    console.log("mongodb connected")).catch(err=> console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () =>console.log(`server started on port ${port}`));


