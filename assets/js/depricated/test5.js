var React = require('react')
var ReactDOM = require('react-dom')

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      UNITID: '',
      INSTNM: '',
      CITY: '',
      UNITID: '',
      INSTNM: '',
      CITY: '',
      STABBR: '',
      TYPE: '',
      DISTFROMCHICAGO: '',
      SIMPLEBARRONS: '',
      NETPRICE0_30: '',
      NETPRICE30_48: '',
      PERCENT_MALE: '',
      ADJ6YRGRAD: '',
      ADJ6YRGRAD_AA_HISP: '',
      RETENTIONAAH: '',
      ADJACT25: '',
      WEBSITE: '',
      MEAN_UNMET_NEED: '',
      MIN_UNMET_NEED: '',
      MAX_UNMET_NEED: '',
      LOCALE: '',
      NUMBER_UNDERGRADS: '',
      PUB_PRIVATE: '',
      MONEYFY14_CATEGORY: '',
      NOBLEALUMNI: '',
      NETPRICE48_75: '',
      PERCENT_PELL: '',
      MONEYFY13: '',
      MONEYFY14: '',
      ADJACT50: ''

    };
  },

  //this function executes while react is rendering
  componentDidMount: function() {
    //this.serverRequest
    console.log("componentDidMount");
    /* TODO: turn this into taking all of the json data, not individually
       Cite: https://www.sitepoint.com/ajaxjquery-getjson-simple-example/

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
    */
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
            this.setState({UNITID:data.UNITID });
            this.setState({INSTNM:data.INSTNM });
            this.setState({CITY:data.CITY });
              /*
            this.setState({STABBR  }</td>
            this.setState({TYPE  }</td>
            this.setState({DISTFROMCHICAGO  }</td>
            this.setState({SIMPLEBARRONS  }</td>
            this.setState({NETPRICE0_30  }</td>
            this.setState({NETPRICE30_48  }</td>
            this.setState({PERCENT_MALE  }</td>
            this.setState({ADJ6YRGRAD  }</td>
            this.setState({ADJ6YRGRAD_AA_HISP}</td>
            this.setState({RETENTIONAAH  }</td>
            this.setState({ADJACT25  }</td>
            this.setState({WEBSITE	}</td>
            this.setState({MEAN_UNMET_NEED  }</td>
            this.setState({MIN_UNMET_NEED	}</td>
            this.setState({MAX_UNMET_NEED  }</td>
            this.setState({LOCALE  }</td>
            this.setState({NUMBER_UNDERGRADS  }</td>
            this.setState({PUB_PRIVATE  }</td>
            this.setState({MONEYFY14_CATEGORY  }</td>
            this.setState({NOBLEALUMNI  }</td>
            this.setState({NETPRICE48_75  }</td>
            this.setState({PERCENT_PELL  }</td>
            this.setState({MONEYFY13  }</td>
            this.setState({MONEYFY14  }</td>
            this.setState({ADJACT50  }</td>
            */
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
        <table>
          <tbody>
            <tr>
              <td>{ this.state.UNITID }</td>
              <td>{ this.state.INSTNM }</td>
              <td>{ this.state.CITY }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist />,
  document.getElementById("TableView")
);
