import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';

const MonthlyWeather = () => {
  const [monthlyData, setMonthlyData] = useState(null);

  useEffect(() => {
    // API call
    const mockData = Array.from({ length: 30 }, (_, i) => ({
        day: i + 1,
        date: `2023-01-${i + 1}`,
        temp: Math.floor(Math.random() * 15) + 20, // Random temperature between 20 and 35
        conditions: 'Sunny', // You can adjust this based on your needs
      }));
  
      setMonthlyData(mockData);
  }, []);

  return (
    <div>
      {monthlyData && monthlyData.length > 0 ? (
        <div className="monthly-calendar">
          {monthlyData.map((day, index) => (
            <div key={index} className="weather-day">
              <p>{new Date(day.date).getDate()}</p>
              <p>Date: {day.date}</p>
              <p>Temperature: {day.day.avgtemp_c}°C</p>
              <p>Condition: {day.day.condition}</p>
            </div>
          ))}
          
        </div>
      ) : (
        <p>Loading or no monthly weather data available</p>
      )}
    </div>
  );
};

export default MonthlyWeather;
