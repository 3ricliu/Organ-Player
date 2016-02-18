var React = require('react');
var ReactDom = require('react-dom');
var Dispatcher = require('./dispatcher/Dispatcher');
var Note = require('./util/Note');
var KeyStore = require('./stores/KeyStore');
var KeyListener = require('./util/KeyListener');
var Key = require('./components/Key');
var TONES = require('./constants/Tones');
var Organ = require('./components/Organ');

document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector("#content");
  ReactDom.render(<Organ />, root);
});
