const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const RemoveFavQuoteController = (req, res) => {
    console.log("in RemoveFavQuoteController");
  
    const sql ="delete from FavoriteQuotes where user_id=? and quote_id=?";
    connection.query(sql, [req.body.user_id,req.body.quote_id], (err, result) => {
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

                Status: "Error", Error: "Fav quote Delete failed"
            })

        }

    })
}
module.exports = RemoveFavQuoteController;

