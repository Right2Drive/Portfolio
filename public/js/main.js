/**
 * Created by Brad on 2016-09-21.
 */

var NUMBER_OF_SECTIONS = 5;
var NUMBER_OF_CARD_SECTIONS = 3;

var sections = [];
var contentReady = false;

function loadContent() {
    if (!contentReady) {
        contentReady = true;
        return;
    }
    for (var i = 0; i < sectionData.length; i++) {
        if (i >= NUMBER_OF_SECTIONS) {
            console.log("Not enough sections");
            break;
        }
        sections[i].loadContent(sectionData[i]);
    }
}

// Get the general content
var sectionData = null;
RETRIEVE_MOD.loadJSON('/content/content.json', function(res) {
    if (res === "Nothing found.") {
        throw "Could not load json";
    } else {
        console.log("Response: " + res);
        sectionData = JSON.parse(res);
    }
    loadContent();
});

function loadSections(next) {
    for (var i = 0; i < NUMBER_OF_SECTIONS; i++) {
        var section = null;
        section = (i < NUMBER_OF_CARD_SECTIONS) ? new SECTION_MOD.Section(i) : new SECTION_MOD.Section(i, false);
        sections.push(section);
    }
    next();
}



document.addEventListener("DOMContentLoaded", function(event) {
    // Add event listener to shrink header if scrolled past a certain point
    window.addEventListener('scroll', HEADER_MOD.headerScroll);

    loadSections(loadContent);
});



// TODO if not supported (ie. IE 8 or below), output a message to user
/*
    FOR:
        CSS CALC
        THE ABOVE EVENT LISTENER
        TBC
 */