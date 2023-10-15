const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const MyQuotesController = (req, res) => {
    console.log("in MyQuotesController");
  
    const sql ="select text,author,quote_id from Quotes where user_id=?";
    connection.query(sql, [req.body.user_id], (err, result) => {
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
                Status: "Error", Error: "My quotes failed to load"
            })

        }

    })
}
module.exports = MyQuotesController;

