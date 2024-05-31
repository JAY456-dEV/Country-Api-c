import React, { useContext } from 'react'
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountryList from "./CountryList"
import { useState } from "react"

import '../App.css'
import { useOutletContext } from 'react-router-dom'
import { themeContext } from '../context/ThemeContext'

// function change(e) {
//     let show = e.target.value
// }

export default function Home() {
    const [query, setQuery] = useState('')

    const [isDark] = useContext(themeContext)

    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu />
            </div>
            <CountryList query={query} />
        </main>
    )
}
