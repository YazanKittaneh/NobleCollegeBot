var React = require('react')
var ReactDOM = require('react-dom')
var StudentForm = require('./StudentForm').default;

var StudentFormView = React.createClass({
  propTypes: {
    students: React.PropTypes.array.isRequired,
    newStudent: React.PropTypes.object.isRequired,
    onNewStudentChange: React.PropTypes.func.isRequired,
    onNewStudentSubmit: React.PropTypes.func.isRequired,
  },

  render: function() {
    console.log("returning from StudentFormView");
    var studentItemElements = this.props.students.map(function(student) {
      return React.createElement(StudentItem, student);
    });
    return (
      React.createElement('div', {
          className: 'StudentView'
        },
        React.createElement('h1', {
          className: 'StudentView-title'
        }, "Students"),
        React.createElement('ul', {
          className: 'StudentView-list'
        }, studentItemElements),

        React.createElement(StudentForm, {
          value: this.props.newStudent,
          onChange: this.props.onNewStudentChange,
          onSubmit: this.props.onNewStudentSubmit,
        })
      )
    );
  },
});

module.exports = StudentFormView;
