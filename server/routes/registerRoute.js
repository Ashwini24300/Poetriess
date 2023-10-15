const express=require('express');

const RegisterController = require('../controllers/registerController');

const appForRegister=express.Router();

appForRegister.post('/',(req,res)=>{
    console.log("in Register Route");
    RegisterController(req,res);
});
module.exports=appForRegister;
