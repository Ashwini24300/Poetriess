const express=require('express');
const DeleteQuoteController = require('../controllers/deleteQuoteController');
const appForDeleteQuotes=express.Router();

appForDeleteQuotes.post('/',(req,res)=>{
    console.log("in DeleteQuote Route");
    DeleteQuoteController(req,res);
});
module.exports=appForDeleteQuotes;
