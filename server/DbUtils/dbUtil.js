const mysql=require('mysql');
const connection =mysql.createConnection({
    host:"localhost",
    user :"root",
    password:"manager",
    database:"projectDB"
})

var con=()=>{
    connection.connect((err)=>{
        if(err){
            console.log("Error in Connection");
        }
        else{
            console.log("Connection Established");
     
        }
    })
}
module.exports={connection,con};