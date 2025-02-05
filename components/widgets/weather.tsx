"use client"

import { Cloud, Sun } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

export function WeatherWidget() {
  return (
    <GlassCard className="col-span-2 row-span-2">
      <div className="flex flex-col h-full">
        <div className="text-sm text-muted-foreground">Weather</div>
        <div className="flex items-end gap-2 mt-2">
          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sun className="h-6 w-6 text-primary" />
            <Cloud className="h-6 w-6 text-primary/70" />
          </motion.div>
          <div className="text-4xl font-bold">32°</div>
        </div>
        <div className="mt-2">Saugus, MA</div>
        <div className="text-sm text-muted-foreground">Partly Cloudy</div>
        <div className="mt-auto text-sm text-muted-foreground">H: 35° L: 13° • Humidity: 45%</div>
      </div>
    </GlassCard>
  )
}

