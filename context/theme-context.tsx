"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "futuristic" | "minimalist"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("futuristic")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "futuristic" ? "minimalist" : "futuristic"))
  }

  // Store theme preference in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme") as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme)

    // Apply theme class to body
    if (theme === "minimalist") {
      document.body.classList.add("minimalist-theme")
    } else {
      document.body.classList.remove("minimalist-theme")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

