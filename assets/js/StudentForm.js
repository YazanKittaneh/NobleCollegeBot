var React = require('react')
var ReactDOM = require('react-dom')
var CollegeList = require('./CollegeList');

//var College = React.createFactory(require('./College.js'));
//CITE: jamesknelson.com/learn-raw-react-ridiculously-simple-forms/

var StudentForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onRaceInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {
      race: e.target.value
    }))
  },

  onActInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {
      act: e.target.value
    }))
  },

  onGPAInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {
      gpa: e.target.value
    }))
  },

  onSubmit: function(e) {
    e.preventDefault()
    this.props.onSubmit()
  },

  render: function() {
    var oldStudent = this.props.value;
    var onChange = this.props.onChange;

    console.log("returning from StudentForm");
    return (
      React.createElement('form', {
          className: 'StudentForm',
          onSubmit: this.onSubmit,
        },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Race',
          value: this.props.value.race,
          onInput: this.onRaceInput,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'ACT',
          value: this.props.value.act,
          onInput: this.onActInput,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'GPA',
          value: this.props.value.gpa,
          onInput: this.onGpaInput,
        }),
        React.createElement('button', {
            type: 'submit'

          },
          "Get Colleges")
      )
    )
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
  React.createElement(StudentFormView, {
    students: students,
    newStudent: newStudent,
  }), document.getElementById("Forms")
);

ReactDOM.render( < CollegeList / > ,
  document.getElementById("TableView")
);

module.exports = StudentForm;
