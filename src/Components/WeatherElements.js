import "../Styles/weather.css";
import CloudyIcon from "../Styles/Assets/cloudy-day-1.svg";
import ClearDayIcon from "../Styles/Assets/day.svg";
import RainyIcon from "../Styles/Assets/rainy-7.svg";
import SnowyIcon from "../Styles/Assets/snowy-6.svg";

const API_URL = "http://openweathermap.org";

let WeatherElements = (props) => {

  const weatherData = {
    countryTemperatureDef : props.countryTempV,
    countryTimeSunriseDef : props.countryTimeSunriseV,
    countryTimeSunsetDef : props.countryTimeSunsetV,
  }

  const sunsetTime = new Date(weatherData.countryTimeSunsetDef * 1000).toLocaleTimeString();
  const sunriseTime = new Date(
    weatherData.countryTimeSunriseDef * 1000
  ).toLocaleTimeString();

  const getIcon = () => {
    return `${API_URL}/img/wn/${props.countryWeatherIconV}@2x.png`;
  };

  let weatherIcon = getIcon();
  let weatherTypeData = props.countryWeatherTypeV;

  switch (weatherTypeData) {
    case `Clouds`:
      weatherTypeData = `Cloudy`;
      weatherIcon = CloudyIcon;
      break;
    case `Clear`:
      weatherIcon = ClearDayIcon;
      break;
    case `Snow`:
      weatherTypeData = `Snowy`;
      weatherIcon = SnowyIcon;
      break;
    case `Rain`:
      weatherTypeData = `Rainy`;
      weatherIcon = RainyIcon;
      break;
    default:
  }

  if (props.countryTimeV === undefined) {
    return <div>{console.log("Probando")}</div>;
  }

  return (
    <>
      <h2>{`Temperature`}</h2>
      <h2 id="temp">{weatherData.countryTemperatureDef + `°C`}</h2>

      <div className="weatherType">
        <h2>{`Weather Type`}</h2>
        <img src={weatherIcon} width={100} alt='' />
        <h2 id="weather">{weatherTypeData}</h2>
      </div>

      <div className="weatherSunsetSunrise">
        <p>{`Sunset`}</p>
        <p>{sunsetTime}</p>
        <p>{`Sunrise`}</p>
        <p>{sunriseTime}</p>
      </div>

      <div className={`removeFirstMessage`}>
        <h1>Write a country or location to make a search</h1>
        <h1>Format (city name or country) + , + 2 letter country code</h1>
        <h1>Example: Florida, US</h1>
      </div>
    </>
  );
};

export default WeatherElements;
