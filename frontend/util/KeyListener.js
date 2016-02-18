var KeyStore = require('../stores/KeyStore');
var KeyActions = require('../actions/KeyActions');

var KEY_CODES = {
  65: 'G3',
  83: 'A3',
  68: 'B3',
  70: 'C4',
  74: 'D4',
  75: 'E4',
  76: 'F4'
};

var KeyListener = function() {
  $(document).on("keydown", function(e) {
    var key = findKey(e.keyCode);
    KeyActions.keyPressed(key);
  });

  $(document).on("keyup", function(e) {
    var key = findKey(e.keyCode);
    KeyActions.keyReleased(key);
  });

  var findKey = function(keyCode) {
    return KEY_CODES[keyCode];
  };
};

module.exports = new KeyListener;

window.KeyListener = KeyListener;
