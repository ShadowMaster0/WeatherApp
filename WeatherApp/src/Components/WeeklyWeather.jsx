import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles.css'

const WeeklyWeather = () => {
    const [weeklyData, setWeeklyData] = useState(null);

    //   useEffect(()=>{
    //     const API_URL =``
    //     axios.get(API_URL).then(response => {
    //         setWeeklyData(response.data);
    //       })
    // })

    useEffect(() => {
        // Mock data for the first 7 days with day of the week
        const mockData = [
            { day: 'Monday', date: '2023-01-01', temp: 25, conditions: 'Sunny' },
            { day: 'Tuesday', date: '2023-01-02', temp: 22, conditions: 'Cloudy' },
            { day: 'Wednesday', date: '2023-01-03', temp: 20, conditions: 'Rainy' },
            { day: 'Thursday', date: '2023-01-04', temp: 18, conditions: 'Thunderstorm' },
            { day: 'Friday', date: '2023-01-05', temp: 23, conditions: 'Partly Cloudy' },
            { day: 'Saturday', date: '2023-01-06', temp: 26, conditions: 'Clear' },
            { day: 'Sunday', date: '2023-01-07', temp: 21, conditions: 'Foggy' },
          ];
      
          // Use the first 7 days from the mock data
          setWeeklyData(mockData.slice(0, 7));
      }, []);

      
  return (
    <div>
      {weeklyData && weeklyData.length > 0 ? (
        <div>
          {weeklyData.map((day, index) => (
            <div key={index} className="weather-day">
              <p>{day.day}</p>
              <p>Date: {day.date}</p>
              <p>Temperature: {day.temp}°C</p>
              <p>Condition: {day.conditions}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading or no weekly weather data available</p>
      )}
    </div>
  )
}

export default WeeklyWeather
