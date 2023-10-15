const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const DeleteQuoteController = (req, res) => {
    console.log("in DeleteQuoteController");
    console.log(req.body.quote_id)
  
    const sql ="delete from Quotes where quote_id=?";
    connection.query(sql, [req.body.quote_id], (err, result) => {
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

                Status: "Error", Error: "Delete editing failed"
            })

        }

    })
}
module.exports = DeleteQuoteController;

