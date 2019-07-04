const mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {

    connection = mysql.createConnection({
            port: 3306,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'burgers_db'
        });
}

var PORT = process.env.PORT || 8080;
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    
    console.log("connection as id " + connection.threadId)
});
// connection.connect();
module.exports = connection;