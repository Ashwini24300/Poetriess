const express=require('express');
const RemoveFavQuoteController = require('../controllers/remfavQuoteController');
const appForRemoveFavQuotes=express.Router();

appForRemoveFavQuotes.post('/',(req,res)=>{
    console.log("in appForRemoveFavQuotes Route");
    RemoveFavQuoteController(req,res);
});
module.exports=appForRemoveFavQuotes;
l