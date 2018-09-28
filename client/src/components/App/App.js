import React from 'react';
import './App.css';
import Cryptos from '../Cryptos/Cryptos';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }

    this.getData = this.getData.bind(this);
  }


  componentDidMount() {
    // once the component mounts
    this.getData();
  }


  getData() {
    const req = new Request('/api');

    fetch(req)
      .then(blob => blob.json())
      .then(json => this.setState({
        data: json.data
      }));
  }


  render() {
    return (
      <div className="App">
        <h1>Top Cryptocurrencies by Market Capitalization</h1>
        <Cryptos data={this.state.data} />
      </div>
    )
  }
}

export default App;
