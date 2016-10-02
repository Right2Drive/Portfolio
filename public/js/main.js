/**
 * Created by Brad on 2016-09-21.
 */

document.addEventListener("DOMContentLoaded", function(event) {
    // Add event listener to shrink header if scrolled past a certain point
    window.addEventListener('scroll', HEADER_MOD.headerScroll);

    // Get the general content
    var sectionData = null;
    RETRIEVE_MOD.loadJSON('/content/content.json', function(res) {
        if (res === "Nothing found.") {
            throw "Could not load json";
        } else {
            console.log("Response: " + res);
            sectionData = JSON.parse(res);
        }
    })
});



// TODO if not supported (ie. IE 8 or below), output a message to user
/*
    FOR:
        CSS VARIABLES
        THE ABOVE EVENT LISTENER
        TBC
 */