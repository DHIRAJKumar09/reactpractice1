import React from 'react'
import { useContext,createContext } from 'react'

const ThemeContext = createContext('light');

export const DisplayTheme = () => {
    const theme = useContext(ThemeContext);


  return (
    <div>
        <p>Theme: {theme}</p>
    </div>
    
  )
}

