import React, { useState } from "react";
import axios from "axios";
import "../Styles/weather.css";
import "../Styles/weatherMobile.css";
import CountryFlag from "./CountryFlag";
import WeatherElements from "./WeatherElements";
import FiveDayForecast from "./5DayForecast";
import WeatherElements2 from "./WeatherElements2";
import UserState from "./UserSate";
import Chat from "./Chat";

export default function App() {
  const [countryData, setCountryData] = useState({});
  const [weatherToday, setweatherToday] = useState({});
  const [weatherSecondDay, setweatherSecondDay] = useState({});
  const [weatherThirdDay, setweatherThirdDay] = useState({});
  const [weatherFourthDay, setweatherFourthDay] = useState({});
  const [weatherFifthDay, setweatherFifthDay] = useState({});
  const [disabledBtn, setdisabledBtn] = useState(true);
  const [disabled5DaysBtn, setdisabled5DaysBtn] = useState(true);
  const [checkButtonState, setcheckButtonState] = useState(false);
  const [countryBox, setcountryBox] = useState("");
  const [elementsTodayForecast, setelementsTodayForecast] =
    useState("elements");
  const [extraElementsTodayForecast, setextraElementsTodayForecast] =
    useState("hideExtraElements");
  const [elementsFiveDayForecast, setelementsFiveDayForecast] =
    useState("allElements");
  const [hideElementFiveDayForecast, sethideElementFiveDayForecast] = useState(
    "fiveDayForecastHide"
  );
  const [btnStateFiveDayForecast, setbtnStateFiveDayForecast] = useState(
    "buttonHide5DayForecast"
  );
  const [hideCountryImg, sethideCountryImg] = useState("countryImg");
  const [user, setuser] = useState(null);

  let backgroundClass = "background-img";

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
        countryWeatherToday: response3.data.list[0].weather[`0`].main,
        countryWeatherTodayIcon: response3.data.list[0].weather[`0`].icon,
        countryWeatherTodayTemperature: Math.round(
          response3.data.list[0].main.temp
        ),
      });
      setweatherSecondDay({
        countryWeatherSecondDayIcon: response3.data.list[8].weather[`0`].icon,
        countryWeatherSecondDayTemperature: Math.round(
          response3.data.list[8].main.temp
        ),
        countryWeatherSecondDay: response3.data.list[8].weather[`0`].main,
      });
      setweatherThirdDay({
        countryWeatherThirdDayIcon: response3.data.list[16].weather[`0`].icon,
        countryWeatherThirdDayTemperature: Math.round(
          response3.data.list[16].main.temp
        ),
        countryWeatherThirdDay: response3.data.list[16].weather[`0`].main,
      });
      setweatherFourthDay({
        countryWeatherFourthDayIcon: response3.data.list[24].weather[`0`].icon,
        countryWeatherFourthDayTemperature: Math.round(
          response3.data.list[24].main.temp
        ),
        countryWeatherFourthDay: response3.data.list[24].weather[`0`].main,
      });
      setweatherFifthDay({
        countryWeatherFifthDayIcon: response3.data.list[32].weather[`0`].icon,
        countryWeatherFifthDayTemperature: Math.round(
          response3.data.list[32].main.temp
        ),
        countryWeatherFifthDay: response3.data.list[32].weather[`0`].main,
      });
    } catch (error) {
      alert("The country you set doesn't exist in the OpenWeather Database");
    }
  };

  if (countryData.countryName !== undefined && checkButtonState === false) {
    setbtnStateFiveDayForecast("button5DayForecast");
    setcheckButtonState(true);
  }

  const handleInput = (event) => {
    event.preventDefault();
    extractData();
    setdisabled5DaysBtn(false);
    setextraElementsTodayForecast("extraElements");
  };

  const handle5DaysButton = (press) => {
    press.preventDefault();
    setelementsTodayForecast("elementsHide");
    setdisabled5DaysBtn(true);
    setdisabledBtn(true);
    sethideCountryImg("hideCountryImg");
    setbtnStateFiveDayForecast("buttonHide5DayForecast");
    setextraElementsTodayForecast("hideExtraElements");
    //Setting animation wait 1 sec
    setTimeout(() => {
      setextraElementsTodayForecast("extraElements");
      setbtnStateFiveDayForecast("button5DayForecast");
      sethideElementFiveDayForecast("allElementsFiveDayForecastShow");
      setdisabledBtn(false);
      sethideCountryImg("countryImg");
    }, 1000);
    setelementsFiveDayForecast("allElementsFiveDayForecastTransition");
  };

  const handleTodayButton = (press) => {
    press.preventDefault();
    sethideElementFiveDayForecast("fiveDayForecastHide");
    setdisabled5DaysBtn(true);
    setdisabledBtn(true);
    sethideCountryImg("hideCountryImg");
    setbtnStateFiveDayForecast("buttonHide5DayForecast");
    setextraElementsTodayForecast("hideExtraElements");
    sethideElementFiveDayForecast("allElementsFiveDayForecastHide");
    //Setting animation wait 1 sec

    setTimeout(() => {
      setextraElementsTodayForecast("extraElements");
      setbtnStateFiveDayForecast("button5DayForecast");
      setelementsTodayForecast("elements");
      setdisabled5DaysBtn(false);
      sethideCountryImg("countryImg");
    }, 1000);

    setelementsFiveDayForecast("allElementsTransitionAnim");
  };

  if (countryData.countryWeatherType === "Clouds") {
    backgroundClass = "background-cloudy";
  } else if (countryData.countryWeatherType === "Clear") {
    backgroundClass = "background-clear";
  } else if (countryData.countryWeatherType === "Snow") {
    backgroundClass = "background-snowy";
  } else if (countryData.countryWeatherType === "Rain") {
    backgroundClass = "background-rainy";
  } else if (countryData.countryName !== undefined) {
    setbtnStateFiveDayForecast("button5DayForecast");
  }

  return (
    <>
      <div className={backgroundClass}></div>
        <div className="userState">
          <UserState />
        </div>
      <div className={elementsFiveDayForecast}>
        <div className={hideCountryImg}>
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
            countryTempV={countryData.countryTemperature}
            countryWeatherIconV={countryData.countryWeatherIcon}
            countryWeatherTypeV={countryData.countryWeatherType}
            countryTimeV={countryData.countryTime}
          />
        </div>
        <div className={extraElementsTodayForecast}>
          <WeatherElements2
            countryNameV={countryData.countryName}
            countryNameAbvV={countryData.countryNameAbv}
            countryTimeV={countryData.countryTime}
            countryDateV={countryData.countryDate}
            countryDayOfWeekV={countryData.countryDayOfWeek}
          />
        </div>

        <div className={hideElementFiveDayForecast}>
          <FiveDayForecast
            countryDateV={countryData.countryDate}
            countryWeatherTodayV={weatherToday.countryWeatherToday}
            countryWeatherTodayIconV={weatherToday.countryWeatherTodayIcon}
            countryWeatherTodayTemperatureV={
              weatherToday.countryWeatherTodayTemperature
            }
            countryWeatherSecondDayV={weatherSecondDay.countryWeatherSecondDay}
            countryWeatherSecondDayIconV={
              weatherSecondDay.countryWeatherSecondDayIcon
            }
            countryWeatherSecondDayTemperatureV={
              weatherSecondDay.countryWeatherSecondDayTemperature
            }
            countryWeatherThirdDayV={weatherThirdDay.countryWeatherThirdDay}
            countryWeatherThirdDayIconV={
              weatherThirdDay.countryWeatherThirdDayIcon
            }
            countryWeatherThirdDayTemperatureV={
              weatherThirdDay.countryWeatherThirdDayTemperature
            }
            countryWeatherFourthDayV={weatherFourthDay.countryWeatherFourthDay}
            countryWeatherFourthDayIconV={
              weatherFourthDay.countryWeatherFourthDayIcon
            }
            countryWeatherFourthDayTemperatureV={
              weatherFourthDay.countryWeatherFourthDayTemperature
            }
            countryWeatherFifthDayV={weatherFifthDay.countryWeatherFifthDay}
            countryWeatherFifthDayIconV={
              weatherFifthDay.countryWeatherFifthDayIcon
            }
            countryWeatherFifthDayTemperatureV={
              weatherFifthDay.countryWeatherFifthDayTemperature
            }
          />
        </div>
        <div className="title">
          <div className="submitCountry">
            <form action="" onSubmit={handleInput}>
              <input
                type="text"
                value={countryBox}
                placeholder="Type a country or location you want to obtain the weather here"
                onChange={(e) => setcountryBox(e.target.value)}
              />
              <input type="hidden" />
            </form>
          </div>
        </div>



        <div className={btnStateFiveDayForecast}>
          <button
            className="button5dayForecast"
            disabled={disabled5DaysBtn}
            onClick={handle5DaysButton}
          >
            5 DAYS
          </button>
          <button
            className="buttonTodayForecast"
            disabled={disabledBtn}
            onClick={handleTodayButton}
          >
            Today
          </button>
        </div>
      </div>
    </>
  );
}
