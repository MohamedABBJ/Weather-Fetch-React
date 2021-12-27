import React, { useState } from "react";
import axios from "axios";
import "../Styles/weather.css";


  let TitleElements = () => {
    return (
      <>
        <h1>Weatherr</h1>
        <h2>Input your country</h2>
      </>
    );
  };
  
  export default function App () {
    const [countryBox, setcountryBox] = useState("");
    const [countryData, setCountryData] = useState({});
  
    const extractData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            countryBox +
            "&units=metric&appid=c916e991cc31e02e0ab1b62115ef3e8f"
        );
        /*const response2 = await axios.get("https://timeapi.io/api/Time/current/coordinate?latitude=8&longitude=-66")
        response2.header("Access-Control-Allow-Origin", "*");
        response2.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
        console.log(response2)*/
        console.log(response)
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
  
    let WeatherExtraElements = () =>{
      return (
        <div className="weatherExtras">
          <p>Date</p>
          <p>dsads</p>
        </div>
      )
    }

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
              <input
                type="text"
                value={countryBox}
                onChange={(e) => setcountryBox(e.target.value)}
              />
              <input type="submit" />
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
          <WeatherExtraElements/>
        </div>
        
      </>
    );
  };



