/*
* This is my object oriented method of implementing my cards in javascript
 */

// Using contructor pattern
function Card(name, images, contents) {
    this.name = name;
    this.images = images;
    this.contents = contents;


    this.loadRight = function() {

    }

    this.loadLeft = function() {

    }
}

function createCard() {
    var card = document.createElement("DIV");
    card.className = "cards-wrapper pure-g-r";

    card.appendChild(document.createElement("div"));

}