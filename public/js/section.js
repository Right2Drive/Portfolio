/**
 * Created by Brad on 2016-09-23.
 */

var SECTION_MOD = (function() {
   var my = {},
       sectionTemplate = createSectionTemplate(),
       breakTemplate = createBreakTemplate();

    var NUMBER_OF_CARDS = 5;

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

   // TODO remove buttons if not being used
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

    my.Section = function(row, sectionInfo) {
        this.row = row;
        this.sectionInfo = sectionInfo;
        this.cards = [];
        this.liveCards = new QUEUE_MOD.Queue(6);

        var load = function(name) {
            var section = sectionTemplate.cloneNode(true);

            // Set section name
            var sectionTitle = document.createElement("SPAN");
            sectionTitle.className = "section-title";
            sectionTitle.textContent = name;
            section.appendChild(sectionTitle);

            var sectionBreak = breakTemplate.cloneNode(true);
            var contents = document.getElementsByClassName("content");
            if (contents.length !== 1) {
                console.log("There is more than one content section");
            }
            if (this.row !== 0) {
                contents[0].appendChild(sectionBreak);
            }
            contents[0].appendChild(section);
            console.log("Section " + this.row + " loaded");
        };

        var loadCards = function(cards) {
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
        };

        var construct = function(sectionInfo) {
            load(sectionInfo[row]['title']);
            // Load all of the cards needed by this section
            // TODO should load them into queue until it's full
        };

        // Call the constructor
        construct();
        // Log the section generation
        console.log("Section " + this.row + " generated");
    };

   return my;
}());