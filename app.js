const express=require('express');
const app =express();
const Joi = require('joi');

app.use(express.json());
//const bodyParser = require('body-parser')
//app.use(bodyParser.json());


// Default response
app.get('/', (req, res)=> {
	res.send('Welcome to the school management project');
});

//PORT
const port=process.env.PORT || 3000;
app.listen(port, ()=>{console.log("Now Listening to requests at port: "+port)});
