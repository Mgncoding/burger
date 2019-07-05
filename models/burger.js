var orm = require('../config/orm.js')

// Create code here that will call the ORM functions using burger specific input for the ORM (???) <see cat example>

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(results) {

      cb(results)
    })
  },
  insert: function(cols, vals, cb) {
    orm.insert("burgers", cols, vals, function(results) {

      cb(results)
    })
  },
  devour: function(objColVals, id, cb) {
    orm.devour("burgers", objColVals, id, function(results) {

      cb(results)
    })
  }
}

module.exports = burger;