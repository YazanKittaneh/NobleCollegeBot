
var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College');
//var College = React.createFactory(require('./College.js'));


var CollegeList = React.createClass({

  /* run AJAX call to the Django API */
  loadCollegData: function() {
    var countUrl = "api/college/all";
    $.ajax({
        url: countUrl,
        dataType: 'json',
        jsonpCallback: "localJsonpCallback",
        success: function(data){
          console.log("work ");
          this.setState({collegelist:data });
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
    console.log("in the render!");
    console.log("the data: ", this.state.collegelist);
    return (
    <table>
      <tbody>
          {this.state.collegelist.map(function(college, index) {
               return <College key={index} collegedata={college}/>;
            })}
        </tbody>
      </table>
    );
  }
});


ReactDOM.render(
  <CollegeList />,
  document.getElementById("TableView")
);


module.exports = CollegeList;
