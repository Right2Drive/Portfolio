/**
 * Created by Brad on 2016-09-25.
 */

var QUEUE_MOD = (function() {
   var my = {};

   my.Queue = function(length) {
       this.length = length;
       var queue = [];

       this.pushLeft = function(item) {
           queue.unshift(item);
           return queue.pop();
       };

       this.pushRight = function(item) {
           queue.push(item);
           return queue.shift();
       };

       this.addCard = function(card) {
           if (queue.length < length) {
               queue.push(card);
           }
       };

       this.get = function(i) {
           return queue[i];
       };
   };

   return my;
}());
