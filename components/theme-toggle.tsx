"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/theme-context"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        theme === "minimalist"
          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
          : "bg-white/10 text-white hover:bg-white/20"
      }`}
      aria-label={`Switch to ${theme === "futuristic" ? "minimalist" : "futuristic"} theme`}
    >
      {theme === "minimalist" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </motion.button>
  )
}

