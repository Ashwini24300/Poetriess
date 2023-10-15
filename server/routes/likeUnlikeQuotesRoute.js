const express=require('express');
const likeUnlikeQuotesController = require('../controllers/likeUnlikeQuotesController');
const appForLikeUnlikeQuotes=express.Router();

appForLikeUnlikeQuotes.post('/',(req,res)=>{
    console.log("in appForLikeUnlikeQuotes Route");
    likeUnlikeQuotesController(req,res);
});
module.exports=appForLikeUnlikeQuotes;
