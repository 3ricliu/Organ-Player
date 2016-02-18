var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');

var _keys = [];
var KeyStore = new Store(Dispatcher);

KeyStore.all = function(){
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload) {
  // debugger
  switch(payload.actionType) {
    case "KEY_PRESSED":
      addNote(payload.note);
      KeyStore.__emitChange();
      // console.log("pressed", payload.note);
      console.log(_keys)
      break;
    case "KEY_RELEASED":
      removeNote(payload.note);
      KeyStore.__emitChange();
      // console.log("released", payload.note);
      break;
  }
};

var removeNote = function(note) {
  var idx = _keys.indexOf(note);
  if (idx >= 0){_keys.splice(idx, 1);}
};

var addNote = function(note){
  // if (_keys[_keys.length - 1] !== note) 
  if(_keys.indexOf(note) === -1){
    _keys.push(note);
  }
};


module.exports = KeyStore;

window.KeyStore = KeyStore;
