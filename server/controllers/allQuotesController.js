const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const allQuotesController = (req, res) => {
    console.log("in allQuotesController");
  
    const sql ="select text,author,quote_id,user_id from Quotes";
    connection.query(sql, (err, result) => {
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
                Status: "Error", Error: "quote fetching failed"
            })

        }

    })
}
module.exports = allQuotesController;

