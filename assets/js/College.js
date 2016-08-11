var React = require('react')
var ReactDOM = require('react-dom')


 var College = React.createClass({
  getInitialState: function() {
    return {
      collegedata: []
    };
  },


  render: function() {

      if (!this.props.collegeData) {
          return "Doesn't work";
      }
      return (
        <tr>
          <td>{ this.props.collegeData.UNITID }</td>
          <td>{ this.props.collegeData.INSTNM }</td>
          <td>{ this.props.collegeData.CITY }</td>
          <td>{ this.props.collegeData.UNITID }</td>
          <td>{ this.props.collegeData.INSTNM }</td>
          <td>{ this.props.collegeData.CITY  }</td>
          <td>{ this.props.collegeData.STABBR  }</td>
          <td>{ this.props.collegeData.TYPE  }</td>
          <td>{ this.props.collegeData.DISTFROMCHICAGO  }</td>
          <td>{ this.props.collegeData.SIMPLEBARRONS  }</td>
          <td>{ this.props.collegeData.NETPRICE0_30  }</td>
          <td>{ this.props.collegeData.NETPRICE30_48  }</td>
          <td>{ this.props.collegeData.PERCENT_MALE  }</td>
          <td>{ this.props.collegeData.ADJ6YRGRAD  }</td>
          <td>{ this.props.collegeData.ADJ6YRGRAD_AA_HISP}</td>
          <td>{ this.props.collegeData.RETENTIONAAH  }</td>
          <td>{ this.props.collegeData.ADJACT25  }</td>
          <td>{ this.props.collegeData.WEBSITE	}</td>
          <td>{ this.props.collegeData.MEAN_UNMET_NEED  }</td>
          <td>{ this.props.collegeData.MIN_UNMET_NEED	}</td>
          <td>{ this.props.collegeData.MAX_UNMET_NEED  }</td>
          <td>{ this.props.collegeData.LOCALE  }</td>
          <td>{ this.props.collegeData.NUMBER_UNDERGRADS  }</td>
          <td>{ this.props.collegeData.PUB_PRIVATE  }</td>
          <td>{ this.props.collegeData.MONEYFY14_CATEGORY  }</td>
          <td>{ this.props.collegeData.NOBLEALUMNI  }</td>
          <td>{ this.props.collegeData.NETPRICE48_75  }</td>
          <td>{ this.props.collegeData.PERCENT_PELL  }</td>
          <td>{ this.props.collegeData.MONEYFY13  }</td>
          <td>{ this.props.collegeData.MONEYFY14  }</td>
          <td>{ this.props.collegeData.ADJACT50  }</td>
        </tr>
      )
    }
  });

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

/*
<div>
  <table>
    <tbody>
      <tr>
        <td>{ this.state.College[3].UNITID }</td>
        <td>{ this.state.College[3].INSTNM }</td>
        <td>{ this.state.College[3].CITY }</td>
      </tr>
    </tbody>
  </table>
</div>
*/
