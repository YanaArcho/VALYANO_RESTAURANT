$(function() {
    $(".mu-contact-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newcontact = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        subject: $("#subject").val().trim(),
        message: $("#message").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/contacts", {
        type: "POST",
        data: newcontact
        }).then(
        function(err) {
            if (err) {
                console.log('There was an error: ', err)
            } else {
            console.log("created new contact");
            // Reload the page to get the updated list  
        }}
        );
        location.reload();
    });

    $(".delete-contact").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/contacts/" + id, {
        type: "DELETE"
        }).then(
        function() {
            console.log("deleted contact", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});