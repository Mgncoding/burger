$(function() {
    $(".create-form").on("submit", function(event) {
        // event.preventDefault();
        var newDevoured = $(this).data("newdevoured");
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: newDevoured
        };
        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Add new Burger");
            location.reload()
        });
    });
    $(".eatburger").on("click", function(event) {
        // event.preventDefault();
        var id = $(this).data("id");

        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers", id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger Devoured", newDevoured);
            location.reload();
        });
    });
    $(".trashburger").on("click", function(event) {
        // event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("Delete burger", id);
            location.reload();
        });
    });
});


