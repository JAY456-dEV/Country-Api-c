import React, { useEffect, useState } from 'react'
import CountyCard from './CountyCard'
import CountriesListShimmar from './countriesListShimmar'
import '../App.css'

export default function CountryList({ query }) {

    const [Countrydata, setCountryData] = useState([])

    useEffect(() => { // ye ek hi bar run hoga 
        fetch('https://restcountries.com/v3.1/all').then((res) => {
            return res.json()
                .then((data) => {
                    setCountryData(data)
                })
        })
    }, [])


    if (Countrydata.length === 0) {
        return <CountriesListShimmar />
    }

    return (
        <>
            <div className='countries-container'>
                {Countrydata.filter((country) =>
                    country.name.common.toLowerCase().includes(query)) || country.region.toLowerCase().includes(query)
                        .map((country) => {
                            return <CountyCard
                                key={country.name.common}
                                name={country.name.common}
                                flag={country.flags.svg}
                                population={country.population.toLocaleString('en-IN')}
                                region={country.region}
                                capital={country.capital?.[0]} />
                        })
                }
            </div>
        </>
    )
}
