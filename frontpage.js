window.addEventListener("load", () => {

setTimeout(() => {

    // LAND animation
    document.getElementById("titleWrapper").classList.add("left-mode");

    // location text animation
    document.getElementById("locationText").classList.add("final-position");

    // navbar slide down
    document.querySelector(".navbar").classList.add("show-navbar");

}, 2000);


/* SHOW BUTTONS AFTER TITLE FINISHES */

setTimeout(() => {

    document.getElementById("heroButtons").classList.add("show-buttons");

}, 6000);

});