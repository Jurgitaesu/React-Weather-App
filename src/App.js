import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titles from './components/Titles';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Footer from './components/Footer';


class App extends React.Component {
  state = {
    city: '',
    country: '',
    date: '',
    main: '',
    icon: '',
    description: '',
    temperature: '',
    feelsLike: '',
    sunrise: '',
    sunset: '',
    clouds: '',
    humidity: '',
    wind: '',
    forecast: {
      day1: {
        date: '',
        icon: '',
        temperature: '',
        description: ''
      },
      day2: {
        date: '',
        icon: '',
        temperature: '',
        description: ''
      },
      day3: {
        date: '',
        icon: '',
        temperature: '',
        description: ''
      },
      day4: {
        date: '',
        icon: '',
        temperature: '',
        description: ''
      },
      day5: {
        date: '',
        icon: '',
        temperature: '',
        description: ''
      }
    },
    error: '',
  };

  getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const APIkey = process.env.REACT_APP_API_KEY;

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIkey}&units=metric`;
    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {

        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);

        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${days[currentDate.getDay()]}`;
        const sunset = new Date(data1.sys.sunset * 1000).toTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toTimeString().slice(0, 5);


        this.setState({
          city: data1.name,
          country: data1.sys.country,
          date,
          main: data1.weather[0].main,
          icon: data1.weather[0].icon,
          description: data1.weather[0].description,
          temperature: data1.main.temp,
          feelsLike: data1.main.feels_like,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: {
            day1: {
              date: data2.list[8].dt_txt.slice(0, 16),
              icon: data2.list[8].weather[0].icon,
              temperature: data2.list[8].main.temp,
              description: data2.list[8].weather[0].description
            },
            day2: {
              date: data2.list[16].dt_txt.slice(0, 16),
              icon: data2.list[16].weather[0].icon,
              temperature: data2.list[16].main.temp,
              description: data2.list[16].weather[0].description
            },
            day3: {
              date: data2.list[24].dt_txt.slice(0, 16),
              icon: data2.list[24].weather[0].icon,
              temperature: data2.list[24].main.temp,
              description: data2.list[24].weather[0].description
            },
            day4: {
              date: data2.list[32].dt_txt.slice(0, 16),
              icon: data2.list[32].weather[0].icon,
              temperature: data2.list[32].main.temp,
              description: data2.list[32].weather[0].description
            },

          },

          error: '',

        });

      })

      .catch(error => {
        console.log(error);

        this.setState({
          city: '',
          country: '',
          date: '',
          main: '',
          icon: '',
          description: '',
          temperature: '',
          feelsLike: '',
          sunrise: '',
          sunset: '',
          clouds: '',
          humidity: '',
          wind: '',
          forecast: {
            day1: {
              date: '',
              icon: '',
              temperature: '',
              description: ''
            },
            day2: {
              date: '',
              icon: '',
              temperature: '',
              description: ''
            },
            day3: {
              date: '',
              icon: '',
              temperature: '',
              description: ''
            },
            day4: {
              date: '',
              icon: '',
              temperature: '',
              description: ''
            },


          },
          error: 'Please insert a valid city',

        });

      });

  };

  render() {

    return (

      <div className="container position-relative">
        <Titles />
        <SearchBar getWeather={this.getWeather} />

        <CurrentWeather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          main={this.state.main}
          icon={this.state.icon}
          description={this.state.description}
          feelsLike={this.state.feelsLike}
          clouds={this.state.clouds}
          date={this.state.date}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          wind={this.state.wind}
          error={this.state.error}
        />
        <Forecast
          date1={this.state.forecast.day1.date}
          icon1={this.state.forecast.day1.icon}
          temperature1={this.state.forecast.day1.temperature}
          description1={this.state.forecast.day1.description}
          date2={this.state.forecast.day2.date}
          icon2={this.state.forecast.day2.icon}
          temperature2={this.state.forecast.day2.temperature}
          description2={this.state.forecast.day2.description}
          date3={this.state.forecast.day3.date}
          icon3={this.state.forecast.day3.icon}
          temperature3={this.state.forecast.day3.temperature}
          description3={this.state.forecast.day3.description}
          date4={this.state.forecast.day4.date}
          icon4={this.state.forecast.day4.icon}
          temperature4={this.state.forecast.day4.temperature}
          description4={this.state.forecast.day4.description}
        />

        <Footer />
      </div >
    );
  }
}
export default App;
