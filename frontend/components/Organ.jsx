var React = require('react');
var Key = require('./Key');
var TONES = require('../constants/Tones');


var Organ = React.createClass({
  render: function() {
    return(
      <div className="Organ group">
        {Object.keys(TONES).map(function(key, index) {
          return <Key key={index} noteName={key}/>;
        })}
      </div>
    );
  }

});

module.exports = Organ;
