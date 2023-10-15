const express=require('express');
const LoginController = require('../controllers/loginController');
const appForLogin=express.Router();

appForLogin.post('/',(req,res)=>{
    console.log("in login Route");
    LoginController(req,res);
});
module.exports=appForLogin;
