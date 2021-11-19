$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        eaten: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/soups/" + id, {
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
  
      var newsoup = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/soups", {
        type: "POST",
        data: newsoup
      }).then(
        function() {
          console.log("created new soup");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-soup").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/soups/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted soup", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });