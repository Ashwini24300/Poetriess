const express=require('express');

const EditprofileController = require('../controllers/editProfController');

const appForEditprofile=express.Router();

appForEditprofile.post('/',(req,res)=>{
    console.log("in Edit Profile Route");
    EditprofileController(req,res);
});
module.exports=appForEditprofile;
