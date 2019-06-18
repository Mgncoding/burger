const mysql = require("mysql");

// const keys = require("../keys");

// let connection = mysql.createConnection({
//     host: keys.mysql.host,
//     port: keys.mysql.port,
//     user: keys.mysql.user,
//     password: keys.mysql.password,
//     database: keys.mysql.database
// })

var connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    
    console.log("connection as id " + connection.threadId)
});
module.exports = connection;