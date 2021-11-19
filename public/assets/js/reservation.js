$(function() {
    $(".mu-reservation-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newreservation = {
        fullname: $("#fullname").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        people: $("#people").val().trim(),
        date: $("#datepicker").val().trim(),
        about: $("#about").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/reservations", {
        type: "POST",
        data: newreservation
        }).then(
        function(err) {
            if (err) {
                console.log('There was an error: ', err)
            } else {
            console.log("created new reservation");
            // Reload the page to get the updated list 
        }}
        );
        location.reload();
    });

    $(".delete-reservation").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/reservations/" + id, {
        type: "DELETE"
        }).then(
        function() {
            console.log("deleted reservation", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});