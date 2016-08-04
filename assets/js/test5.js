var React = require('react')
var ReactDOM = require('react-dom')

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  //this function executes while react is rendering
  componentDidMount: function() {
    //this.serverRequest
    console.log("componentDidMount");
    $.ajax({
        url: 'api/college/all/',
        dataType: 'json',
        jsonpCallback: "localJsonpCallback",
        success: function(data){
          return (
            <UserGist username={data[1][0]} lastGistUrl={data[1][1]} />
          );
        }.bind(this)
      });
      console.log("done with ajax");
  },

  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  },

  render: function() {
    console.log("in the render!");
    return (
      <div>
        <p>{this.state.username}</p>
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist />,
  document.getElementById("TableView")
);
