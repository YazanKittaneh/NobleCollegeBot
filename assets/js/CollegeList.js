var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College');
var StudentForm = require('./StudentForm');
//var StudentFormView = require('./StudentForm');

//var College = React.createFactory(require('./College.js'));


var CollegeList = React.createClass({
  statics: {

  },

  //Function to change values of the table. Proves that I can pass along functions
  //Between components
  changeValues: function() {
    console.log("Change values function called!");
    var tempCollegeArr = [];

    this.state.collegelist.map(function(college) {
      college.CITY = "Kentucky";
      tempCollegeArr.push(college);
      console.log(college);
    });
    return (
      this.setState({
        collegelist: tempCollegeArr
      })
    );
  },
  /* run AJAX call to the Django API */
  loadCollegData: function() {
    var countUrl = "api/college/all";
    $.ajax({
      url: countUrl,
      dataType: 'json',
      jsonpCallback: "localJsonpCallback",
      success: function(data) {
        console.log("work ");
        this.setState({
          collegelist: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("didn't work :/ ", error.toString());
      }.bind(this)
    });
    console.log("done with ajax # ");
  },

  getInitialState: function() {
    return {
      collegelist: []
    };
  },

  //this function executes while react is rendering
  componentDidMount: function() {
    console.log("componentDidMount");
    this.loadCollegData();
  },

  //necessary method for unmounting async task
  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  },


  render: function() {

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

    console.log("the data: ", this.state.collegelist);
    return (
      <div>
        <StudentForm changeValues={this.changeValues} students={students} newStudent={newStudent} />
        < table className = "table table-striped" >
          < tbody > {
          this.state.collegelist.map(function(college, index) {
            return <College key={index}  collegedata = {college}/>;
          })
          }
          </tbody>
        </table >
      </div>
    );
  }
});

ReactDOM.render(
  <CollegeList /> ,
  document.getElementById("TableView")
);

module.exports = CollegeList;
