const express=require('express');
const AddQuotesController = require('../controllers/addQuotesController');
const appForAddQuotes=express.Router();

appForAddQuotes.post('/',(req,res)=>{
    console.log("in ADD Quotes Route");
    AddQuotesController(req,res);
});
module.exports=appForAddQuotes;
