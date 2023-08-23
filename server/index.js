import express from "express";
import bodyParser from 'body-parser'; //this allows us to take incoming post request body
import lead from './routes/lead.js'; 
const app=express(); 
import cors from 'cors';

// import { lib } from './routes/lead.js';


const PORT=5000; 

//testing
// @TODO delete this

// lib.create('','leadData',{'foo':'bar'},function(err){
//     console.log('this was the error ==>', err);
// });
// lib.read('','leadData',function(err,data){
//     console.log('this was the error=>', err ,'and this was the data =>',data);
// })


app.use(cors());

app.use(bodyParser.json());  //we are going to use json data in our whole application, JSONis a common format for sending and taking data.
app.use('/lead', lead);

app.get('/',(req,res)=>{
    console.log('TEST');
    res.send('hello from homepage')
})

app.listen(PORT,()=>{
    console.log(`server Running on port:http://localhost:${PORT}`)
});
