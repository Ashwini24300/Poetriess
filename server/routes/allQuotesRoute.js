const express=require('express');
const allQuotesController = require('../controllers/allQuotesController');
const appForAllQuotes=express.Router();

appForAllQuotes.get('/',(req,res)=>{
    console.log("in all quotes Route");
    allQuotesController(req,res);
});
module.exports=appForAllQuotes;
