//this imports react components from package.json
import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "1910dbc1d9813defc3757891167e2e18";

class App extends React.Component {
getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //made a const that's taking a function that's making the api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}  `);
    //converting the api call into a json format and storing it in a const variable called data
    const data = await api_call.json();
    console.log(data);

}

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

//telling this file to make this component to make it available to export the file
export default App;
