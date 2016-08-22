var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College');
var CollegeList = require('./CollegeList');
var StudentForm = require('./StudentFormView');

var Main = React.createClass({
  statics: {
  },

  render: function() {
    return (
      <div>
        <StudentFormView changeValues={this.changeValues} students={students} newStudent={newStudent} />
        <CollegeList/>
      </div>
    );
  }
});

ReactDOM.render(
  <Main /> ,
  document.getElementById("Main")
);
