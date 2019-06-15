const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    use: "root",
    password: "root",
    database: "burger_db"
});