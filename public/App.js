/*
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./Styles/weather.css";
import {BrowseRouter} from "react-router-dom"

let TitleElements = () => {
  return (
    <>
      <h1>Weatherr</h1>
      <h2>Input your country</h2>
    </>
  );
};

let SelectCountryBox = () => {
  const [countryBox, setcountryBox] = useState("");
  const [countryData, setCountryData] = useState({});

  const extractData = async () => {
    try {
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          countryBox +
          "&units=metric&appid=c916e991cc31e02e0ab1b62115ef3e8f"
      );
      setCountryData({
        countryName: response.data.name,
        countryTemperature: Math.round(response.data.main.temp),
        countryWeatherType: response.data.weather[`0`].main,
        countryImg:
          "https://flagcdn.com/w640/" +
          response.data.sys.country.toLowerCase() +
          ".png",
      });
    } catch (error) {
      alert("The country you set doesn't exist in the OpenWeather Database");
    }
  };

  const handleInput = (event) => {
    event.preventDefault();
    extractData();
  };

  let CountryFlag = () => {
    return (
      <>
        <div>
          <img src="" width={130} alt="" srcSet={countryData.countryImg} />
        </div>
      </>
    );
  };

  let WeatherElements = () => {
    return (
      <>
        <p>Temperature</p>
        <p>Weather Type</p>
        <p id="temp">{countryData.countryTemperature}</p>
        <p id="weather">{countryData.countryWeatherType}</p>
      </>
    );
  };

  return (
    <>
      <div className="title">
        <TitleElements />
        <div className="submitCountry">
          <form action="" onSubmit={handleInput}>
            <Input
              type="text"
              value={countryBox}
              onChange={(e) => setcountryBox(e.target.value)}
            />
            <Input type="submit" />
          </form>
        </div>
      </div>

      <div className="countryimg">
        <CountryFlag />
      </div>

      <div className="elements">
        <WeatherElements />
      </div>
    </>
  );
};
*/