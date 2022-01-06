import React from "react";
import ReactDOM from "react-dom";
import CloudyIcon from "../Styles/Assets/cloudy-day-1.svg";
import ClearDayIcon from "../Styles/Assets/day.svg";
import RainyIcon from "../Styles/Assets/rainy-7.svg";
import SnowyIcon from "../Styles/Assets/snowy-6.svg";

let FiveDayForecast = (props) => {
  if (props.countryWeatherTodayV !== undefined) {
    var countryWeatherTodayDef = props.countryWeatherTodayV;
    var countryWeatherTodayIconDef =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherTodayIconV +
      "@2x.png";
    var countryWeatherTodayTemperatureDef = props.countryWeatherTodayTemperatureV;
    var countryWeatherSecondDayDef = props.countryWeatherSecondDayV
    var countryWeatherSecondDayIconDef= "http://openweathermap.org/img/wn/"+props.countryWeatherSecondDayIconV+"@2x.png"
    var countryWeatherSecondDayTemperatureDef= props.countryWeatherSecondDayTemperatureV 
    var countryWeatherThirdDayDef= props.countryWeatherThirdDayV
    var countryWeatherThirdDayIconDef= "http://openweathermap.org/img/wn/"+props.countryWeatherThirdDayIconV+"@2x.png"
    var countryWeatherThirdDayTemperatureDef= props.countryWeatherThirdDayTemperatureV
    var countryWeatherFourthDayDef= props.countryWeatherFourthDayV 
    var countryWeatherFourthDayIconDef= "http://openweathermap.org/img/wn/"+props.countryWeatherFourthDayIconV+"@2x.png"
    var countryWeatherFourthDayTemperatureDef= props.countryWeatherFourthDayTemperatureV 
    var countryWeatherFifthDayDef= props.countryWeatherFifthDayV 
    var countryWeatherFifthDayIconDef= "http://openweathermap.org/img/wn/"+props.countryWeatherFifthDayIconV+"@2x.png"
    var countryWeatherFifthDayTemperatureDef= props.countryWeatherFifthDayTemperatureV 

  }
  return (
    <>
    <div className="elementsFiveDayForecastUpColumn">
        <div className="fiveDayForecast">
            <p id="fiveDayForecastDayOfWeek">today</p>
            <img src={countryWeatherTodayIconDef} width={100} alt="" />
            <p id="fiveDayForecastWeatherType">{countryWeatherTodayDef}</p>
            <p id="fiveDayForecastTemperature">{countryWeatherTodayTemperatureDef+"°C"}</p>
        </div>
        <div className="fiveDayForecast">
            <p id="fiveDayForecastDayOfWeek">tomorrow</p>
            <img src={countryWeatherSecondDayIconDef} width={100} alt="" />
            <p id="fiveDayForecastWeatherType">{countryWeatherSecondDayDef}</p>
            <p id="fiveDayForecastTemperature">{countryWeatherSecondDayTemperatureDef+"°C"}</p>
        </div>
    </div>

    <div className="elementsFiveDayForecastDownColumn">
        <div className="fiveDayForecast">
            <p id="fiveDayForecastDayOfWeek">third day</p>
            <img src={countryWeatherThirdDayIconDef} width={100} alt="" />
            <p id="fiveDayForecastWeatherType">{countryWeatherThirdDayDef}</p>
            <p id="fiveDayForecastTemperature">{countryWeatherThirdDayTemperatureDef+"°C"}</p>
        </div>
        <div className="fiveDayForecast">
            <p id="fiveDayForecastDayOfWeek">forth day</p>
            <img src={countryWeatherFourthDayIconDef} width={100} alt="" />
            <p id="fiveDayForecastWeatherType">{countryWeatherFourthDayDef}</p>
            <p id="fiveDayForecastTemperature">{countryWeatherFourthDayTemperatureDef+"°C"}</p>
        </div>
        <div className="fiveDayForecast">
            <p id="fiveDayForecastDayOfWeek">fifth day</p>
            <img src={countryWeatherFifthDayIconDef} width={100} alt="" />
            <p id="fiveDayForecastWeatherType">{countryWeatherFifthDayDef}</p>
            <p id="fiveDayForecastTemperature">{countryWeatherFifthDayTemperatureDef+"°C"}</p>
        </div>
    </div>
    </>
  );
};

export default FiveDayForecast;
