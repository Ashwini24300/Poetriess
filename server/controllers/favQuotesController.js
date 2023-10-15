const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const FavQuotesController = (req, res) => {
    console.log("in Fav Controller");
  
    const sql ="select text,author from Quotes where quote_id IN(select quote_id from FavoriteQuotes where user_id=?)";
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
                Status: "Error", Error: "Wrong Email Or Password"
            })

        }

    })
}
module.exports = FavQuotesController;

