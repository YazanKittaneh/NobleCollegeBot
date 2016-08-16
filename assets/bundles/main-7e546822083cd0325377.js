/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*
	 * Constants
	 */

	var CONTACT_TEMPLATE = {
	  race: "",
	  act: "",
	  gpa: "",
	  errors: null
	};

	/*
	 * Model
	 */

	// The app's complete current state
	var state = {};

	// Make the given changes to the state and perform any required housekeeping
	function setState(changes) {
	  Object.assign(state, changes);

	  ReactDOM.render(React.createElement(ContactsView, Object.assign({}, state, {
	    onNewStudentChange: updateNewStudent,
	    onNewStudentSubmit: submitNewStudent
	  })), document.getElementById('Forms'));
	}

	// Set initial data
	setState({
	  contacts: [{
	    key: 1,
	    race: "James K Nelson",
	    act: "james@jamesknelson.com",
	    gpa: "Front-end Unicorn"
	  }, {
	    key: 2,
	    race: "Jim",
	    act: "jim@example.com"
	  }],
	  newStudent: Object.assign({}, CONTACT_TEMPLATE)
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
	    student.errors.race = ["Please enter your new contact's name"];
	  }
	  if (!student.gpa) {
	    student.errors.gpa = ["Please enter your new contact's email"];
	  }
	  if (!student.act) {
	    student.errors.act = ["Please enter your new contact's email"];
	  }

	  setState(Object.keys(student.errors).length === 0 ? {
	    newStudent: Object.assign({}, CONTACT_TEMPLATE),
	    student: state.student.slice(0).concat(student)
	  } : {
	    newStudent: student
	  });
	}

/***/ }
/******/ ]);