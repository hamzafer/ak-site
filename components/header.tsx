"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "@/context/theme-context"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "minimalist"
            ? "bg-white/90 backdrop-blur-md py-2 shadow-sm"
            : "bg-black/80 backdrop-blur-md py-2"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1
            className={`text-xl md:text-2xl font-bold ${
              theme === "minimalist"
                ? "text-gray-800"
                : "bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            }`}
          >
            Akmaral Amanturdieva
          </h1>
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-end"
          >
            <div className={`text-sm md:text-base ${theme === "minimalist" ? "text-gray-600" : "text-gray-300"}`}>
              Machine Learning Researcher
            </div>
            <div className={`text-xs mt-1 ${theme === "minimalist" ? "text-blue-600" : "text-cyan-300"}`}>
              Actively looking for PhDs in computer vision and AI
            </div>
          </motion.div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

