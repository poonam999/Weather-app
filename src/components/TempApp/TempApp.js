import axios from 'axios';
import React , { useState } from 'react';

const TempApp = () => {

  const [data , setData] = useState({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 2
  });
  const [name, setName] = useState('');

  const handleClick = () => {
    if(name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e4cd1a59999028986f12720e3436c0b3&&units=metric`;
      axios.get(apiUrl)
      .then(res => {
        console.log(res.data);
        setData({...data, celcius: res.data.main.temp, name: res.data.name, 
          humidity: res.data.main.humidity, speed: res.data.wind.speed})
      })
      .catch(err => console.log(err));
      }
  }

  return(
    <div className="container">
      <div className="weather">
        <div className="search">
          <input 
            type="text" 
            placeholder='Enter City Name'
            onChange={e => setName(e.target.value)} />
            <button><img src="/images/search.png" onClick={handleClick} alt="" /></button>
        </div>

        <div className="winfo"></div>
          <img src="/images/clouds.jpg" alt="" width="130" height="130" />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>
          <div  className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="" />
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className="col">
              <img src="/images/wind.png" alt="" />
                <div className="wind">
                  <p>{data.speed}km/h</p>
                  <p>Wind</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default TempApp;