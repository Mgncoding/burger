var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    res.redirect('/burgers')
})

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/burgers/create", function (req, res) {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function () {
            res.redirect('/burgers');
        });
});
router.put("/burgers/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition ", condition);
    burger.update({ devoured: req.body.devoured }, condition, function () {
        
            res.redirect('/burgers')
        
    });
});
router.delete("/burgers/delete/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("Condition ", condition);

    burger.delete(condition, function (result) {
        if ((result.changeRows == 0)) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;