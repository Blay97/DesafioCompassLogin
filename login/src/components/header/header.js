import React, { useState, useEffect } from 'react';
import logo from '../../images/compass-logo-black.png';
import { Header, LabelHour, DivCustom, Location, DivTemperature, DivImage, LabelHourDate } from './style';
import moment from 'moment';
import 'moment/locale/pt-br';
import { getWheater } from "../../services/getWeather"
function CustomHeader() {

  const [hour, setHour] = useState(false);
  const [date, setDate] = useState(false);
  const [wheaterInfo, setWeatherInfo] = useState({ location: "", image: "", temperature: "" })

  const handleWheater = async (position) => {
    const currentPosition = `${position.coords.latitude}, ${position.coords.longitude}`
    const { data } = await getWheater({ position: currentPosition })
    const values = {
      location: `${data.location.name}-${data.location.region}`,
      image: data.current.condition.icon,
      temperature: data.current.temp_c,
    }
    setWeatherInfo(values)
  }

  const getUserLocationWheaterInfo = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleWheater);
    } else {
      return "Geolocation is not supported by this browser.";
    }
  }

  useEffect(() => {
    setInterval(() => {
      setHour(moment().format('LT'));
      setDate(moment().format('dddd, LL'));
    }, 1000);
    getUserLocationWheaterInfo()
  }, [])


  return (
    <Header>
        <DivCustom>
          <img src={logo} className="App-logo" alt="logo" />
        </DivCustom>
      <div>
        <LabelHourDate>
          <LabelHour>{hour}</LabelHour>
          <div>{date}</div>
        </LabelHourDate>
      </div>

      <div>
        <Location>{wheaterInfo.location}</Location>
        <DivCustom>
          <DivImage>
            {wheaterInfo.image && <img src={`${wheaterInfo.image}`} alt="wheater" />}
          </DivImage>
          <DivTemperature>{wheaterInfo.temperature}°</DivTemperature>
        </DivCustom>
      </div>
    </Header>
  );
}
export default CustomHeader;


