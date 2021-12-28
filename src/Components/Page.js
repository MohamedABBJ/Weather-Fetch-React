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
      console.log(response)
      /*const response2 = await axios.get(
        CORS +
          "https://timeapi.io/api/Time/current/coordinate?latitude="+response.data.coord.lat+"&longitude="+response.data.coord.lon
      );*/
      setCountryData({
        countryName: response.data.name,
        countryTemperature: Math.round(response.data.main.temp),
        countryWeatherType: response.data.weather[`0`].main,
        countryImg:
          "https://flagcdn.com/w640/" +
          response.data.sys.country.toLowerCase() +
          ".png",
        countryWeatherIcon: response.data.weather[`0`].icon,
        /*countryDate: response2.data.date,
        countryTime: response2.data.time,
        countryDayOfWeek: response2.data.dayOfWeek*/
      });
    } catch (error) {
      alert("The country you set doesn't exist in the OpenWeather Database");
    }
  };

  const handleInput = (event) => {
    event.preventDefault();
    extractData();
    WeatherElements()
  };

  let BackgroundImg = () =>{
    return(
      <img src="./Assets/background.jpg" alt="" />
    )
  }

  let CountryFlag = () => {
    return (
      <>
        <img src="" alt="" srcSet={countryData.countryImg} />
      </>
    );
  };

  let WeatherExtraElements = () => {

    if(countryData.countryDayOfWeek != undefined){
      var countryDay = countryData.countryDayOfWeek
      var countryTodayDate = countryData.countryDate
      var countryTodayTime = countryData.countryTime
      console.log("ACCEDI")
    }
    else{
      countryDay = ""
      countryTodayDate = ""
      countryTodayTime = ""
    }

    console.log(countryData.countryDayOfWeek)


    return (
      <div className="weatherExtras">
        <h1>{countryData.countryName}</h1>
        <p>Date</p>
        <p>{countryDay + " " + countryTodayDate + " " + countryTodayTime}</p>
      </div>
    );
  };

  let WeatherElements = () => {
    return (
      <>
        <p>Temperature</p>
        <p id="temp">{countryData.countryTemperature}</p>
        <div className="weatherType">
          <p>Weather Type</p>
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              countryData.countryWeatherIcon +
              "@2x.png"
            }
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
      <div className="backgroundImg">
          <BackgroundImg/>
      <div className="allElements">
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

        <div className="countryimg">
          <CountryFlag />
        </div>

        <div className="elements">
          <WeatherElements />
        </div>

        <div>
          <WeatherExtraElements />
        </div>
      </div>
      </div>
    </>
  );
}
