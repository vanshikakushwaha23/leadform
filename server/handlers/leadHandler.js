import fs from 'fs';
import path from 'path';
// const Ajv = require('ajv');
// import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import leadSchema from '../schemas/leadSchema.json';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// const addFormats = require('ajv-formats');
// const leadSchema = require('../schemas/leadSchema.json');
// const dataFilePath = path.join(__dirname, '..', 'leadData.json');

const dataFilePath = path.join(__dirname, '../leadData.json');

const ajv = new Ajv();
addFormats(ajv);

function validateUser(user) {
    const valid = ajv.validate(leadSchema, lead);
    if (!valid)
        return ajv.errors;
    return null;
}


function readLeadData(callback) {
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8', function (err) {
        callback(err)
    }))
}

function writeLeadData(data, callback) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), function (err) {
        callback(err);
    });
}


exports.getAllLeads = (req, res) => {
    const leads = readLeadData(function (err) {
        console.log('this was the error =>' + err);
    });
    res.json(leads);
};

exports.addLead = (req, res) => {
    const validationErrors = validateUser(req.body);
    if (validationErrors) {
        return res.status(200).json({ errors: validationErrors });
    }

    const leads = readLeadData(function (err) {
        console.log("this was the error => " + err);
    });
    const newLead = req.body;
    const leadWithId = { ...newLead, id: uuidv4() } //newobject
    leads.push(leadWithId)
    console.log(req);
    // res.send(`Lead with the username ${lead.name} added to the database!`); 
    writeLeadData(leads, function (err) {
        console.log("this was the error =>" + err);
    });

    res.status(201).json(newLead);
};

//lead/1 => stored in req.param {1}
exports.getLeadById = (req, res) => {
    const leads = readLeadData(function (err) {
        console.log('this was the error=>', err);
    })
    const { id } = req.params;
    const foundLead = leads.find((lead) => lead.id === parseInt(id));
    if (foundLead) {
        res.join(foundLead);
    }
    else {
        res.status(404).json({ message: 'Lead not found' });
    }
}

exports.updateLeadsById = (req, res) => {
    const leads = readLeadData(function (err) {
        console.log('this was the error => ' + err);
    });

    const { id } = req.params;
    // const foundLead = leads.find((lead)=>lead.id===parseInt(id));
    const { leadName, leadEmail, leadContact, leadBirthday } = req.body;
    const lead = leads.find((lead) => lead.id == id);

    if (lead !== -1) {
        const updatedLead = {
            ...leads[lead],
            leadname: leadName || leads[lead].leadName,
            leadEmail: leadEmail || leads[lead].leadEmail,
            leadContact: leadContact || leads[lead].leadContact,
            leadBirthday: leadBirthday || leads[lead].leadBirthday
        };

        const validationErrors = validateUser(req.body);
        if (validationErrors) {
            return res.status(200).json({ errors: validationErrors });
        }

        leads[lead] = updatedLead;
        writeLeadData(leads, function (err) {
            console.log("this was the error=>" + err);
        });
        res.join(leads[lead]);
    }
    else {
        res.status(404).json({ message: 'user not found' });
    }
};

exports.deleteLeadById = (req, res) => {
    const leads = readData(function(err){
        console.log("this was the error=>" + err);
    });

    const {id} = req.params;
    updatedLeads=leads.filter((lead)=>lead.id!==id);

    if(leads.length !== updatedLeads.length){
        writeLeadData(updatedLeads, function(err){
            console.log('this was the error =>' + err);
        })
        
    }
    else{
        res.status(404).json({ message: 'user not found' });
    }

}

// export { getAllLeads, addLead ,deleteLeadById,updateLeadsById,getLeadById};


