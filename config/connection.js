const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    use: "root",
    password: "root",
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) throw err; 
    
    console.log("connection as id " + connection.threadId)
});
module.exports = connection;