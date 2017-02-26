var React = require('react')
var ReactDOM = require('react-dom')


var College = React.createClass({
  getInitialState: function() {
    return {
      collegedata: []
    };
  },

  render: function() {
    console.log("in the COLLEGE render!");
    console.log("College Data: ", this.props.collegedata);
    return (

        <tr>
          <td>{ this.props.collegedata.UNITID }</td>
          <td>{ this.props.collegedata.INSTNM }</td>
          <td>{ this.props.collegedata.CITY }</td>
          <td>{ this.props.collegedata.UNITID }</td>
          <td>{ this.props.collegedata.INSTNM }</td>
          <td>{ this.props.collegedata.CITY  }</td>
          <td>{ this.props.collegedata.STABBR  }</td>
          <td>{ this.props.collegedata.TYPE  }</td>
          <td>{ this.props.collegedata.DISTFROMCHICAGO  }</td>
          <td>{ this.props.collegedata.SIMPLEBARRONS  }</td>
          <td>{ this.props.collegedata.NETPRICE0_30  }</td>
          <td>{ this.props.collegedata.NETPRICE30_48  }</td>
          <td>{ this.props.collegedata.PERCENT_MALE  }</td>
          <td>{ this.props.collegedata.ADJ6YRGRAD  }</td>
          <td>{ this.props.collegedata.ADJ6YRGRAD_AA_HISP}</td>
          <td>{ this.props.collegedata.RETENTIONAAH  }</td>
          <td>{ this.props.collegedata.ADJACT25  }</td>
          <td>{ this.props.collegedata.WEBSITE	}</td>
          <td>{ this.props.collegedata.MEAN_UNMET_NEED  }</td>
          <td>{ this.props.collegedata.MIN_UNMET_NEED	}</td>
          <td>{ this.props.collegedata.MAX_UNMET_NEED  }</td>
          <td>{ this.props.collegedata.LOCALE  }</td>
          <td>{ this.props.collegedata.NUMBER_UNDERGRADS  }</td>
          <td>{ this.props.collegedata.PUB_PRIVATE  }</td>
          <td>{ this.props.collegedata.MONEYFY14_CATEGORY  }</td>
          <td>{ this.props.collegedata.NOBLEALUMNI  }</td>
          <td>{ this.props.collegedata.NETPRICE48_75  }</td>
          <td>{ this.props.collegedata.PERCENT_PELL  }</td>
          <td>{ this.props.collegedata.MONEYFY13  }</td>
          <td>{ this.props.collegedata.MONEYFY14  }</td>
          <td>{ this.props.collegedata.ADJACT50  }</td>
        </tr>
      )
    }
  });

module.exports = College;

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
