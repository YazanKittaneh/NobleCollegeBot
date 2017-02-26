var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College');
var CollegeList = require('./CollegeList');
var StudentForm = require('./StudentFormView');

var Main = React.createClass({
  statics: {
  },
  propTypes: {
    collegeList: []
  },
  defaultProps: {
    collegeList: []
  },

  loadData: function(data) {
    this.setState({
      collegeList: data
    });
  },

  render: function() {
    return (
      <div>
        <StudentFormView
          changeValues={this.changeValues}
          students={this.foobar}
          newStudent={newStudent} />
        <CollegeList/>
      </div>
    );
  }
});

ReactDOM.render(
  <Main /> ,
  document.getElementById("Main")
);
