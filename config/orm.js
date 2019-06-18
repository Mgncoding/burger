var connection = require("../config/connection");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) { 
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "= " + value)
        }
    }
return arr.toString();
}

var orm = {
    all: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    create: function (table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " + table;

        dbQuery += " (";
        dbQuery += cols.toString();
        dbQuery += ") ";
        dbQuery += "VALUES (";
        dbQuery += createQmarks(vals.length);
        dbQuery += ") ";

   console.log(dbQuery);

   connection.query(dbQuery, vals, function(err, result) {
       if (err) {
           throw err;
       }
       cb(result)
   })
    },
    update: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table; 

        dbQuery += " SET ";
        dbQuery += objToSql(objColVals);
        dbQuery += " WHERE ";
        dbQuery += condition;

        console.log(dbQuery);

        connection.query(dbQuery, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        var dbQuery = "DELETE FROM " + table;
        
        dbQuery += " WHERE ";
        dbQuery += condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
}
module.exports = orm