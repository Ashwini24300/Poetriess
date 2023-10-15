const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const EditQuotesController = (req, res) => {
    console.log("in EditQuotesController");
  
    const sql ="update Quotes set text=?, author=? where quote_id=?";
    connection.query(sql, [req.body.text,req.body.author,req.body.quote_id], (err, result) => {
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
                Status: "Error", Error: "quote editing failed"
            })

        }

    })
}
module.exports = EditQuotesController;

