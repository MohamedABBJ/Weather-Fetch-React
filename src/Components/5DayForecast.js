import React from "react";
import moment from "moment";

const API_URL = "http://openweathermap.org";


let FiveDayForecast = (props) => {

  
  const allCountryWeatherData = {
      countryDate : props.countryDateV,
      countryTodayWeather : props.countryWeatherTodayV,
      countryTodayWeatherTemperature : props.countryWeatherTodayTemperatureV,
      countryTomorrowWeather : props.countryWeatherSecondDayV,
      countryTomorrowWeatherTemperature : props.countryWeatherSecondDayTemperatureV,
      countryThirdDayWeather : props.countryWeatherThirdDayV,
      countryThirdDayWeatherTemperature : props.countryWeatherThirdDayTemperatureV,
      countryFourthDayWeather : props.countryWeatherFourthDayV,
      countryFourthDayWeatherTemperature : props.countryWeatherFourthDayTemperatureV,
      countryFifthDayWeather : props.countryWeatherFifthDayV,
      countryFifthDayWeatherTemperature : props.countryWeatherFifthDayTemperatureV,
    } 

    if (allCountryWeatherData.countryDate === undefined) {
      allCountryWeatherData.countryDate = "0"
    }

    const dayWeatherIcon = new Map([
      ["Today", `${API_URL}/img/wn/${props.countryWeatherTodayIconV}@2x.png`],
      ["Second-Day", `${API_URL}/img/wn/${props.countryWeatherSecondDayIconV}@2x.png`],
      ["Third-Day", `${API_URL}/img/wn/${props.countryWeatherThirdDayIconV}@2x.png`],
      ["Fourth-Day", `${API_URL}/img/wn/${props.countryWeatherFourthDayIconV}@2x.png`],
      ["Fifth-Day", `${API_URL}/img/wn/${props.countryWeatherFifthDayIconV}@2x.png`],
    ])

    const dateObtention = new Map([
      ["TodayDate",  allCountryWeatherData.countryDate.slice(8, 10)],
      ["TomorrowDate",  parseInt(allCountryWeatherData.countryDate.slice(8, 10)) + 1],
      ["ThirdDayDate",  parseInt(allCountryWeatherData.countryDate.slice(8, 10)) + 2],
      ["FourthDayDate",  parseInt(allCountryWeatherData.countryDate.slice(8, 10)) + 3],
      ["FifthDayDate",  parseInt(allCountryWeatherData.countryDate.slice(8, 10)) + 4],
      ["MonthDate",  parseInt(allCountryWeatherData.countryDate.slice(5, 7))],
      ["YearDate",  parseInt(allCountryWeatherData.countryDate.slice(0, 4))],
    ])

    const dateFormat = new Map([
      ["TodayDateFormat" , moment(`${dateObtention.get("YearDate")}/${dateObtention.get("MonthDate")}/${dateObtention.get("TodayDate")}`).format(`dddd`)],
      ["TomorrowDateFormat" ,  moment(`${dateObtention.get("YearDate")}/${dateObtention.get("MonthDate")}/${dateObtention.get("TomorrowDate")}`).format(`dddd`)],
      ["ThirdDayDateFormat" , moment(`${dateObtention.get("YearDate")}/${dateObtention.get("MonthDate")}/${dateObtention.get("ThirdDayDate")}`).format(`dddd`)],
      ["FourthDayDateFormat" , moment(`${dateObtention.get("YearDate")}/${dateObtention.get("MonthDate")}/${dateObtention.get("FourthDayDate")}`).format(`dddd`)],
      ["FifthDayDateFormat" , moment(`${dateObtention.get("YearDate")}/${dateObtention.get("MonthDate")}/${dateObtention.get("FifthDayDate")}`).format(`dddd`)]
    ])

  if(props.countryWeatherTodayV === undefined){
    return(
      <div>{}</div>
    )
  }


  return (
    <>
      <div className='fiveDayForecastTitle'>
          <h1>5 Day Forecast</h1>
      </div>
      <div className='elementsFiveDayForecastUpColumn'>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{dateFormat.get(`TodayDateFormat`)}</p>
          <img src={dayWeatherIcon.get("Today")} width={100} alt='' />
          <p id="fiveDayForecastWeatherType">{allCountryWeatherData.countryTodayWeather}</p>
          <p id="fiveDayForecastTemperature">
            {allCountryWeatherData.countryTodayWeatherTemperature + "°C"}
          </p>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{dateFormat.get(`TomorrowDateFormat`)}</p>
          <img src={dayWeatherIcon.get("Second-Day")} width={100} alt='' />
          <p id="fiveDayForecastWeatherType">{allCountryWeatherData.countryTomorrowWeather}</p>
          <p id="fiveDayForecastTemperature">
            {allCountryWeatherData.countryTomorrowWeatherTemperature + "°C"}
          </p>
        </div>
      </div>

      <div className="elementsFiveDayForecastDownColumn">
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{dateFormat.get(`ThirdDayDateFormat`)}</p>
          <img src={dayWeatherIcon.get("Third-Day")} width={100} alt='' />
          <p id="fiveDayForecastWeatherType">{allCountryWeatherData.countryThirdDayWeather}</p>
          <p id="fiveDayForecastTemperature">
            {allCountryWeatherData.countryThirdDayWeatherTemperature + "°C"}
          </p>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{dateFormat.get(`FourthDayDateFormat`)}</p>
          <img src={dayWeatherIcon.get("Fourth-Day")} width={100} alt='' />
          <p id="fiveDayForecastWeatherType">{allCountryWeatherData.countryFourthDayWeather}</p>
          <p id="fiveDayForecastTemperature">
            {allCountryWeatherData.countryFourthDayWeatherTemperature + "°C"}
          </p>
        </div>
        <div className="fiveDayForecast">
          <p id="fiveDayForecastDayOfWeek">{dateFormat.get(`FifthDayDateFormat`)}</p>
          <img src={dayWeatherIcon.get("Fifth-Day")} width={100} alt='' />
          <p id="fiveDayForecastWeatherType">{allCountryWeatherData.countryFifthDayWeather}</p>
          <p id="fiveDayForecastTemperature">
            {allCountryWeatherData.countryFifthDayWeatherTemperature + "°C"}
          </p>
        </div>
      </div>
    </>
  );
};

export default FiveDayForecast;
