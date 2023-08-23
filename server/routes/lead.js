import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// import fs from 'fs';
// import path from 'path';
const router = express.Router();
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import handlers from './handlers.js';
// const leadHandler=require('../handlers/leadHandler.js');

import {getAllLeads, deleteLeadById,updateLeadsById,getLeadById} from './../handlers/leadHandler.js';
router.get('/',getAllLeads);
router.post('/', addLead);
router.get('/:id', getLeadById);
router.put('/:id', updateLeadsById,);
router.delete('/:id', deleteLeadById);

module.exports = router;


// let leads=[];
//container for the module(to be exported)
// export let lib={};

//base dir of the data folder
// lib.baseDir=path.join(__dirname,'../leadData');

//write data to a file
// lib.create=function(dir,file,data,callback){
//     //open the file for reading
//     fs.open(lib.baseDir+dir+'/'+file+'.json','wx',function(err,fileDescriptor){        //lib container => lib.create => fs.open , fs.writeFile , fs.close
//         //  console.log(err,fileDescriptor);                                                           =>lib.read lib.delete
//                                                                                                     //  => lib. crude operations of file
//         if(!err && fileDescriptor){
//             //convert data to string
//             let stringData=JSON.stringify(data);

//             //write to file and close it. 
//             fs.writeFile(fileDescriptor,stringData,function(err){
//                 if(!err){
//                     fs.close(fileDescriptor,function(err){
//                         if(!err){
//                             callback(false);
//                         }
//                         else{
//                             callback('error closing new file');
//                         }
//                     });
//                 }
//                 else{
//                     callback('error writing to new file');
//                 }
//             });


//         } 
//         else{
//             callback('Could not create new file, it may already exist.')
//         };
//     });

// };
// //read data from a file
// lib.read=function(dir,file, callback)
// {
//     fs.readFile(lib.baseDir+dir+'/'+file+'.json','utf-8',function(err,data){
//         callback(err,data);
//     })

// };

//update data inside a file
// lib.update=function(dir,file,data,callback){

//     //open the file for writing
//     fs.open(lib.baseDir+dir)

// };

// //export the module
// router.post('/',(req,res)=>{
//     const lead=req.body;
//     const leadWithId={...lead,id:uuidv4()} //newobject
//     leads.push(leadWithId)
//     console.log(req);
//     res.send(`Lead with the username ${lead.name} added to the database!`); 
// });

// //lead/1 => stored in req.param {1}
// router.get('/:id',(req,res)=>{      
//     const {id}=req.params;   
    
//     const foundLead = leads.find((lead)=>lead.id==id);
//                                                                                                  //: => anything after the user/ 
//     res.send(foundLead);
// });

// router.delete('/:id',(req,res)=>{
//     const {id} = req.params;
//     leads=leads.filter((lead)=>lead.id!==id);
//     res.send(`lead with id ${id} deleted from database`);
// });

// router.patch('/:id',(req,res)=>{
//     const {id}=req.params;
//     const {firstName,lastName,age}=req.body;
//     const lead=leads.find((lead)=>lead.id==id); 
//     if(firstName){
//         lead.firstName = firstName;
//     }
//     if(lastName){
//         lead.lastName = lastName;
//     }
//     if(age){
//         lead.age = age;
//     }
    
//     res.send(`lead with the id ${id} has been updated`);


// })
// module.exports=lib;

