document.addEventListener('DOMContentLoaded', function () {
    if (typeof SVGRect === "undefined") {
        /* If the browser does NOT support SVG. */

        let logo = document.querySelector(".logo");
        logo.src = "gfx/logo.png"; //change image to png


    }
}, false);
