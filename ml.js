// Get all role markers
const roleMarkers = document.querySelectorAll(".role-marker");


roleMarkers.forEach(function(role) {

    // Get the information box inside this role
    const information = role.querySelector(".role-info");


    // Show information when hovering over the role
    role.addEventListener("mouseenter", function() {

        information.classList.add("show");

    });


    // Hide information when leaving the role
    role.addEventListener("mouseleave", function() {

        information.classList.remove("show");

    });

});