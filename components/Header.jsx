import { useContext, useState } from "react"
import { themeContext } from "../context/ThemeContext"

export default function Header() {

    const [isDark, setDark] = useContext(themeContext)

    return (
        <header className={`header-container ${isDark ? 'dark' : ''}`}>
            <div className="header-content">
                <h2 className="title">Where In The World?</h2>
                <p className="darkMode" onClick={() => {
                    setDark(!isDark)
                    localStorage.setItem('isDark', !isDark)
                }}>
                    <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}>&nbsp;&nbsp;</i>{`${isDark ? 'Light' : 'Dark'}`} Mode
                </p>
            </div>
        </header>

    )
}
