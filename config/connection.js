const mysql = require("mysql");
var connection = {}

if((process.env.PORT || 3000) != 3000) {
    connection = {
        host: "jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "vh5fx1mqe4ykgase",
        password: "i4zsu30m1l90klb4",
        database: "ewv7v4y60wscdzin"
    }
    
}else {

    connection = mysql.createConnection({
            port: 3306,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'burgers_db'
        });
}


connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    
    console.log("connection as id " + connection.threadId)
});
// connection.connect();
module.exports = connection;