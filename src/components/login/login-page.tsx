"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import LoginForm from "./login-form"
import AnimatedBackground from "./animated-background"
import ThemeToggle from "../theme-toggle"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated Background */}
      <AnimatedBackground />

      <ThemeToggle />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Logo and Title */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--omega-gold)] to-[var(--omega-gold-dark)] shadow-2xl shadow-[var(--omega-gold)]/30"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GraduationCap className="h-10 w-10 text-[var(--omega-black)]" strokeWidth={2.5} />
            </motion.div>
            <h1 className="text-balance text-4xl font-bold text-[var(--omega-gold)]">OMEGA</h1>
            <p className="mt-2 text-muted-foreground">Sistema de Gestión de Notas</p>
          </motion.div>

          {/* Login Form Card */}
          <LoginForm />

          {/* Footer */}
          <motion.p
            className="mt-6 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            ¿Necesitas ayuda?{" "}
            <a href="#" className="text-[var(--omega-gold)] hover:text-[var(--omega-gold-light)] hover:underline">
              Contacta soporte
            </a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
