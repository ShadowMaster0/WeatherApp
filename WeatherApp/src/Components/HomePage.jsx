import { useState, useEffect } from "react";
import axios from 'axios';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/israel?unitGroup=metric&key=GR28J65FFG6C4YSYGLXHWQP6J&contentType=json")
      .then((response) => {
        setCurrentWeather(response.data); // Set the response data
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  if (!currentWeather) {
    return <p>Loading...</p>;
  }
  
  const todayWeather = currentWeather.days[0];
  
  return (
    <div>
      <h1>Current Weather in {currentWeather.address || currentWeather.resolvedAddress}</h1>
      <p>Date: {todayWeather.datetime}</p>
      <p>Temperature: {todayWeather.temp}°C</p>
      <p>Condition: {todayWeather.conditions}</p>
      <p>Humidity: {todayWeather.humidity}%</p>
      <p>description: {todayWeather.description}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Weather;
