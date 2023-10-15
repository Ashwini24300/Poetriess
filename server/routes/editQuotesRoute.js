const express=require('express');
const EditQuotesController = require('../controllers/editQuotesController');
const appForEditQuotes=express.Router();

appForEditQuotes.put('/',(req,res)=>{
    console.log("in EditQuotes Route");
    EditQuotesController(req,res);
});
module.exports=appForEditQuotes;
