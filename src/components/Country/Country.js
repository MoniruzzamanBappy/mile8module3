import React from 'react';
import './Country.css'

const Country = (propos) => {
    const {flags, area, name, population} = propos.info;
    return (
        <div className='gridDisplay'>
            <img className='border mb-5 img-fluid' src={flags.png} alt="" />
            <h1 className='bg-info mx-5 mt-3'>Name: {name.common}</h1>
            <p className='border border-danger mx-3'>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;