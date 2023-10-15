const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const LoginController = (req, res) => {
    console.log("in LoginController");
  
    const sql ="select first_name,user_id from Users where email=? and password=?";
    connection.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err)
            //sql error
            return res.json({
                Status: "Error",
                Error: "Error in Running Query"
            })
        if (result.length > 0) {
           
            //sql sucess : login
            return res.json({
                Status: "Success",
                Result: result
            })
        }
        else {
            //sql sucess : login fail
            return res.json({
                Status: "Error", Error: "Wrong Email Or Password"
            })

        }

    })
}
module.exports = LoginController;

