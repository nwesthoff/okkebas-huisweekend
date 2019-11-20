import React from 'react'

const API_KEY = '3633d6ef891f4af5dc86f4ede2dd5c48'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.setState({
      coordinates: {
        latitude: '50.1817224',
        longitude: '5.5747893',
      },
    })
  }

  fetchForecast() {
    const { coordinates } = this.state
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`
    fetch(API_URL)
      .then(c => c.json())
      .then(forecast => {
        this.setState({ forecast })
      })
  }

  renderWeather() {
    if (!this.state.forecast) {
      if (this.state.coordinates) {
        this.fetchForecast()
      }

      return (
        <div className="weather-container">
          <p>Loading...</p>
        </div>
      )
    }

    return (
      <div className="weather-container">
        <h2>Weer in XXXXXX</h2>
        <ul>
          <li>Huidige temperatuur: {this.state.forecast.main.temp}&deg;c</li>
          <li>
            Voorspelde temperatuur (hoog): {this.state.forecast.main.temp_max}
            &deg;c
          </li>
          <li>
            Voorspelde temperatuur (laag): {this.state.forecast.main.temp_min}
            &deg;c
          </li>
          <li>Vochtigheid: {this.state.forecast.main.humidity}%</li>
        </ul>
      </div>
    )
  }

  render() {
    return <div>{this.renderWeather()}</div>
  }
}
