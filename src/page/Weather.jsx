import React, { useState } from 'react'

export const Weather = () => {
  const[weather,setWeather]=useState('');
  const[mydata,setMyData]=useState({})
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const myfunc =(countyName)=>{
    try {
      if(!countyName)return
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countyName}&appid=${apiKey}`
      fetch(apiUrl).then((res)=>{
        return res.json();
      }).then((data)=>{
        setMyData(data);
      })
    } catch (error) {
      console.log(`this is your error ${error}`)
    }
  }

const click=()=>{
 myfunc(weather);
}
const chang=(e)=>{
  setWeather(e.target.value)
}

  return (
    <div className='grid items-center justify-center h-screen bg-green-300'>
      <div className='bg-slate-200 rounded p-8'>
      <p className='font-bold text-center text-fuchsia-950 mb-6 text-2xl'>This is my weather app</p>
      <input type="text" className=' border-2 border-emerald-600 rounded-md ' placeholder='Enter Country Name .....' onChange={chang}/>
      <button className='bg-slate-400 text-black px-4 py-0.5 border-2 ml-2 border-teal-500 rounded'
       onClick={click} >search</button>
      <p>{mydata.name}</p>
      <p>{((mydata?.main?.temp)-273.15).toFixed(2)}'C</p>
      </div>
    </div>
  )
}
