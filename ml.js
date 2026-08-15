/* =====================================================
   BATTLEFIELD MAP
===================================================== */

const roleMarkers =
    document.querySelectorAll(".role-marker");


roleMarkers.forEach(function(role) {

    const information =
        role.querySelector(".role-info");

    const plusButton =
        role.querySelector(".plus-button");


    /* ---------------------------------------------
       SHOW INFORMATION WHEN HOVERING
    --------------------------------------------- */

    role.addEventListener("mouseenter", function() {

        information.style.opacity = "1";

        information.style.visibility = "visible";

        role.style.zIndex = "100";

    });


    /* ---------------------------------------------
       HIDE INFORMATION
    --------------------------------------------- */

    role.addEventListener("mouseleave", function() {

        information.style.opacity = "0";

        information.style.visibility = "hidden";

        role.style.zIndex = "";

    });


    /* ---------------------------------------------
       CLICK PLUS BUTTON
    --------------------------------------------- */

    plusButton.addEventListener("click", function(event) {

        event.stopPropagation();


        if (
            information.style.visibility === "visible"
        ) {

            information.style.opacity = "0";

            information.style.visibility = "hidden";

        }

        else {

            information.style.opacity = "1";

            information.style.visibility = "visible";

            role.style.zIndex = "100";

        }

    });

});



/* =====================================================
   ROLE GUIDE SLIDER
===================================================== */

const slides =
    document.querySelector(".slides");

const roleTabs =
    document.querySelectorAll(".role-tab");

const dots =
    document.querySelectorAll(".dot");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");


/*
   Start on Gold Lane

   0 = Roamer
   1 = Gold Lane
   2 = EXP Lane
   3 = Jungler
   4 = Mid Lane
*/

let currentSlide = 1;

const totalSlides =
    roleTabs.length;



/* =====================================================
   SHOW SLIDE
===================================================== */

function showSlide(index) {

    if (index >= totalSlides) {
        index = 0;
    }

    if (index < 0) {
        index = totalSlides - 1;
    }


    currentSlide = index;


    /* Move slider */

    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    /* Update role tabs */

    roleTabs.forEach(function(tab) {

        tab.classList.remove("active");

    });


    roleTabs[currentSlide]
        .classList.add("active");


    /* Update dots */

    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    dots[currentSlide]
        .classList.add("active");

}



/* =====================================================
   NEXT BUTTON
===================================================== */

nextBtn.addEventListener(
    "click",
    function() {

        showSlide(currentSlide + 1);

        resetAutoSlide();

    }
);



/* =====================================================
   PREVIOUS BUTTON
===================================================== */

prevBtn.addEventListener(
    "click",
    function() {

        showSlide(currentSlide - 1);

        resetAutoSlide();

    }
);



/* =====================================================
   ROLE TAB BUTTONS
===================================================== */

roleTabs.forEach(
    function(tab) {

        tab.addEventListener(
            "click",
            function() {

                const slideNumber =
                    Number(
                        tab.dataset.slide
                    );


                showSlide(slideNumber);

                resetAutoSlide();

            }
        );

    }
);



/* =====================================================
   DOT BUTTONS
===================================================== */

dots.forEach(
    function(dot) {

        dot.addEventListener(
            "click",
            function() {

                const slideNumber =
                    Number(
                        dot.dataset.slide
                    );


                showSlide(slideNumber);

                resetAutoSlide();

            }
        );

    }
);



/* =====================================================
   AUTOMATIC SLIDER
===================================================== */

let autoSlide =
    setInterval(
        function() {

            showSlide(
                currentSlide + 1
            );

        },
        5000
    );



/* =====================================================
   RESET AUTOMATIC SLIDER
===================================================== */

function resetAutoSlide() {

    clearInterval(autoSlide);


    autoSlide =
        setInterval(
            function() {

                showSlide(
                    currentSlide + 1
                );

            },
            5000
        );

}



/* =====================================================
   YOUTUBE GUIDE BUTTONS
===================================================== */

const videoButtons =
    document.querySelectorAll(
        ".play-button"
    );


videoButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const videoLink =
                    button.dataset.video;


                window.open(
                    videoLink,
                    "_blank"
                );

            }
        );

    }
);


/* =====================================================
   INITIAL SLIDE
===================================================== */

showSlide(currentSlide);