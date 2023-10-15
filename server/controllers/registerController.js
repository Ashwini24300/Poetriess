const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const RegisterController = (req, res) => {
    console.log("in RegisterController");
  
    const sql ="insert into Users(first_name,last_name,email,password,mobile) values(?,?,?,?,?)";

    connection.query(sql, [req.body.first_name,req.body.last_name,req.body.email,req.body.password,req.body.mobile], (err, result) => {
        
        //Error condition :
        if (err)
            //sql error
            return res.json({
                Status: "Error",
                Error: "Error in Running Query"
            })

        //Success Condition :
        if (result.affectedRows > 0) {
           console.log(result);
            //sql sucess : login
            return res.json({
                Status: "Success",
                Result: result
            })
        }
        else {
            console.log(result)
            //sql sucess : login fail
            return res.json({
                Status: "Error", Error: "Data entry wrong"
            })
        }

    })
}
module.exports = RegisterController;

