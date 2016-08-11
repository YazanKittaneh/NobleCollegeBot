
var React = require('react')
var ReactDOM = require('react-dom')
var College = require('./College.js').default


var CollegeList = React.createClass({

  /* run AJAX call to the Django API */
  loadCollegData: function() {
    var countUrl = "api/college/all";
    $.ajax({
        url: countUrl,
        dataType: 'json',
        jsonpCallback: "localJsonpCallback",
        success: function(data){
          this.setState({collegelist:data });
        }.bind(this),
        error: function(xhr, status, err) {
          console.error("didn't work :/ ", error.toString());//this.props.url, status, err.toString());
        }.bind(this)
      });
      console.log("done with ajax # ");
  },

  getInitialState: function() {
    return {
      collegelist: []
    };
  },

  //this function executes while react is rendering
  componentDidMount: function() {
    console.log("componentDidMount");
    this.loadCollegData();
  },

  //necessary method for unmounting async task
  componentWillUnmount: function() {
    console.log("componentWillUnmount");
  },

  render: function() {
    console.log("in the render!");
    count=0;
    return (
    <table>
      <tbody>
          {this.state.collegelist.map(function(college) {
               count++;
               return <College key={count} collegedata={college}
               /*
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
               */
               />;
            })}
        </tbody>
      </table>
    );
  }
});




ReactDOM.render(
  <CollegeList />,
  document.getElementById("TableView")
);
