const express=require('express');
const MyQuotesController = require('../controllers/myQuotesController');
const appForMyQuotes=express.Router();

appForMyQuotes.post('/',(req,res)=>{
    console.log("in MyQuotes Route");
    MyQuotesController(req,res);
});
module.exports=appForMyQuotes;
