import React from "react";
import "../Styles/weather.css";

let WeatherElements = (props) => {
  if (props.countryTimeV !== undefined) {
    var countryTimeSunsetDef =  props.countryTimeSunsetV;
    var countryTimeSunriseDef =  props.countryTimeSunriseV;
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
    var sunsetTime = new Date(countryTimeSunsetDef*1000).toLocaleTimeString()
    var sunriseTime = new Date(countryTimeSunriseDef*1000).toLocaleTimeString()
    var sunset = "Sunset"
    var sunrise = "Sunrise"
  } else {
    sunset = ""
    sunrise = ""
    countryTimeSunsetDef =  ""
    countryTimeSunriseDef = ""
    countryNameDef = "";
    countryNameAbvDef = "";
    countryTimeDef = "";
    countryDateDef = "";
    countryDayOfWeekDef = "";
    temperature = "";
    weatherType = "";
    weatherIcon = "";
  }

  return (
    <>
      <div className="weatherExtras">
        <h1>{countryNameDef + " " + countryNameAbvDef}</h1>
        <p id="Date">{countryDayOfWeekDef + " " + countryDateDef}</p>
        <p>{countryTimeDef}</p>
      </div>

      <p>{temperature}</p>
      <p id="temp">{props.countryTempV}</p>

      <div className="weatherType">
        <p>{weatherType}</p>
        <img src={weatherIcon} width={100} alt="" />
        <p id="weather">{props.countryWeatherTypeV}</p>
      </div>

      <div className="weatherSunsetSunrise">
          <p>{sunset}</p>
          <p>{sunsetTime}</p>
          <p>{sunrise}</p>
          <p>{sunriseTime}</p>
      </div>
    </>
  );
};

export default WeatherElements;
