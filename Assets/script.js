$(document).ready(function() {

    let nav_icon = $(".nav-right-icon");

    // if (!(nav_icon)) {

    // }

    $(".nav-right-icon").on("click", function() {
        $(".nav-right").css("display", "block");
    })

    $("#nav-contact").on("click", function() {
        window.location = `contact.html`;
    });

    $("#nav-index").on("click", function() {
        window.location = `index.html`;
    });

});