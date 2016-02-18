var React = require('react');
var KeyStore = require('../stores/KeyStore');
var Note = require('../util/Note');
var TONES = require('../constants/Tones');


var Key = React.createClass({
  getInitialState: function() {
    return({
      noteName: this.props.noteName,
      playing: false
    });
  },

  toggleNote: function() {
    var allKeys = KeyStore.all();
    if(allKeys.indexOf(this.state.noteName) === -1){
      this.setState({playing: false});
      this.note.stop();
    } else {
      this.setState({playing: true});
      this.note.start();

    }
  },

  componentDidMount: function() {
    var noteFreq = TONES[this.state.noteName];
    this.note = new Note(noteFreq);
    KeyStore.addListener(this.toggleNote);
  },

  componentWillUnmount: function() {
    KeyStore.removeListener(this.toggleNote);
  },

  render: function() {
    var playing = this.state.playing ? " playing" : "";
    // debugger;
    return (<div className={"key" + playing}>{this.state.noteName}</div>);
  }
});

module.exports = Key;

window.Key = Key;
