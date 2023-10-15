const express = require('express');
const cors = require('cors');
const { con } = require('./DbUtils/dbUtil');

const appForLogin=require('./routes/loginRoute')
const appForRegister = require('./routes/registerRoute');
const appForEditprofile = require('./routes/editprofRoute');

const appForAllQuotes = require('./routes/allQuotesRoute');
const appForFavQuotes = require('./routes/favQuotesRoute');
const appForMyQuotes = require('./routes/myQuotesRoute');
const appForDeleteQuotes = require('./routes/deleteQuoteRoute');
const appForEditQuote = require('./routes/editQuotesRoute');
const appForUserprofile = require('./routes/userProfRoute');
const appForLikeUnlikeQuotes = require('./routes/likeUnlikeQuotesRoute');
const appForAddQuotes = require('./routes/addQuotesRoute');
const appForRemoveFavQuotes = require('./routes/remFavQuoteRoute');



const app = express();
con();

app.use(cors());
app.use(express.json());

app.use('/', appForLogin)
app.use('/register', appForRegister)
app.use('/editprofile', appForEditprofile)
app.use('/profile', appForUserprofile)


app.use('/allquotes', appForAllQuotes)
app.use('/favquotes', appForFavQuotes)
app.use('/myquotes', appForMyQuotes)
app.use('/delquotes', appForDeleteQuotes)
app.use('/editquote', appForEditQuote)
app.use('/likeunlikequote', appForLikeUnlikeQuotes)
app.use('/addquotes', appForAddQuotes)
app.use('/removefavquotes', appForRemoveFavQuotes)


// app.use('/removefavquotes', appForRemoveFavQuotes)




app.listen(9999, () => {
    console.log("Server Started at 9999");
})