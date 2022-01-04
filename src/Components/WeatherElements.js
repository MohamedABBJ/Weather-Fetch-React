import React, { useEffect, useState } from "react";
import "../Styles/weather.css";
import CloudyIcon from "../Styles/Assets/cloudy-day-1.svg";
import ClearDayIcon from "../Styles/Assets/day.svg";
import RainyIcon from "../Styles/Assets/rainy-7.svg";
import SnowyIcon from "../Styles/Assets/snowy-6.svg";

let WeatherElements = (props) => {
  const [everySecond, seteverySecond] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      seteverySecond((everySecond) => everySecond + 1)
    }, 1000);
  }, [props.countryTimeV])


  if (props.countryTimeV !== undefined) {
    var countryTimeSunsetDef = props.countryTimeSunsetV;
    var countryTimeSunriseDef = props.countryTimeSunriseV;
    var countryNameDef = props.countryNameV;
    var countryNameAbvDef = props.countryNameAbvV;
    var countryTimeDef = props.countryTimeV;
    var countryDateDef = props.countryDateV;
    var countryDayOfWeekDef = props.countryDayOfWeekV;
    var temperature = "Temperature";
    var weatherType = "Weather Type";
    var weatherIcon =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherIconV +
      "@2x.png";
    var sunsetTime = new Date(countryTimeSunsetDef * 1000).toLocaleTimeString();
    var sunriseTime = new Date(
      countryTimeSunriseDef * 1000
    ).toLocaleTimeString();
    var sunset = "Sunset";
    var sunrise = "Sunrise";
    var firstMessageRender = "removeFirstMessage";
    var weatherTypeData = props.countryWeatherTypeV;
  } else {
    weatherTypeData = "";
    sunset = "";
    sunrise = "";
    countryTimeSunsetDef = "";
    countryTimeSunriseDef = "";
    countryNameDef = "";
    countryNameAbvDef = "";
    countryTimeDef = "";
    countryDateDef = "";
    countryDayOfWeekDef = "";
    temperature = "";
    weatherType = "";
    weatherIcon = "";
    firstMessageRender = "firstMessage";
  }

  if (weatherTypeData === "Clouds") {
    weatherTypeData = "Cloudy";
    weatherIcon = CloudyIcon;
  } else if (weatherTypeData === "Clear") {
    weatherIcon = ClearDayIcon;
  } else if (weatherTypeData === "Snow") {
    weatherTypeData = "Snowy";
    weatherIcon = SnowyIcon;
  } else if (weatherTypeData === "Rain") {
    weatherTypeData = "Rainy";
    weatherIcon = RainyIcon;
  }


  console.log(props.countryWeatherIconV);
  return (
    <>
      <div className="weatherExtras">
        <h1>{countryNameDef + " " + countryNameAbvDef}</h1>
        <p id="Date">{countryDayOfWeekDef + " " + countryDateDef}</p>
        <p>{everySecond}</p>
      </div>

      <p>{temperature}</p>
      <p id="temp">{props.countryTempV}</p>

      <div className="weatherType">
        <p>{weatherType}</p>
        <img src={weatherIcon} width={100} alt="" />
        <p id="weather">{weatherTypeData}</p>
      </div>

      <div className="weatherSunsetSunrise">
        <p>{sunset}</p>
        <p>{sunsetTime}</p>
        <p>{sunrise}</p>
        <p>{sunriseTime}</p>
      </div>

      <div className={firstMessageRender}>
        <h1>Write a country or location to make a search</h1>
        <h1>Format (city name or country) + , + 2 letter country code</h1>
        <h1>Example: Florida, US</h1>
      </div>
    </>
  );
};

export default WeatherElements;
