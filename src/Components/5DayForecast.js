import React from "react";
import CloudyIcon from "../Styles/Assets/cloudy-day-1.svg";
import ClearDayIcon from "../Styles/Assets/day.svg";
import RainyIcon from "../Styles/Assets/rainy-7.svg";
import SnowyIcon from "../Styles/Assets/snowy-6.svg";
import moment from "moment";

let FiveDayForecast = (props) => {
  if (props.countryWeatherTodayV !== undefined) {
    var countryDateDef = props.countryDateV;
    var countryWeatherTodayDef = props.countryWeatherTodayV;
    var countryWeatherTodayIconDef =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherTodayIconV +
      "@2x.png";
    var countryWeatherTodayTemperatureDef =
      props.countryWeatherTodayTemperatureV;
    var countryWeatherSecondDayDef = props.countryWeatherSecondDayV;
    var countryWeatherSecondDayIconDef =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherSecondDayIconV +
      "@2x.png";
    var countryWeatherSecondDayTemperatureDef =
      props.countryWeatherSecondDayTemperatureV;
    var countryWeatherThirdDayDef = props.countryWeatherThirdDayV;
    var countryWeatherThirdDayIconDef =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherThirdDayIconV +
      "@2x.png";
    var countryWeatherThirdDayTemperatureDef =
      props.countryWeatherThirdDayTemperatureV;
    var countryWeatherFourthDayDef = props.countryWeatherFourthDayV;
    var countryWeatherFourthDayIconDef =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherFourthDayIconV +
      "@2x.png";
    var countryWeatherFourthDayTemperatureDef =
      props.countryWeatherFourthDayTemperatureV;
    var countryWeatherFifthDayDef = props.countryWeatherFifthDayV;
    var countryWeatherFifthDayIconDef =
      "http://openweathermap.org/img/wn/" +
      props.countryWeatherFifthDayIconV +
      "@2x.png";
    var countryWeatherFifthDayTemperatureDef =
      props.countryWeatherFifthDayTemperatureV;
    var dayDate = countryDateDef.slice(8, 10);
    var daySecondDate = parseInt(countryDateDef.slice(8, 10)) + 1;
    var daySeconDateToString = daySecondDate.toString();
    var dayThirdDate = parseInt(countryDateDef.slice(8, 10)) + 2;
    var dayThirdToString = dayThirdDate.toString();
    var dayFourthDate = parseInt(countryDateDef.slice(8, 10)) + 3;
    var dayFourthDateToString = dayFourthDate.toString();
    var dayFifthDate = parseInt(countryDateDef.slice(8, 10)) + 4;
    var dayFiftDateToString = dayFifthDate.toString();
    var monthDate = countryDateDef.slice(5, 7);
    var yearDate = countryDateDef.slice(0, 4);
    var todayDate = yearDate + "/" + monthDate + "/" + dayDate;
    var secondDayDate = yearDate + "/" + monthDate + "/" + daySeconDateToString;
    var thirdDayDate = yearDate + "/" + monthDate + "/" + dayThirdToString;
    var fourthDayDate =
      yearDate + "/" + monthDate + "/" + dayFourthDateToString;
    var fifthDayDate = yearDate + "/" + monthDate + "/" + dayFiftDateToString;
    var countryDateTodayDay = moment(todayDate).format("dddd");
    var countryDateSecondDay = moment(secondDayDate).format("dddd");
    var countryDateThirdDay = moment(thirdDayDate).format("dddd");
    var countryDateFourthDay = moment(fourthDayDate).format("dddd");
    var countryDateFifthDay = moment(fifthDayDate).format("dddd");
  }
  return (
    <>
      <div className="elementsFiveDayForecastUpColumn">
        <div className="fiveDayForecastTitle">
          <h1>5 Day Forecast</h1>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{countryDateTodayDay}</p>
          <img src={countryWeatherTodayIconDef} width={100} alt="" />
          <p id="fiveDayForecastWeatherType">{countryWeatherTodayDef}</p>
          <p id="fiveDayForecastTemperature">
            {countryWeatherTodayTemperatureDef + "°C"}
          </p>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{countryDateSecondDay}</p>
          <img src={countryWeatherSecondDayIconDef} width={100} alt="" />
          <p id="fiveDayForecastWeatherType">{countryWeatherSecondDayDef}</p>
          <p id="fiveDayForecastTemperature">
            {countryWeatherSecondDayTemperatureDef + "°C"}
          </p>
        </div>
      </div>

      <div className="elementsFiveDayForecastDownColumn">
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{countryDateThirdDay}</p>
          <img src={countryWeatherThirdDayIconDef} width={100} alt="" />
          <p id="fiveDayForecastWeatherType">{countryWeatherThirdDayDef}</p>
          <p id="fiveDayForecastTemperature">
            {countryWeatherThirdDayTemperatureDef + "°C"}
          </p>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{countryDateFourthDay}</p>
          <img src={countryWeatherFourthDayIconDef} width={100} alt="" />
          <p id="fiveDayForecastWeatherType">{countryWeatherFourthDayDef}</p>
          <p id="fiveDayForecastTemperature">
            {countryWeatherFourthDayTemperatureDef + "°C"}
          </p>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{countryDateFifthDay}</p>
          <img src={countryWeatherFifthDayIconDef} width={100} alt="" />
          <p id="fiveDayForecastWeatherType">{countryWeatherFifthDayDef}</p>
          <p id="fiveDayForecastTemperature">
            {countryWeatherFifthDayTemperatureDef + "°C"}
          </p>
        </div>
      </div>
    </>
  );
};

export default FiveDayForecast;
