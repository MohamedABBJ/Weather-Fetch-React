import React, { useState } from "react";
import axios from "axios";
import "../Styles/weather.css";
import CountryFlag from "./CountryFlag";
import WeatherElements from "./WeatherElements";
import FiveDayForecast from "./5DayForecast";

export default function App() {
  const [countryBox, setcountryBox] = useState("");
  const [countryData, setCountryData] = useState({});
  const [disabledBtn, setdisabledBtn] = useState(true);
  const [disabled5DaysBtn, setdisabled5DaysBtn] = useState(true);
  const [elementsTodayForecast, setelementsTodayForecast] =
    useState("elements");
  const [elementsFiveDayForecast, setelementsFiveDayForecast] =
    useState("allElements");
  const [weatherToday, setweatherToday] = useState({});
  const [weatherSecondDay, setweatherSecondDay] = useState({});
  const [weatherThirdDay, setweatherThirdDay] = useState({});
  const [weatherFourthDay, setweatherFourthDay] = useState({});
  const [weatherFifthDay, setweatherFifthDay] = useState({});

  var backgroundClass = "background-img";
  const extractData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          countryBox +
          "&units=metric&appid=c916e991cc31e02e0ab1b62115ef3e8f"
      );
      const response2 = await axios.get(
        "https://api.ipgeolocation.io/timezone?apiKey=91856cb6afd04efb82a02ef44b5d2b27&lat=" +
          response.data.coord.lat +
          "&long=" +
          response.data.coord.lon
      );
      const response3 = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          countryBox +
          "&units=metric&appid=c916e991cc31e02e0ab1b62115ef3e8f"
      );

      console.log(response3.data.list[0]);
      console.log(response3.data.list[8]);
      console.log(response3.data.list[16]);
      console.log(response3.data.list[24]);
      console.log(response3.data.list[32]);
      setCountryData({
        countryTimezone: response.data.timezone,
        countryTimeSunset: response.data.sys.sunset,
        countryTimeSunrise: response.data.sys.sunrise,
        countryName: response.data.name,
        countryNameAbv: response.data.sys.country,
        countryTemperature: Math.round(response.data.main.temp),
        countryWeatherType: response.data.weather[`0`].main,
        countryImg: response.data.sys.country.toLowerCase(),
        countryWeatherIcon: response.data.weather[`0`].icon,
        countryDate: response2.data.date,
        countryTime: response2.data.time_12,
        countryDayOfWeek: response2.data.date_time_txt.split(",", 1),
      });

      setweatherToday({
        countryWeatherToday : response3.data.list[0].weather[`0`].main,
        countryWeatherTodayIcon : response3.data.list[0].weather[`0`].icon,
        countryWeatherTodayTemperature : Math.round(response3.data.list[0].main.temp),
      })
      console.log(weatherToday.countryWeatherToday)
    } catch (error) {
      alert("The country you set doesn't exist in the OpenWeather Database");
    }
  };

  const handleInput = (event) => {
    event.preventDefault();
    extractData();
    setdisabled5DaysBtn(false);
  };

  const handle5DaysButton = (press) => {
    press.preventDefault();
    setelementsTodayForecast("elementsHide");
    setelementsFiveDayForecast("allElementsFiveDayForecast");
    alert("a");
    setdisabled5DaysBtn(true);
    setdisabledBtn(false);
  };

  const handleTodayButton = (press) => {
    press.preventDefault();
    setelementsTodayForecast("elements");
    alert("a");
    setdisabled5DaysBtn(false);
    setdisabledBtn(true);
  };

  if (countryData.countryWeatherType === "Clouds") {
    backgroundClass = "background-cloudy";
  } else if (countryData.countryWeatherType === "Clear") {
    backgroundClass = "background-clear";
  } else if (countryData.countryWeatherType === "Snow") {
    backgroundClass = "background-snowy";
  } else if (countryData.countryWeatherType === "Rain") {
    backgroundClass = "background-rainy";
  }

  return (
    <>
      <div className={backgroundClass}></div>
      <div className={elementsFiveDayForecast}>
        <div className="countryimg">
          <CountryFlag
            countryImgV={countryData.countryImg}
            countryTimeV={countryData.countryTime}
          />
        </div>
        <div className={elementsTodayForecast}>
          <WeatherElements
            countryTimezoneV={countryData.countryTimezone}
            countryTimeSunsetV={countryData.countryTimeSunset}
            countryTimeSunriseV={countryData.countryTimeSunrise}
            countryTimeV={countryData.countryTime}
            countryTempV={countryData.countryTemperature}
            countryWeatherIconV={countryData.countryWeatherIcon}
            countryWeatherTypeV={countryData.countryWeatherType}
            countryNameV={countryData.countryName}
            countryNameAbvV={countryData.countryNameAbv}
            countryDateV={countryData.countryDate}
            countryDayOfWeekV={countryData.countryDayOfWeek}
          />
        </div>

        <div>
          <FiveDayForecast 
          countryWeatherTodayV = {weatherToday.countryWeatherToday}
          countryWeatherTodayIconV = {weatherToday.countryWeatherTodayIcon}
          countryWeatherTodayTemperatureV = {weatherToday.countryWeatherTodayTemperature}
          />
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
        <div className="button5DayForecast">
          <button disabled={disabled5DaysBtn} onClick={handle5DaysButton}>
            5 DAYS
          </button>
          <button disabled={disabledBtn} onClick={handleTodayButton}>
            Today
          </button>
        </div>
      </div>
    </>
  );
}
