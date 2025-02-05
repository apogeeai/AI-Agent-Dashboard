"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react" // Import React

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className={cn("relative overflow-hidden rounded-xl glass-card glass-gradient p-4", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

