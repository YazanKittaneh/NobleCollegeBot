var React = require('react')
var ReactDOM = require('react-dom')

var Colleges =[];


var CollegeComponent = React.createClass({
  getInitialState: function() {
    return {customText: "This comes before"}
  },
  customClickFunction: function() {
    this.setState({customText: "You clicked the button"});
  },
  render: function (){
    var testStyle = { fontSize: '18px', marginRight: '20px'};
    return (
      <div style={testStyle}>
        <button onClick={this.customClickFunction}>ClickMe</button>
        {this.props.colleges.map(function (college) {
          <College
          UNITID={college.UNITID}
          INSTNM ={college.INSTNM }
          CITY={college.CITY }
          UNITID={college.UNITID }
          INSTNM={college.INSTNM }
          CITY={college.CITY  }
          STABBR={college.STABBR  }
          TYPE={college.TYPE  }
          DISTFROMCHICAGO={college.DISTFROMCHICAGO  }
          IMPLEBARRONS={college.SIMPLEBARRONS  }
          NETPRICE0_30={college.NETPRICE0_30  }
          NETPRICE30_48={college.NETPRICE30_48  }
          PERCENT_MALE={college.PERCENT_MALE  }
          ADJ6YRGRAD={college.ADJ6YRGRAD  }
          ADJ6YRGRAD_AA_HISP={college.ADJ6YRGRAD_AA_HISP}
          RETENTIONAAH={college.RETENTIONAAH  }
          ADJACT25={college.ADJACT25  }
          WEBSITE={college.WEBSITE	}
          MEAN_UNMET_NEED={college.MEAN_UNMET_NEED  }
          MIN_UNMET_NEED={college.MIN_UNMET_NEED	}
          MAX_UNMET_NEED={college.MAX_UNMET_NEED  }
          LOCALE={college.LOCALE  }
          NUMBER_UNDERGRADS={college.NUMBER_UNDERGRADS  }
          PUB_PRIVATE={college.PUB_PRIVATE  }
          MONEYFY14_CATEGORY={college.MONEYFY14_CATEGORY  }
          NOBLEALUMNI={college.NOBLEALUMNI  }
          NETPRICE48_75={college.NETPRICE48_75  }
          PERCENT_PELL={college.PERCENT_PELL  }
          MONEYFY13={college.MONEYFY13  }
          MONEYFY14={college.MONEYFY14  }
          ADJACT50={college.ADJACT50  }
          />
        })}

      </div>
    )
  }
});

React.render(
  $.ajax({
    url: '127.0.0.1:8000/CollegeBot/api/college/all/',
    dataType: 'json',
    method: 'GET',
    data: getData,
    success: function(data){
         <CollegeComponent Colleges=data />
       }
  });
)

var TableView = React.createClass({displayName: 'TableView',
  render: function() {
    return {
      <div>
        <tr>
          <td>{ this.college.UNITID }</td>
          <td>{ this.college.INSTNM }</td>
          <td>{ this.college.CITY }</td>
          <td>{ this.college.UNITID }</td>
          <td>{ this.college.INSTNM }</td>
          <td>{ this.college.CITY  }</td>
          <td>{ this.college.STABBR  }</td>
          <td>{ this.college.TYPE  }</td>
          <td>{ this.college.DISTFROMCHICAGO  }</td>
          <td>{ this.college.SIMPLEBARRONS  }</td>
          <td>{ this.college.NETPRICE0_30  }</td>
          <td>{ this.college.NETPRICE30_48  }</td>
          <td>{ this.college.PERCENT_MALE  }</td>
          <td>{ this.college.ADJ6YRGRAD  }</td>
          <td>{ this.college.ADJ6YRGRAD_AA_HISP}</td>
          <td>{ this.college.RETENTIONAAH  }</td>
          <td>{ this.college.ADJACT25  }</td>
          <td>{ this.college.WEBSITE	}</td>
          <td>{ this.college.MEAN_UNMET_NEED  }</td>
          <td>{ this.college.MIN_UNMET_NEED	}</td
          <td>{ this.college.MAX_UNMET_NEED  }</td>
          <td>{ this.college.LOCALE  }</td>
          <td>{ this.college.NUMBER_UNDERGRADS  }</td>
          <td>{ this.college.PUB_PRIVATE  }</td>
          <td>{ this.college.MONEYFY14_CATEGORY  }</td>
          <td>{ this.college.NOBLEALUMNI  }</td>
          <td>{ this.college.NETPRICE48_75  }</td>
          <td>{ this.college.PERCENT_PELL  }</td>
          <td>{ this.college.MONEYFY13  }</td>
          <td>{ this.college.MONEYFY14  }</td>
          <td>{ this.college.ADJACT50  }</td>
        </tr>
      </div>
      }
  }
});
