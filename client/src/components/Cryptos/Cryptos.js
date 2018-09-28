import React from 'react';
import padDecimal from './utilities/padDecimal';
//import './Cryptos.css';


class Cryptos extends React.Component {
  constructor(props) {
    super(props);

    this.generateTableRows = this.generateTableRows.bind(this);
  }


  generateTableRows() {
    if (!this.props.data) {
      return;
    }

    return this.props.data.map((coin, i) => {

      /* we need to do some computation for 'pretty' formatting */
      // 1. Round the price and truncate to two spots. 2 .Convert back to a number to use toLocaleString for commas 3. pad decimal ('1.5' => '1.50')
      let price = padDecimal((Number((Math.round(coin.quote.USD.price * 100) / 100).toFixed(2))).toLocaleString());

      // 1. convert to integer. 2. insert commas using toLocaleString
      let marketCap = (coin.quote.USD.market_cap.toFixed(0)).toLocaleString();

      // round percentChange to two decimals
      let percentChange = Math.round(coin.quote.USD.percent_change_24h * 100) / 100;

      // add commas to circulating_supply (an integer)
      let supply = Math.round(coin.circulating_supply).toLocaleString();


      // in regards to the arbitrary key values - https://stackoverflow.com/a/43892905/6894170
      return (
        <tr key={i + 100}>
          <td>{coin.cmc_rank}</td>
          <td>{coin.name}</td>
          <td>{coin.symbol}</td>
          <td>{`$${price}`}</td>
          <td>{`$${marketCap}`}</td>
          <td>{supply}</td>
          <td className={percentChange < 0 ? 'percent-change--neg' : 'percent-change--pos'}>{`${percentChange}%`}</td>
        </tr>
      );
    });
  }


  render() {
    return (
      <table className="Cryptos">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
            <th>Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {this.generateTableRows()}
        </tbody>
      </table>
    );
  }
}

export default Cryptos;
