var connection = require('../config/connection.js')

// Helper functions
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


// ORM
var orm = {
  // Used to show each burger
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table;

    connection.query(queryString, function(err, result) {
      if (err) throw err;

      //console.log(result)
      cb(result)
    }) 
  },
  insert: function(table, cols, vals, cb) {
    var queryString  = "INSERT INTO " + table + "( " + cols.toString() + ") VALUES ( " + printQuestionMarks(vals.length) + ")"

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;

      cb(result)
    })
  },
  devour: function(table, objColVals, id, cb) {
    var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE id = " + id;
    
    console.log(queryString)
    connection.query(queryString, function(err, result) {
      if (err) throw err;

      cb(result)
    });
  }
};
module.exports = orm;