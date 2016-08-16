var React = require('react')
var ReactDOM = require('react-dom')

var Colleges = React.createClass({

  getInitialState: function() {
    return {

    }
  },

  componentDidMount: function() {
    $.ajax({
        url: 'api/college/all/',
        dataType: 'json',
        jsonpCallback: "localJsonpCallback",
        success: function(data){
          this.state.college.map(function (data) {
            this.setState("college", data);
          }.bind(this));
        }
      });
    },


  componentWillUnmount: function() {
    },

  render: function() {
    return (
      <div>
        <tr>
          <td>{ this.state.college.UNITID }</td>
          <td>{ this.state.college.INSTNM }</td>
          <td>{ this.state.college.CITY }</td>
          <td>{ this.state.college.UNITID }</td>
          <td>{ this.state.college.INSTNM }</td>
          <td>{ this.state.college.CITY  }</td>
          <td>{ this.state.college.STABBR  }</td>
          <td>{ this.state.college.TYPE  }</td>
          <td>{ this.state.college.DISTFROMCHICAGO  }</td>
          <td>{ this.state.college.SIMPLEBARRONS  }</td>
          <td>{ this.state.college.NETPRICE0_30  }</td>
          <td>{ this.state.college.NETPRICE30_48  }</td>
          <td>{ this.state.college.PERCENT_MALE  }</td>
          <td>{ this.state.college.ADJ6YRGRAD  }</td>
          <td>{ this.state.college.ADJ6YRGRAD_AA_HISP}</td>
          <td>{ this.state.college.RETENTIONAAH  }</td>
          <td>{ this.state.college.ADJACT25  }</td>
          <td>{ this.state.college.WEBSITE	}</td>
          <td>{ this.state.college.MEAN_UNMET_NEED  }</td>
          <td>{ this.state.college.MIN_UNMET_NEED	}</td>
          <td>{ this.state.college.MAX_UNMET_NEED  }</td>
          <td>{ this.state.college.LOCALE  }</td>
          <td>{ this.state.college.NUMBER_UNDERGRADS  }</td>
          <td>{ this.state.college.PUB_PRIVATE  }</td>
          <td>{ this.state.college.MONEYFY14_CATEGORY  }</td>
          <td>{ this.state.college.NOBLEALUMNI  }</td>
          <td>{ this.state.college.NETPRICE48_75  }</td>
          <td>{ this.state.college.PERCENT_PELL  }</td>
          <td>{ this.state.college.MONEYFY13  }</td>
          <td>{ this.state.college.MONEYFY14  }</td>
          <td>{ this.state.college.ADJACT50  }</td>
        </tr>
      </div>
    )
  }
});

ReactDOM.render(<Colleges />, document.getElementById('TableView'));
