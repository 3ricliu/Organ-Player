var KeyStore = require('../stores/KeyStore');
var Dispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function (key) {
    Dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      note: key
    });
  },

  keyReleased: function (key) {
    Dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      note: key
    });
  }
};


module.exports = KeyActions;
