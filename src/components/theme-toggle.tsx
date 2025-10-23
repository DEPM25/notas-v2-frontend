"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("omega-theme") as "light" | "dark" | null
    const preferredTheme = savedTheme || "dark"
    setTheme(preferredTheme)
    document.documentElement.classList.toggle("dark", preferredTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("omega-theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--omega-gold)] bg-[var(--card)] shadow-lg shadow-[var(--omega-gold)]/20 backdrop-blur-sm transition-colors hover:bg-[var(--muted)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div initial={false} animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-[var(--omega-gold)]" />
        ) : (
          <Sun className="h-5 w-5 text-[var(--omega-gold)]" />
        )}
      </motion.div>
    </motion.button>
  )
}
