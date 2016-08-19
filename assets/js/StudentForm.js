var React = require('react')
var ReactDOM = require('react-dom')

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


var StudentForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    changeValues: React.PropTypes.func,
  },

  handleSubmit: function(event) {
    console.log("handleSubmit called!");
    event.preventDefault(); //required
    //this.refs['collegelist'].changeValues();
    this.props.changeValues();
  },


  onChangeRace: function(e) {
    onChange(Object.assign({}, oldStudent, {
      race: e.target.value
    }));
  },

  onChangeAct: function(e) {
    onChange(Object.assign({}, oldStudent, {
      act: e.target.value
    }));
  },

  onChangeGpa: function(e) {
    onChange(Object.assign({}, oldStudent, {
      gpa: e.target.value
    }));
  },

  render: function() {
    var oldStudent = this.props.value;
    var onChange = this.props.onChange;


    return (
      <form action="" onSubmit={this.handleSubmit} className='StudentForm' >
        <input
          placeholder = 'Race'
          value = {this.props.value.race}
          onChange = {this.onChangeRace}
        />
        < input
          placeholder = 'Act'
          value = {this.props.value.act}
          onChange = {this.onChangeAct}
        />
      < input
        placeholder = 'Gpa'
        value = {this.props.value.gpa}
        onChange = {this.onChangeGpa}
      />
      < button className="btn btn-primary" type="submit">
        Send your project info
      </button>
    </form>
    )
  },
});

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


module.exports = StudentFormView;
