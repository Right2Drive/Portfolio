/**
 * Created by Brad on 2016-09-23.
 */

var SECTION_MOD = (function() {
   var my = {},
       sectionTemplate = createSectionTemplate(),
       breakTemplate = createBreakTemplate();

   function createSectionTemplate() {
       var section = document.createElement("DIV");
        section.className = "content-section";

       var buttonLeft = createButtonTemplate("left");
       section.appendChild(buttonLeft);
       var buttonRight = createButtonTemplate("right");
       section.appendChild(buttonRight);

       return section;
   }

   function createBreakTemplate() {
       var sectionBreak = document.createElement("DIV");
       sectionBreak.className = "section-break";
       return sectionBreak;
   }

   function createButtonTemplate(side) {
       var buttonWrapper = document.createElement("DIV");
       buttonWrapper.className = "button-wrapper button-" + side;

       var button = document.createElement("BUTTON");
       button.className = "mdl-button mdl-js-button mdl-button--fab";
       buttonWrapper.appendChild(button);

       var buttonImage = document.createElement("I");
       buttonImage.className = "material-icons";
       buttonImage.textContent = "keyboard_arrow_" + side + "_black";
       button.appendChild(buttonImage);
       return buttonWrapper;
   }

    my.Section = function(row, next) {
        this.row = row;
        this.cards = [];
        this.sectionLoaded = false;

        this.load = function() {
            var section = sectionTemplate.cloneNode(true);
            var sectionBreak = breakTemplate.cloneNode(true);
            var contents = document.getElementsByClassName("content");
            if (contents.length !== 1) {
                console.log("There is more than one content section");
            }
            if (this.row !== 0) {
                contents[0].appendChild(sectionBreak);
            }
            contents[0].appendChild(section);
            this.sectionLoaded = true;
            console.log("Section " + this.row + " loaded");
        };

        this.loadCards = function() {
            if (!this.sectionLoaded) {
                return;
            }
            // Loading cards
            for (var key in CARD_MOD.Position) {
                if (!CARD_MOD.Position.hasOwnProperty(key)) continue;
                var card = new CARD_MOD.Card("Title", null, null, this.row);
                this.cards.push(card);
                card.load(CARD_MOD.Position[key]);
            }
            console.log("Section " + this.row + " cards loaded");
        }
        console.log("Section " + this.row + " generated");
    };

   return my;
}());