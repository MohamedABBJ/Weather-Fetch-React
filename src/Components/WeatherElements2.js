import React, { useState, useEffect, useMemo, } from 'react'
import "../Styles/weather.css";

let WeatherElements2 = (props) =>{
  const [everySecond, seteverySecond] = useState(0)
  const [everyMinute, seteveryMinute] = useState(0)
  const [everyHour, seteveryHour] = useState(0)
  const [timeState, settimeState] = useState("hideTime")
  const [timeAmPm, settimeAmPm] = useState("")

  const obtainData = {
    timer : false,
    countryTime : props.countryTimeV,
    countryName : props.countryNameV,
    countryNameAbbr : props.countryNameAbvV,
    countryDate : props.countryDateV,
    countryDayOfWeek : props.countryDayOfWeekV,
  }

  if(props.countryTimeV === undefined){
    obtainData.countryTime = "0"
  }

  if(props.countryTimeV !== undefined){
    obtainData.timer = true
  }

  const timeFormat = useMemo(() => new Map([
      ["TimeSeconds", parseInt(obtainData.countryTime.slice(6,8))],
      ["TimeMinutes", parseInt(obtainData.countryTime.slice(3,5))],
      ["TimeHours",parseInt(obtainData.countryTime.slice(0,2))],
      ["TimeAmPm", obtainData.countryTime.slice(8,11)],
    ]), [obtainData.countryTime])
     
    useEffect(() => {
      seteverySecond(timeFormat.get("TimeSeconds"))
      seteveryMinute(timeFormat.get("TimeMinutes"))
      seteveryHour(timeFormat.get("TimeHours"))
      settimeAmPm(timeFormat.get("TimeAmPm"))
    }, [timeFormat])  
  
    useEffect(() => {

      settimeState("showTime")

         if(obtainData.timer === true){
           setInterval(() => {
             seteverySecond(
               everySecond => (everySecond + 1)
             )
           }, 1000);
         }
      
    }, [obtainData.timer])
    
  
    if(everySecond >= 60){
      seteverySecond(0)
      seteveryMinute(countryTimeDefM => countryTimeDefM + 1)
    }
    if(everyMinute >= 60){
      console.log("a")
      seteveryMinute(0)
      seteveryHour(countryTimeDefH => countryTimeDefH + 1)
    }
    if (everyHour > 12 && timeAmPm === "AM"){
      seteveryHour(countryTimeDefH => countryTimeDefH = 1)
    }


    if (props.countryTimeV === undefined){
      return(
       <div>{}</div>
      )
    }

    return(
        <div className="weatherExtras">
        <h1>{obtainData.countryName + " " + obtainData.countryNameAbbr}</h1>
        <p id="Date">{obtainData.countryDayOfWeek + " " + obtainData.countryDate}</p>
        <p id={timeState}>{everyHour + ":"+ everyMinute + ":" + everySecond + " " + timeAmPm}</p>
      </div>
    )
}

export default WeatherElements2