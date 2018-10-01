import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//https://www.robinwieruch.de/react-fetching-data/
const apiurl = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

class WeatherCard extends Component {
  render(props) {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
        <div class="card text-center">
          <div class="card-header">
            <h3>{this.props.weatherCity}</h3>
          </div>
          <div class="card-body">
            <h5 class="card-title">{this.props.weatherTemp}</h5>
            <p class="card-text">{this.props.weatherDescription}</p>
            <a href="#" class="btn btn-primary">{this.props.weatherLink}</a>
          </div>
          <div class="card-footer text-muted">
            {this.props.weatherUpdatedTime}
          </div>
        </div>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherdata: null }
  }
  componentDidMount() {
    fetch(apiurl)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const dataToPopulate=this.state.data;
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div class="row">
          <WeatherCard weatherCity={dataToPopulate.name} weatherTemp="10" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Chennai" weatherTemp="12" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Bangalore" weatherTemp="14" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Delhi" weatherTemp="16" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Lancaster" weatherTemp="10" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Lake District" weatherTemp="10" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Mumbai" weatherTemp="10" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
          <WeatherCard weatherCity="Goa" weatherTemp="10" weatherDescription="Weather Forecast goes here" weatherLink="http://niran.in" weatherUpdatedTime="2018-09-06" />
        </div>
      </div>
    );
  }
}

export default App;
