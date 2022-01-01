import React from 'react'

const CountryFlag = (props) => {
    return (
      <>
      <img src={"https://flagcdn.com/w640/"+props.countryImgV+".png"} alt="" width={100}/>
      </>
    );
  };

export default CountryFlag;