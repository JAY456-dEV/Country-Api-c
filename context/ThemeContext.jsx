import { createContext, useState } from "react";

export const themeContext = createContext()

export default function ThemeProvider(props) {
    const { children } = props
    // console.log(children)
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('isDark')))

    return (
        <themeContext.Provider value={[isDark, setDark]}>
            {children}
        </themeContext.Provider>
    )
}
