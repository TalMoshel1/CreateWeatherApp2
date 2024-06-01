
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../components/Card.jsx";
import { useEffect, useState } from "react";
import { getForecast } from "../data/forecastThunk.js";
import {celsiusToFahrenheit} from '../data/functions/getF.js'
import { useDispatch } from "react-redux";
import '../styles/changeUnitButton.css'
import "../styles/forecast.css";
import '../styles/error.css'
import {useIsCUnit} from '../Context/IsCunit.jsx'
import ClipLoader from "react-spinners/ClipLoader";


import styled from "styled-components";

export function Forecast() {
  const forecast = useSelector((state) => state.forecast);
  const location = useSelector((state) => state.location)
  const current = useSelector((state) => state.current);
  const dispatch = useDispatch()
  const [isCUnit, toggleIsCUnit] = useIsCUnit();


  // const handleChangeUnit = () => {
  //   if (isCUnit === true) {
  //     dispatch(getForecast({ isMetric: false, cityKey: location.data.Key }))
  //   } else if (isCUnit === false) {
  //     dispatch(getForecast({ isMetric: true, cityKey: location.data.Key }))
  //   }
  // }

  console.log('isCUnit: ', isCUnit)



  if (forecast.loading == 'loading') {
    return <div className='forecast-container'>
      <ClipLoader/>
    </div>
  }



  if (forecast.data?.DailyForecasts) {
    return (
      <div className='forecast-container'>
        <UnitButtonContainer className="changeUnitButton" onClick={toggleIsCUnit}>view in {isCUnit ? 'F' : 'C'}</UnitButtonContainer>
        <section className="forecast">
          {forecast.data.DailyForecasts.map((day) => {
            return (
              <Card
                Icon={day.Day.Icon}
                IconPhrase={day.Day.IconPhrase}
                date={day.Date}
                minValue={isCUnit ? day.Temperature.Minimum.Value: celsiusToFahrenheit(day.Temperature.Minimum.Value)}
                unit={isCUnit ? 'C': 'F'}
                // unit={day.Temperature.Minimum.Unit}
                maxValue={isCUnit ? day.Temperature.Minimum.Value: celsiusToFahrenheit(day.Temperature.Maximum.Value)}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

const UnitButtonContainer = styled.button`
background-color: ${(props) => props.theme.colors.itemBackground};
color: ${(props) => props.theme.colors.lettersSmall};


`
