import College from "../js/test4";

var React = require('react')
var ReactDOM = require('react-dom')


class TableView extends React.Component{

loadCollegesFromServer() {
  $.ajax({
      url: 'api/college/all/',
      dataType: 'json',
      jsonpCallback: "localJsonpCallback",
      success: function(data){
        data.map(
          (
        i,
        UNITID,
        INSTNM,
        CITY,
        STABBR,
        TYPE,
        DISTFROMCHICAGO,
        SIMPLEBARRONS,
        NETPRICE0_30,
        NETPRICE30_48,
        PERCENT_MALE,
        ADJ6YRGRAD,
        ADJ6YRGRAD_AA_HISP,
        RETENTIONAAH,
        ADJACT25,
        WEBSITE,
        MEAN_UNMET_NEED,
        MIN_UNMET_NEED,
        MAX_UNMET_NEED,
        LOCALE,
        NUMBER_UNDERGRADS,
        PUB_PRIVATE,
        MONEYFY14_CATEGORY,
        NOBLEALUMNI,
        NETPRICE48_75,
        PERCENT_PELL,
        MONEYFY13,
        MONEYFY14,
        ADJACT50) => {
          return (
            <College
              key={i}
              UNITID={UNITID }
              CITY={CITY  }
              STABBR={STABBR  }
              TYPE={TYPE  }
              DISTFROMCHICAGO={DISTFROMCHICAGO  }
              IMPLEBARRONS={SIMPLEBARRONS  }
              NETPRICE0_30={NETPRICE0_30  }
              NETPRICE30_48={NETPRICE30_48  }
              PERCENT_MALE={PERCENT_MALE  }
              ADJ6YRGRAD={ADJ6YRGRAD  }
              ADJ6YRGRAD_AA_HISP={ADJ6YRGRAD_AA_HISP}
              RETENTIONAAH={RETENTIONAAH  }
              ADJACT25={ADJACT25  }
              WEBSITE={WEBSITE	}
              MEAN_UNMET_NEED={MEAN_UNMET_NEED  }
              MIN_UNMET_NEED={MIN_UNMET_NEED	}
              MAX_UNMET_NEED={MAX_UNMET_NEED  }
              LOCALE={LOCALE  }
              NUMBER_UNDERGRADS={NUMBER_UNDERGRADS  }
              PUB_PRIVATE={PUB_PRIVATE  }
              MONEYFY14_CATEGORY={MONEYFY14_CATEGORY  }
              NOBLEALUMNI={NOBLEALUMNI  }
              NETPRICE48_75={NETPRICE48_75  }
              PERCENT_PELL={PERCENT_PELL  }
              MONEYFY13={MONEYFY13  }
              MONEYFY14={MONEYFY14  }
              ADJACT50={ADJACT50  }
            />
          )})
        }.bind(this)
      });
    }

    componentDidMount() {
      this.loadCollegesFromServer();
      //setInterval(this.loadCommentsFromServer, this.props.pollInterval);

  }
}

ReactDOM.render(<Colleges />, document.getElementById('TableView'));
