import React, { createContext, useContext, useEffect, useRef } from "react";

export const ColorModeContext = createContext()

export const useColorMode = () => useContext(ColorModeContext)

export const ColorModeProvider = ({ children }) => {
  const colorModeRef = useRef(null)

  function toggleColorMode() {
    colorModeRef.current.classList.toggle('dark')

    const darkMode = colorModeRef.current.classList.contains('dark')
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }

  useEffect(() => {
    if (colorModeRef?.current) {
      const darkMode = JSON.parse(localStorage.getItem("darkMode"))
      if (darkMode) colorModeRef.current.classList.add("dark")
    }
  }, [colorModeRef])
  

  const value = { colorModeRef, toggleColorMode }
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}