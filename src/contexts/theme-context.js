import { createContext, useState } from 'react'

export const themes = {
    light:{
        color: '#000',
        background: '#eeeeee',
        border: '8px solid #ffd700',
        boxshadow: '2px 2px 2px #484d4d'
    },

    dark:{
        color: '#fff',
        background: '#2e2e2e',        
        border: '8px solid #d5d5d5',
        boxshadow: '2px 2px 2px #d5d5d5'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)



    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )    
}