var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College');
var StudentFormView = require('./StudentFormView');

var CollegeList = React.createClass({
  statics: {

  };
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
  };

  /* run AJAX call to the Django API */
  loadCollegeData: function() {
    var countUrl = "api/college/all";
    //this is used to get the current object to use in the ajax function
    var currObj = this;
    $.ajax({
      url: countUrl,
      dataType: 'json',
      jsonpCallback: "localJsonpCallback",
      success: function(data) {
        console.log("work ");
          currObj.setState({
            collegelist: data,
            displayedColleges: data,
            reach: currObj.state.reach,
            match: currObj.state.match,
            safety: currObj.state.safety,
            secure: currObj.state.secure,
            userInPut: {
              act:score,
              gpa:currObj.state.gpa,
              ethnicity:currObj.state.ethnicity
            }
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("didn't work :/ ", error.toString());
      }.bind(this)
    });
    console.log("done with ajax # ");
  };

  getInitialState: function() {
    return {
      collegelist: [],
      displayedColleges: [],
      reach: false,
      match: false,
      safety: false,
      secure: false,
      userInPut: {
        act:30,
        gpa:0,
        ethnicity:""
      }
    };
  };

  //this function executes an async task while react is rendering
  componentDidMount: function() {
    console.log("componentDidMount");
  };

  componentWillMount: function() {
    this.loadCollegeData();
  };

  //necessary method for unmounting async task
  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  };

  handleActInput: function(act){
    this.setState({
      collegelist: this.state.collegelist,
      displayedColleges: this.state.displayedColleges,
      reach: this.state.reach,
      match: this.state.match,
      safety: this.state.safety,
      secure: this.state.secure,
      userInPut: {
        act:score,
        gpa:this.state.gpa,
        ethnicity:this.state.ethnicity
      }
    });
  }.bind(this);

  handleGpaInput: function(gpa){
    this.setState({
      collegelist: this.state.collegelist,
      displayedColleges: this.state.displayedColleges,
      reach: this.state.reach,
      match: this.state.match,
      safety: this.state.safety,
      secure: this.state.secure,
      userInPut: {
        act:this.state.act,
        gpa:gpa,
        ethnicity:this.state.ethnicity
      }
    });
  }.bind(this);

  handleEthnicityInput: function(ethnicity){
    this.setState({
      collegelist: this.state.collegelist,
      displayedColleges: this.state.displayedColleges,
      reach: this.state.reach,
      match: this.state.match,
      safety: this.state.safety,
      secure: this.state.secure,
      userInPut: {
        act:this.state.score,
        gpa:this.state.gpa,
        ethnicity:ethnicity
      }
    });
  }.bind(this);


  isReachSchool: function(college){
    var ACT = this.state.act;
    var GPA = this.state.gpa;
    var ethnicity = this.state.ethnicity;

    //do stuff with the user's input also using the api
    //if the user's information qualifies as a reach school,
    //return true else false
    return false;
  }

  isMatchSchool: function(college){
    var ACT = this.state.act;
    var GPA = this.state.gpa;
    var ethnicity = this.state.ethnicity;

    //do stuff with the user's input also using the api
    //if the user's information qualifies as a reach school,
    //return true else false
    return false;
  }

  isSafetySchool: function(college){
    var ACT = this.state.act;
    var GPA = this.state.gpa;
    var ethnicity = this.state.ethnicity;

    //do stuff with the user's input also using the api
    //if the user's information qualifies as a reach school,
    //return true else false
    return false;
  }

  isSecureSchool: function(college){
    var ACT = this.state.act;
    var GPA = this.state.gpa;
    var ethnicity = this.state.ethnicity;

    //do stuff with the user's input also using the api
    //if the user's information qualifies as a reach school,
    //return true else false
    return false;
  }

  chooseTypeOfColleges: function(type){
    var arr = [], schoolFunc;
    switch (type) {
      case "match":
        schoolFunc = this.isMatchSchool;
        break;
      case "secure":
        schoolFunc = this.isSecureSchool;
        break;
      case "safety":
        schoolFunc = this.isSafetySchool;
        break;
      case "reach":
        schoolFunc = this.isReachSchool;
        break;
      default:
        console.error("Invalid type selected");

    }
    //for reac schools
    for(var i = 0; i < collegeList.length; i++) {
        if(schoolFunc(collegeList[i]) {
          arr.push(collegeList[i]);
        }
    }

    //update the state with the new selected data
    this.setState({
      collegelist: this.state.collegelist,
      displayedColleges: arr,
      each: this.state.reach,
      match: this.state.match,
      safety: this.state.safety,
      secure: this.state.secure,
      userInPut: {
        act:setUserInput(name, "act", input, this.state.act),
        gpa:this.setUserInput(name, "gpa", input, this.state.gpa),
        ethnicity:this.setUserInput(name, "ethnicity", input, this.state.ethnicity)
      }
    });

  }

  handleUserInputChange: function(name, input){

      this.setUserInput = function(name, fieldName, value, stateValue){
        if(name == fieldName){
          return value;
        } else {
          return stateValue
        }
      }

      this.setState({
        collegelist: this.state.collegelist,
        displayedColleges: this.state.displayedColleges,
        each: this.state.reach,
        match: this.state.match,
        safety: this.state.safety,
        secure: this.state.secure,
        userInPut: {
          act:setUserInput(name, "act", input, this.state.act),
          gpa:this.setUserInput(name, "gpa", input, this.state.gpa),
          ethnicity:this.setUserInput(name, "ethnicity", input, this.state.ethnicity)
        }
      });

  }.bind(this);

    handleTabButtonClick: function(type){
      this.setState({
        collegelist: this.state.collegelist,
        displayedColleges: this.state.displayedColleges,
        reach: type == "reach",
        match: type == "match",
        safety: type =="safety",
        secure: type == "secure",
        userInPut: {
          act:this.state.score,
          gpa:this.state.gpa,
          ethnicity:ethnicity
        }
      });
    }.bind(this);

  render: function() {

    console.log("the data: ", this.state.collegelist);
    return (
      <div style="display:bloc; float:left; width:100%">
        <div className="user-input" style="display:bloc; float:left; width:100%">
          <div style="display:bloc; float:left; width:100%">
            <UserTextInput
              handleChange={handleUserInputChange}
              name="act"
              id="act"
              value={this.state.userInPut.act}
            prompt="Please enter your ACT"/>
            </div>
              <div style="display:bloc; float:left; width:100%">
                <UserTextInput
                  handleChange={handleUserInputChange}
                  name="gpa"
                  id="gpa"
                  value={this.state.userInPut.gpa}
                  prompt="Please enter your GPA"/>
                </div>
            <div style="display:bloc; float:left; width:100%">
              <select name="ethnicity"
                id="ethnicity"
                onChange={function(e){
                  this.handleEthnicityInput(e.target.value);
                }}>
                  <option value="none'">Choose Ethnicity</option>
                  <option value="white">White</option>
                  <option value="african american">African American</option>
                  <option value="other">Other</option>
                </select>
            </div>
        </div>
        <div style="display:bloc; float:left; width:100%">
          <TabButton prompt="Reach Schools" type="reach" handleClick={this.handleTabButtonClick}/>
          <TabButton prompt="Match Schools" type="match" handleClick={this.handleTabButtonClick}/>
          <TabButton prompt="Safety Schools" type="safety" handleClick={this.handleTabButtonClick}/>
          <TabButton prompt="Secure Schools" type="secure" handleClick={this.handleTabButtonClick}/>
        </div>
        <div className="resultsTable"  style="display:bloc; float:left; width:100%">
          <table className = "table table-striped" >
            <tbody > {
              this.state.displayedColleges.map(function(college, index) {
                return <College key={index}  collegedata = {college}/>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

var UserTextInput = React.createClass({
    render: function() {
      return (
        <label for="act">{this.props.value}</label>
          <input name={this.props.name}
            type="text"
            id={this.props.id}
            value={this.props.value}
            onChange={function(e){
              this.handleChange(this.props.name, e.target.value);
            }}/>
        </div>
    )};


});

/**

*/
var TabButton = React.createClass({

  render: function() {
    return (
      <button onClick={function(){
        this.handleClick(this.props.type);
      }}>{this.props.prompt}</button>
    )};

});


ReactDOM.render(
  <CollegeList /> ,
  document.getElementById("Table")
);

module.exports = CollegeList; //required to reference outside of Component
