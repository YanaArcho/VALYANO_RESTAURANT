$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        eaten: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/salads/" + id, {
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
  
      var newsalad = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/salads", {
        type: "POST",
        data: newsalad
      }).then(
        function() {
          console.log("created new salad");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-salad").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/salads/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted salad", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });