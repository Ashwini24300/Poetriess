const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const UserprofileController = (req, res) => {
    console.log("in UserprofileController");
  
    const sql ="select first_name,last_name,email,address,mobile from Users where user_id=?";

    connection.query(sql, [req.body.user_id], (err, result) => {
        
        //Error condition :
        if (err)
            //sql error
            return res.json({
                Status: "Error",
                Error: "Error in Running Query"
            })

        //Success Condition :
        if (result.length > 0) {
           console.log(result)
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
                Status: "Error", Error: "Profile fetching failed"
            })
        }

    })
}
module.exports = UserprofileController;

