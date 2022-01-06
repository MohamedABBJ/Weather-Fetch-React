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
    var countryWeatherTodayTemperatureV = props.countryWeatherTodayTemperatureV;
  }

  return (
    <div className="elementsFiveDayForecast">
        <div className="fiveDayForecast">
            <p>hello</p>
            <img src={countryWeatherTodayIconDef} width={100} alt="" />
            <p>{countryWeatherTodayDef}</p>
            <p>{countryWeatherTodayTemperatureV}</p>
        </div>
    </div>
  );
};

export default FiveDayForecast;
