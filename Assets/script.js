$(document).ready(function() {

    let nav_icon = $(".nav-right-icon");

    // if (!(nav_icon)) {

    // }

    $(".nav-right-icon").on("click", function() {
        $(".nav-right").css("display", "block");
    })

    $(".nav-right").on("click", function(event) {
        console.log(event);
        let link = event.target.id;
        link = link.slice(4);
        console.log(link);
        window.location = `${ link }.html`;
        // event.preventDefault();
        // console.log(window.location);
    });
});