const { json } = require("express");
const { connection } = require('../DbUtils/dbUtil');

const LikeUnlikeQuotesController = (req, res) => {
    console.log("in LikeUnlikeQuotesController");
  
    console.log(req.body.user_id);
    console.log(req.body.quote_id);

    const sql ="insert into FavoriteQuotes values(?,?)";
    connection.query(sql, [req.body.user_id,req.body.quote_id], (err, result) => {
        if (err){
            console.log(err)
            //sql error
            return res.json({
                Status: "Error",
                Error: err
            })
        }
        if (result.affectedRows > 0) {
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
                Status: "Error", Error: "Liking quote failed.."
            })

        }

    })
}
module.exports = LikeUnlikeQuotesController;

