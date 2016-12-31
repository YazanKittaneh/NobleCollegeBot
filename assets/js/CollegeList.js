var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College');
var StudentFormView = require('./StudentFormView');

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

  //this function executes an async task while react is rendering
  componentDidMount: function() {
    console.log("componentDidMount");
    this.loadCollegData();
  },

  //necessary method for unmounting async task
  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  },


  render: function() {

    console.log("the data: ", this.state.collegelist);
    return (
      <div>
        < table className = "table table-striped" >
          < tbody > {
            this.state.collegelist.map( function(college, index) {
              return <College key={index}  collegedata = {college}/>;
            })}
          </tbody>
        </table >
      </div>
    );
  }
});

ReactDOM.render(
  <CollegeList /> ,
  document.getElementById("Table")
);

module.exports = CollegeList; //required to reference outside of Component
