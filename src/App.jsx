import React from 'react';
import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios'
import { CurrentWeather } from './Components/CurrentWeather';
import { Forecast } from './Components/Forecast';
import '../node_modules/bootstrap/dist/js/bootstrap'
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Navbar } from './Components/Navbar';
import { AboutUs } from './Components/AboutUs';

function App() {
  const [city, setCity] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState(); 

  const inputData = useRef('');

  const autoComUrl = 'https://api.weatherapi.com/v1/search.json?key=41d0e5799629443fa07134515241910&q='
  const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=41d0e5799629443fa07134515241910&q=${city}&days=7&aqi=no&alerts=no`

  useEffect(() => {
    if (city && city.length > 3) {
      fetchautoComAPI();
    }
  }, [city])

  const fetchautoComAPI = async () => {
    try {
      const response = await axios.get(autoComUrl + city);
      const resp = response.data;
      console.log(resp);
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setCitySuggestion(cityData);


    }
    catch (e) {
      console.log('error', e)
    }
  }


  const handleSelectedCity = (clickedCity) => {
    console.log('clicked city', clickedCity)
    // setClickedCity(city);
    fetchWeatherURL(clickedCity);
    setCitySuggestion([]);

  }

  const handleSuggestion =(city)=>{
    setClickedCity(city);
  }

  const fetchWeatherURL = async (city) => {
    try {
      const response = await axios.get(weatherURL(city));
      const resp = response.data;
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log('Current weather is', resp.current)
      console.log('forecast weather is', resp.forecast)
      console.log('location is', resp.location)

    } catch (e) {
      console.log('Weather error', e)

    }
  }

  const handleClear = () =>{
    inputData.current.value='';
    setClickedCity();
    setCurrent();
    setForecast();
    setClickedCity();
    setLocation();
    setCitySuggestion([]);
  }
  
  const handleSearchOver=()=>{
    <style>
      .searchBtn{{
         color:"white",

      }}
    </style>
  }

  return (
    <>
    {/* <Navbar/> */}
    <Header/>
     <div className='mx-1 a'>
     <div className='container justify-content-center pt-5 pb-2 px-3 mb-2   rounded' style={{ backgroundColor: "rgb(8,9,11)", boxShadow: "0px 0px 15px rgb(49,191,222)" }} >
        <div className=' subContainer mt-3 d-flex justify-content-evenly '>
          <input type="text" ref={inputData} value={clickedCity} className='form-control text-center m-1  align-items-center rounded '
            onChange={(e) => {
              setCity(e.target.value);
            }} placeholder='Enter your city' style={{ height:"100%", width: "60%" }} />
            <button className='searchBtn rounded m-1 text-center' style={{width:"20%",color:"white",backgroundColor:"green",border:"1px solid green "}} onClick={() => handleSelectedCity(clickedCity)} onMouseOver={handleSearchOver()}>Search</button>
            <button className='clearBtn rounded m-1 text-center' style={{width:"20%",color:"white",backgroundColor:"red",border:"1px solid red "}} onClick={()=> handleClear()}>Clear</button>
        </div>

        {/* {city&& <h4>{city}</h4>} */}
        {citySuggestion && citySuggestion.map((city,index) => {
          return (
            <div id={`${index}`} className='d-flex justify-content-center' >
              <div className='suggestCity bg-info bg-opacity-10  rounded border-info border-bottom-2 mt-1 text-white fs-2' style={{ cursor: "pointer", width: "100%" }} onClick={()=>handleSuggestion(city)} >
                <h4 className='sugesstions fs-6 m-2 p-1 text-center'style={{ width: "100%" }} >{city}</h4>
              </div>
            </div>
          )
        })}


        {current && <CurrentWeather current={current} location={location} />}
        {forecast && <Forecast forecast={forecast} location={location} />}

        <hr className='mb-5 ' style={{color:"white", marginTop:"70px"}} />

      </div>
     </div>

     {/* <div className='mx-1'>
     <div className='container justify-content-center mt-2 mb-5 py-4 px-3  rounded' style={{ backgroundColor: "rgb(8,9,11)", boxShadow: "0px 0px 12px rgb(253,166,51)", width:"95%" }} >
      <AboutUs/>
      <hr style={{color:"white"}} />
      </div>
     </div> */}

     <div className='mt-5'>
     <Footer />

     </div>
    </>
  )
}

export default App
