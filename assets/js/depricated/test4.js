var React = require('react')
var ReactDOM = require('react-dom')

export default class College extends React.Component{
  constructor() {
    super();
    this.state = {
      UNITID: ''
      INSTNM: ''
      CITY: ''
      UNITID: ''
      INSTNM: ''
      CITY: ''
      STABBR: ''
      TYPE: ''
      DISTFROMCHICAGO: ''
      SIMPLEBARRONS: ''
      NETPRICE0_30: ''
      NETPRICE30_48: ''
      PERCENT_MALE: ''
      ADJ6YRGRAD: ''
      ADJ6YRGRAD_AA_HISP: ''
      RETENTIONAAH: ''
      ADJACT25: ''
      WEBSITE: ''
      MEAN_UNMET_NEED: ''
      MIN_UNMET_NEED: ''
      MAX_UNMET_NEED: ''
      LOCALE: ''
      NUMBER_UNDERGRADS: ''
      PUB_PRIVATE: ''
      MONEYFY14_CATEGORY: ''
      NOBLEALUMNI: ''
      NETPRICE48_75: ''
      PERCENT_PELL: ''
      MONEYFY13: ''
      MONEYFY14: ''
      ADJACT50: ''

    };
  }
  // "invoked before that of parent components"
  // Will use to invoke ajax calls
  //componentDidMount: function() {
  //  },

  render () {
    return (
      <div>
        <tr>
          <td>{ this.state.UNITID }</td>
          <td>{ this.state.INSTNM }</td>
          <td>{ this.state.CITY }</td>
          <td>{ this.state.UNITID }</td>
          <td>{ this.state.INSTNM }</td>
          <td>{ this.state.CITY  }</td>
          <td>{ this.state.STABBR  }</td>
          <td>{ this.state.TYPE  }</td>
          <td>{ this.state.DISTFROMCHICAGO  }</td>
          <td>{ this.state.SIMPLEBARRONS  }</td>
          <td>{ this.state.NETPRICE0_30  }</td>
          <td>{ this.state.NETPRICE30_48  }</td>
          <td>{ this.state.PERCENT_MALE  }</td>
          <td>{ this.state.ADJ6YRGRAD  }</td>
          <td>{ this.state.ADJ6YRGRAD_AA_HISP}</td>
          <td>{ this.state.RETENTIONAAH  }</td>
          <td>{ this.state.ADJACT25  }</td>
          <td>{ this.state.WEBSITE	}</td>
          <td>{ this.state.MEAN_UNMET_NEED  }</td>
          <td>{ this.state.MIN_UNMET_NEED	}</td>
          <td>{ this.state.MAX_UNMET_NEED  }</td>
          <td>{ this.state.LOCALE  }</td>
          <td>{ this.state.NUMBER_UNDERGRADS  }</td>
          <td>{ this.state.PUB_PRIVATE  }</td>
          <td>{ this.state.MONEYFY14_CATEGORY  }</td>
          <td>{ this.state.NOBLEALUMNI  }</td>
          <td>{ this.state.NETPRICE48_75  }</td>
          <td>{ this.state.PERCENT_PELL  }</td>
          <td>{ this.state.MONEYFY13  }</td>
          <td>{ this.state.MONEYFY14  }</td>
          <td>{ this.state.ADJACT50  }</td>
        </tr>
      </div>
    );
  }
}



ReactDOM.render(<Colleges />, document.getElementById('TableView'));
