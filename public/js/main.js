/**
 * Created by Brad on 2016-09-21.
 */

document.addEventListener("DOMContentLoaded", function(event) {
    var card = new CARD_MOD.Card('Test Name', null, null);
    card.loadOnPage();

    var card = new CARD_MOD.Card(('Another Name', null, null));
    card.loadLeft();
});

// TODO if not supported (ie. IE 8 or below), output a message to user
/*
    FOR:
        CSS VARIABLES
        THE ABOVE EVENT LISTENER
        TBC
 */