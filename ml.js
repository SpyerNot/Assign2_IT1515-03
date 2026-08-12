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
/* =========================================
   ROLE GUIDE SLIDER
========================================= */

const slides = document.querySelector(".slides");

const roleTabs = document.querySelectorAll(".role-tab");

const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");


let currentSlide = 1;

const totalSlides = roleTabs.length;


/* =========================================
   CHANGE SLIDE
========================================= */

function showSlide(index) {

    /*
        Make sure the index stays within
        the available slides
    */

    if (index >= totalSlides) {

        index = 0;

    }

    if (index < 0) {

        index = totalSlides - 1;

    }


    currentSlide = index;


    /*
        Move the slider
    */

    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    /*
        Update role buttons
    */

    roleTabs.forEach(function(tab) {

        tab.classList.remove("active");

    });


    roleTabs[currentSlide].classList.add("active");


    /*
        Update dots
    */

    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    dots[currentSlide].classList.add("active");

}


/* =========================================
   NEXT BUTTON
========================================= */

nextBtn.addEventListener("click", function() {

    showSlide(currentSlide + 1);

});


/* =========================================
   PREVIOUS BUTTON
========================================= */

prevBtn.addEventListener("click", function() {

    showSlide(currentSlide - 1);

});


/* =========================================
   ROLE TAB BUTTONS
========================================= */

roleTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        const slideNumber =
            Number(tab.dataset.slide);

        showSlide(slideNumber);

    });

});


/* =========================================
   DOT BUTTONS
========================================= */

dots.forEach(function(dot) {

    dot.addEventListener("click", function() {

        const slideNumber =
            Number(dot.dataset.slide);

        showSlide(slideNumber);

    });

});


/* =========================================
   AUTOMATIC SLIDER
========================================= */

let autoSlide = setInterval(function() {

    showSlide(currentSlide + 1);

}, 5000);


/*
    Reset automatic timer whenever
    the user manually changes the slide.
*/

function resetAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(function() {

        showSlide(currentSlide + 1);

    }, 5000);

}


/* Reset timer when buttons are clicked */

nextBtn.addEventListener("click", resetAutoSlide);

prevBtn.addEventListener("click", resetAutoSlide);


/* Reset timer when a role is selected */

roleTabs.forEach(function(tab) {

    tab.addEventListener("click", resetAutoSlide);

});


/* Reset timer when a dot is clicked */

dots.forEach(function(dot) {

    dot.addEventListener("click", resetAutoSlide);

});