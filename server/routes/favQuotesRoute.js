const express=require('express');
const favQuotesController = require('../controllers/favQuotesController');
const appForFavQuotes=express.Router();

appForFavQuotes.post('/',(req,res)=>{
    console.log("in FavQuotes Route");
    favQuotesController(req,res);
});
module.exports=appForFavQuotes;
