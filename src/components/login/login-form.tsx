"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <motion.div
      className="rounded-2xl border-2 border-[var(--omega-gold)]/30 bg-card/90 p-8 shadow-2xl shadow-[var(--omega-gold)]/20 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Label htmlFor="email" className="text-sm font-medium text-[var(--omega-gold)]">
            Correo Electrónico
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="profesor@colegio.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[var(--omega-gold)]/30 bg-background pl-10 text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--omega-gold)] focus:ring-[var(--omega-gold)]"
              required
            />
          </div>
        </motion.div>

        {/* Password Field */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Label htmlFor="password" className="text-sm font-medium text-[var(--omega-gold)]">
            Contraseña
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[var(--omega-gold)]/30 bg-background pl-10 pr-10 text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--omega-gold)] focus:ring-[var(--omega-gold)]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[var(--omega-gold)]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Remember & Forgot */}
        <motion.div
          className="flex items-center justify-between text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[var(--omega-gold)]/30 bg-background text-[var(--omega-gold)] focus:ring-2 focus:ring-[var(--omega-gold)]"
            />
            <span className="text-muted-foreground">Recordarme</span>
          </label>
          <a href="#" className="text-[var(--omega-gold)] hover:text-[var(--omega-gold-light)] hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </motion.div>

        {/* Submit Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--omega-gold)] to-[var(--omega-gold-dark)] text-primary-foreground font-semibold hover:from-[var(--omega-gold-light)] hover:to-[var(--omega-gold)] shadow-lg shadow-[var(--omega-gold)]/30"
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            ) : (
              "Iniciar Sesión"
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
