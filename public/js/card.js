/*
* This is my object oriented method of implementing my cards in javascript
 */

var CARD_MOD = (function() {
    var my = {},
        cardTemplate = createCardTemplate();

    //////////////////////// Private Methods  /////////////////////////////

    function createCardTemplate() {
        var card = document.createElement("DIV");
        card.className = "card mdl-card mdl-shadow--2dp";

        var cardTitleWrapper = document.createElement("DIV");
        cardTitleWrapper.className = "mdl-card__title mdl-card--expand";
        card.appendChild(cardTitleWrapper);

        var cardTitleHeader = document.createElement("H2");
        cardTitleHeader.className = "mdl-card__title-text";
        cardTitleWrapper.appendChild(cardTitleHeader);

        var supportText = document.createElement("DIV");
        supportText.className = "mdl-card__supporting-text";
        supportText.textContent = "this is a test with what is going on I don't know if it will do it the right size or not but I would be prettyy unhapy if it doesn't work sadface";
        card.appendChild(supportText);

        var cardContent = document.createElement("DIV");
        cardContent.className = "mdl-card__actions mdl-card--border";
        card.appendChild(cardContent);

        var cardButton = document.createElement("A");
        cardButton.className = "mdl-button mdl-js-button mdl-js-ripple-effect";
        cardButton.textContent = "See More";
        cardContent.appendChild(cardButton);

        return card;
    }

    /////////////////////////// Card Object /////////////////////////////////

    my.Card = function(title, image, content, section) {
        this.title = title;
        this.image = image;
        this.content = content;
        this.section = section;

        this.loadRight = function() {

        };

        this.loadLeft = function() {

        };

        this.destructLeft = function() {

        };

        this.destructRight = function() {

        };

        this.loadCenter = function() {
            var card = cardTemplate.cloneNode(true);
            card.className += " card-center";
            card.childNodes[0].childNodes[0].textContent = title;
            var sections = document.getElementsByClassName('content-section');
            sections[section].appendChild(card);
        }

        var destroy = function() {

        };
    };

    return my;
}());
