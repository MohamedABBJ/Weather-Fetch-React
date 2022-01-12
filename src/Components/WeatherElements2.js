import React, { useState, useEffect, useRef } from 'react'
import "../Styles/weather.css";

let WeatherElements2 = (props) =>{
  const [everySecond, seteverySecond] = useState(0)
  const [everyMinute, seteveryMinute] = useState(0)
  const [everyHour, seteveryHour] = useState(0)
  const [timeState, settimeState] = useState("hideTime")
  const [timeAmPm, settimeAmPm] = useState("")


    if (props.countryTimeV !== undefined) {
        var countryTimeDef = props.countryTimeV;
        var countryNameDef = props.countryNameV;
        var countryNameAbvDef = props.countryNameAbvV;
        var countryDateDef = props.countryDateV;
        var countryDayOfWeekDef = props.countryDayOfWeekV;
        var countryTimeDefS = parseInt(countryTimeDef.slice(6,8))
        var countryTimeDefM = parseInt(countryTimeDef.slice(3,5))
        var countryTimeDefH = parseInt(countryTimeDef.slice(0,2))
        var countryTimeDefPmAm = countryTimeDef.slice(8,11)
        var timer = true
    }
        else{
        countryTimeDef = "";
        countryDateDef = "";
        countryNameDef = "";
        countryNameAbvDef = "";
        countryDayOfWeekDef = "";
    }


    const firstUpdate = useRef(true)

    useEffect(() => {
      seteverySecond(countryTimeDefS)
      seteveryMinute(countryTimeDefM)
      seteveryHour(countryTimeDefH)
      settimeAmPm(countryTimeDefPmAm)
    }, [countryTimeDef , countryTimeDefS, countryTimeDefPmAm, countryTimeDefH, countryTimeDefM])
  
    useEffect(() => {
  
      if (firstUpdate.current) {
        firstUpdate.current = false
        return
      }
      settimeState("showTime")
      if(timer === true){
          setInterval(() => {
            seteverySecond(
              everySecond => (everySecond + 1)
            )
          }, 1000);
      }
    }, [timer])
    
  
    if(everySecond >= 60){
      seteverySecond(0)
      seteveryMinute(countryTimeDefM => countryTimeDefM + 1)
    }else if(everyMinute >= 60){
      console.log("a")
      seteveryMinute(0)
      seteveryHour(countryTimeDefH => countryTimeDefH + 1)
    }else if (everyHour > 12 && timeAmPm === "AM"){
      seteveryHour(countryTimeDefH => countryTimeDefH = 1)
    }

    return(
        <div className="weatherExtras">
        <h1>{countryNameDef + " " + countryNameAbvDef}</h1>
        <p id="Date">{countryDayOfWeekDef + " " + countryDateDef}</p>
        <p id={timeState}>{everyHour + ":"+ everyMinute + ":" + everySecond + " " + timeAmPm}</p>
      </div>
    )
}
export default WeatherElements2