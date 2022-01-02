import React from 'react'

const CountryFlag = (props) => {
    if(props.countryTimeV !== undefined){
      var countryImgDef = "https://flagcdn.com/w640/"+props.countryImgV+".png"
    }
    else{countryImgDef = ""}
    return (
      <>
      <img src={countryImgDef} alt="" width={100}/>
      </>
    );
  };

export default CountryFlag;