import React from 'react'

const CountryFlag = (props) => {
    const countryImg = "https://flagcdn.com/w640/"+props.countryImgV+".png"

    if(props.countryImgV === undefined){
      return(
        <div>{}</div>
      )
    }

    return (
      <>
      <img src={countryImg} alt='' width={100}/>
      </>
    );
  };

export default CountryFlag;