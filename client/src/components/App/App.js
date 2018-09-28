import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }

    this.refreshData = this.refreshData.bind(this);
  }


  componentDidMount() {

    // once the component mounts
    this.getData();
  }


  getData() {
    // mock data for development purposes
    const mockObj =
    {
      "status": {
        "timestamp": "2018-09-28T13:44:55.140Z",
        "error_code": 0,
        "error_message": null,
        "elapsed": 18,
        "credit_count": 1
      },
      "data": [
        {
          "id": 1,
          "name": "Bitcoin",
          "symbol": "BTC",
          "slug": "bitcoin",
          "circulating_supply": 17293200,
          "total_supply": 17293200,
          "max_supply": 21000000,
          "date_added": "2013-04-28T00:00:00.000Z",
          "num_market_pairs": 6226,
          "cmc_rank": 1,
          "last_updated": "2018-09-28T13:43:26.000Z",
          "quote": {
            "USD": {
              "price": 6645.48109655,
              "volume_24h": 5175359913.10696,
              "percent_change_1h": 0.297113,
              "percent_change_24h": 1.8744,
              "percent_change_7d": -1.01729,
              "market_cap": 114921633698.85846,
              "last_updated": "2018-09-28T13:43:26.000Z"
            }
          }
        },
        {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "circulating_supply": 102239547.4991,
          "total_supply": 102239547.4991,
          "max_supply": null,
          "date_added": "2015-08-07T00:00:00.000Z",
          "num_market_pairs": 4303,
          "cmc_rank": 2,
          "last_updated": "2018-09-28T13:43:40.000Z",
          "quote": {
            "USD": {
              "price": 225.901711554,
              "volume_24h": 2139022339.15233,
              "percent_change_1h": 1.01305,
              "percent_change_24h": 3.16798,
              "percent_change_7d": -1.19705,
              "market_cap": 23096088768.55317,
              "last_updated": "2018-09-28T13:43:40.000Z"
            }
          }
        },
        {
          "id": 52,
          "name": "XRP",
          "symbol": "XRP",
          "slug": "ripple",
          "circulating_supply": 39870907279,
          "total_supply": 99991836919,
          "max_supply": 100000000000,
          "date_added": "2013-08-04T00:00:00.000Z",
          "num_market_pairs": 210,
          "cmc_rank": 3,
          "last_updated": "2018-09-28T13:44:03.000Z",
          "quote": {
            "USD": {
              "price": 0.531855362178,
              "volume_24h": 752715683.060331,
              "percent_change_1h": 1.33776,
              "percent_change_24h": 1.11532,
              "percent_change_7d": -2.96314,
              "market_cap": 21205555831.238003,
              "last_updated": "2018-09-28T13:44:03.000Z"
            }
          }
        },
        {
          "id": 1831,
          "name": "Bitcoin Cash",
          "symbol": "BCH",
          "slug": "bitcoin-cash",
          "circulating_supply": 17373062.5,
          "total_supply": 17373062.5,
          "max_supply": 21000000,
          "date_added": "2017-07-23T00:00:00.000Z",
          "num_market_pairs": 329,
          "cmc_rank": 4,
          "last_updated": "2018-09-28T13:43:32.000Z",
          "quote": {
            "USD": {
              "price": 548.973424661,
              "volume_24h": 831537930.158529,
              "percent_change_1h": 2.37108,
              "percent_change_24h": -3.64976,
              "percent_change_7d": 13.5763,
              "market_cap": 9537349617.474594,
              "last_updated": "2018-09-28T13:43:32.000Z"
            }
          }
        },
        {
          "id": 1765,
          "name": "EOS",
          "symbol": "EOS",
          "slug": "eos",
          "circulating_supply": 906245117.6,
          "total_supply": 1006245119.9339,
          "max_supply": null,
          "date_added": "2017-07-01T00:00:00.000Z",
          "num_market_pairs": 178,
          "cmc_rank": 5,
          "last_updated": "2018-09-28T13:43:30.000Z",
          "quote": {
            "USD": {
              "price": 5.80778030536,
              "volume_24h": 871439338.951447,
              "percent_change_1h": 0.215698,
              "percent_change_24h": 3.09187,
              "percent_change_7d": -0.13615,
              "market_cap": 5263272545.825937,
              "last_updated": "2018-09-28T13:43:30.000Z"
            }
          }
        }
      ]
    }

    /* API call that will be used in production */
    // const req = new Request('/api');
    //
    // fetch(req)
    //   .then(blob => blob.json())
    //   .then(json => this.setState({
    //     data: json.data
    //   }));

    this.setState({
      data: mockObj.data
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Top Cryptocurrencies by Market Capitalization</h1>
      </div>
    )
  }
}

export default App;
