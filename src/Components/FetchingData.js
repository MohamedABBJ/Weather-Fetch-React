import React, { useState } from "react";
import axios from "axios";
import "../Styles/weather.css";
import CountryFlag from "./CountryFlag";
import WeatherElements from "./WeatherElements";

export default function App() {
  const [countryBox, setcountryBox] = useState("");
  const [countryData, setCountryData] = useState({});

  const extractData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          countryBox +
          "&units=metric&appid=c916e991cc31e02e0ab1b62115ef3e8f"
      );
      console.log(response);
      const response2 = await axios.get(
        "https://api.ipgeolocation.io/timezone?apiKey=91856cb6afd04efb82a02ef44b5d2b27&lat=" +
          response.data.coord.lat +
          "&long=" +
          response.data.coord.lon
      );
      setCountryData({
        countryTimezone : response.data.timezone,
        countryTimeSunset : response.data.sys.sunset,
        countryTimeSunrise : response.data.sys.sunrise,
        countryName: response.data.name,
        countryNameAbv: response.data.sys.country,
        countryTemperature: Math.round(response.data.main.temp),
        countryWeatherType: response.data.weather[`0`].main,
        countryImg: response.data.sys.country.toLowerCase(),
        countryWeatherIcon: response.data.weather[`0`].icon,
        countryDate: response2.data.date,
        countryTime: response2.data.time_12,
        countryDayOfWeek: response2.data.date_time_txt.split(",", 1),
      });
    } catch (error) {
      alert("The country you set doesn't exist in the OpenWeather Database");
    }
  };

  const handleInput = (event) => {
    event.preventDefault();
    extractData();
  };

  return (
    <>
      <div className="allElements">
        <div className="countryimg">
          <CountryFlag 
          countryImgV={countryData.countryImg} 
          countryTimeV={countryData.countryTime}/>
        </div>
        <div className="elements">
          <WeatherElements
            countryTimezoneV = {countryData.countryTimezone}
            countryTimeSunsetV = {countryData.countryTimeSunset}
            countryTimeSunriseV = {countryData.countryTimeSunrise}
            countryTimeV={countryData.countryTime}
            countryTempV={countryData.countryTemperature}
            countryWeatherIconV={countryData.countryWeatherIcon}
            countryWeatherTypeV={countryData.countryWeatherType}
            countryNameV={countryData.countryName}
            countryNameAbvV={countryData.countryNameAbv}
            countryDateV={countryData.countryDate}
            countryDayOfWeekV={countryData.countryDayOfWeek}/>
        </div>

        <div className="title">
          <div className="submitCountry">
            <form action="" onSubmit={handleInput}>
              <input
                type="text"
                value={countryBox}
                onChange={(e) => setcountryBox(e.target.value)}
              />
              <input type="hidden" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
