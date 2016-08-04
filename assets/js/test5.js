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
    var count = 1;
    for(; count<7; count++) {
      var countUrl = "api/college/"+count;
      $.ajax({
          url: countUrl,
          dataType: 'json',
          jsonpCallback: "localJsonpCallback",
          success: function(data){
            //this.setState({data:data});
            console.log("this is what success looks like "+count+": "+data.CITY);//this.props.url, status, err.toString());
            this.setState({username:data.TYPE});
            this.setState({lastGistUrl:data.INSTNM});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error("didn't work :/ ", error.toString());//this.props.url, status, err.toString());
          }.bind(this)
        });
        console.log("done with ajax # "+count);
    }

  },

  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  },

  render: function() {
    console.log("in the render!");
    return (
      <div>
        <p>{this.state.username}</p>
        <a href={this.state.lastGistUrl}>here</a>
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist />,
  document.getElementById("TableView")
);
