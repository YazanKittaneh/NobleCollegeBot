var React = require('react')
var ReactDOM = require('react-dom')

//var College = React.createFactory(require('./College.js'));
//CITE: jamesknelson.com/learn-raw-react-ridiculously-simple-forms/
/**
Student Form Component: Handles creating the input feilds for students to
enter their information. Handles clicks on buttons

**/

var StudentForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    changeValues: React.PropTypes.func, //Passed in function to call on the
                                        //button submit press
  },

  //function handles onClick logic for submit button
  handleSubmit: function(event) {
    console.log("handleSubmit called!");
    event.preventDefault(); //required
    //this.refs['collegelist'].changeValues();
    this.props.changeValues();
  },


  //listener for changes in the input for Student Race
  onChangeRace: function(e) {
    onChange(Object.assign({}, oldStudent, {
      race: e.target.value
    }));
  },

  //listener for changes in the input for Student ACT
  onChangeAct: function(e) {
    onChange(Object.assign({}, oldStudent, {
      act: e.target.value
    }));
  },

  //listener for changes in the input for Student GPA
  onChangeGpa: function(e) {
    onChange(Object.assign({}, oldStudent, {
      gpa: e.target.value
    }));
  },


  render: function() {
    var onChange = this.props.onChange;

    return (
      <form action="" onSubmit={this.handleSubmit} className='StudentForm' >
        <input
          placeholder = 'Race'
          value = {this.props.value.race}
          onChange = {this.onChangeRace}
        />
        <input
          placeholder = 'Act'
          value = {this.props.value.act}
          onChange = {this.onChangeAct}
        />
        <input
          placeholder = 'Gpa'
          value = {this.props.value.gpa}
          onChange = {this.onChangeGpa}
        />
        <button className="btn btn-primary" type="submit">
          Send your project info
        </button>
      </form>
    )
  },
});



module.exports = StudentForm; //required to reference outside of Component
