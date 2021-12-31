import React, { useState } from "react";
import axios from "axios";
import "../Styles/weather.css";

const CORS = "https://cors-anywhere.herokuapp.com/";

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
      console.log(response2);
      setCountryData({
        countryName: response.data.name,
        countryNameAbv:response.data.sys.country,
        countryTemperature: Math.round(response.data.main.temp),
        countryWeatherType: response.data.weather[`0`].main,
        countryImg: response.data.sys.country.toLowerCase(),
        countryWeatherIcon: response.data.weather[`0`].icon,
        countryDate: response2.data.date,
        countryTime: response2.data.time_12,
        countryDayOfWeek: (response2.data.date_time_txt).split(",",1),
      });
    } catch (error) {
      alert("The country you set doesn't exist in the OpenWeather Database");
    }
  };

  const handleInput = (event) => {
    event.preventDefault();
    extractData();
    WeatherElements();
  };

  const CountryFlag = () => {
    if(countryData.countryTime !== undefined){
      var countryFlagImg =  "https://flagcdn.com/w640/" + countryData.countryImg +".png"
    }
    else{
      countryFlagImg = ""
    }
    return (
      <>
        <img src={countryFlagImg} alt="" width={100}/>
      </>
    );
  };

  let WeatherExtraElements = () => {
      
    if(countryData.countryTime !== undefined){
      var countryNameDef = countryData.countryName
      var countryNameAbvDef = countryData.countryNameAbv
      var countryTimeDef = countryData.countryTime
      var countryDateDef = countryData.countryDate
      var countryDayOfWeekDef = countryData.countryDayOfWeek
    }
    else{
      countryNameDef = ""
      countryNameAbvDef = ""
      countryTimeDef = ""
      countryDateDef = ""
      countryDayOfWeekDef = ""
    }

    return (
      <div className="weatherExtras">
        <h1>{countryNameDef + " " +countryNameAbvDef}</h1>
        <p id="Date">{countryDayOfWeekDef+" "+countryDateDef}</p>
        <p>{countryTimeDef}</p>
      </div>
    );
  };

  let WeatherElements = () => {
    if(countryData.countryTime !== undefined){
      var temperature = "Temperature"
      var weatherType = "Weather Type"
      var weatherIcon = "http://openweathermap.org/img/wn/" + countryData.countryWeatherIcon +"@2x.png"
    }
    else{
      temperature = ""
      weatherType = ""
      weatherIcon = ""
    }
    return (
      <>
        <p>{temperature}</p>
        <p id="temp">{countryData.countryTemperature}</p>
        <div className="weatherType">
          <p>{weatherType}</p>
          <img
            src={weatherIcon}
            width={100}
            alt=""
          />
          <p id="weather">{countryData.countryWeatherType}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="allElements">
        <div className="countryimg">
          <CountryFlag />
        </div>
        <div className="elements">
          <WeatherElements />
        </div>
        <div>
          <WeatherExtraElements />
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
