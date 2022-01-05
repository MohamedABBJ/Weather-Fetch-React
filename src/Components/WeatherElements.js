import React, { useEffect, useRef, useState } from "react";
import "../Styles/weather.css";
import CloudyIcon from "../Styles/Assets/cloudy-day-1.svg";
import ClearDayIcon from "../Styles/Assets/day.svg";
import RainyIcon from "../Styles/Assets/rainy-7.svg";
import SnowyIcon from "../Styles/Assets/snowy-6.svg";

let WeatherElements = (props) => {
  const [backgroundClass, setbackgroundClass] = useState("")
  //const [everySecondTime, seteverySecondTime] = useState(0)


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
    var timer = true
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

/* Going to make this later add a timer in seconds to the time of every countryy
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    setInterval(() => {
      seteverySecond(
        everySecond => (everySecond + 1)
      )
    }, 1000);
  }, [countryNameDef])

  var timeMinutes = parseInt(countryTimeDef.slice(3,6))

  var countryTimeDefS = parseInt(countryTimeDef.slice(6,8)) + everySecond

  if(countryTimeDefS > 60){
    seteverySecond(0)
    countryTimeDefS = 0 
    console.log("accedi")
  }

  console.log(countryTimeDefS)
  console.log(everySecond)

*/
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
