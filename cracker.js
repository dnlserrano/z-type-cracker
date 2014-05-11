// CREATE FAKE EVENT
function FakeEvent() {
  this.target = new Object();
  this.target.type = 'not-text';
  this.ctrlKey = null;
  this.shiftKey = null;
  this.altKey = null;
  this.which = null;
}
FakeEvent.prototype.stopPropagation = function () {
  console.log('faking stopPropagation');
}
FakeEvent.prototype.preventDefault = function () {
  console.log('faking preventDefault');
}
FakeEvent.prototype.setKey = function (key) {
  this.which = key.charCodeAt(0);
}
var e = new FakeEvent();
var j=0;
var destroyed = true;
var wordLen = 0;
var word;
var count = 0;
// LOOP THROUGH TARGET WORDS
window.setInterval(function(){
  if (ig.game.score < 9888888) {
    var words = ig.game.entities;
    var n = words.length;
    var c;
    if (n > 0) {
      //for (i = 0; i < n; i++) {
        if (destroyed) {
        word = ig.game.entities[1].remainingWord;
        wordLen = word.length;
        destroyed = false;
        }
        //for (j = 0; j < wordLen; j++) {
          c = word.charAt(j);
          e.setKey(c);
          ig.game.keydown(e);
          j++;
          if (j >= wordLen){
            j=0;
            destroyed = true;
          }
        //}
      //}
    }
  }
}, 100);