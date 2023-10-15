const express=require('express');

const UserprofileController = require('../controllers/userProfController');

const appForUserProfile=express.Router();

appForUserProfile.post('/',(req,res)=>{
    console.log("in User Profile Route");
    UserprofileController(req,res);
});
module.exports=appForUserProfile;
