const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const addQuotesController = (req, res) => {
    console.log("in add QuotesController");
  
    const sql ="insert into Quotes(text,author,user_id) values(?,?,?)";
    connection.query(sql,[req.body.text,req.body.author,req.body.user_id],(err, result) => {
        if (err)
            //sql error
            return res.json({
                Status: "Error",
                Error: "Error in Running Query"
            })
        if (result.affectedRows > 0) {
           
            //sql sucess : login
            return res.json({
                Status: "Success",
                Result: result
            })
        }
        else {
            //sql sucess : login fail
            return res.json({
                Status: "Error", Error: "quote addition failed"
            })

        }

    })
}
module.exports = addQuotesController;

