var React = require('react')
var ReactDOM = require('react-dom')
var StudentForm = require('./StudentForm')




var StudentFormView = React.createClass({
  propTypes: {
    changeValues: React.PropTypes.func,
  },


  render: function() {

    return (
      React.createElement('div', {
          className: 'StudentView'
        },
        React.createElement('h1', {
          className: 'StudentView-title'
        }, "Students"),
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

ReactDOM.render(
  <StudentFormView /> ,
  document.getElementById("Form")
);

module.exports = StudentFormView; //required to reference outside of Component
