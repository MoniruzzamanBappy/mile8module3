import React,{useEffect, useState} from 'react';
import Country from '../Country/Country';

import './Countries.css'

const Countries = () => {
    const [countries, setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1>Data From Outer Component {countries.length}</h1>
            <div  className='country-info'>

            {
                countries.map(country=><Country key={country.cca3} info={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;