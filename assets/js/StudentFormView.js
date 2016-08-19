var React = require('react')
var ReactDOM = require('react-dom')
var StudentForm = require('./StudentForm')
var StudentItem = require('./StudentItem')


var students = [{
  key: 1,
  name: "James K Nelson",
  email: "james@jamesknelson.com",
  description: "Front-end Unicorn"
}, {
  key: 2,
  name: "Jim",
  email: "jim@example.com"
}, {
  key: 3,
  name: "Joe"
}, ];

var newStudent = {
  name: "",
  email: "",
  description: ""
};


var StudentFormView = React.createClass({
  propTypes: {
    students: React.PropTypes.array.isRequired,
    newStudent: React.PropTypes.object.isRequired,
    changeValues: React.PropTypes.func,

  },


  render: function() {
    var StudentItemElements = this.props.students
      .filter(function(student) {
        return student.act;
      })
      .map(function(student) {
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
        }, StudentItemElements),
        React.createElement(StudentForm, {
          value: this.props.newStudent,
          onChange: function(student) {
            console.log(student);
          },
          changeValues: this.props.changeValues,
        })
      )
    );
  },
});
