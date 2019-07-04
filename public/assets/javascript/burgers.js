$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devouredStatus = $(this).data("devour");
  
      var newDevourStatus = {
        devoured: devouredStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourStatus
      }).then(
        function() {
          console.log("changed devoured to", newDevourStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
     
  
    
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE",
       
      }).then(
        function() {
          console.log("changed devoured to Deleted");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  