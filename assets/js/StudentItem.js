var React = require('react')
var ReactDOM = require('react-dom')

var StudentItem = React.createClass({
  propTypes: {
    race: React.PropTypes.string.isRequired,
    act: React.PropTypes.string.isRequired,
    gpa: React.PropTypes.string.isRequired,
  },

  render: function() {
    console.log("returning from StudentItem");
    return (
      React.createElement('div', {
          className: 'StudentItem'
        },
        React.createElement('div', {
          className: 'StudentItem-race'
        }, this.props.race),
        React.createElement('div', {
          className: 'StudentItem-act'
        }, this.props.act),
        React.createElement('div', {
          className: 'StudentItem-gpa'
        }, this.props.gpa)
      )
    );
  },
});


module.exports = StudentItem;
