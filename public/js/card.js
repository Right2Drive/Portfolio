/*
* This is my object oriented method of implementing my cards in javascript
 */

var CARD_MOD = (function() {
    var my = {};

    //////////////////////// Private Methods  /////////////////////////////

    function createCard(name) {
        // Create the components of the card
        var card = document.createElement("DIV");
        card.className = "card pure-u-19-24";

        var headerWrapper = document.createElement("DIV");
        headerWrapper.className = "card-header pure-g-r";

        var headerSpace = document.createElement("DIV");
        headerSpace.className = "pure-u-1-24";

        var titleWrapper = document.createElement("DIV");
        titleWrapper.className = "pure-u-4-24";

        var title = document.createElement("SPAN");
        title.className = "card-title";
        title.value = name;

        var content = document.createElement("DIV");
        content.className = "card-content-wrapper";

        // Construct the element using the various components generated
        titleWrapper.appendChild(title);
        headerWrapper.appendChild(headerSpace);
        headerWrapper.appendChild(titleWrapper)
        card.appendChild(headerWrapper);
        card.appendChild(content);

        return card;
    }

    /////////////////////////// Card Object /////////////////////////////////

    my.Card = function(name, images, contents) {
        this.name = name;
        this.images = images;
        this.contents = contents;


        this.loadRight = function() {

        }

        this.loadLeft = function() {

        }

        this.loadOnPage = function() {
            var card = createCard(this.name);
            var section = document.getElementById('section-A');
            var cardWrappers = section.getElementsByClassName('cards-wrapper');
            if (cardWrappers.length === 1) {
                cardWrappers[0].insertBefore(card, cardWrappers[0][1]);
            } else {
                throw "There are more than one 'cards-wrapper' classes per section";
            }
        }
    }

    return my;
}());
