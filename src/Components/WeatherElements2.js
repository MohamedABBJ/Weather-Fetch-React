import React from 'react'
import "../Styles/weather.css";

let WeatherElements2 = (props) =>{
    if (props.countryTimeV !== undefined) {
        var countryTimeDef = props.countryTimeV;
        var countryNameDef = props.countryNameV;
        var countryNameAbvDef = props.countryNameAbvV;
        var countryDateDef = props.countryDateV;
        var countryDayOfWeekDef = props.countryDayOfWeekV;
    }else{
        countryTimeDef = "";
        countryDateDef = "";
        countryNameDef = "";
        countryNameAbvDef = "";
        countryDayOfWeekDef = "";
    }

    return(
        <div className="weatherExtras">
        <h1>{countryNameDef + " " + countryNameAbvDef}</h1>
        <p id="Date">{countryDayOfWeekDef + " " + countryDateDef}</p>
        <p>{countryTimeDef}</p>
      </div>
    )
}
export default WeatherElements2