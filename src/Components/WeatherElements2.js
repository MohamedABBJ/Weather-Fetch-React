import React, { useState, useEffect, useRef } from 'react'
import "../Styles/weather.css";

let WeatherElements2 = (props) =>{
  const [everySecond, seteverySecond] = useState(0)
  const [everyMinute, seteveryMinute] = useState(0)


    if (props.countryTimeV !== undefined) {
        var countryTimeDef = props.countryTimeV;
        var countryNameDef = props.countryNameV;
        var countryNameAbvDef = props.countryNameAbvV;
        var countryDateDef = props.countryDateV;
        var countryDayOfWeekDef = props.countryDayOfWeekV;
        var countryTimeDefS = parseInt(countryTimeDef.slice(6,8))
        var countryTimeDefM = parseInt(countryTimeDef.slice(3,5))
    }else{
        countryTimeDef = "";
        countryDateDef = "";
        countryNameDef = "";
        countryNameAbvDef = "";
        countryDayOfWeekDef = "";
    }

    console.log(countryTimeDef.slice(0,2))

    const firstUpdate = useRef(true)

  
    useEffect(() => {
      seteverySecond(countryTimeDefS)
    }, [countryTimeDef])
  
    useEffect(() => {
      seteveryMinute(countryTimeDefM)
    }, [countryTimeDef])
  
    useEffect(() => {
  
      if (firstUpdate.current) {
        firstUpdate.current = false
        return
      }
      setInterval(() => {
        seteverySecond(
          everySecond => (everySecond + 1)
        )
      }, 1000);
    }, [countryNameDef])
    
  
    if(everySecond >= 60){
      seteverySecond(0)
      seteveryMinute(countryTimeDefM + 1)
      console.log("accedi")
    }
  
    console.log(everyMinute)
    console.log(everySecond)


    return(
        <div className="weatherExtras">
        <h1>{countryNameDef + " " + countryNameAbvDef}</h1>
        <p id="Date">{countryDayOfWeekDef + " " + countryDateDef}</p>
        <p>{countryTimeDef.slice(0,2) + ":"+ everyMinute + ":" + everySecond}</p>
      </div>
    )
}
export default WeatherElements2