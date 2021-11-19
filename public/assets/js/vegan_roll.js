$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        eaten: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/vegan_rolls/" + id, {
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
  
      var newvegan_roll = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/vegan_rolls", {
        type: "POST",
        data: newvegan_roll
      }).then(
        function() {
          console.log("created new vegan_roll");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-vegan_roll").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/vegan_rolls/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted vegan_roll", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });