var React = require('react')
var ReactDOM = require('react-dom')

var StudentItem = React.createClass({
  propTypes: {
    race: React.PropTypes.string.isRequired,
    act: React.PropTypes.string.isRequired,
    gpa: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {
          className: 'StudentItem'
        },
        React.createElement('h2', {
          className: 'StudentItem-race'
        }, this.props.race),
        React.createElement('a', {
          className: 'StudentItem-act',
          href: 'mailto:' + this.props.act
        }, this.props.act),
        React.createElement('div', {
          className: 'StudentItem-gpa'
        }, this.props.gpa)
      )
    );
  },
});

module.exports = StudentItem;
