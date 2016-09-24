/**
 * Created by Brad on 2016-09-21.
 */

document.addEventListener("DOMContentLoaded", function(event) {
    // Add event listener to shrink header if scrolled past a certain point
    window.addEventListener('scroll', HEADER_MOD.headerScroll);

    var section1 = new SECTION_MOD.Section(0, "Projects");
    section1.load();
    section1.loadCards();
    var section2 = new SECTION_MOD.Section(1, "Skills");
    section2.load();
    section2.loadCards();
    var section3 = new SECTION_MOD.Section(2, "Organizations");
    section3.load();
    section3.loadCards();
});



// TODO if not supported (ie. IE 8 or below), output a message to user
/*
    FOR:
        CSS VARIABLES
        THE ABOVE EVENT LISTENER
        TBC
 */