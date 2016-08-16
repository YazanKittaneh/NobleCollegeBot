var React = require('react')
var ReactDOM = require('react-dom')
var StudentFormView = require('./StudentFormView');
var StudentItem = require('./StudentItem');
var StudentForm = require('./StudentForm');


/*
 * Constants
 */


var STUDENT_TEMPLATE = {
  race: "",
  act: "",
  gpa: "",
  errors: null
}



/*
 * Model
 */


// The app's complete current state
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
  Object.assign(state, changes);

  ReactDOM.render(
    React.createElement(StudentFormView, Object.assign({}, state, {
      onNewStudentChange: updateNewStudent,
      onNewStudentSubmit: submitNewStudent,
    })),
    document.getElementById('Forms')
  );
}

// Set initial data
setState({
  Students: [{
    key: 1,
    race: "James K Nelson",
    act: "james@jamesknelson.com",
    gpa: "Front-end Unicorn"
  }, {
    key: 2,
    race: "Jim",
    act: "jim@example.com"
  }, ],
  newStudent: Object.assign({}, STUDENT_TEMPLATE),
});



/*
 * Actions
 */


function updateNewStudent(student) {
  setState({
    newStudent: student
  });
}


function submitNewStudent() {
  var student = Object.assign({}, state.newStudent, {
    key: state.student.length + 1,
    errors: {}
  });

  if (!student.race) {
    student.errors.race = ["Please enter your new Student's name"]
  }
  if (!student.gpa) {
    student.errors.gpa = ["Please enter your new Student's email"]
  }
  if (!student.act) {
    student.errors.act = ["Please enter your new Student's email"]
  }

  setState(
    Object.keys(student.errors).length === 0 ? {
      newStudent: Object.assign({}, STUDENT_TEMPLATE),
      student: state.student.slice(0).concat(student),
    } : {
      newStudent: student
    }
  )
}
