import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';

const Country = () => {
  const [loading, setLoading] = useState(true);
  const[countryData,setCountryData]=useState([]);
  const[search,setSearch]=useState('');

  const myapi = import.meta.env.VITE_COUNTRY_API;

  const country=()=>{
    try {
      fetch(myapi).then((res)=>res.json())
      .then((data)=>setCountryData(data));
      setLoading(false)
    } catch (error) {
      console.log(`this is your error ${error}`)
    }
  }
  useEffect(()=>{
    country();
  },[]);

  const filteredCountries = countryData.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {loading?<div className='grid items-center justify-center h-screen'>
        <FadeLoader loading={loading} color={'red'} size={100}/>
        </div>:
      <div>
      <input type="text" className='w-full border-2 border-green-300 rounded m-3 py-2 px-3 mt-16'
          placeholder="Type country name..." onChange={(e)=>setSearch(e.target.value)}/>
      <section className='grid grid-cols-4 h-screen overflow-auto'>
        {filteredCountries.map((country,index)=>
        <article className='bg-zinc-500 m-2 rounded p-4' key={index}>
         <p> Name : {country.name.common}</p>
         <p> Capital : {country.capital}</p>
         <p> Flag : {country.flag}</p>
        </article>)}
      </section>
      </div>}
    </div>
  )
}

export default Country