/**
 * Created by Brad on 2016-09-23.
 */

var SECTION_MOD = (function() {
   var my = {},
       sectionTemplate = createSectionTemplate(),
       breakTemplate = createBreakTemplate();

   function createSectionTemplate() {
       var section = document.createElement("DIV");
        section.className - "content-section";

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
   }

    my.Section = function() {

        this.load = function() {
            var section = sectionTemplate.cloneNode(true);
            var sectionBreak = breakTemplate.cloneNode(true);
            var contents = document.getElementsByClassName("content");
            if (contents.length !== 1) {
                console.log("There is more than one content section");
            }
            contents[0].appendChild(section);
            contents[0].appendChild(sectionBreak);

            
        }
    }

   return my;
});