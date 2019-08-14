'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser'); 
const Personality = require('./helper');
const jsonParser = bodyParser.json()
app.use(jsonParser);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/personalityAnalysis', (req, res)=>{
    const PersonalityObj = new Personality();
    const requestBody = req.body.content;
    console.log("requestBody : ",requestBody);
    if(requestBody.length< 100){
        return res.status(400).json({
            success: false,
            message: "Minimum 100 characters are required for analysis"
        });
    }
    return PersonalityObj.analyzePersonality(requestBody).then((response)=> {
        return res.status(200).json(response);
    }).catch((err)=>{
        return res.status(400).json({
            success: false,
            message: "Error while fetching personality analysis"
        });
    });
});

app.listen(8080,()=>{
    console.log("Application started on port 8080");
});