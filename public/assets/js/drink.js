$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        eaten: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/drinks/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eaten to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newdrink = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/drinks", {
        type: "POST",
        data: newdrink
      }).then(
        function() {
          console.log("created new drink");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-drink").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/drinks/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted drink", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });