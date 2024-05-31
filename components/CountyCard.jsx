import React from 'react'
import { Link } from 'react-router-dom'

export default function CountyCard(props) {
    const { name, flag, population, region, capital } = props
    return (
        <Link className="country-card" to={`/${np}`}>
            <img src={flag} alt="Moldova" />
            <div className="card-text">
                <h3 className="card-title">{name}</h3>
                <p><b>Population :</b>{population}</p>
                <p><b>Region :</b>{region}</p>
                <p><b>Capital :</b>{capital}</p>
            </div>
        </Link>
    )
}
