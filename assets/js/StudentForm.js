var React = require('react')
var ReactDOM = require('react-dom')
var CollegeList = require('./CollegeList');

//var College = React.createFactory(require('./College.js'));
//CITE: jamesknelson.com/learn-raw-react-ridiculously-simple-forms/

var StudentItem = React.createClass({
  propTypes: {
    race: React.PropTypes.string.isRequired,
    act: React.PropTypes.string.isRequired,
    gpa: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
        React.createElement('li', {className: 'StudentItem'},
        React.createElement('h2', {className: 'StudentItem-race'}, this.props.race),
        React.createElement('a', {className: 'StudentItem-act'}, this.props.act),
        React.createElement('div', {className: 'StudentItem-gpa'}, this.props.gpa)
      )
    );
  },
});


var StudentForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var race = this.state.race.trim();
    var act = this.state.act.trim();
    var gpa = this.state.gpa.trim();

    if (!race || !act || !gpa) {
      return;
    }
    this.setState({race: race, act: act, gpa: gpa});
  },

  render: function() {
    var oldStudent = this.props.value;
    var onChange = this.props.onChange;


    return (
      React.createElement('form', {
        className: 'StudentForm',
        onSubmit: this.handleSubmit
      },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Race',
          value: this.props.value.race,
          onChange: function(e) {
            onChange(Object.assign({}, oldStudent, {race: e.target.value}));
          },
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'ACT',
          value: this.props.value.act,
          onChange: function(e) {
            onChange(Object.assign({}, oldStudent, {act: e.target.value}));
          },
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'GPA',
          value: this.props.value.gpa,
          onChange: function(e) {
            onChange(Object.assign({}, oldStudent, {gpa: e.target.value}));
          },
        }),
        React.createElement('button', {
          type: 'submit'

        },
        "Get Colleges")
      )
    )
  },
});

var StudentFormView = React.createClass({
  propTypes: {
    students: React.PropTypes.array.isRequired,
    newStudent: React.PropTypes.object.isRequired,
  },

  render: function() {
    var StudentItemElements = this.props.students
      .filter(function(student) { return student.act; })
      .map(function(student) { return React.createElement(StudentItem, student); });

    return (
      React.createElement('div', {className: 'StudentView'},
        React.createElement('h1', {className: 'StudentView-title'}, "Students"),
        React.createElement('ul', {className: 'StudentView-list'}, StudentItemElements),
        React.createElement(StudentForm, {
          value: this.props.newStudent,
          onChange: function(student) { console.log(student); },
        })
      )
    );
  },
});




var students = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
];

var newStudent = {name: "", email: "", description: ""};


ReactDOM.render(
  React.createElement(StudentFormView, {
  students: students,
  newStudent: newStudent,
}),  document.getElementById("Forms")
);

ReactDOM.render(
  <CollegeList />,
  document.getElementById("TableView")
);
