var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    //console.log(data)
    res.render("index", {burgers: data})
  }); 
});

router.post("/", function(req, res) {
  burger.insert(["burger_name", "devoured"], [req.body.burger_name, 0], function() {
    res.redirect("/")
  });
});

router.put("/:id", function(req, res) {
  burger.devour({ devoured: req.body.devoured}, req.params.id, function() {
    
    res.redirect("/")
  });
});

module.exports = router;