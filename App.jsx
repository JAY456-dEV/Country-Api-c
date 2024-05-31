import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import './App.css'
import { useState } from "react"
import ThemeProvider from "./context/ThemeContext"

const App = () => {

    return (
        <ThemeProvider>
            <Header />
            <Outlet />
        </ThemeProvider>
        // {/* upper outlet is liye kyuki jis page mai jayega ye header usme header to rehna hi sath mai usme jitne content hai vo bhi raho or isko mai index mai use karuga as main path or fir uske childrean mai jo bhi home page hoga usko attech karuga or usme path / rakhuga jise vo mai home page hoga or uske to is Home.jsx ko attecth kaia jo home page hai usme bhi ye header rahega sath mai or sare cheje bhi cauze outlet fir uske niche or bhi page bana sakta hu lekin usme path alaga rahega /Contact or element:<Conract/> ye vo component hoga jisko apko us page pe dikhana na ho ye bhi home ke tarah sare components ke data rakhta hoga   */ }
    )
}

export default App